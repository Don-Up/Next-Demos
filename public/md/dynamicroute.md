Dynamic routes in Next.js allow you to create routes that are determined by the URL. For example, if you have a blog and want each post to have its own URL (e.g., `/posts/1`, `/posts/2`), dynamic routes enable this by creating a file structure with parameterized filenames.

To demonstrate how to use dynamic routes in Next.js, I’ll guide you through creating a simple page in `src/dynamicroute/page.tsx` that navigates to dynamically generated routes based on user input.

### Example Use Case:
We’ll create a page where users can enter an ID, and when they click a button, they will be redirected to a dynamic route based on that ID (e.g., `/dynamicroute/123`). On the dynamic route, we’ll fetch and display some placeholder data based on the ID.

### Steps:

1. **Create Dynamic Route Page (`[id].tsx`):**
    - This page will handle the dynamic route and fetch data based on the `id` parameter.

2. **Create the Client Page (`page.tsx`):**
    - This page will allow users to enter an ID and navigate to the dynamic route.

### Step 1: Create the Dynamic Route Page (`[id].tsx`)

In the Next.js `app` directory, dynamic routes are created by using square brackets (`[]`) in the file name. For example, if you want to create a dynamic page that responds to `/dynamicroute/[id]`, you would create a file named `[id].tsx` in the `src/app/dynamicroute/` directory.

Create the file at `src/app/dynamicroute/[id]/page.tsx`:

```tsx
// src/app/dynamicroute/[id]/page.tsx
import { useRouter } from 'next/router';
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
```

#### Explanation:
- The dynamic route page receives the `id` parameter via the `params` object (which Next.js automatically provides to dynamic route pages).
- The `id` is extracted from `params` and displayed on the page.

### Step 2: Create the Client Page (`page.tsx`)

This page will allow users to enter an ID and navigate to the dynamic route. We’ll use **Next.js's `useRouter`** hook to handle the routing.

Create the file at `src/app/dynamicroute/page.tsx`:

```tsx
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

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
    );
};

export default DynamicRouteEntryPage;
```

#### Explanation:
- **State (`inputId`)**: The component maintains the `inputId` state, which stores the value entered by the user.
- **`useRouter` hook**: We use the `useRouter` hook from Next.js to programmatically navigate to the dynamic route (`/dynamicroute/[id]`).
- **Button Click**: When the button is clicked, the `handleNavigate` function checks if the `inputId` is not empty. If valid, it calls `router.push` to navigate to the dynamic route using the ID from the input field.

### Step 3: Directory Structure

Now, you should have the following directory structure:

```
src
├── app
│   └── dynamicroute
│       ├── [id]
│       │   └── page.tsx   // Dynamic route page that handles dynamic routes
│       └── page.tsx       // Client page where users can enter an ID
```

### Step 4: Testing the Dynamic Routing

1. **Visit `/dynamicroute`**: This is the client page where users can enter an ID.
2. **Enter an ID**: After entering an ID (e.g., `123`) and clicking the "Go to Dynamic Route" button, the page will navigate to `/dynamicroute/123`.
3. **Watch the ID in Action**: The dynamic page will display the ID from the URL dynamically.

### Example Walkthrough:

1. **Enter an ID**: Suppose you enter `456` into the input field and click the "Go to Dynamic Route" button.
2. **Navigate to `/dynamicroute/456`**: The browser will navigate to `/dynamicroute/456`.
3. **Dynamic Page**: The page will display:
   ```
   Dynamic Route: 456
   You are viewing the page for item with ID: 456.
   ```

### Styling with TailwindCSS:

- The `page.tsx` for the entry page uses TailwindCSS classes to style the form and button.
- The dynamic route page (`[id].tsx`) also uses TailwindCSS classes for a clean, responsive layout.
- **CSS Classes**:
    - `container mx-auto p-6 mt-10`: Centers the content and adds padding and margin.
    - `text-3xl font-bold`: Styles the heading.
    - `text-lg`: Styles the paragraph text.
    - `border border-gray-300 rounded-lg p-2 w-full`: Styles the input field.
    - `bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600`: Styles the button with hover effects.

### Conclusion:

This setup demonstrates how to:
- Use dynamic routes in Next.js by creating a `[id].tsx` file in the `app` directory.
- Navigate to dynamic routes programmatically using the `useRouter` hook.
- Leverage TailwindCSS for styling the input form, button, and dynamic content.

Now you can easily extend this to more complex use cases, such as fetching data from an API based on the dynamic `id`.