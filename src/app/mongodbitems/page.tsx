'use client';

import React, { useState, useEffect } from 'react';
import Layout from "@/components/Layout";
import MarkdownViewer from "@/common/MarkdownViewer";

interface Item {
    _id: string;
    name: string;
}

const MongoDBItemsPage = () => {
    const [items, setItems] = useState<Item[]>([]);
    const [searchName, setSearchName] = useState<string>('');
    const [itemName, setItemName] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [editItem, setEditItem] = useState<Item | null>(null);

    // Fetch all items on component mount
    useEffect(() => {
        fetchItems();
    }, []);

    // Fetch all items (GET)
    const fetchItems = async () => {
        try {
            const response = await fetch('/api/mongodbitems');
            const data = await response.json();
            setItems(data);
        } catch (error) {
            setMessage('Error fetching items');
        }
    };

    // Fetch items by name (GET)
    const fetchItemsByName = async (name: string) => {
        if (!name.trim()) {
            setMessage('Please enter a valid item name');
            return;
        }

        try {
            const response = await fetch(`/api/mongodbitems?name=${encodeURIComponent(name)}`);
            if (response.ok) {
                const data = await response.json();
                if (data.length > 0) {
                    setItems(data);
                    const foundNames = data.map((item: Item) => item.name).join(', ');
                    setMessage(`Found ${data.length} item(s) matching "${name}": ${foundNames}`);
                } else {
                    setMessage(`No items found with the name "${name}"`);
                }
            } else {
                setMessage('Error fetching items by name');
            }
        } catch (error) {
            setMessage('Error fetching items');
        }
    };

    // Add a new item (POST)
    const addItem = async () => {
        if (!itemName.trim()) {
            setMessage('Item name is required');
            return;
        }

        try {
            const response = await fetch('/api/mongodbitems', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: itemName }),
            });

            if (response.ok) {
                const newItem = await response.json();
                setItems([...items, newItem]);
                setItemName('');
                setMessage(`Added new item: ${newItem.name}`);
            } else {
                setMessage('Error adding item');
            }
        } catch (error) {
            setMessage('Error adding item');
        }
    };

    // Open the edit dialog for an item
    const openEditDialog = (item: Item) => {
        setEditItem(item);
    };

    // Update an existing item by ID (PUT)
    const updateItem = async () => {
        if (!editItem || !editItem.name.trim()) {
            setMessage('Item name is required');
            return;
        }

        try {
            const response = await fetch('/api/mongodbitems', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: editItem._id, name: editItem.name }),
            });

            if (response.ok) {
                const updatedItem = await response.json();
                setItems(items.map((item) => (item._id === editItem._id ? updatedItem : item)));
                setEditItem(null); // Ensure the dialog closes AFTER the state updates
                setMessage(`Updated item: ${updatedItem.name}`);
            } else {
                setMessage('Error updating item');
            }
        } catch (error) {
            setMessage('Error updating item');
        }
    };

    // Delete an item by ID (DELETE)
    const deleteItem = async (_id: string) => {
        try {
            const response = await fetch('/api/mongodbitems', {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: _id }),
            });

            if (response.ok) {
                setItems(items.filter((item) => item._id !== _id));
                setMessage(`Deleted item with ID: ${_id}`);
            } else {
                setMessage('Error deleting item');
            }
        } catch (error) {
            setMessage('Error deleting item');
        }
    };

    return (
        <Layout>
            <div style={{ display: "flex", height: "100vh" }}>
                {/* Left content area */}
                <div style={{ flex: 4, overflowY: "auto" }}>
                    <div className="container mx-auto p-6">
                        {/* Page Header */}
                        <h1 className="text-3xl font-bold mb-6">MongoDB Items Page</h1>

                        {/* List of Items */}
                        <div className="mb-8">
                            <h2 className="text-xl font-semibold mb-4">Items</h2>
                            <ul className="space-y-2">
                                {items.map((item) => (
                                    <li
                                        key={item._id} // Ensure unique key for each item
                                        className="flex justify-between items-center bg-gray-800 p-4 rounded-lg shadow-sm w-1/4"
                                    >
                                        <span className={"font-bold scale-110"}>{item.name}</span>
                                        <div className="space-x-4">
                                            <button
                                                className="text-yellow-500 hover:text-yellow-700 font-semibold"
                                                onClick={() => openEditDialog(item)}
                                            >
                                                Update
                                            </button>
                                            <button
                                                className="text-red-500 hover:text-red-700 font-semibold"
                                                onClick={() => deleteItem(item._id)}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Fetch Items by Name */}
                        <div className="mb-8">
                            <h2 className="text-xl font-semibold mb-4">Fetch Items by Name</h2>
                            <div className="flex space-x-4">
                                <input
                                    type="text"
                                    className="border border-gray-300 rounded-lg p-2 text-[#333]"
                                    placeholder="Item Name"
                                    value={searchName}
                                    onChange={(e) => setSearchName(e.target.value)}
                                />
                                <button
                                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                                    onClick={() => fetchItemsByName(searchName)}
                                >
                                    Fetch Items
                                </button>
                            </div>
                        </div>

                        {/* Add Item */}
                        <div className="mb-8">
                            <h2 className="text-xl font-semibold mb-4">Add Item</h2>
                            <div className="flex space-x-4">
                                <input
                                    type="text"
                                    className="border border-gray-300 rounded-lg p-2 text-[#333]"
                                    placeholder="Item Name"
                                    value={itemName}
                                    onChange={(e) => setItemName(e.target.value)}
                                />
                                <button
                                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                                    onClick={addItem}
                                >
                                    Add Item
                                </button>
                            </div>
                        </div>

                        {/* Message */}
                        {message && (
                            <p className="text-center text-lg font-semibold text-gray-700 mt-4">
                                {message}
                            </p>
                        )}
                    </div>
                </div>

                {/*<div style={{ flex: 3, overflow: "auto" }}>*/}
                {/*    <MarkdownViewer*/}
                {/*        filePath="/md/mongodbitems.md"*/}
                {/*    ></MarkdownViewer>*/}
                {/*</div>*/}
            </div>

            {/* Edit Dialog */}
            {editItem && (
                <div
                    className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center"
                    onClick={() => setEditItem(null)}
                >
                    <div
                        className="bg-white p-6 rounded-lg shadow-lg"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="text-xl font-semibold mb-4">Edit Item</h2>
                        <input
                            type="text"
                            value={editItem.name}
                            className="border border-gray-300 rounded-lg p-2 mb-4 w-full"
                            onChange={(e) =>
                                setEditItem({ ...editItem, name: e.target.value })
                            }
                        />
                        <div className="flex space-x-4">
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                                onClick={updateItem}
                            >
                                Save
                            </button>
                            <button
                                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
                                onClick={() => setEditItem(null)}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </Layout>
    );
};

export default MongoDBItemsPage;