"use client";
import Head from "next/head";

export default function CaseStudiesPage() {
    const caseStudies = [
        {
            industry: "🏠 REAL ESTATE · TEXAS",
            title:
                "Austin Realtor Posts Daily Listings Without Lifting a Finger",
            metrics: [
                { value: "365", label: "Daily Posts" },
                { value: "64%", label: "Lead Increase" },
                { value: "15h/wk", label: "Time Saved" },
                { value: "3", label: "Platforms" },
            ],
        },
        {
            industry: "🍔 RESTAURANT · MUMBAI",
            title: "Restaurant Automates Daily Specials",
            metrics: [
                { value: "3x", label: "Daily Posts" },
                { value: "82%", label: "Engagement" },
                { value: "20h/wk", label: "Hours Saved" },
                { value: "12", label: "Festival Creatives" },
            ],
        },
        {
            industry: "💪 FITNESS · LONDON",
            title: "Fitness Coach Grows Instagram by 200%",
            metrics: [
                { value: "200%", label: "Follower Growth" },
                { value: "365", label: "Daily Posts" },
                { value: "0", label: "Daily Login" },
                { value: "3x", label: "Client Inquiries" },
            ],
        },
    ];

    const impactStats = [
        { number: "10,000+", label: "Social Posts Generated" },
        { number: "2.3M+", label: "Social Impressions" },
        { number: "100+", label: "Social Accounts" },
        { number: "15+", label: "Industries" },
        { number: "1,200+", label: "Hours Saved" },
        { number: "365", label: "Days of Content" },
    ];

    return (
        <main className="max-w-7xl mx-auto px-6 py-16">

            {/* Header */}
            <div className="text-center max-w-4xl mx-auto">
                <span className="inline-block bg-gray-100 text-orange-500 font-bold px-5 py-2 rounded-full border mb-6">
                    📱 CASE STUDIES — SOCIAL MEDIA AUTOPILOT
                </span>

                <h1 className="text-5xl md:text-7xl font-black leading-tight uppercase">
                    365 Days of
                    <br />
                    <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 text-transparent bg-clip-text">
                        Social Posts
                    </span>
                    <br />
                    One Prompt
                </h1>

                <p className="text-gray-600 mt-6 text-lg md:text-xl">
                    ShoutlyAI automates your entire social media presence — Instagram,
                    Facebook, LinkedIn, Twitter, TikTok.
                </p>
            </div>

            {/* Social Platforms */}
            <div className="flex flex-wrap justify-center gap-3 mt-10">
                {["Instagram", "Facebook", "LinkedIn", "Twitter", "TikTok"].map(
                    (platform) => (
                        <span
                            key={platform}
                            className="px-4 py-2 rounded-full bg-orange-500 text-white text-sm font-semibold"
                        >
                            {platform}
                        </span>
                    )
                )}
            </div>

            {/* Top Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14 bg-white border rounded-3xl p-8 text-center">
                <Stat number="100+" label="Social Accounts" />
                <Stat number="15+" label="Industries" />
                <Stat number="3,000+" label="Posts Generated" />
                <Stat number="47min" label="Avg Setup" />
            </div>

            {/* Case Studies */}
            <section className="mt-16 space-y-10">
                {caseStudies.map((study, index) => (
                    <div
                        key={index}
                        className="bg-white border rounded-[36px] p-10 shadow-sm hover:shadow-xl transition"
                    >
                        <span className="bg-orange-100 text-orange-600 font-semibold px-4 py-1 rounded-full text-sm">
                            {study.industry}
                        </span>

                        <h3 className="text-3xl font-bold mt-4">
                            {study.title}
                        </h3>

                        {/* Metrics */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 bg-gray-50 p-6 rounded-2xl">
                            {study.metrics.map((metric, i) => (
                                <div key={i} className="text-center">
                                    <div className="text-2xl font-bold text-orange-500">
                                        {metric.value}
                                    </div>
                                    <div className="text-sm text-gray-500 uppercase">
                                        {metric.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Takeaway */}
                        <div className="mt-6 bg-orange-50 border-l-4 border-orange-500 p-4 rounded-lg">
                            ⚡ <strong>Key Takeaway:</strong> Automated daily content
                            increased engagement and lead generation.
                        </div>
                    </div>
                ))}
            </section>

            {/* Impact Section */}
            <section className="mt-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-[50px] p-16">
                <h2 className="text-4xl font-bold mb-12">
                    Social Media{" "}
                    <span className="text-orange-500">Impact</span>
                </h2>

                <div className="grid md:grid-cols-3 gap-10">
                    {impactStats.map((item, i) => (
                        <div key={i} className="text-center">
                            <div className="text-4xl font-black text-orange-500">
                                {item.number}
                            </div>
                            <div className="mt-2 text-gray-300">
                                {item.label}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="mt-20 bg-white border rounded-[40px] p-12 text-center">
                <h2 className="text-4xl md:text-5xl font-bold">
                    Automate Your{" "}
                    <span className="bg-gradient-to-r from-orange-500 to-yellow-400 text-transparent bg-clip-text">
                        Social Media
                    </span>
                </h2>

                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                    Join 100+ brands posting daily automatically across all social
                    platforms.
                </p>

                <button className="mt-8 bg-orange-500 hover:bg-orange-400 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg transition">
                    🚀 Start Free
                </button>
            </section>

            {/* Footer */}
            <footer className="text-center text-gray-400 mt-14 text-sm">
                © 2026 ShoutlyAI · AI Social Media Autopilot
            </footer>
        </main>
    );
}

function Stat({ number, label }: any) {
    return (
        <div>
            <div className="text-3xl font-bold text-orange-500">
                {number}
            </div>
            <div className="text-gray-500 text-sm uppercase">
                {label}
            </div>
        </div>
    );
}