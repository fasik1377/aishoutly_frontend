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
import { useEffect } from "react";

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

    const toggleVideo = () => {
        const video = videoRef.current;
        if (!video) return;

        if (video.paused) {
            video.play();
            setIsPlaying(true);
        } else {
            video.pause();
            setIsPlaying(false);
        }
    };

    const [menuOpen, setMenuOpen] = useState(false);
    const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
    const [images, setImages] = useState<any[]>([]);
    const [etag, setEtag] = useState<string | null>(null);
    const [loadingImages, setLoadingImages] = useState(false);

    const [industries, setIndustries] = useState<any[]>([]);
    const [loadingIndustries, setLoadingIndustries] = useState(true);

    useEffect(() => {
        const fetchImages = async () => {
            setLoadingImages(true);

            try {
                let url =
                    "https://ai-shoutly-backend.onrender.com/api/display-images";

                if (selectedIndustry) {
                    url += `?industryId=${selectedIndustry}`;
                }

                const res = await fetch(url, {
                    headers: etag ? { "If-None-Match": etag } : {},
                });

                if (res.status === 304) {
                    setLoadingImages(false);
                    return;
                }

                const newEtag = res.headers.get("ETag");
                if (newEtag) setEtag(newEtag);

                const data = await res.json();

                setImages(data.images || []);
            } catch (error) {
                console.error("Failed to fetch images:", error);
            } finally {
                setLoadingImages(false);
            }
        };

        fetchImages();
    }, [selectedIndustry]);

    useEffect(() => {
        const fetchIndustries = async () => {
            try {
                const res = await fetch(
                    "https://ai-shoutly-backend.onrender.com/api/industries/with-subindustries"
                );

                const data = await res.json();
                setIndustries(data);
            } catch (error) {
                console.error("Failed to fetch industries:", error);
            } finally {
                setLoadingIndustries(false);
            }
        };

        fetchIndustries();
    }, []);
    return (
        <div className="relative bg-white dark:bg-gray-950 font-arial min-h-screen text-gray-900 dark:text-white selection:text-white overflow-hidden">
            {/* GLOBAL FLOATING AI + SOCIAL MEDIA BUBBLES */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                {icons.map((Icon, i) => {
                    const startX = Math.random() * 100;
                    const startY = Math.random() * 100;

                    return (
                        <div
                            className="absolute"
                        >
                            <div className="text-gray-400/30 text-2xl md:text-3xl bg-white/40 backdrop-blur-md p-4 rounded-full shadow-lg">
                                <Icon />
                            </div>
                        </div>
                    );
                })}

                {/* AI SPARK BUBBLES */}
                {[...Array(10)].map((_, i) => (
                    <div
                        className="absolute"
                    >
                        <div className="p-3 rounded-full bg-gradient-to-r from-blue-400/30 to-purple-500/30 backdrop-blur-md">
                            <SparklesIcon className="w-6 h-6 text-purple-500/40" />
                        </div>
                    </div>
                ))}
            </div>
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">

                    {/* Logo */}
                    <div className="relative w-28 h-10 sm:w-40 sm:h-14">
                        <Image src="/images/logo.png" alt="Logo" fill className="object-contain" />
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
            <header className="pt-32 pb-40 px-6 relative overflow-hidden bg-white">
                {/* Background Image with subtle floating animation */}
                <motion.div
                    className="absolute inset-0 bg-cover bg-center opacity-[0.6]"
                    style={{ backgroundImage: "url('images/sky.jpg')" }}
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />


                {/* Gradient Glow */}
                <motion.div
                    className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-500/10 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none"
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />


                {/* Content */}
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <motion.span
                        className="inline-flex items-center gap-2 py-2 px-4 rounded-full
               bg-white/60 backdrop-blur-sm text-blue-600
               text-[10px] uppercase tracking-widest mb-8
               border border-blue-200"
                        style={{ fontFamily: "Arial", fontWeight: 600 }}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <SparklesIcon className="w-4 h-4 text-blue-600" />
                        AI-Powered Content Generation
                    </motion.span>


                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                        className="text-5xl md:text-7xl lg:text-6xl font-normal mb-8 tracking-tight leading-[1.05]"


                    >
                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-normal mb-6 leading-tight">


                            {/* Generate */}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-700">
                                Generate{" "}
                            </span>


                            {/* 365 Days */}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-pink-500">
                                365 Days{" "}
                            </span>


                            {/* of Social Content, Brand */}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-black">
                                of Social Content, Brand
                            </span>


                            <br />


                            {/* Designs, Reels & Hashtags - in Minutes. */}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-black">
                                Designs, Reels & Hashtags — in Minutes.
                            </span>
                        </h1>


                    </motion.h1>
                    <motion.div
                        className="text-xl md:text-xl text-[#000000] dark:text-black mb-12 max-w-2xl mx-auto font-normal leading-relaxed space-y-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                    >
                        <p>Upload your logo → Enter one prompt → Get 365 days of AI-built content</p>
                        <p className="text-lg text-blue-600 font-light whitespace-nowrap overflow-hidden text-ellipsis">
                            Images • Reels • Captions • Hashtags • Auto Scheduling
                        </p>


                    </motion.div>
                    {/* Action Buttons */}
                    <div className="flex flex-row justify-center gap-4 flex-wrap mb-6">


                        {/* Try Free Button */}
                        <button
                            className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#000000] text-white hover:opacity-90 transition"
                            style={{ fontFamily: "Arial", fontWeight: 400 }}
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
                            </svg>
                            <span className="text-sm">Try Free</span>
                        </button>


                        <button
                            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black border border-gray-300 hover:bg-gray-50 transition"
                            style={{ fontFamily: "Arial", fontWeight: 400 }}
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                            <span className="text-sm">Watch Video</span>
                        </button>


                    </div>


                    {/* Social Icons */}
                    <div className="flex items-center justify-center gap-6 mt-6">
                        {/** Facebook */}
                        <motion.a
                            href="#"
                            aria-label="Facebook"
                            className="w-12 h-12 rounded-full bg-[#1877F2] flex items-center justify-center text-white transition-all"
                            whileHover={{ scale: 1.2 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.1 }}
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.3 0-1.7.8-1.7 1.6V12H16l-.4 3h-2.5v7A10 10 0 0 0 22 12z" />
                            </svg>
                        </motion.a>


                        {/** Twitter */}
                        <motion.a
                            href="#"
                            aria-label="Twitter"
                            className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white transition-all"
                            whileHover={{ scale: 1.2 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2 }}
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.2 2H21l-6.6 7.5L22 22h-6.6l-4.7-6.1L5.3 22H2l7.1-8.1L2 2h6.8l4.2 5.6L18.2 2z" />
                            </svg>
                        </motion.a>


                        {/** LinkedIn */}
                        <motion.a
                            href="#"
                            aria-label="LinkedIn"
                            className="w-12 h-12 rounded-full bg-[#0A66C2] flex items-center justify-center text-white transition-all"
                            whileHover={{ scale: 1.2 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.3 }}
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.4 20.4h-3.5v-5.4c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.5H9.5V9h3.4v1.6h.1c.5-.9 1.7-1.8 3.5-1.8 3.7 0 4.4 2.4 4.4 5.6v6zM5.3 7.4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM7 20.4H3.6V9H7v11.4z" />
                            </svg>
                        </motion.a>


                        {/** YouTube */}
                        <motion.a
                            href="#"
                            aria-label="YouTube"
                            className="w-12 h-12 rounded-full bg-[#FF0000] flex items-center justify-center text-white transition-all"
                            whileHover={{ scale: 1.2 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.4 }}
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.5 6.2s-.2-1.6-.9-2.3c-.8-.9-1.7-.9-2.1-1C16.6 2.5 12 2.5 12 2.5h0s-4.6 0-8.5.4c-.4.1-1.3.1-2.1 1C.7 4.6.5 6.2.5 6.2S0 8.1 0 10v2c0 1.9.5 3.8.5 3.8s.2 1.6.9 2.3c.8.9 1.9.8 2.4.9 1.7.2 7.2.4 7.2.4s4.6 0 8.5-.4c.4-.1 1.3-.1 2.1-1 .7-.7.9-2.3.9-2.3s.5-1.9.5-3.8v-2c0-1.9-.5-3.8-.5-3.8zM9.5 14.5v-5l5 2.5-5 2.5z" />
                            </svg>
                        </motion.a>


                        {/** Instagram */}
                        <motion.a
                            href="#"
                            aria-label="Instagram"
                            className="w-12 h-12 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center text-white transition-all"
                            whileHover={{ scale: 1.2 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.5 }}
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5zm0 7.3A2.8 2.8 0 1 1 14.8 12 2.8 2.8 0 0 1 12 14.8zm4.8-7.9a1.1 1.1 0 1 0 1.1 1.1 1.1 1.1 0 0 0-1.1-1.1z" />
                            </svg>
                        </motion.a>
                    </div>
                    {/* Rocket Accent */}
                    <span className="absolute -bottom-4 -left-2 text-3xl sm:text-5xl select-none z-0">
                        🚀
                    </span>
                </div>
            </header>
            {/*<AIPapersSection />*/}
            {/* See It In Action Section */}
            <section className="py-14 sm:py-20 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">

                    {/* Title */}
                    <div
                        className="text-2xl sm:text-3xl md:text-5xl text-black font-arial mb-10 sm:mb-12"
                    >
                        See it in Action
                    </div>

                    {/* Flow Steps */}
                    <div
                        className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 mb-12 sm:mb-16"
                    >
                        {[
                            { label: "Select Industry", color: "bg-blue-500" },
                            { label: "Enter Prompt", color: "bg-violet-500" },
                            { label: "AI Generates", color: "bg-pink-500" },
                            { label: "Auto Schedule", color: "bg-green-500" },
                        ].map((step, index) => (
                            <div
                                className="flex items-center gap-3"
                            >
                                <div className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-300 text-xs sm:text-sm font-medium text-black bg-gray-100 shadow-sm backdrop-blur-md">

                                    {/* Animated Dot */}
                                    <div
                                        className={`w-2.5 h-2.5 rounded-full ${step.color}`}
                                    />

                                    {step.label}
                                </div>

                                {/* Animated Arrow */}
                                {index !== 3 && (
                                    <div
                                        className="hidden sm:inline text-gray-400 text-xl"
                                    >
                                        →
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    {/* Video Section */}
                    <div className="relative max-w-4xl mx-auto mb-14 sm:mb-20">
                        <div className="relative aspect-video rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-200 shadow-xl bg-black group">

                            <video
                                ref={videoRef}
                                className="w-full h-full object-cover cursor-pointer"
                                src="videos/video.mp4"
                                onClick={toggleVideo}
                            />

                            {!isPlaying && (
                                <button
                                    onClick={toggleVideo}
                                    className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm"
                                >
                                    <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-white text-black flex items-center justify-center text-xl sm:text-2xl shadow-xl">
                                        ▶
                                    </div>
                                </button>
                            )}
                        </div>
                    </div>
                    {/* Feature Cards */}
                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
                    >
                        {[
                            { emoji: "⚡", title: "2-Minutes Setup" },
                            { emoji: "🎨", title: "Auto-Branded" },
                            { emoji: "📅", title: "365 Days Filled" },
                            { emoji: "🌍", title: "Multi-Platform" },
                        ].map((item) => (
                            <div
                                className="bg-gray-100 border border-gray-200 rounded-2xl p-6 sm:p-8 text-center shadow-sm hover:shadow-xl transition-all"
                            >
                                <div
                                    className="text-3xl sm:text-4xl mb-3 sm:mb-4"
                                >
                                    {item.emoji}
                                </div>

                                <h3 className="text-base sm:text-lg font-semibold text-black">
                                    {item.title}
                                </h3>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
            <section className="py-14 sm:py-24 bg-white text-black overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">

                    {/* Floating Badge */}
                    <div
                        className="flex justify-center mb-5 sm:mb-6"

                    >
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs sm:text-sm font-semibold shadow-lg"
                        >
                            <span>3 Simple Steps</span>
                        </div>
                    </div>

                    {/* Title Reveal Animation */}
                    <div
                        className="text-2xl sm:text-3xl md:text-5xl text-center mb-3 sm:mb-4"

                    >
                        Generate Your Year of Content
                    </div>

                    {/* Subtitle */}
                    <div
                        className="text-center text-gray-600 text-sm sm:text-base max-w-2xl mx-auto mb-10 sm:mb-16 px-2"
                    >
                        One prompt, 365 days of posts. Including local festivals & events.
                    </div>

                    {/* Cards Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">

                        {/* CARD 1 */}
                        <div
                            className="border border-gray-200 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-sm relative overflow-hidden"
                        >
                            {/* AI scanning light */}
                            <div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                            />

                            <div className="flex items-center gap-3 mb-5 sm:mb-6">
                                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-black text-white flex items-center justify-center text-sm font-semibold">
                                    1
                                </span>
                                <h3 className="text-lg sm:text-xl font-semibold">
                                    Select your industry
                                </h3>
                            </div>
                            <select
                                onChange={(e) => setSelectedIndustry(e.target.value)}
                                className="w-full mb-6 sm:mb-8 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black text-sm sm:text-base"
                            >
                                <option value="">Choose your industry</option>

                                {loadingIndustries ? (
                                    <option>Loading industries...</option>
                                ) : (
                                    industries.map((industry) => (
                                        <option key={industry.id} value={industry.id}>
                                            {industry.name}
                                        </option>
                                    ))
                                )}
                            </select>

                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                                {[
                                    { emoji: "🏥", label: "Health" },
                                    { emoji: "🍔", label: "Food" },
                                    { emoji: "👗", label: "Fashion" },
                                    { emoji: "🏠", label: "Real Estate" },
                                    { emoji: "🎓", label: "Education" },
                                    { emoji: "💰", label: "Finance" },
                                ].map((item, i) => (
                                    <div
                                        className="border border-gray-200 rounded-xl sm:rounded-2xl py-4 sm:py-6 flex flex-col items-center justify-center hover:shadow-lg transition"
                                    >
                                        <span
                                            className="text-xl sm:text-2xl mb-1 sm:mb-2"
                                        >
                                            {item.emoji}
                                        </span>
                                        <span className="text-xs sm:text-sm font-medium text-center">
                                            {item.label}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CARD 2 */}
                        <div
                            className="border border-gray-200 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-sm bg-gray-100 relative overflow-hidden"
                        >
                            {/* subtle animated glow */}
                            <div
                                className="absolute -top-20 -right-20 w-60 h-60 bg-purple-300 rounded-full blur-3xl opacity-30"
                            />

                            <div className="flex items-center gap-3 mb-5 sm:mb-6">
                                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-black text-white flex items-center justify-center text-sm font-semibold">
                                    2
                                </span>
                                <h3 className="text-lg sm:text-xl font-semibold">
                                    Describe Your Brand
                                </h3>
                            </div>

                            <textarea
                                className="w-full min-h-[140px] sm:min-h-[180px] p-4 bg-white rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black resize-none text-sm sm:text-base mb-4"
                                placeholder="I'm an architect- generate 365 instagram posts, reels and festival creatives."
                            />

                            <div className="flex flex-col sm:flex-row gap-3 mb-4">
                                <button
                                    className="px-4 py-2 rounded-lg bg-gray-300 text-black text-xs sm:text-sm font-medium"
                                >
                                    Create Health Photo
                                </button>

                                <button
                                    className="px-4 py-2 bg-gray-300 rounded-lg border border-black text-xs sm:text-sm font-medium"
                                >
                                    Create Reels Photo
                                </button>
                            </div>

                            <p className="text-xs sm:text-sm text-gray-500">
                                <b>Hint:</b> Be specific about your services, target audience, and content style
                            </p>

                            {/* Power CTA Button */}
                            <button
                                className="w-full mt-6 sm:mt-8 py-3 sm:py-4 rounded-2xl bg-gradient-to-r from-gray-300 to-gray-500 text-white text-base sm:text-lg font-semibold"
                            >
                                Generate 365 Days of Content
                            </button>
                        </div>

                    </div>
                </div>
            </section>
            <section className="py-14 sm:py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">

                    {/* Floating Badge */}
                    <div
                        className="flex justify-center mb-5 sm:mb-6"
                    >
                        <span
                            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 text-white text-xs sm:text-sm font-semibold shadow-lg"
                        >
                            <div

                            >
                                <SparklesIcon className="w-4 h-4 text-white" />
                            </div>
                            10,000+ Professional Templates
                        </span>
                    </div>

                    {/* Title */}
                    <h2
                        className="text-2xl sm:text-3xl md:text-5xl text-center text-black mb-3 sm:mb-4"
                    >
                        Browse Our Library
                    </h2>

                    {/* Subtitle */}
                    <p
                        className="text-center text-gray-600 text-sm sm:text-base max-w-2xl mx-auto mb-10 sm:mb-16 px-2"
                    >
                        Industry-specific templates that update instantly based on your selection
                    </p>

                    {/* Main Card */}
                    <div
                        className="relative bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-xl border border-gray-200 overflow-hidden"
                    >
                        {/* subtle animated gradient sweep */}
                        <div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                        />

                        {/* Top Controls */}
                        <div className="flex flex-col gap-6 mb-8 sm:mb-10 relative z-10">

                            {/* Tabs */}
                            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                                {["Images", "Reels", "Festivals & Occasions"].map((tab, i) => (
                                    <button

                                        className={`whitespace-nowrap px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition
              ${i === 0
                                                ? "bg-black text-white shadow-lg"
                                                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
                                            }`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>

                            {/* Search + Dropdown */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <input

                                    type="text"
                                    placeholder="Search templates"
                                    className="w-full px-4 py-2 rounded-xl bg-white text-gray-800 placeholder-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                                />

                                <select
                                    className="w-full sm:w-auto px-4 py-2 rounded-xl bg-white text-gray-800 border border-gray-300 focus:outline-none text-sm"
                                >
                                    <option>Food & Beverages</option>
                                    <option>Health</option>
                                    <option>Fashion</option>
                                    <option>Real Estate</option>
                                    <option>Education</option>
                                </select>
                            </div>
                        </div>

                        {/* Templates Grid */}
                        <div
                            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 relative z-10"
                        >
                            {loadingImages ? (
                                <p className="text-center col-span-full">Loading templates...</p>
                            ) : images.length === 0 ? (
                                <p className="text-center col-span-full">No templates found</p>
                            ) : (
                                images.map((img, i) => (
                                    <div
                                        key={img.id}
                                        className="relative aspect-square rounded-xl sm:rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all"
                                    >
                                        <span className="absolute top-2 right-2 px-2 sm:px-3 py-1 rounded-full bg-white text-gray-400 text-[10px] sm:text-xs font-semibold shadow">
                                            #{i + 1}
                                        </span>

                                        <img
                                            src={img.file}
                                            alt="Template"
                                            className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
                                        />
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 text-center">

                    {/* Gradient Badge with Floating Particle Motion */}
                    <div
                        className="flex justify-center mb-6"
                    >
                        <span
                            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-semibold shadow-lg"
                        >
                            <div
                            >
                                <SparklesIcon className="w-4 h-4 text-white" />
                            </div>
                            Built for Every Industry
                        </span>
                    </div>

                    {/* Title + Subtitle */}
                    <h2
                        className="text-4xl md:text-5xl text-black mb-4"

                    >
                        Who We Help
                    </h2>

                    <p
                        className="text-gray-600 max-w-2xl mx-auto mb-16"

                    >
                        Industry-specific content automation for businesses of all sizes
                    </p>

                    {/* Cards Grid */}
                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
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
                            <div
                                className="rounded-3xl p-6 bg-white border border-gray-200 text-left cursor-pointer relative overflow-hidden"
                            >
                                {/* Emoji with micro-pulse */}
                                <div
                                    className="text-4xl mb-4"

                                >
                                    {item.emoji}
                                </div>

                                {/* Title */}
                                <h3
                                    className="text-black mb-4"
                                >
                                    {item.title}
                                </h3>

                                {/* List */}
                                <ul
                                    className="text-sm text-gray-600 space-y-2 mb-4"

                                >
                                    <li>• Daily social media posts</li>
                                    <li>• Reels & short videos</li>
                                    <li>• Festival & promo creatives</li>
                                </ul>

                                {/* More Link */}
                                <a
                                    href="#"
                                    className="text-sm font-medium text-blue-500 hover:text-black-600"

                                >
                                    +5 more
                                </a>
                            </div>
                        ))}
                    </div>

                    {/* Bottom CTA Button */}
                    <div className="flex justify-center">
                        <button
                            className="px-10 h-14 rounded-full bg-black text-white text-sm font-semibold"
                        >
                            Find Your Industry
                        </button>
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <div id="pricing">
                {/* Assuming PricingSection is robust, otherwise wrap it */}
                <PricingSection />
            </div>
            <section className="relative py-32 px-6 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 overflow-hidden">

                {/* Animated Glow Background */}
                <div
                    className="absolute top-0 right-0 w-[750px] h-[750px] bg-purple-400 rounded-full blur-[140px]"
                />

                <div
                    className="absolute bottom-0 left-0 w-[650px] h-[650px] bg-blue-400 rounded-full blur-[140px]"
                />

                {/* Orbiting Icons Layer */}


                <div className="max-w-7xl mx-auto text-center relative z-10">

                    {/* Title Animation */}
                    <h2
                        className="text-3xl md:text-4xl font-semibold text-white mb-6 leading-tight"
                    >
                        Generate Content Using 10,000+ <br />
                        AI Prompts
                    </h2>

                    {/* Subtitle */}
                    <p
                        className="md:text-xl text-white/90 mb-12"
                    >
                        In any tone of voice, for any industry
                    </p>

                    {/* CTA Button */}
                    <div
                    >
                        <Link
                            href="/sign-up"
                            className="inline-flex items-center justify-center px-12 py-4 rounded-full bg-white text-blue-600 text-lg hover:scale-110 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] transition-all duration-300 shadow-xl"
                        >

                            Create My Content
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white relative overflow-hidden">
                {/* Animated Content Flow Lines */}


                <div className="max-w-6xl mx-auto px-6 text-center relative z-10">

                    {/* Title */}
                    <h2
                        className="text-4xl md:text-3xl text-black mb-4 font-semibold"
                    >
                        Follow Us — Where We Post the Future
                    </h2>

                    {/* Subtitle */}
                    <p
                        className="text-gray-600 mb-12"
                    >
                        Join our community for tips, updates, and inspiration
                    </p>



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
                                    className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-300 hover:bg-brand-500 hover:text-white transition-all cursor-pointer"
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
