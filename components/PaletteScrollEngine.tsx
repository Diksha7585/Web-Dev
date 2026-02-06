"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const FRAME_COUNT = 150;
const CANVAS_WIDTH = 1920;
const CANVAS_HEIGHT = 1080;

export default function PaletteScrollEngine() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [imagesLoaded, setImagesLoaded] = useState(false);

    // Preload images
    useEffect(() => {
        const loadImages = async () => {
            const loadedImages: HTMLImageElement[] = [];
            const promises = [];

            for (let i = 1; i <= FRAME_COUNT; i++) {
                const promise = new Promise((resolve) => {
                    const img = new Image();
                    img.src = `/paint/palette-sequence/${i}.webp`;
                    img.onload = () => resolve(img);
                    img.onerror = () => resolve(null); // Resolve even on error to avoid blocking
                    loadedImages[i - 1] = img;
                });
                promises.push(promise);
            }

            await Promise.all(promises);
            setImages(loadedImages);
            setImagesLoaded(true);
        };

        loadImages();
    }, []);

    // Frame Index Mapping (0.0 - 1.0 -> 0 - 149)
    // We use useTransform but we need to extract the value for the canvas draw
    // Since we can't directly use motion value in render loop easily without useMotionValueEvent or similar,
    // we'll use a simplified approach: update on scroll change.

    useEffect(() => {
        const render = (latestProgress: number) => {
            const canvas = canvasRef.current;
            if (!canvas || !imagesLoaded || images.length === 0) return;

            const ctx = canvas.getContext("2d");
            if (!ctx) return;

            // Calculate current frame
            let frameIndex = Math.floor(latestProgress * (FRAME_COUNT - 1));
            frameIndex = Math.min(FRAME_COUNT - 1, Math.max(0, frameIndex));

            const img = images[frameIndex];

            // Responsive Contain Logic
            // We want to draw the image centered and contained within the canvas
            // But the canvas itself should handle CSS resizing. All we need to do is draw to the internal resolution.

            ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); // Clear

            if (img) {
                ctx.drawImage(img, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
            }

            // Add subtle grain or effects if needed here
        };

        // Subscribe to scroll changes
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            requestAnimationFrame(() => render(latest));
        });

        return () => unsubscribe();
    }, [scrollYProgress, imagesLoaded, images]);

    return (
        <div ref={containerRef} className="relative h-[600vh] bg-black">
            <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center justify-center">

                {/* Loading State */}
                {!imagesLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center text-white/50 animate-pulse">
                        Loading Cinematic Assets...
                    </div>
                )}

                {/* Canvas */}
                <canvas
                    ref={canvasRef}
                    width={CANVAS_WIDTH}
                    height={CANVAS_HEIGHT}
                    className="w-full h-full object-contain canvas-container"
                />

                {/* Glow Overlay */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-black/80" />
            </div>
        </div>
    );
}
