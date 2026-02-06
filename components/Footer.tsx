import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 pt-20 pb-10 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Brand */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-cyan-500 paint-glow">
                        PaletteVerse
                    </h2>
                    <p className="text-white/60 text-sm leading-relaxed">
                        Where art meets technology. A curated marketplace for digital masterpieces and immersive experiences.
                    </p>
                    <div className="flex space-x-4 pt-2">
                        {[Facebook, Instagram, Twitter, Mail].map((Icon, i) => (
                            <Icon key={i} className="w-5 h-5 text-white/60 hover:text-white transition-colors cursor-pointer" />
                        ))}
                    </div>
                </div>

                {/* Collections */}
                <div>
                    <h3 className="text-lg font-semibold mb-6">Collections</h3>
                    <ul className="space-y-3 text-sm text-white/60">
                        {["Abstract Fluid", "Cyberpunk", "Surrealism", "Digital Oil", "NFT Exclusives"].map((item) => (
                            <li key={item}>
                                <Link href="#" className="hover:text-pink-400 transition-colors">{item}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h3 className="text-lg font-semibold mb-6">Support</h3>
                    <ul className="space-y-3 text-sm text-white/60">
                        {["Help Center", "Artist Application", "Shipping & Returns", "Licensing", "Privacy Policy"].map((item) => (
                            <li key={item}>
                                <Link href="#" className="hover:text-cyan-400 transition-colors">{item}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="text-lg font-semibold mb-6">Stay Inspired</h3>
                    <p className="text-white/60 text-sm mb-4">Join our newsletter for exclusive drops.</p>
                    <div className="flex">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="bg-white/5 border border-white/10 px-4 py-2 text-sm text-white w-full focus:outline-none focus:border-pink-500"
                        />
                        <button className="bg-pink-600 px-4 py-2 text-sm font-medium hover:bg-pink-500 transition-colors">
                            →
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 text-center text-xs text-white/40">
                © {new Date().getFullYear()} PaletteVerse. All rights reserved. Crafted with Art & Code.
            </div>
        </footer>
    );
}
