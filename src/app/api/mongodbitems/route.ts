import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';  // Import ObjectId from mongodb

// GET: Fetch all items or fetch by name
export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const name = searchParams.get('name');

    try {
        const client = await clientPromise;
        const db = client.db(process.env.MONGODB_DB);
        const collection = db.collection('items');

        let items;
        if (name) {
            // Search items by name where the name starts with the search term (case insensitive)
            const regex = new RegExp(`^${name}`, 'i'); // Anchors the match to the start of the string
            items = await collection.find({ name: { $regex: regex } }).toArray();
        } else {
            // Fetch all items
            items = await collection.find({}).toArray();
        }

        return NextResponse.json(items);
    } catch (error) {
        return NextResponse.json({ message: 'Error fetching items' }, { status: 500 });
    }
}

// POST: Add a new item
export async function POST(req: Request) {
    try {
        const { name } = await req.json();
        const client = await clientPromise;
        const db = client.db(process.env.MONGODB_DB);
        const result = await db.collection('items').insertOne({ name });

        // Use result.insertedId to get the ID of the inserted document
        return NextResponse.json({ _id: result.insertedId, name });
    } catch (error) {
        return NextResponse.json({ message: 'Error adding item' }, { status: 500 });
    }
}

// PUT: Update an item by ID
export async function PUT(req: Request) {
    try {
        const { id, name } = await req.json();

        // Convert the id string to an ObjectId
        const client = await clientPromise;
        const db = client.db(process.env.MONGODB_DB);
        const result = await db.collection('items').updateOne({ _id: new ObjectId(id) }, { $set: { name } });

        return NextResponse.json(result);
    } catch (error) {
        return NextResponse.json({ message: 'Error updating item' }, { status: 500 });
    }
}

// DELETE: Delete an item by ID
export async function DELETE(req: Request) {
    try {
        const { id } = await req.json();

        // Convert the id string to an ObjectId
        const client = await clientPromise;
        const db = client.db(process.env.MONGODB_DB);
        const result = await db.collection('items').deleteOne({ _id: new ObjectId(id) });

        return NextResponse.json(result);
    } catch (error) {
        return NextResponse.json({ message: 'Error deleting item' }, { status: 500 });
    }
}