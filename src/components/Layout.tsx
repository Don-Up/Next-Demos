import Link from 'next/link';
import React, { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

const routes = [
    { href: "/", name: "Home" },
    { href: "/dynamicroute", name: "Dynamic Route" },
    { href: "/simpleitems", name: "Simple Items" },
    { href: "/mongodbitems", name: "MongoDB Items" },
    { href: "/about", name: "About" },
]

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="flex h-screen bg-gray-900 text-gray-200">
            {/* 左侧导航栏 */}
            <nav className="w-60 bg-gray-800 text-gray-200 p-6 space-y-4 fixed h-full shadow-lg">
                <h2 className="text-xl font-bold mb-6">Menu</h2>
                <ul className="space-y-4">
                    {
                        routes.map(route => (<li key={route.href}>
                            <Link href={route.href} passHref>
                                <div
                                    className="cursor-pointer hover:bg-gray-700 px-4 py-2 rounded transition duration-300 ease-in-out">
                                    {route.name}
                                </div>
                            </Link>
                        </li>))
                    }
                </ul>
            </nav>

            {/* 右侧内容区域 */}
            <main className="ml-60 flex-1 bg-gray-900">
                <div>
                    {children}
                </div>
            </main>
        </div>
    );
};

export default Layout;