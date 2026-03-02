// pages/affiliate.js
"use client";
import Head from "next/head";

const stats = [
    { number: "100+", label: "Brands" },
    { number: "15+", label: "Industries" },
    { number: "30%", label: "Recurring Commission" },
    { number: "Lifetime", label: "Revenue Share" },
];

const whyPartner = [
    {
        icon: "🚀",
        title: "Category-Defining Product",
        desc: "One prompt = 365 days of social content. No other tool does this. You're selling the future.",
    },
    {
        icon: "💰",
        title: "Recurring Revenue",
        desc: "Not one-time commissions. You earn every month as long as your referrals stay.",
    },
    {
        icon: "🌍",
        title: "Global Demand",
        desc: "Businesses everywhere need consistent social media. You tap into a global market.",
    },
];

const commissionTiers = [
    {
        tier: "SILVER",
        icon: "🥈",
        rate: "20%",
        desc: "Recurring commission · Lifetime",
        features: ["20% on all referrals", "Standard tracking dashboard", "Marketing assets access", "Email support"],
    },
    {
        tier: "GOLD",
        icon: "🥇",
        rate: "30%",
        desc: "Recurring commission · Lifetime",
        features: ["30% on all referrals", "Real-time tracking dashboard", "Full marketing kit + swipe files", "Priority support", "Early feature access"],
        popular: true,
    },
    {
        tier: "PLATINUM",
        icon: "💎",
        rate: "35%",
        desc: "Recurring commission · Lifetime",
        features: ["35% on all referrals", "Advanced analytics dashboard", "Co-marketing opportunities", "Dedicated partner manager", "Beta access + VIP support"],
    },
];

const whoJoin = [
    { icon: "📈", title: "Marketing Consultants", desc: "Add ShoutlyAI to your client stack. Solve their content problem forever." },
    { icon: "📱", title: "Social Media Managers", desc: "Scale beyond 10 clients. Automate content creation." },
    { icon: "🏢", title: "Agencies", desc: "Replace manual content work. Increase margins." },
    { icon: "🎥", title: "SaaS Influencers", desc: "Promote a tool your audience actually needs." },
    { icon: "🚀", title: "Startup Communities", desc: "Offer value to founders. Earn recurring revenue." },
    { icon: "💼", title: "Freelancers", desc: "Passive income while you focus on client work." },
];

export default function Affiliate() {
    return (
        <>
            <Head>
                <title>ShoutlyAI — Affiliate Program: Partner Ecosystem</title>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,400;14..32,500;14..32,600;14..32,700;14..32,800;14..32,900&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <main className="page-container">
                {/* Hero Section */}
                <section className="hero-section text-center">
                    <span className="pill">🤝 AFFILIATE PROGRAM — GLOBAL PARTNER ECOSYSTEM</span>
                    <h1 className="headline-xl">
                        GROW WITH US.<br />
                        <span className="gradient-prime">EARN FOREVER.</span>
                    </h1>
                    <p className="subhead">
                        ShoutlyAI is AI Marketing Infrastructure. We automate 365 days of social media for brands worldwide.
                        Partners don't just refer — they build recurring revenue streams alongside a category-defining platform.
                    </p>
                </section>

                {/* Stats Strip */}
                <section className="stat-strip">
                    {stats.map((item, idx) => (
                        <div key={idx} className="stat-item">
                            <div className="stat-number">{item.number}</div>
                            <div className="stat-label">{item.label}</div>
                        </div>
                    ))}
                </section>

                {/* Why Partner */}
                <section className="section">
                    <span className="pill">🎯 WHY PARTNER WITH SHOUTLYAI</span>
                    <h2 className="headline-lg">
                        HIGH-DEMAND. HIGH-VALUE. <span className="gradient-energy">HIGH RETENTION.</span>
                    </h2>
                    <div className="card-grid">
                        {whyPartner.map((item, idx) => (
                            <div key={idx} className="info-card hover-card">
                                <div className="info-icon">{item.icon}</div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Commission Structure */}
                <section className="section">
                    <span className="pill">💸 COMMISSION STRUCTURE</span>
                    <h2 className="headline-lg">
                        EARN 30% <span className="gradient-prime">RECURRING.</span> LIFETIME.
                    </h2>
                    <div className="commission-grid">
                        {commissionTiers.map((tier, idx) => (
                            <div key={idx} className={`commission-card ${tier.popular ? "popular" : "hover-card"}`}>
                                {tier.popular && <div className="popular-badge">🔥 MOST POPULAR</div>}
                                <div className="commission-icon">{tier.icon}</div>
                                <div className="commission-tier">{tier.tier}</div>
                                <div className="commission-rate">{tier.rate}</div>
                                <div className="commission-desc">{tier.desc}</div>
                                <ul className="commission-features">
                                    {tier.features.map((feat, fidx) => (
                                        <li key={fidx}>{feat}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Who Should Join */}
                <section className="section">
                    <span className="pill">🎯 WHO SHOULD JOIN</span>
                    <h2 className="headline-lg">BUILDERS, AGENCIES, <span className="gradient-energy">CREATORS.</span></h2>
                    <div className="who-grid">
                        {whoJoin.map((person, idx) => (
                            <div key={idx} className="who-card hover-card">
                                <div className="who-icon">{person.icon}</div>
                                <h3 className="who-title">{person.title}</h3>
                                <p className="who-desc">{person.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Call-to-Action */}
                <section className="cta-section">
                    <h2>BECOME A <span className="gradient-prime">GROWTH PARTNER.</span></h2>
                    <p>Join 100+ partners building recurring revenue with ShoutlyAI. We're building a global ecosystem. Be part of it.</p>
                    <button className="cta-button">🚀 APPLY TO BECOME A PARTNER →</button>
                    <p className="cta-note">Applications reviewed within 48 hours. No spam. Just growth.</p>
                </section>
            </main>
            <style jsx>{`
  .page-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 3rem 2rem;
    font-family: 'Inter', sans-serif;
    background: #faf9f6;
    color: #000; /* Make all text black by default */
  }

  .pill {
    display: inline-block;
    padding: 0.5rem 1.5rem;
    border-radius: 60px;
    background: #f3f4f6;
    color: #f97316;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 1rem;
    letter-spacing: 0.5px;
  }

  .headline-xl {
    font-size: clamp(3rem, 8vw, 5rem);
    font-weight: 900;
    text-transform: uppercase;
    line-height: 1.1;
    margin-bottom: 1rem;
    color: #000; /* black */
  }

  .headline-lg {
    font-size: clamp(2rem, 5vw, 3rem);
    margin-bottom: 2rem;
    color: #000; /* black */
  }

  .subhead {
    font-size: 1.2rem;
    color: #000; /* changed to black */
    max-width: 700px;
    margin: 0 auto 3rem;
    line-height: 1.6;
  }

  .stat-strip {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 4rem 0;
    background: white;
    border-radius: 40px;
    padding: 2rem;
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
    color: #000; /* black */
  }

  .stat-item {
    text-align: center;
    margin: 1rem;
  }

  .stat-number {
    font-size: 2rem;
    font-weight: 800;
    color: #f97316;
  }

  .stat-label {
    color: #000; /* black */
    font-size: 0.9rem;
    text-transform: uppercase;
  }

  .card-grid, .commission-grid, .who-grid {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }

  .info-card, .commission-card, .who-card {
    background: white;
    border-radius: 28px;
    padding: 2rem;
    text-align: center;
    transition: transform 0.3s, box-shadow 0.3s;
    color: #000; /* black */
  }

  .hover-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  }

  .popular {
    border: 2px solid #f97316;
    box-shadow: 0 20px 40px rgba(249, 115, 22, 0.2);
  }

  .popular-badge {
    position: absolute;
    top: 15px;
    right: 15px;
    background: #f97316;
    color: white;
    padding: 0.3rem 1rem;
    border-radius: 60px;
    font-size: 0.8rem;
    font-weight: 700;
  }

  .commission-features li {
    list-style: none;
    padding-left: 1.5rem;
    position: relative;
    margin: 0.8rem 0;
    color: #000; /* black */
  }

  .commission-features li::before {
    content: "✓";
    position: absolute;
    left: 0;
    color: #f97316;
    font-weight: 700;
  }

  .cta-section {
    text-align: center;
    background: linear-gradient(145deg, #111111, #1f2937);
    border-radius: 60px;
    padding: 4rem 2rem;
    color: white;
    margin: 5rem 0;
  }

  .cta-button {
    padding: 1.2rem 3rem;
    border-radius: 60px;
    background: #f97316;
    border: none;
    font-weight: 700;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.2s;
    margin-top: 1rem;
  }

  .cta-button:hover {
    background: #fb923c;
    transform: scale(1.05);
  }

  .cta-note {
    margin-top: 1rem;
    font-size: 0.9rem;
    color: #fff; /* keep white for contrast */
  }

  .gradient-prime {
    background: linear-gradient(135deg, #f97316 0%, #fb923c 40%, #fbbf24 80%);
    -webkit-background-clip: text;
    color: transparent;
  }

  .gradient-energy {
    background: linear-gradient(135deg, #f97316, #dc2626, #f97316);
    -webkit-background-clip: text;
    color: transparent;
  }

  @media (max-width: 768px) {
    .subhead {
      font-size: 1rem;
    }
  }
`}</style>
        </>
    );
}