'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Layout from "@/components/Layout";
import MarkdownViewer from "@/common/MarkdownViewer";

const DynamicRouteEntryPage = () => {
    const [inputId, setInputId] = useState('');
    const router = useRouter();

    const handleNavigate = () => {
        if (inputId.trim()) {
            // Navigate to the dynamic route with the input ID
            router.push(`/dynamicroute/${inputId}`);
        }
    };

    return (
        <Layout>
            <div style={{ display: "flex", height: "100vh" }}>
                {/* 左侧内容区 */}
                <div style={{flex: 4, overflowY: "auto"}}>
                    <div className="container mx-auto p-6">
                        <div className="container mx-auto p-6 mt-10">
                            <h1 className="text-3xl font-bold mb-6">Navigate to Dynamic Route</h1>

                            <div className="mb-4">
                                <label className="block text-lg font-semibold mb-2" htmlFor="idInput">
                                    Enter an ID:
                                </label>
                                <input
                                    type="text"
                                    id="idInput"
                                    value={inputId}
                                    onChange={(e) => setInputId(e.target.value)}
                                    className="border border-gray-300 rounded-lg p-2 w-full"
                                    placeholder="Enter ID (e.g., 123)"
                                />
                            </div>

                            <button
                                onClick={handleNavigate}
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                            >
                                Go to Dynamic Route
                            </button>

                            {inputId && (
                                <p className="mt-4 text-gray-700">
                                    You will be navigating to: <strong>/dynamicroute/{inputId}</strong>
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                {/* 右侧 MarkdownViewer 容器 */}
                <div style={{flex: 3, overflow: "auto"}}>
                    <MarkdownViewer
                        filePath="/md/dynamicroute.md"
                    ></MarkdownViewer>
                </div>
            </div>
        </Layout>
    );
};

export default DynamicRouteEntryPage;