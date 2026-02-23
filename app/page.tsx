"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import { SparklesIcon } from "@heroicons/react/24/outline";
import { useRef, useState } from "react";
import IndustrySection from "@/components/IndustrySection";
import PricingSection from "@/components/PricingSection";
import { CheckCircle, ArrowRight, Star, Zap } from "lucide-react";
import HeroSection from "@/components/HeroSection";

import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn,
    FaYoutube,
    FaTiktok,
    FaPinterest,
    FaSnapchatGhost,
    FaRedditAlien,
    FaTelegramPlane,
    FaWhatsapp,
    FaDiscord,
} from "react-icons/fa";
import AIPapersSection from "@/components/AIPapersSection";

export default function LandingPage() {
    const icons = [
        FaFacebookF,
        FaInstagram,
        FaTwitter,
        FaLinkedinIn,
        FaYoutube,
        FaTiktok,
        FaPinterest,
        FaSnapchatGhost,
        FaRedditAlien,
        FaTelegramPlane,
        FaWhatsapp,
        FaDiscord,
    ];
    const socials = [
        { icon: <FaTwitter />, label: "Twitter" },
        { icon: <FaInstagram />, label: "Instagram" },
        { icon: <FaLinkedinIn />, label: "LinkedIn" },
        { icon: <FaFacebookF />, label: "Facebook" },
        { icon: <FaYoutube />, label: "YouTube" },
    ];
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="relative bg-white dark:bg-gray-950 font-arial min-h-screen text-gray-900 dark:text-white selection:text-white overflow-hidden">
            {/* GLOBAL FLOATING AI + SOCIAL MEDIA BUBBLES */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                {icons.map((Icon, i) => {
                    const startX = Math.random() * 100;
                    const startY = Math.random() * 100;

                    return (
                        <motion.div
                            key={i}
                            initial={{
                                x: `${startX}vw`,
                                y: `${startY}vh`,
                                opacity: 0,
                                scale: 0.6,
                            }}
                            animate={{
                                y: ["0vh", "-120vh"],
                                x: ["0vw", `${Math.random() * 20 - 10}vw`, "0vw"],
                                opacity: [0, 0.8, 0],
                                scale: [0.8, 1.2, 0.8],
                            }}
                            transition={{
                                duration: 20 + i * 2,
                                repeat: Infinity,
                                delay: i * 1.2,
                                ease: "linear",
                            }}
                            className="absolute"
                        >
                            <div className="text-gray-400/30 text-2xl md:text-3xl bg-white/40 backdrop-blur-md p-4 rounded-full shadow-lg">
                                <Icon />
                            </div>
                        </motion.div>
                    );
                })}

                {/* AI SPARK BUBBLES */}
                {[...Array(10)].map((_, i) => (
                    <motion.div
                        key={`ai-${i}`}
                        initial={{
                            x: `${Math.random() * 100}vw`,
                            y: "110vh",
                            opacity: 0,
                        }}
                        animate={{
                            y: "-10vh",
                            opacity: [0, 0.6, 0],
                            scale: [0.6, 1.4, 0.6],
                        }}
                        transition={{
                            duration: 18 + i * 2,
                            repeat: Infinity,
                            delay: i * 1.5,
                            ease: "linear",
                        }}
                        className="absolute"
                    >
                        <div className="p-3 rounded-full bg-gradient-to-r from-blue-400/30 to-purple-500/30 backdrop-blur-md">
                            <SparklesIcon className="w-6 h-6 text-purple-500/40" />
                        </div>
                    </motion.div>
                ))}
            </div>
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">

                    {/* Logo */}
                    <div className="relative w-28 h-10 sm:w-40 sm:h-14">
                        <Image src="images/logo.png" alt="Logo" fill className="object-contain" />
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-black">
                        <Link href="/">Home</Link>
                        <Link href="#features">Features</Link>
                        <Link href="#pricing">Pricing</Link>
                        <Link href="#early-access">Get Early Access</Link>
                    </div>

                    {/* Right side (Desktop only) */}
                    <div className="hidden md:flex text-black items-center gap-4">
                        <Link href="/sign-in" className="text-sm">
                            Log in
                        </Link>

                        <Link
                            href="/sign-up"
                            className="px-4 py-2 bg-black text-white rounded-full text-xs"
                        >
                            Sign Up Free
                        </Link>
                    </div>

                    {/* Hamburger (Mobile only) */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden text-2xl text-black"
                    >
                        ☰
                    </button>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="md:hidden bg-white border-t px-6 py-6 space-y-5">
                        <Link
                            href="/"
                            className="block text-base text-black font-medium"
                            onClick={() => setMenuOpen(false)}
                        >
                            Home
                        </Link>

                        <Link
                            href="#features"
                            className="block text-base text-black font-medium"
                            onClick={() => setMenuOpen(false)}
                        >
                            Features
                        </Link>

                        <Link
                            href="#pricing"
                            className="block text-base text-black font-medium"
                            onClick={() => setMenuOpen(false)}
                        >
                            Pricing
                        </Link>

                        <Link
                            href="#early-access"
                            className="block text-base text-black font-medium"
                            onClick={() => setMenuOpen(false)}
                        >
                            Get Early Access
                        </Link>

                        {/* Divider */}
                        <div className="border-t pt-4 space-y-3">
                            <Link
                                href="/sign-in"
                                className="block text-center text-black text-sm font-medium"
                                onClick={() => setMenuOpen(false)}
                            >
                                Log in
                            </Link>

                            <Link
                                href="/sign-up"
                                className="block text-center bg-black text-white py-3 rounded-full text-sm"
                                onClick={() => setMenuOpen(false)}
                            >
                                Sign Up Free
                            </Link>
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <div className="pt-10 md:pt-10">
                <HeroSection />
            </div>
            {/*<AIPapersSection />*/}
            {/* See It In Action Section */}
            <section className="py-14 sm:py-20 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">

                    {/* Title */}
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="text-2xl sm:text-3xl md:text-5xl text-black font-arial mb-10 sm:mb-12"
                    >
                        See it in Action
                    </motion.h2>

                    {/* Flow Steps */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: {},
                            visible: {
                                transition: { staggerChildren: 0.15 },
                            },
                        }}
                        className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 mb-12 sm:mb-16"
                    >
                        {[
                            { label: "Select Industry", color: "bg-blue-500" },
                            { label: "Enter Prompt", color: "bg-violet-500" },
                            { label: "AI Generates", color: "bg-pink-500" },
                            { label: "Auto Schedule", color: "bg-green-500" },
                        ].map((step, index) => (
                            <motion.div
                                key={step.label}
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                whileHover={{ scale: 1.05 }}
                                className="flex items-center gap-3"
                            >
                                <div className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-300 text-xs sm:text-sm font-medium text-black bg-gray-100 shadow-sm backdrop-blur-md">

                                    {/* Animated Dot */}
                                    <motion.span
                                        animate={{ scale: [1, 1.4, 1] }}
                                        transition={{ repeat: Infinity, duration: 2 }}
                                        className={`w-2.5 h-2.5 rounded-full ${step.color}`}
                                    />

                                    {step.label}
                                </div>

                                {/* Animated Arrow */}
                                {index !== 3 && (
                                    <motion.span
                                        className="hidden sm:inline text-gray-400 text-xl"
                                        animate={{ x: [0, 6, 0] }}
                                        transition={{ repeat: Infinity, duration: 1.5 }}
                                    >
                                        →
                                    </motion.span>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Video Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative max-w-4xl mx-auto mb-14 sm:mb-20"
                    >
                        <div className="relative aspect-video rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-200 shadow-xl bg-black group">

                            <video
                                ref={videoRef}
                                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                                src="videos/ai_video.mp4"
                                poster="images/demo.jpg"
                            />

                            {!isPlaying && (
                                <button
                                    onClick={() => {
                                        videoRef.current?.play();
                                        setIsPlaying(true);
                                    }}
                                    className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm"
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.15 }}
                                        whileTap={{ scale: 0.9 }}
                                        animate={{ boxShadow: ["0 0 0px", "0 0 30px"] }}
                                        transition={{ repeat: Infinity, duration: 2 }}
                                        className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-white text-black flex items-center justify-center text-xl sm:text-2xl shadow-xl"
                                    >
                                        ▶
                                    </motion.div>
                                </button>
                            )}
                        </div>
                    </motion.div>

                    {/* Feature Cards */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: {},
                            visible: {
                                transition: { staggerChildren: 0.12 },
                            },
                        }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
                    >
                        {[
                            { emoji: "⚡", title: "2-Minutes Setup" },
                            { emoji: "🎨", title: "Auto-Branded" },
                            { emoji: "📅", title: "365 Days Filled" },
                            { emoji: "🌍", title: "Multi-Platform" },
                        ].map((item) => (
                            <motion.div
                                key={item.title}
                                variants={{
                                    hidden: { opacity: 0, y: 40 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                whileHover={{
                                    y: -8,
                                    scale: 1.03,
                                }}
                                transition={{ type: "spring", stiffness: 200 }}
                                className="bg-gray-100 border border-gray-200 rounded-2xl p-6 sm:p-8 text-center shadow-sm hover:shadow-xl transition-all"
                            >
                                <motion.div
                                    animate={{ y: [0, -6, 0] }}
                                    transition={{ repeat: Infinity, duration: 3 }}
                                    className="text-3xl sm:text-4xl mb-3 sm:mb-4"
                                >
                                    {item.emoji}
                                </motion.div>

                                <h3 className="text-base sm:text-lg font-semibold text-black">
                                    {item.title}
                                </h3>
                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </section>
            <section className="py-14 sm:py-24 bg-white text-black overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">

                    {/* Floating Badge */}
                    <motion.div
                        className="flex justify-center mb-5 sm:mb-6"
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.span
                            animate={{ y: [0, -6, 0] }}
                            transition={{ repeat: Infinity, duration: 3 }}
                            className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs sm:text-sm font-semibold shadow-lg"
                        >
                            <motion.svg
                                className="w-4 h-4"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                animate={{ rotate: [0, 20, -20, 0] }}
                                transition={{ repeat: Infinity, duration: 4 }}
                            >
                                <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
                            </motion.svg>
                            <span>3 Simple Steps</span>
                        </motion.span>
                    </motion.div>

                    {/* Title Reveal Animation */}
                    <motion.h2
                        className="text-2xl sm:text-3xl md:text-5xl text-center mb-3 sm:mb-4"
                        initial={{ opacity: 0, letterSpacing: "0.3em" }}
                        whileInView={{ opacity: 1, letterSpacing: "0em" }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        Generate Your Year of Content
                    </motion.h2>

                    {/* Subtitle */}
                    <motion.p
                        className="text-center text-gray-600 text-sm sm:text-base max-w-2xl mx-auto mb-10 sm:mb-16 px-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        One prompt, 365 days of posts. Including local festivals & events.
                    </motion.p>

                    {/* Cards Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">

                        {/* CARD 1 */}
                        <motion.div
                            initial={{ opacity: 0, x: -60, rotate: -2 }}
                            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                            whileHover={{ rotate: 1, scale: 1.02 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="border border-gray-200 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-sm relative overflow-hidden"
                        >
                            {/* AI scanning light */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                                animate={{ x: ["-100%", "100%"] }}
                                transition={{ repeat: Infinity, duration: 5 }}
                            />

                            <div className="flex items-center gap-3 mb-5 sm:mb-6">
                                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-black text-white flex items-center justify-center text-sm font-semibold">
                                    1
                                </span>
                                <h3 className="text-lg sm:text-xl font-semibold">
                                    Select your industry
                                </h3>
                            </div>

                            <motion.select
                                whileFocus={{ scale: 1.02 }}
                                className="w-full mb-6 sm:mb-8 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black text-sm sm:text-base"
                            >
                                <option>Choose your industry</option>
                                <option>Health</option>
                                <option>Food</option>
                                <option>Fashion</option>
                                <option>Real Estate</option>
                                <option>Education</option>
                                <option>Finance</option>
                            </motion.select>

                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                                {[
                                    { emoji: "🏥", label: "Health" },
                                    { emoji: "🍔", label: "Food" },
                                    { emoji: "👗", label: "Fashion" },
                                    { emoji: "🏠", label: "Real Estate" },
                                    { emoji: "🎓", label: "Education" },
                                    { emoji: "💰", label: "Finance" },
                                ].map((item, i) => (
                                    <motion.div
                                        key={item.label}
                                        initial={{ opacity: 0, scale: 0.6, y: 20 }}
                                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                        whileHover={{ y: -6, scale: 1.05 }}
                                        transition={{ delay: i * 0.05 }}
                                        viewport={{ once: true }}
                                        className="border border-gray-200 rounded-xl sm:rounded-2xl py-4 sm:py-6 flex flex-col items-center justify-center hover:shadow-lg transition"
                                    >
                                        <motion.span
                                            animate={{ rotate: [0, 8, -8, 0] }}
                                            transition={{ repeat: Infinity, duration: 5 }}
                                            className="text-xl sm:text-2xl mb-1 sm:mb-2"
                                        >
                                            {item.emoji}
                                        </motion.span>
                                        <span className="text-xs sm:text-sm font-medium text-center">
                                            {item.label}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* CARD 2 */}
                        <motion.div
                            initial={{ opacity: 0, x: 60, rotate: 2 }}
                            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                            whileHover={{ rotate: -1, scale: 1.02 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="border border-gray-200 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-sm bg-gray-100 relative overflow-hidden"
                        >
                            {/* subtle animated glow */}
                            <motion.div
                                className="absolute -top-20 -right-20 w-60 h-60 bg-purple-300 rounded-full blur-3xl opacity-30"
                                animate={{ scale: [1, 1.3, 1] }}
                                transition={{ repeat: Infinity, duration: 6 }}
                            />

                            <div className="flex items-center gap-3 mb-5 sm:mb-6">
                                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-black text-white flex items-center justify-center text-sm font-semibold">
                                    2
                                </span>
                                <h3 className="text-lg sm:text-xl font-semibold">
                                    Describe Your Brand
                                </h3>
                            </div>

                            <motion.textarea
                                whileFocus={{ scale: 1.02 }}
                                className="w-full min-h-[140px] sm:min-h-[180px] p-4 bg-white rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black resize-none text-sm sm:text-base mb-4"
                                placeholder="I'm an architect- generate 365 instagram posts, reels and festival creatives."
                            />

                            <div className="flex flex-col sm:flex-row gap-3 mb-4">
                                <motion.button
                                    whileHover={{ y: -3 }}
                                    className="px-4 py-2 rounded-lg bg-gray-300 text-black text-xs sm:text-sm font-medium"
                                >
                                    Create Health Photo
                                </motion.button>

                                <motion.button
                                    whileHover={{ y: -3 }}
                                    className="px-4 py-2 bg-gray-300 rounded-lg border border-black text-xs sm:text-sm font-medium"
                                >
                                    Create Reels Photo
                                </motion.button>
                            </div>

                            <p className="text-xs sm:text-sm text-gray-500">
                                <b>Hint:</b> Be specific about your services, target audience, and content style
                            </p>

                            {/* Power CTA Button */}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                animate={{ boxShadow: ["0 0 0px", "0 0 30px rgba(0,0,0,0.25)", "0 0 0px"] }}
                                transition={{ repeat: Infinity, duration: 3 }}
                                className="w-full mt-6 sm:mt-8 py-3 sm:py-4 rounded-2xl bg-gradient-to-r from-gray-300 to-gray-500 text-white text-base sm:text-lg font-semibold"
                            >
                                Generate 365 Days of Content
                            </motion.button>
                        </motion.div>

                    </div>
                </div>
            </section>
            <section className="py-14 sm:py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">

                    {/* Floating Badge */}
                    <motion.div
                        className="flex justify-center mb-5 sm:mb-6"
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.span
                            animate={{ y: [0, -6, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 text-white text-xs sm:text-sm font-semibold shadow-lg"
                        >
                            <motion.div
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                            >
                                <SparklesIcon className="w-4 h-4 text-white" />
                            </motion.div>
                            10,000+ Professional Templates
                        </motion.span>
                    </motion.div>

                    {/* Title */}
                    <motion.h2
                        className="text-2xl sm:text-3xl md:text-5xl text-center text-black mb-3 sm:mb-4"
                        initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        Browse Our Library
                    </motion.h2>

                    {/* Subtitle */}
                    <motion.p
                        className="text-center text-gray-600 text-sm sm:text-base max-w-2xl mx-auto mb-10 sm:mb-16 px-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Industry-specific templates that update instantly based on your selection
                    </motion.p>

                    {/* Main Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.96 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="relative bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-xl border border-gray-200 overflow-hidden"
                    >
                        {/* subtle animated gradient sweep */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                            animate={{ x: ["-100%", "100%"] }}
                            transition={{ duration: 6, repeat: Infinity }}
                        />

                        {/* Top Controls */}
                        <div className="flex flex-col gap-6 mb-8 sm:mb-10 relative z-10">

                            {/* Tabs */}
                            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                                {["Images", "Reels", "Festivals & Occasions"].map((tab, i) => (
                                    <motion.button
                                        key={tab}
                                        whileHover={{ y: -2 }}
                                        whileTap={{ scale: 0.96 }}
                                        initial={{ opacity: 0, y: 15 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                        viewport={{ once: true }}
                                        className={`whitespace-nowrap px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition
              ${i === 0
                                                ? "bg-black text-white shadow-lg"
                                                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
                                            }`}
                                    >
                                        {tab}
                                    </motion.button>
                                ))}
                            </div>

                            {/* Search + Dropdown */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <motion.input
                                    whileFocus={{ scale: 1.02 }}
                                    type="text"
                                    placeholder="Search templates"
                                    className="w-full px-4 py-2 rounded-xl bg-white text-gray-800 placeholder-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                                />

                                <motion.select
                                    whileFocus={{ scale: 1.02 }}
                                    className="w-full sm:w-auto px-4 py-2 rounded-xl bg-white text-gray-800 border border-gray-300 focus:outline-none text-sm"
                                >
                                    <option>Food & Beverages</option>
                                    <option>Health</option>
                                    <option>Fashion</option>
                                    <option>Real Estate</option>
                                    <option>Education</option>
                                </motion.select>
                            </div>
                        </div>

                        {/* Templates Grid */}
                        <motion.div
                            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 relative z-10"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                hidden: {},
                                visible: {
                                    transition: { staggerChildren: 0.05 },
                                },
                            }}
                        >
                            {Array.from({ length: 15 }).map((_, i) => (
                                <motion.div
                                    key={i}
                                    variants={{
                                        hidden: { opacity: 0, y: 40, scale: 0.9 },
                                        visible: { opacity: 1, y: 0, scale: 1 },
                                    }}
                                    whileHover={{
                                        scale: 1.06,
                                        rotateX: 6,
                                        rotateY: -6,
                                    }}
                                    transition={{ type: "spring", stiffness: 200 }}
                                    className="relative aspect-square rounded-xl sm:rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all"
                                >
                                    <span className="absolute top-2 right-2 px-2 sm:px-3 py-1 rounded-full bg-white text-gray-400 text-[10px] sm:text-xs font-semibold shadow">
                                        #{i + 1}
                                    </span>

                                    {i < 4 ? (
                                        <motion.img
                                            src={`/templates/template-${i + 1}.jpg`}
                                            alt={`Template ${i + 1}`}
                                            className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.4 }}
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs sm:text-sm text-center px-2">
                                            Template Preview
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>
            <section className="py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 text-center">

                    {/* Gradient Badge with Floating Particle Motion */}
                    <motion.div
                        className="flex justify-center mb-6"
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.span
                            animate={{ y: [0, -6, 0], rotate: [0, 5, -5, 0] }}
                            transition={{ repeat: Infinity, duration: 3 }}
                            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-semibold shadow-lg"
                        >
                            <motion.div
                                animate={{ rotate: [0, 20, -20, 0], scale: [1, 1.2, 1] }}
                                transition={{ repeat: Infinity, duration: 4 }}
                            >
                                <SparklesIcon className="w-4 h-4 text-white" />
                            </motion.div>
                            Built for Every Industry
                        </motion.span>
                    </motion.div>

                    {/* Title + Subtitle */}
                    <motion.h2
                        className="text-4xl md:text-5xl text-black mb-4"
                        initial={{ opacity: 0, y: 60, rotateX: 20, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        Who We Help
                    </motion.h2>

                    <motion.p
                        className="text-gray-600 max-w-2xl mx-auto mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Industry-specific content automation for businesses of all sizes
                    </motion.p>

                    {/* Cards Grid */}
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            visible: { transition: { staggerChildren: 0.07 } },
                        }}
                    >
                        {[
                            { title: "Health & Fitness", emoji: "💪" },
                            { title: "Food & Beverage", emoji: "🍔" },
                            { title: "Fashion & Lifestyle", emoji: "👗" },
                            { title: "Real Estate & Construction", emoji: "🏗️" },
                            { title: "Education & Coaching", emoji: "🎓" },
                            { title: "Finance & Business Services", emoji: "💼" },
                            { title: "Medical & Healthcare", emoji: "🩺" },
                            { title: "Technology & IT Services", emoji: "💻" },
                            { title: "Hospitality & Tourism", emoji: "🏨" },
                            { title: "Automobile Industry", emoji: "🚗" },
                            { title: "Beauty, Salon & Wellness", emoji: "💅" },
                            { title: "Retail & E-Commerce", emoji: "🛒" },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                variants={{
                                    hidden: {
                                        opacity: 0,
                                        x: 100 * Math.sin(index),
                                        y: 100 * Math.cos(index),
                                        scale: 0.6,
                                        rotate: -20,
                                    },
                                    visible: {
                                        opacity: 1,
                                        x: 0,
                                        y: 0,
                                        scale: 1,
                                        rotate: 0,
                                        transition: {
                                            type: "spring",
                                            stiffness: 120,
                                            damping: 18,
                                        },
                                    },
                                }}
                                whileHover={{
                                    scale: 1.04,
                                    rotateX: 6,
                                    rotateY: -6,
                                    y: -4,
                                    boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
                                }}
                                className="rounded-3xl p-6 bg-white border border-gray-200 text-left cursor-pointer relative overflow-hidden"
                            >
                                {/* Emoji with micro-pulse */}
                                <motion.div
                                    className="text-4xl mb-4"
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ repeat: Infinity, duration: 2 }}
                                >
                                    {item.emoji}
                                </motion.div>

                                {/* Title */}
                                <motion.h3
                                    className="text-black mb-4"
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.1, duration: 0.5 }}
                                >
                                    {item.title}
                                </motion.h3>

                                {/* List */}
                                <motion.ul
                                    className="text-sm text-gray-600 space-y-2 mb-4"
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.15, duration: 0.5 }}
                                >
                                    <li>• Daily social media posts</li>
                                    <li>• Reels & short videos</li>
                                    <li>• Festival & promo creatives</li>
                                </motion.ul>

                                {/* More Link */}
                                <motion.a
                                    href="#"
                                    className="text-sm font-medium text-blue-500 hover:text-black-600"
                                    whileHover={{ x: 3, scale: 1.05 }}
                                >
                                    +5 more
                                </motion.a>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Bottom CTA Button */}
                    <motion.div className="flex justify-center">
                        <motion.button
                            className="px-10 h-14 rounded-full bg-black text-white text-sm font-semibold"
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 0 20px rgba(255,140,0,0.5), 0 0 40px rgba(255,70,0,0.3)",
                            }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            Find Your Industry
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            {/* Pricing */}
            <div id="pricing">
                {/* Assuming PricingSection is robust, otherwise wrap it */}
                <PricingSection />
            </div>
            <section className="relative py-32 px-6 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 overflow-hidden">

                {/* Animated Glow Background */}
                <motion.div
                    animate={{ scale: [1, 1.25, 1], opacity: [0.25, 0.6, 0.25] }}
                    transition={{ duration: 10, repeat: Infinity }}
                    className="absolute top-0 right-0 w-[750px] h-[750px] bg-purple-400 rounded-full blur-[140px]"
                />

                <motion.div
                    animate={{ scale: [1, 1.35, 1], opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 12, repeat: Infinity }}
                    className="absolute bottom-0 left-0 w-[650px] h-[650px] bg-blue-400 rounded-full blur-[140px]"
                />

                {/* Floating Social Media Bubbles */}
                <div className="absolute inset-0">
                    {icons.map((Icon, i) => {
                        const top = Math.random() * 90;
                        const left = Math.random() * 90;

                        return (
                            <motion.div
                                key={i}
                                initial={{
                                    opacity: 0,
                                    scale: 0.6,
                                    y: 80,
                                }}
                                animate={{
                                    opacity: 1,
                                    scale: [1, 1.15, 1],
                                    y: [0, -40, 0],
                                    x: [0, 20, -20, 0],
                                    rotate: [0, 10, -10, 0],
                                }}
                                transition={{
                                    duration: 6 + i,
                                    repeat: Infinity,
                                    delay: i * 0.2,
                                }}
                                className="absolute group cursor-pointer"
                                style={{
                                    top: `${top}%`,
                                    left: `${left}%`,
                                }}
                            >
                                <div className="text-white text-2xl bg-white/10 backdrop-blur-lg p-4 rounded-full shadow-xl transition-all duration-300 group-hover:scale-125 group-hover:bg-white/20 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.6)]">
                                    <Icon />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Orbiting Icons Layer */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                >
                    <div className="w-[600px] h-[600px] border border-white/10 rounded-full relative">
                        {icons.slice(0, 6).map((Icon, i) => (
                            <div
                                key={i}
                                className="absolute"
                                style={{
                                    top: "50%",
                                    left: "50%",
                                    transform: `rotate(${i * 60}deg) translate(300px) rotate(-${i * 60}deg)`,
                                }}
                            >
                                <div className="text-white/80 bg-white/10 p-3 rounded-full backdrop-blur-md">
                                    <Icon />
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <div className="max-w-7xl mx-auto text-center relative z-10">

                    {/* Title Animation */}
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9 }}
                        className="text-3xl md:text-4xl font-semibold text-white mb-6 leading-tight"
                    >
                        Generate Content Using 10,000+ <br />
                        AI Prompts
                    </motion.h2>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="md:text-xl text-white/90 mb-12"
                    >
                        In any tone of voice, for any industry
                    </motion.p>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.7 }}
                    >
                        <Link
                            href="/sign-up"
                            className="inline-flex items-center justify-center px-12 py-4 rounded-full bg-white text-blue-600 text-lg hover:scale-110 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] transition-all duration-300 shadow-xl"
                        >
                            <SparklesIcon className="w-6 h-6 text-blue-600 mr-2 animate-pulse" />
                            Create My Content
                        </Link>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 bg-white relative overflow-hidden">
                {/* Animated Content Flow Lines */}
                <div className="absolute inset-0 pointer-events-none">
                    {[...Array(12)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ x: -200, opacity: 0 }}
                            animate={{
                                x: ["-20%", "110%"],
                                opacity: [0, 1, 1, 0],
                            }}
                            transition={{
                                duration: 6 + i,
                                repeat: Infinity,
                                delay: i * 0.8,
                                ease: "linear",
                            }}
                            className="absolute h-2 w-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-sm"
                            style={{
                                top: `${10 + i * 7}%`,
                            }}
                        />
                    ))}
                </div>

                <div className="max-w-6xl mx-auto px-6 text-center relative z-10">

                    {/* Title */}
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-4xl md:text-3xl text-black mb-4 font-semibold"
                    >
                        Follow Us — Where We Post the Future
                    </motion.h2>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 mb-12"
                    >
                        Join our community for tips, updates, and inspiration
                    </motion.p>

                    {/* Social Icons */}
                    <div className="flex items-center justify-center gap-8 flex-wrap">
                        {socials.map((item, index) => (
                            <motion.a
                                key={index}
                                href="#"
                                aria-label={item.label}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{
                                    scale: 1.2,
                                    rotate: 6,
                                }}
                                className="relative group w-16 h-16 flex items-center justify-center rounded-full border border-gray-300 text-black bg-white transition-all duration-300 shadow-md"
                            >
                                {/* Glow Effect */}
                                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 blur-xl transition" />

                                {/* Icon */}
                                <span className="text-2xl relative z-10 group-hover:text-blue-600 transition">
                                    {item.icon}
                                </span>
                            </motion.a>
                        ))}
                    </div>

                    {/* Flowing Content Particles */}
                    <div className="absolute inset-0 pointer-events-none">
                        {[...Array(18)].map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{
                                    y: 40,
                                    opacity: 0,
                                    x: Math.random() * 300 - 150,
                                }}
                                animate={{
                                    y: -200,
                                    opacity: [0, 1, 0],
                                }}
                                transition={{
                                    duration: 6 + Math.random() * 4,
                                    repeat: Infinity,
                                    delay: i * 0.4,
                                }}
                                className="absolute w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                                style={{
                                    left: `${40 + Math.random() * 20}%`,
                                    bottom: "0%",
                                }}
                            />
                        ))}
                    </div>
                </div>
            </section>{/* Footer */}
            <footer className="bg-black py-16 md:py-20 border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-12">

                    {/* Brand + Social */}
                    <div className="sm:col-span-2">
                        {/* Logo */}
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-black font-black text-lg">
                                S
                            </div>
                            <span className="text-xl font-black tracking-tight text-white">
                                Shoutly<span className="text-brand-500">.ai</span>
                            </span>
                        </div>

                        <p className="text-gray-400 text-sm font-medium max-w-sm mb-8">
                            Empowering creators and brands with AI-driven content tools that save time and amplify impact.
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-4">
                            {[FaTwitter, FaInstagram, FaLinkedinIn, FaFacebookF, FaYoutube].map((Icon, i) => (
                                <div
                                    key={i}
                                    className="w-10 h-10 rounded-full border border-gray-700 bg-gray-900 flex items-center justify-center text-gray-300 hover:bg-brand-500 hover:text-white transition-all cursor-pointer"
                                >
                                    <Icon className="w-5 h-5" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Product Column */}
                    <div>
                        <h4 className="font-semibold text-white mb-5">Products</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link href="#" className="hover:text-white transition">Features</Link></li>
                            <li><Link href="#" className="hover:text-white transition">Pricing</Link></li>
                            <li><Link href="#" className="hover:text-white transition">Integrations</Link></li>
                            <li><Link href="#" className="hover:text-white transition">Changelog</Link></li>
                        </ul>
                    </div>

                    {/* Industries Column */}
                    <div>
                        <h4 className="font-semibold text-white mb-5">Industries</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link href="#" className="hover:text-white transition">Health & Fitness</Link></li>
                            <li><Link href="#" className="hover:text-white transition">Food & Beverage</Link></li>
                            <li><Link href="#" className="hover:text-white transition">Education</Link></li>
                            <li><Link href="#" className="hover:text-white transition">Real Estate</Link></li>
                        </ul>
                    </div>

                    {/* Resources Column */}
                    <div>
                        <h4 className="font-semibold text-white mb-5">Resources</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link href="#" className="hover:text-white transition">Blog</Link></li>
                            <li><Link href="#" className="hover:text-white transition">Help Center</Link></li>
                            <li><Link href="#" className="hover:text-white transition">Guides</Link></li>
                            <li><Link href="#" className="hover:text-white transition">Case Studies</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-12 md:mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
                    <p className="text-gray-500 text-xs">
                        © 2026 Shoutly AI Inc. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-gray-500 text-xs">
                        <Link href="#" className="hover:text-white transition">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition">Terms of Service</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
