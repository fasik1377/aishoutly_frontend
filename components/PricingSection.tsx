"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function PricingSection() {
    const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 18;
        const rotateY = (centerX - x) / 18;

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`;
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = e.currentTarget;
        card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    };

    return (
        <section
            id="pricing"
            className="py-16 md:py-28 bg-gradient-to-b from-white via-blue-50 to-purple-50"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6">

                {/* Title */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-2xl md:text-4xl text-black mb-4 font-semibold">
                        Simple, Affordable Pricing
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Choose the plan that fits your needs
                    </p>

                    {/* Toggle */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 bg-gray-100 rounded-full px-4 py-3 max-w-xs mx-auto">
                        <div
                            className="relative w-36 h-10 bg-white rounded-full shadow-inner cursor-pointer"
                            onClick={() =>
                                setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")
                            }
                        >
                            <div
                                className={`absolute top-1 left-1 w-16 h-8 bg-white rounded-full shadow transition-transform duration-300 flex items-center justify-center text-black font-medium text-sm ${billingCycle === "yearly" ? "translate-x-16" : ""
                                    }`}
                            >
                                {billingCycle === "monthly" ? "Monthly" : "Yearly"}
                            </div>
                        </div>

                        <span className="px-2 py-1 text-green-700 text-sm font-semibold bg-green-100 rounded-full">
                            Save 20%
                        </span>
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 perspective-[1500px]">

                    {/* Starter Plan */}
                    <div
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        className="bg-white border border-gray-200 rounded-3xl p-6 md:p-10 shadow-lg transition-transform duration-300 will-change-transform hover:shadow-2xl"
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        <div style={{ transform: "translateZ(40px)" }}>
                            <h3 className="text-2xl text-black mb-1">Starter</h3>
                            <p className="text-gray-500 mb-6">
                                For Individual & Freelancer
                            </p>

                            <div className="mb-6">
                                <div className="text-4xl text-black">
                                    ₹899
                                    <span className="text-base font-medium text-gray-500">
                                        /month
                                    </span>
                                </div>
                                <div className="text-sm text-gray-500">
                                    $11 USD / month
                                </div>
                            </div>

                            <div className="flex justify-center mb-8">
                                <Link
                                    href="/signup"
                                    className="w-full sm:w-64 px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center hover:scale-105 transition"
                                >
                                    Get Started
                                </Link>
                            </div>

                            <ul className="space-y-4">
                                {[
                                    "365 AI-generated posts",
                                    "Images, reels & festivals",
                                    "Auto scheduling",
                                    "Basic branding",
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-gray-700">
                                        <span className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">
                                            ✓
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Growth Plan */}
                    <div
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        className="relative bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-6 md:p-10 shadow-xl transition-transform duration-300 will-change-transform hover:shadow-2xl"
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        <div style={{ transform: "translateZ(50px)" }}>
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                <span className="px-4 py-1 rounded-full bg-yellow-400 text-black text-xs">
                                    Most Popular
                                </span>
                            </div>

                            <h3 className="text-2xl text-white mb-1">Growth</h3>
                            <p className="text-white/80 mb-6">
                                For Small Business
                            </p>

                            <div className="mb-6">
                                <div className="text-4xl text-white">
                                    ₹1,499
                                    <span className="text-base font-medium text-white/80">
                                        /month
                                    </span>
                                </div>
                                <div className="text-sm text-white/80">
                                    $18 USD / month
                                </div>
                            </div>

                            <div className="flex justify-center mb-8">
                                <Link
                                    href="/signup"
                                    className="w-full sm:w-64 px-8 py-3 rounded-full bg-white text-blue-600 text-center hover:scale-105 transition"
                                >
                                    Get Started
                                </Link>
                            </div>

                            <ul className="space-y-4">
                                {[
                                    "Unlimited content generation",
                                    "Advanced branding",
                                    "Multi-platform scheduling",
                                    "Priority support",
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-white">
                                        <span className="w-5 h-5 rounded-full bg-yellow-400 flex items-center justify-center text-black text-xs">
                                            ✓
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="mt-16 md:mt-24 text-center px-4">
                <p className="text-black mb-6 text-lg">
                    🎉 Get Your Early Access at Launch Price!
                </p>

                <Link
                    href="/signup"
                    className="inline-flex items-center justify-center w-full sm:w-auto px-10 py-4 rounded-full bg-black text-white text-lg hover:scale-105 hover:bg-gray-900 transition"
                >
                    Start Your Free Trial
                </Link>
            </div>
        </section>
    );
}