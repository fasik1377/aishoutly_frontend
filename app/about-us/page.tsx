"use client";
import Head from "next/head";

export default function AboutUSPage() {
    return (
        <div id="about-us">
            <>
                <Head>
                    <title>ShoutlyAI — The Content Revolution</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,400;14..32,500;14..32,600;14..32,700;14..32,800;14..32,900&display=swap"
                        rel="stylesheet"
                    />
                </Head>

                {/* Animated background blobs */}
                <div className="blob" />
                <div className="blob blob-2" />

                <div className="page-container">
                    {/* HERO */}
                    <div className="section hero-bg" style={{ padding: "4rem" }}>
                        <span className="pill">
                            🚀 LAUNCHED 2026 — 100 EARLY USERS, 3,000+ POSTS GENERATED
                        </span>

                        <h1 className="headline-xl">
                            WE DIDN'T <br />
                            BUILD AN <span className="gradient-text">AGENCY.</span>
                            <br />
                            <span className="gradient-text-purple">WE KILLED IT.</span>
                        </h1>

                        <p className="subhead hero-sub">
                            One prompt = <span className="gradient-text strong">365 days</span>{" "}
                            of content.
                            <br />
                            No designers. No strategists.{" "}
                            <span className="gradient-text-purple">No burnout.</span>
                        </p>

                        <div className="flex-row">
                            <a href="#" className="cta-button">
                                🔥 JOIN THE MOVEMENT
                            </a>
                            <a href="#" className="cta-secondary">
                                ▶️ WATCH 2-MIN SETUP
                            </a>
                        </div>

                        <div className="badges">
                            <span className="badge-light">⚡ 100 early adopters</span>
                            <span className="badge-light">📸 3,000+ reels generated</span>
                            <span className="badge-light">🔥 0 agencies hired</span>
                        </div>

                        <div className="accent-bar" />
                    </div>

                    {/* PROBLEM */}
                    <div className="section problem">
                        <span className="pill">⚠️ THE PROBLEM</span>
                        <h2 className="headline-lg">
                            YOU'RE NOT A <br />
                            <span className="gradient-text-purple">CONTENT FACTORY.</span>
                        </h2>

                        <div className="rhythm-text">
                            <p>
                                Hiring designers? <strong>💸 Expensive.</strong>
                            </p>
                            <p>
                                Freelancers? <strong>🎭 Inconsistent.</strong>
                            </p>
                            <p>
                                Posting every day? <strong>😩 Exhausting.</strong>
                            </p>
                            <p className="big-line">
                                Creative fatigue <span className="gradient-text">is killing</span>{" "}
                                your brand.
                            </p>
                        </div>

                        <div className="card-grid three">
                            <div className="stat-card">💸 $5K+ / month wasted</div>
                            <div className="stat-card">⏰ 15 hours / week lost</div>
                            <div className="stat-card">📉 80% posts get zero engagement</div>
                        </div>
                    </div>

                    {/* SHIFT */}
                    <div className="section center shift">
                        <span className="pill">🔄 THE SHIFT</span>

                        <h2 className="headline-lg">
                            FROM <span className="strike">365 DAYS</span>
                            <br />
                            TO <span className="gradient-text big">ONE PROMPT.</span>
                        </h2>

                        <div className="badges center">
                            <span className="badge-light orange">🗓️ 365 posts</span>
                            <span className="badge-light purple">🎬 52 reels</span>
                            <span className="badge-light blue">🎨 100+ creatives</span>
                            <span className="badge-light green">📝 1,000+ captions</span>
                        </div>

                        <div className="big-center-text">
                            <span className="gradient-text">ALL FROM</span>{" "}
                            <span className="gradient-text-purple">ONE</span>{" "}
                            <span className="gradient-text-blue">PROMPT.</span>
                        </div>
                    </div>

                    {/* SYSTEM */}
                    <div className="section">
                        <span className="pill">⚙️ THE SYSTEM</span>
                        <h2 className="headline-md">
                            <span className="gradient-text">ZERO TO 365</span> IN 60 SECONDS.
                        </h2>

                        <div className="card-grid">
                            <div className="stat-card">
                                <div className="step">1️⃣</div>
                                <h3>YOUR PROMPT</h3>
                                <p>"I'm a realtor in Austin. Modern luxury. Funny tone."</p>
                            </div>

                            <div className="stat-card">
                                <div className="step">⚡</div>
                                <h3>AI ENGINE</h3>
                                <p>Learns your brand. Your voice. Your festivals.</p>
                            </div>

                            <div className="stat-card">
                                <div className="step">📦</div>
                                <h3>FULL YEAR</h3>
                                <p>365 posts. Videos. Captions. Strategy.</p>
                            </div>

                            <div className="stat-card">
                                <div className="step">🤖</div>
                                <h3>AUTO-SCHEDULE</h3>
                                <p>Done. For real. Go live your life.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: "Inter", sans-serif;
          background: linear-gradient(135deg, #faf9f6, #f5f0ea);
          color: #1f2937;
          overflow-x: hidden;
        }

        .page-container {
          max-width: 1400px;
          margin: auto;
          padding: 2rem;
        }

        .section {
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(10px);
          border-radius: 48px;
          padding: 4rem;
          margin: 3rem 0;
        }

        .headline-xl {
          font-size: clamp(3rem, 8vw, 6rem);
          font-weight: 900;
          line-height: 1;
          margin-bottom: 1.5rem;
        }

        .headline-lg {
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 800;
          margin-bottom: 1.5rem;
        }

        .headline-md {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .gradient-text {
          background: linear-gradient(135deg, #f97316, #fb923c, #fbbf24);
          -webkit-background-clip: text;
          color: transparent;
        }

        .gradient-text-purple {
          background: linear-gradient(135deg, #8b5cf6, #d946ef);
          -webkit-background-clip: text;
          color: transparent;
        }

        .gradient-text-blue {
          background: linear-gradient(135deg, #3b82f6, #06b6d4);
          -webkit-background-clip: text;
          color: transparent;
        }

        .pill {
          display: inline-block;
          padding: 0.6rem 1.4rem;
          border-radius: 999px;
          background: #fff;
          color: #f97316;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .cta-button {
          padding: 1rem 2rem;
          border-radius: 999px;
          background: linear-gradient(135deg, #f97316, #fb923c);
          color: white;
          text-decoration: none;
          font-weight: 700;
        }

        .cta-secondary {
          margin-left: 1rem;
          padding: 1rem 2rem;
          border-radius: 999px;
          border: 2px solid #f97316;
          text-decoration: none;
        }

        .card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .stat-card {
          padding: 2rem;
          border-radius: 24px;
          background: white;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
        }

        .blob {
          position: fixed;
          width: 500px;
          height: 500px;
          background: linear-gradient(135deg, #f97316, #fb923c);
          filter: blur(100px);
          opacity: 0.15;
          border-radius: 50%;
          z-index: -1;
        }

        .blob-2 {
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #3b82f6, #a855f7);
        }

        .flex-row {
          display: flex;
          gap: 1rem;
          margin: 2rem 0;
          flex-wrap: wrap;
        }

        .badges {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          margin-top: 2rem;
        }

        .badge-light {
          padding: 0.5rem 1rem;
          border-radius: 999px;
          background: #fff;
          border: 1px solid #f97316;
        }

        .center {
          text-align: center;
          justify-content: center;
        }

        .big-center-text {
          font-size: 3rem;
          font-weight: 900;
          margin-top: 2rem;
        }

        .strike {
          text-decoration: line-through;
          color: #9ca3af;
        }

        .big {
          font-size: 1.2em;
        }
      `}</style>
            </>
        </div>
    );
}

