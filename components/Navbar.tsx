"use client";

import Link from "next/link";
import { ShoppingBag, Search, Menu } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md bg-black/20 border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold tracking-tighter">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 paint-glow">
                        PaletteVerse
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex space-x-8 text-sm font-medium tracking-wide">
                    {["Shop", "Artists", "Collection", "About"].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-white/80 hover:text-white hover:text-glow transition-colors"
                        >
                            {item.toUpperCase()}
                        </Link>
                    ))}
                </div>

                {/* Icons */}
                <div className="flex items-center space-x-6">
                    <Search className="w-5 h-5 text-white/80 hover:text-cyan-400 cursor-pointer transition-colors" />
                    <div className="relative group cursor-pointer">
                        <ShoppingBag className="w-5 h-5 text-white/80 group-hover:text-pink-400 transition-colors" />
                        <span className="absolute -top-2 -right-2 bg-pink-600 text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                            2
                        </span>
                    </div>
                    <Menu className="w-6 h-6 md:hidden text-white/80" />
                </div>
            </div>
        </nav>
    );
}
