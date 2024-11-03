// src/app/dynamicroute/[id]/page.tsx
import React from 'react';

const DynamicRoutePage = ({ params }: { params: { id: string } }) => {
    const { id } = params;

    return (
        <div className="container mx-auto p-6 mt-10">
            <h1 className="text-3xl font-bold mb-6">Dynamic Route: {id}</h1>
            <p className="text-lg">You are viewing the page for item with ID: <strong>{id}</strong>.</p>
            <p className="mt-4">
                This is a demonstration of dynamic routes in Next.js. The ID in the URL is used to render this content dynamically.
            </p>
        </div>
    );
};

export default DynamicRoutePage;