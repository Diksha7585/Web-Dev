"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Paintbrush, Palette, PenTool, Eraser } from "lucide-react";

export default function FloatingArtElements() {
    const { scrollY } = useScroll();

    // Parallax speeds
    const y1 = useTransform(scrollY, [0, 5000], [0, -1000]);
    const y2 = useTransform(scrollY, [0, 5000], [0, -2000]);
    const y3 = useTransform(scrollY, [0, 5000], [0, -500]);
    const r1 = useTransform(scrollY, [0, 5000], [0, 360]);
    const r2 = useTransform(scrollY, [0, 5000], [0, -180]);

    const floatingClass = "absolute text-white/10 filter blur-[1px] pointer-events-none z-10";

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden h-screen">

            {/* Top Left Brush */}
            <motion.div style={{ y: y1, rotate: r1 }} className={`${floatingClass} top-20 left-10 opacity-20`}>
                <Paintbrush size={120} />
            </motion.div>

            {/* Bottom Right Palette */}
            <motion.div style={{ y: y2, rotate: r2 }} className={`${floatingClass} bottom-40 right-20 opacity-30`}>
                <Palette size={200} />
            </motion.div>

            {/* Center Left Pen */}
            <motion.div style={{ y: y3, rotate: r1 }} className={`${floatingClass} top-[40%] left-[15%] opacity-15`}>
                <PenTool size={80} />
            </motion.div>

            {/* Deep Background Eraser/Shape */}
            <motion.div style={{ y: y1, rotate: r2, scale: 1.5 }} className={`${floatingClass} bottom-[10%] left-[30%] opacity-5`}>
                <Eraser size={150} />
            </motion.div>

        </div>
    );
}
