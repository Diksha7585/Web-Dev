"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PaletteScrollEngine from "@/components/PaletteScrollEngine";
import FloatingArtElements from "@/components/FloatingArtElements";
import TextStoryOverlays from "@/components/TextStoryOverlays";
import { artworks } from "@/data/artworks";
import { motion } from "framer-motion";
import { ShoppingCart, ArrowRight, Truck, Info } from "lucide-react";

export default function Home() {
  return (
    <main className="relative bg-black min-h-screen text-white overflow-x-hidden selection:bg-pink-500 selection:text-white">
      <Navbar />

      {/* ─────────────────────────────────────────────────────────────
          HERO SECTION (Video)
       ───────────────────────────────────────────────────────────── */}
      <section className="h-screen relative overflow-hidden flex items-center justify-center">
        <video
          src="/hero.mp4"
          autoPlay
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />

        <div className="relative z-10 text-center space-y-6 max-w-4xl px-4">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-6xl md:text-9xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500 text-glow"
          >
            ART IN MOTION
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xl md:text-2xl text-gray-300 font-light tracking-wide"
          >
            A Cinematic Journey Through Color
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <a href="#shop" className="inline-flex items-center space-x-2 px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-pink-500 hover:text-white transition-all transform hover:scale-105">
              <span>Start Exploring</span>
              <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SCROLLYTELLING ENGINE
          (This wrapper contains the 600vh scroll sequence)
       ───────────────────────────────────────────────────────────── */}
      <div className="relative z-10">
        <PaletteScrollEngine />
        <FloatingArtElements />
        <TextStoryOverlays />
      </div>

      {/* ─────────────────────────────────────────────────────────────
          ARTWORK SHOP SECTION
       ───────────────────────────────────────────────────────────── */}
      <section id="shop" className="relative z-20 bg-black pt-20 pb-40 px-6">
        <div className="max-w-7xl mx-auto mb-20 text-center">
          <h2 className="text-5xl font-bold tracking-tight mb-4">Curated Collection</h2>
          <p className="text-white/60">Own a piece of the immersive universe</p>
        </div>

        <div className="max-w-7xl mx-auto space-y-40">
          {artworks.map((art, index) => (
            <motion.div
              key={art.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
            >
              {/* Artwork Visual */}
              <div className="flex-1 w-full aspect-square relative group">
                {/* Note: In a real app, this would use the artwork specific assets. 
                    For now using a gradient placeholder or assume generic art asset if none. 
                    Ideally we would load a specific image from art.folderPath */}
                <div
                  className={`w-full h-full rounded-2xl overflow-hidden relative shadow-2xl bg-gradient-to-br ${art.gradient}`}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                  {/* Placeholder for actual art image */}
                  <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white/20 mix-blend-overlay">
                    {art.title.toUpperCase()}
                  </div>
                </div>
                {/* Decorative Elements */}
                <div className={`absolute -inset-4 bg-gradient-to-r ${art.gradient} opacity-20 blur-2xl -z-10 rounded-full`} />
              </div>

              {/* Product Details */}
              <div className="flex-1 space-y-8">
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="px-3 py-1 rounded-full border border-white/20 text-xs tracking-wider uppercase">
                      {art.category}
                    </span>
                    <span className="text-pink-500 text-xs tracking-wider uppercase">
                      {art.artist}
                    </span>
                  </div>
                  <h3 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                    {art.title}
                  </h3>
                  <p className="text-lg text-white/70 leading-relaxed font-light">
                    {art.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm text-white/50 border-y border-white/10 py-6">
                  <div>
                    <span className="block text-white mb-1">Dimensions</span>
                    {art.size}
                  </div>
                  <div>
                    <span className="block text-white mb-1">Material</span>
                    {art.material}
                  </div>
                  <div>
                    <span className="block text-white mb-1">Delivery</span>
                    {art.shipping}
                  </div>
                  <div>
                    <span className="block text-white mb-1">Returns</span>
                    {art.returnPolicy}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4">
                  <div>
                    <span className="block text-xs uppercase tracking-widest text-white/50 mb-1">Price</span>
                    <span className="text-3xl font-bold">₹{art.price}</span>
                  </div>
                  <button className="flex items-center space-x-3 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-pink-500 hover:text-white transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,60,120,0.6)]">
                    <ShoppingCart size={20} />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
