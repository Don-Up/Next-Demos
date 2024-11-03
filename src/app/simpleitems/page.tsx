'use client';

import React, { useState, useEffect } from 'react';
import Layout from "@/components/Layout";
import MarkdownViewer from "@/common/MarkdownViewer";

interface Item {
    id: number;
    name: string;
}

const SimpleItemsPage = () => {
    const [items, setItems] = useState<Item[]>([]);
    const [itemId, setItemId] = useState<number | null>(null);
    const [itemName, setItemName] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    // Fetch all items on component mount
    useEffect(() => {
        fetchItems();
    }, []);

    // Fetch all items (GET)
    const fetchItems = async () => {
        try {
            const response = await fetch('/api/items');
            const data = await response.json();
            setItems(data);
        } catch (error) {
            setMessage('Error fetching items');
        }
    };

    // Fetch a specific item by ID (GET)
    const fetchItemById = async (id: number) => {
        try {
            const response = await fetch(`/api/items?id=${id}`);
            if (response.ok) {
                const data = await response.json();
                setMessage(`Fetched item: ${data.name}`);
            } else {
                setMessage('Item not found');
            }
        } catch (error) {
            setMessage('Error fetching item');
        }
    };

    // Add a new item (POST)
    const addItem = async () => {
        if (!itemName.trim()) {
            setMessage('Item name is required');
            return;
        }

        try {
            const response = await fetch('/api/items', {
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

    // Update an existing item by ID (PUT)
    const updateItem = async () => {
        if (itemId === null || !itemName.trim()) {
            setMessage('Item ID and name are required');
            return;
        }

        try {
            const response = await fetch(`/api/items?id=${itemId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: itemName }),
            });

            if (response.ok) {
                const updatedItem = await response.json();
                setItems(items.map((item) => (item.id === itemId ? updatedItem : item)));
                setItemName('');
                setMessage(`Updated item: ${updatedItem.name}`);
            } else {
                setMessage('Error updating item');
            }
        } catch (error) {
            setMessage('Error updating item');
        }
    };

    // Delete an item by ID (DELETE)
    const deleteItem = async (id: number) => {
        try {
            const response = await fetch(`/api/items?id=${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setItems(items.filter((item) => item.id !== id));
                setMessage(`Deleted item with ID: ${id}`);
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
                {/* 左侧内容区 */}
                <div style={{flex: 4, overflowY: "auto"}}>
                    <div className="container mx-auto p-6">
                        {/* Page Header */}
                        <h1 className="text-3xl font-bold mb-6">Simple Items Page</h1>

                        {/* List of Items */}
                        <div className="mb-8">
                            <h2 className="text-xl font-semibold mb-4">Items</h2>
                            <ul className="space-y-2">
                                {items.map((item) => (
                                    <li
                                        key={item.id}
                                        className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-sm"
                                    >
                                        <span>{item.name}</span>
                                        <button
                                            className="text-red-500 hover:text-red-700 font-semibold"
                                            onClick={() => deleteItem(item.id)}
                                        >
                                            Delete
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Fetch Item by ID */}
                        <div className="mb-8">
                            <h2 className="text-xl font-semibold mb-4">Fetch Item by ID</h2>
                            <div className="flex space-x-4">
                                <input
                                    type="number"
                                    className="border border-gray-300 rounded-lg p-2"
                                    placeholder="Item ID"
                                    value={itemId || ''}
                                    onChange={(e) => setItemId(Number(e.target.value))}
                                />
                                <button
                                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                                    onClick={() => itemId && fetchItemById(itemId)}
                                >
                                    Fetch Item
                                </button>
                            </div>
                        </div>

                        {/* Add or Update Item */}
                        <div className="mb-8">
                            <h2 className="text-xl font-semibold mb-4">Add or Update Item</h2>
                            <div className="flex space-x-4">
                                <input
                                    type="text"
                                    className="border border-gray-300 rounded-lg p-2"
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
                                <button
                                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600"
                                    onClick={updateItem}
                                >
                                    Update Item
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

                {/* 右侧 MarkdownViewer 容器 */}
                <div style={{flex: 3, overflow: "auto"}}>
                    {/* iframe 使其内容可滚动 */}
                    <MarkdownViewer
                        filePath="/md/simpleitems.md"
                    ></MarkdownViewer>
                </div>
            </div>
        </Layout>
    );
};

export default SimpleItemsPage;