"use client";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion, Variants } from "framer-motion";
import { useEffect, useRef } from "react";

export default function HeroSection() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    const container: Variants = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.25 } },
    };

    const item: Variants = {
        hidden: { opacity: 0, y: 40, scale: 0.98 },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    useEffect(() => {
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
        const DPR = window.devicePixelRatio || 1;

        const logo = new Image();
        logo.src = "images/logo.png";
        const icons: Record<string, HTMLImageElement> = {
            facebook: new Image(),
            instagram: new Image(),
            linkedin: new Image(),
            x: new Image(),
            tiktok: new Image(),
        };

        icons.facebook.src = "images/social/facebook1.jpg";
        icons.instagram.src = "images/social/instagram1.jpg";
        icons.linkedin.src = "images/social/linkedin1.jpg";
        icons.x.src = "images/social/x.png";
        icons.tiktok.src = "images/social/tiktok1.png";

        let AI: any, PLATFORMS: any[] = [];
        let dots: any[] = [];
        let uid = 0;
        let lastSpawn = 0;
        let ORBIT_ICONS: any[] = [];

        function buildLayout() {
            const vw = window.innerWidth;
            const vh = window.innerHeight * 0.55;
            const cy = vh / 2;

            AI = { x: vw * 0.15, y: cy, label: "ShoutlyAI", color: "#00d4ff", r: 50 };

            // Existing right-side icons (UNCHANGED)
            PLATFORMS = [
                { x: vw * 0.85, y: vh * 0.1, type: "facebook", color: "#1877F2", r: 27 },
                { x: vw * 0.85, y: vh * 0.3, type: "instagram", color: "#E1306C", r: 27 },
                { x: vw * 0.85, y: vh * 0.5, type: "linkedin", color: "#0A66C2", r: 27 },
                { x: vw * 0.85, y: vh * 0.7, type: "x", color: "#111111", r: 27 },
                { x: vw * 0.85, y: vh * 0.89, type: "tiktok", color: "#FF0050", r: 27 },
            ];

            // NEW orbiting icons around the logo
            const orbitRadius = 120;

            ORBIT_ICONS = [
                { type: "facebook", angle: 0, speed: 0.02 },
                { type: "instagram", angle: 1.2, speed: 0.018 },
                { type: "linkedin", angle: 2.4, speed: 0.016 },
                { type: "x", angle: 3.6, speed: 0.019 },
                { type: "tiktok", angle: 4.8, speed: 0.017 },
            ].map((icon) => ({
                ...icon,
                orbit: orbitRadius,
                r: 18,
                color: "#ffffff",
                x: AI.x,
                y: AI.y,
            }));
        }

        function resize() {
            const h = window.innerHeight * 0.55;
            canvas.width = window.innerWidth * DPR;
            canvas.height = h * DPR;
            canvas.style.width = window.innerWidth + "px";
            canvas.style.height = h + "px";
            ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
            buildLayout();
        }

        function spawnPlatformBurst() {
            for (let i = 0; i < 20; i++) {
                const target =
                    PLATFORMS[Math.floor(Math.random() * PLATFORMS.length)];

                dots.push({
                    id: uid++,
                    from: AI,
                    to: target,
                    t: 0,
                    speed: 0.012 + Math.random() * 0.015,
                    color: target.color,
                    size: 3 + Math.random() * 3,
                });
            }
        }

        function bezier(t: number, a: any, b: any) {
            const mx = (a.x + b.x) / 2;
            const my = (a.y + b.y) / 2 - 80;
            const m = 1 - t;

            return {
                x: m * m * a.x + 2 * m * t * mx + t * t * b.x,
                y: m * m * a.y + 2 * m * t * my + t * t * b.y,
            };
        }

        function drawNode(n: any) {
            const floatY = n.y + Math.sin(performance.now() * 0.001 + n.x) * 6;

            ctx.beginPath();
            ctx.arc(n.x, floatY, n.r, 0, Math.PI * 2);
            ctx.fillStyle = "#ffffff";
            ctx.fill();

            ctx.lineWidth = 2;
            ctx.strokeStyle = n.color;
            ctx.stroke();

            ctx.shadowBlur = 30;
            ctx.shadowColor = n.color;
            ctx.stroke();
            ctx.shadowBlur = 0;

            // Draw center icon
            if (n.label === "ShoutlyAI") {
                ctx.drawImage(logo, n.x - n.r, floatY - n.r, n.r * 2, n.r * 2);
            } else if (icons[n.type]) {
                const size = n.r * 1.2;
                ctx.drawImage(
                    icons[n.type],
                    n.x - size / 2,
                    floatY - size / 2,
                    size,
                    size
                );
            }
        }

        function draw(ts: number) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            if (ts - lastSpawn > 600) {
                spawnPlatformBurst();
                lastSpawn = ts;
            }

            for (let i = dots.length - 1; i >= 0; i--) {
                const d = dots[i];
                d.t += d.speed;
                const pos = bezier(d.t, d.from, d.to);

                ctx.beginPath();
                ctx.arc(pos.x, pos.y, d.size, 0, Math.PI * 2);
                ctx.fillStyle = d.color;
                ctx.fill();

                if (d.t >= 1) dots.splice(i, 1);
            }

            drawNode(AI);

            // Animate orbit icons
            ORBIT_ICONS.forEach((icon) => {
                icon.angle += icon.speed;

                icon.x = AI.x + Math.cos(icon.angle) * icon.orbit;
                icon.y = AI.y + Math.sin(icon.angle) * icon.orbit;

                drawNode(icon);
            });

            // Keep original platform icons
            PLATFORMS.forEach(drawNode);

            requestAnimationFrame(draw);
        }

        resize();
        window.addEventListener("resize", resize);
        requestAnimationFrame(draw);
        return () => window.removeEventListener("resize", resize);
    }, []);

    return (
        <header className="w-full bg-white overflow-hidden">
            {/* Content Section (TEXT FIRST) */}
            <div className="max-w-5xl mx-auto text-center px-6 py-16">

                <motion.span
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="relative z-10 inline-flex items-center gap-2 py-2 px-4 rounded-full
                bg-white/70 backdrop-blur-md text-blue-600
                text-[10px] uppercase tracking-widest mb-10
                border border-blue-200 shadow-md"
                    style={{ fontFamily: "Arial", fontWeight: 600 }}
                >
                    <SparklesIcon className="w-4 h-4 text-blue-600 animate-pulse" />
                    AI-Powered Content Generation
                </motion.span>
                <motion.div variants={container} initial="hidden" animate="show">
                    {/* Headline */}
                    <motion.h1
                        variants={item}
                        className="text-xl sm:text-xl md:text-xl lg:text-3xl font-normal mb-8 leading-tight"
                    >
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-700">
                            Generate{" "}
                        </span>

                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-pink-500">
                            365 Days{" "}
                        </span>

                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-black">
                            of Social Content, Brand
                        </span>

                        <br />

                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-black">
                            Designs, Reels & Hashtags — in Minutes.
                        </span>
                    </motion.h1>

                    {/* Description */}
                    <motion.div
                        variants={item}
                        className="text-lg md:text-xl text-black mb-10 max-w-2xl mx-auto leading-relaxed space-y-3"
                    >
                        <p>
                            Upload your logo → Enter one prompt → Get 365 days of AI-built content
                        </p>

                        <p className="text-blue-600">
                            Images • Reels • Captions • Hashtags • Auto Scheduling
                        </p>
                    </motion.div>

                    {/* Buttons */}
                    <motion.div
                        variants={item}
                        className="flex justify-center gap-4 flex-wrap"
                    >
                        <motion.button
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.96 }}
                            className="px-6 py-3 rounded-full bg-black text-white font-medium transition shadow-lg"
                        >
                            Try Free
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.96 }}
                            className="px-6 py-3 rounded-full border border-black text-black hover:bg-black hover:text-white transition"
                        >
                            Watch Demo
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Animation Section (NOW BELOW TEXT) */}
            <div className="relative w-full h-[55vh] flex items-center justify-center bg-white">
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full"
                />

            </div>
        </header>

    );
}