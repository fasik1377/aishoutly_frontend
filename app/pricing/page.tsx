"use client";
import Head from "next/head";

const killerFeatures = [
    {
        icon: "🤖➡️📅",
        title: "One Prompt = Full Year",
        desc: "A full 365-day calendar with posts, reels, and festival creatives.",
    },
    {
        icon: "🎨🤖",
        title: "Auto-Branded Everything",
        desc: "Your logo, phone number and branding applied automatically.",
    },
    {
        icon: "📆💤",
        title: "Zero Daily Login",
        desc: "Set it once. Shoutly posts automatically every day.",
    },
    {
        icon: "🎭🌍",
        title: "Festival Intelligence",
        desc: "AI generates culturally relevant creatives globally.",
    },
    {
        icon: "📊🧠",
        title: "Strategy Engine",
        desc: "Content pillars, engagement hooks and growth loops.",
    },
    {
        icon: "⚡🚫",
        title: "No Creative Fatigue",
        desc: "Never stare at a blank screen again.",
    },
];

const testimonials = [
    {
        text: "I was paying an agency $4,500/month. Shoutly does better work.",
        author: "Alex Chen",
        role: "Founder, Realfy",
    },
    {
        text: "The festival creatives alone are worth 10x the price.",
        author: "Priya K.",
        role: "Marketing Head",
    },
    {
        text: "I run 7 brands. Now it's just me and Shoutly.",
        author: "Marcus T.",
        role: "Entrepreneur",
    },
];

const pricing = [
    {
        name: "SOLO",
        price: "$29",
        features: [
            "365 AI posts/year",
            "1 brand",
            "Email support",
        ],
    },
    {
        name: "CREATOR",
        price: "$79",
        features: [
            "Unlimited posts",
            "12 reels/month",
            "Priority support",
        ],
    },
    {
        name: "BUSINESS",
        price: "$197",
        popular: true,
        features: [
            "Unlimited posts",
            "Unlimited reels",
            "3 brands",
            "Premium branding",
        ],
    },
    {
        name: "GROWTH",
        price: "$497",
        features: [
            "Unlimited posts",
            "Unlimited reels",
            "10 brands",
            "API access",
        ],
    },
];

export default function PricingPage() {
    const killerFeatures = [
        {
            icon: "🤖➡️📅",
            title: "One Prompt = Full Year",
            desc: "A full 365-day calendar with posts, reels, and festival creatives.",
        },
        {
            icon: "🎨🤖",
            title: "Auto-Branded Everything",
            desc: "Your logo, phone number and branding applied automatically.",
        },
        {
            icon: "📆💤",
            title: "Zero Daily Login",
            desc: "Set it once. Shoutly posts automatically every day.",
        },
        {
            icon: "🎭🌍",
            title: "Festival Intelligence",
            desc: "AI generates culturally relevant creatives globally.",
        },
        {
            icon: "📊🧠",
            title: "Strategy Engine",
            desc: "Content pillars, engagement hooks and growth loops.",
        },
        {
            icon: "⚡🚫",
            title: "No Creative Fatigue",
            desc: "Never stare at a blank screen again.",
        },
    ];

    const testimonials = [
        {
            text: "I was paying an agency $4,500/month. Shoutly does better work.",
            author: "Alex Chen",
            role: "Founder, Realfy",
        },
        {
            text: "The festival creatives alone are worth 10x the price.",
            author: "Priya K.",
            role: "Marketing Head",
        },
        {
            text: "I run 7 brands. Now it's just me and Shoutly.",
            author: "Marcus T.",
            role: "Entrepreneur",
        },
    ];

    const pricing = [
        {
            name: "SOLO",
            price: "$29",
            features: ["365 AI posts/year", "1 brand", "Email support"],
        },
        {
            name: "CREATOR",
            price: "$79",
            features: ["Unlimited posts", "12 reels/month", "Priority support"],
        },
        {
            name: "BUSINESS",
            price: "$197",
            popular: true,
            features: [
                "Unlimited posts",
                "Unlimited reels",
                "3 brands",
                "Premium branding",
            ],
        },
        {
            name: "GROWTH",
            price: "$497",
            features: ["Unlimited posts", "Unlimited reels", "10 brands", "API access"],
        },
    ];

    function FeatureCard({ icon, title, desc }: any) {
        return (
            <div className="bg-white p-8 rounded-3xl border hover:shadow-xl transition">
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-600">{desc}</p>
            </div>
        );
    }

    function TestimonialCard({ text, author, role }: any) {
        return (
            <div className="bg-white p-8 rounded-3xl border relative">
                <p className="text-lg mb-6">{text}</p>
                <div className="font-bold text-orange-500">{author}</div>
                <div className="text-sm text-gray-500">{role}</div>
            </div>
        );
    }

    function PricingCard({ name, price, features, popular }: any) {
        return (
            <div
                className={`p-8 rounded-3xl border bg-white relative ${popular ? "border-orange-500 shadow-xl scale-105" : ""
                    }`}
            >
                {popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm">
                        MOST POPULAR
                    </div>
                )}

                <h3 className="text-2xl font-bold mb-2">{name}</h3>
                <div className="text-5xl font-black mb-6">{price}</div>

                <ul className="space-y-2 mb-6">
                    {features.map((f: string, i: number) => (
                        <li key={i}>✓ {f}</li>
                    ))}
                </ul>

                <button
                    className={`w-full py-3 rounded-full font-bold ${popular ? "bg-orange-500 text-white" : "bg-black text-white"
                        }`}
                >
                    Get Started
                </button>
            </div>
        );
    }

    return (
        <main className="bg-[#faf9f6] text-black">
            {/* HERO */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <span className="px-4 py-1 rounded-full bg-gray-200 text-orange-500 font-semibold">
                    💰 Pricing — 2026 Launch
                </span>

                <h1 className="text-5xl md:text-7xl font-black mt-6 leading-tight">
                    WE DIDN'T BUILD A <br />
                    <span className="bg-gradient-to-r from-orange-500 to-yellow-400 text-transparent bg-clip-text">
                        SCHEDULING TOOL
                    </span>
                    <br /> WE KILLED AGENCIES
                </h1>

                <p className="text-lg text-gray-600 mt-6 max-w-2xl">
                    One prompt = 365 days of content. No designers. No strategists.
                </p>
            </section>

            {/* FEATURES */}
            <section className="max-w-7xl mx-auto px-6 py-10">
                <h2 className="text-4xl font-bold mb-10">What Others Don't Do</h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {killerFeatures.map((f, i) => (
                        <FeatureCard key={i} {...f} />
                    ))}
                </div>
            </section>

            {/* STATS */}
            <section className="bg-black text-white py-16 rounded-[40px] mx-6 my-16">
                <div className="max-w-6xl mx-auto grid md:grid-cols-4 text-center gap-8">
                    <div>
                        <h3 className="text-5xl font-black text-orange-400">98%</h3>
                        <p>Would fire their agency again</p>
                    </div>
                    <div>
                        <h3 className="text-5xl font-black text-orange-400">0</h3>
                        <p>Hours spent weekly</p>
                    </div>
                    <div>
                        <h3 className="text-5xl font-black text-orange-400">3x</h3>
                        <p>More posts</p>
                    </div>
                    <div>
                        <h3 className="text-5xl font-black text-orange-400">47min</h3>
                        <p>Average setup time</p>
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="max-w-7xl mx-auto px-6 py-10">
                <h2 className="text-4xl font-bold mb-10">Why People Love Us</h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <TestimonialCard key={i} {...t} />
                    ))}
                </div>
            </section>

            {/* PRICING */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <h2 className="text-5xl font-bold text-center mb-16">
                    One Price. 365 Days.
                </h2>

                <div className="grid md:grid-cols-4 gap-8">
                    {pricing.map((p, i) => (
                        <PricingCard key={i} {...p} />
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="text-center py-20 bg-white rounded-[50px] max-w-6xl mx-auto mb-20 border">
                <h2 className="text-4xl font-bold mb-6">
                    STOP HIRING. START SHOUTING.
                </h2>

                <p className="text-gray-600 mb-8">
                    Join founders who replaced agencies with AI.
                </p>

                <button className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-full font-bold text-lg transition">
                    Get Early Access
                </button>
            </section>
        </main>
    );
}