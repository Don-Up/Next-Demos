import { NextResponse } from 'next/server';

// Sample in-memory data store (in a real app, this would be a database)
let items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
];

// Helper function to find an item by ID
const findItemById = (id: number) => items.find((item) => item.id === id);

// Handle GET request
export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (id) {
        const item = findItemById(Number(id));
        if (!item) {
            return NextResponse.json({ message: 'Item not found' }, { status: 404 });
        }
        return NextResponse.json(item, { status: 200 });
    }

    return NextResponse.json(items, { status: 200 });
}

// Handle POST request
export async function POST(req: Request) {
    const body = await req.json();
    const { name } = body;

    if (!name) {
        return NextResponse.json({ message: 'Name is required' }, { status: 400 });
    }

    const newItem = { id: items.length + 1, name };
    items.push(newItem);

    return NextResponse.json(newItem, { status: 201 });
}

// Handle PUT request
export async function PUT(req: Request) {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
        return NextResponse.json({ message: 'ID is required for PUT' }, { status: 400 });
    }

    const body = await req.json();
    const updatedName = body.name;

    const itemToUpdate = findItemById(Number(id));
    if (!itemToUpdate) {
        return NextResponse.json({ message: 'Item not found' }, { status: 404 });
    }

    if (!updatedName) {
        return NextResponse.json({ message: 'Name is required for update' }, { status: 400 });
    }

    itemToUpdate.name = updatedName;

    return NextResponse.json(itemToUpdate, { status: 200 });
}

// Handle DELETE request
export async function DELETE(req: Request) {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
        return NextResponse.json({ message: 'ID is required for DELETE' }, { status: 400 });
    }

    const itemIndex = items.findIndex((item) => item.id === Number(id));
    if (itemIndex === -1) {
        return NextResponse.json({ message: 'Item not found' }, { status: 404 });
    }

    const deletedItem = items.splice(itemIndex, 1);

    return NextResponse.json(deletedItem, { status: 200 });
}