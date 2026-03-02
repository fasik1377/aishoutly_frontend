"use client";

import { useState } from "react";

const faqData = [
    {
        category: "Getting Started",
        items: [
            {
                q: "What is ShoutlyAI exactly? A tool or a platform?",
                a: "ShoutlyAI is an AI Growth Operating System that automates strategy, creation, scheduling, and analytics for your content lifecycle."
            },
            {
                q: "How do I create my first prompt?",
                a: "After signup, type your industry, tone, and goals. The AI generates a full content calendar automatically."
            },
            {
                q: "Can I customize the AI-generated content?",
                a: "Yes. Every generated post is editable and the AI learns from your edits."
            }
        ]
    },
    {
        category: "AI Content & Automation",
        items: [
            {
                q: "What types of content can ShoutlyAI create?",
                a: "Posts, reels scripts, captions, creatives, and full strategy calendars."
            },
            {
                q: "How does the AI learn my brand voice?",
                a: "Our system analyzes tone, industry, and preferences to maintain consistent brand voice."
            },
            {
                q: "Can I schedule content automatically?",
                a: "Yes. ShoutlyAI supports scheduling across multiple social platforms."
            }
        ]
    },
    {
        category: "Billing & Subscriptions",
        items: [
            {
                q: "What pricing plans are available?",
                a: "Starter, Growth, and Enterprise plans depending on your needs."
            },
            {
                q: "Can I cancel anytime?",
                a: "Yes. You can cancel from your dashboard."
            },
            {
                q: "Do you offer annual discounts?",
                a: "Yes, annual subscriptions include discounts."
            }
        ]
    }
];

export default function HelpCenterPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [search, setSearch] = useState("");

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <main className="min-h-screen bg-neutral-50 text-black">
            <div className="max-w-7xl mx-auto px-6 py-16">

                {/* Header */}
                <div className="mb-12">
                    <span className="px-4 py-1 text-sm bg-gray-200 rounded-full text-orange-500 font-semibold">
                        Knowledge Base
                    </span>

                    <h1 className="mt-6 text-5xl md:text-6xl font-extrabold leading-tight">
                        How can <span className="text-orange-500">we help?</span>
                    </h1>

                    <p className="mt-4 text-gray-600 max-w-xl text-lg">
                        You're not just using a tool. You're operating on ShoutlyAI —
                        the AI Growth OS for fast-growing brands.
                    </p>
                </div>

                {/* Search */}
                <div className="mb-10 flex gap-3">
                    <input
                        className="flex-1 px-5 py-3 rounded-full border focus:outline-none focus:ring-2 focus:ring-orange-400"
                        placeholder="Search help articles..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button className="px-6 py-3 rounded-full bg-black text-white hover:bg-orange-500 transition">
                        Search
                    </button>
                </div>

                {/* FAQ Container */}
                <div className="bg-white rounded-3xl shadow-sm border p-8 space-y-10">

                    {faqData.map((category, catIndex) => (
                        <div key={catIndex}>
                            <h2 className="text-2xl font-bold mb-6">
                                {catIndex + 1}. {category.category}
                            </h2>

                            <div className="space-y-4">
                                {category.items
                                    .filter(
                                        (item) =>
                                            item.q.toLowerCase().includes(search.toLowerCase()) ||
                                            item.a.toLowerCase().includes(search.toLowerCase())
                                    )
                                    .map((item, index) => {
                                        const id = `${catIndex}-${index}`;
                                        const isOpen = openIndex === Number(id);

                                        return (
                                            <div
                                                key={id}
                                                className="border-b pb-4 cursor-pointer"
                                                onClick={() => toggle(Number(id))}
                                            >
                                                <div className="flex justify-between items-center">
                                                    <h3 className="font-semibold text-lg">
                                                        {item.q}
                                                    </h3>
                                                    <span className="text-orange-500 text-xl">
                                                        {isOpen ? "−" : "+"}
                                                    </span>
                                                </div>

                                                {isOpen && (
                                                    <p className="mt-3 text-gray-600 leading-relaxed">
                                                        {item.a}
                                                    </p>
                                                )}
                                            </div>
                                        );
                                    })}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Enterprise Section */}
                <div className="mt-16 bg-black text-white rounded-3xl p-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-lg">
                        <span className="text-orange-400 font-semibold">
                            Operating at scale?
                        </span>{" "}
                        ShoutlyAI Enterprise supports large teams and advanced AI workflows.
                    </p>

                    <a
                        href="mailto:sales@shoutlyai.com"
                        className="bg-orange-500 px-6 py-3 rounded-full font-semibold hover:bg-orange-400 transition"
                    >
                        Talk to Enterprise
                    </a>
                </div>

                {/* CTA */}
                <div className="mt-20 text-center bg-white border rounded-3xl p-12">
                    <h3 className="text-3xl font-bold">
                        Still have <span className="text-orange-500">questions?</span>
                    </h3>

                    <p className="text-gray-600 mt-4 max-w-xl mx-auto">
                        Our team responds quickly. Whether you're a startup or enterprise.
                    </p>

                    <div className="mt-6 flex flex-wrap justify-center gap-4">
                        <a
                            href="mailto:sales@shoutlyai.com"
                            className="px-6 py-3 rounded-full bg-black text-white hover:bg-orange-500"
                        >
                            sales@shoutlyai.com
                        </a>

                        <a
                            href="mailto:support@shoutlyai.com"
                            className="px-6 py-3 rounded-full border hover:border-orange-500"
                        >
                            support@shoutlyai.com
                        </a>
                    </div>
                </div>

                {/* Footer */}
                <p className="text-center text-gray-400 mt-12 text-sm">
                    ShoutlyAI — AI Growth OS for modern brands.
                </p>
            </div>
        </main>
    );
}