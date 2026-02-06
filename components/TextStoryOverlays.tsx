"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Section = ({ text, subtext, progressStart, progressEnd }: { text: string, subtext?: string, progressStart: number, progressEnd: number }) => {
    const { scrollYProgress } = useScroll();

    const opacity = useTransform(scrollYProgress, [progressStart, (progressStart + progressEnd) / 2, progressEnd], [0, 1, 0]);
    const y = useTransform(scrollYProgress, [progressStart, progressEnd], [50, -50]);
    const scale = useTransform(scrollYProgress, [progressStart, (progressStart + progressEnd) / 2, progressEnd], [0.9, 1, 1.1]);

    return (
        <motion.div
            style={{ opacity, y, scale }}
            className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center pointer-events-none z-30"
        >
            <h2 className="text-5xl md:text-8xl font-black text-center tracking-tighter mix-blend-difference text-white">
                {text}
            </h2>
            {subtext && (
                <p className="mt-4 text-xl md:text-2xl text-pink-400 font-light tracking-wide mix-blend-difference">
                    {subtext}
                </p>
            )}
        </motion.div>
    );
};

export default function TextStoryOverlays() {
    return (
        <>
            <Section text="WHERE COLOR" subtext="MEETS EMOTION" progressStart={0.1} progressEnd={0.25} />
            <Section text="CRAFTED BY" subtext="VISIONARY ARTISTS" progressStart={0.3} progressEnd={0.45} />
            <Section text="EACH STROKE" subtext="TELLS A STORY" progressStart={0.5} progressEnd={0.65} />
            <Section text="OWN A PIECE" subtext="OF THE UNIVERSE" progressStart={0.7} progressEnd={0.85} />
        </>
    );
}
