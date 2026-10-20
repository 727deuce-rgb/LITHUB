import Link from "next/link";
import {
  ArrowRight,
  Flame,
  MessageSquareQuote,
  Search,
  Sparkles,
  Users,
  Vote
} from "lucide-react";

const discussionThreads = [
  {
    title: "What are the most effective AI launch loops for SaaS teams right now?",
    category: "Launching",
    replies: "2.4k replies",
    trend: "+18%"
  },
  {
    title: "Best creator monetization experiments this quarter",
    category: "Revenue",
    replies: "1.7k replies",
    trend: "+12%"
  },
  {
    title: "How are product teams using signal graphs to improve discovery?",
    category: "Research",
    replies: "980 replies",
    trend: "+9%"
  }
];

const communityLeaders = [
  "Ava — product ops",
  "Miles — workflow systems",
  "Lena — creator growth",
  "Noah — community analytics"
];

export default function CommunityPage() {
  return (
    <main className="community-shell">
      <section className="community-hero">
        <div>
          <span className="section-kicker">Community signal</span>
          <h1>See the conversations shaping what ships next.</h1>
        </div>

        <div className="search-box">
          <Search size={16} />
          <span>Search launches, creators, and product signals</span>
        </div>
      </section>

      <section className="community-grid">
        <div className="panel-card large-community-panel">
          <div className="panel-header-row">
            <div>
              <p className="mini-label">Trending discussions</p>
              <h2>What the network is paying attention to</h2>
            </div>
            <button className="primary-btn small-btn">New post</button>
          </div>

          <div className="thread-list">
            {discussionThreads.map((thread) => (
              <article key={thread.title} className="thread-item">
                <div className="thread-topline">
                  <span className="thread-tag">{thread.category}</span>
                  <span className="trend-pill">{thread.trend}</span>
                </div>

                <h3>{thread.title}</h3>

                <div className="thread-meta">
                  <div><MessageSquareQuote size={14} /> {thread.replies}</div>
                  <div><Vote size={14} /> 8,410 votes</div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside className="panel-card side-panel">
          <div className="panel-header-row">
            <div>
              <p className="mini-label">Top builders</p>
              <h3>Community leaders</h3>
            </div>
          </div>

          <ul className="leader-list">
            {communityLeaders.map((leader, index) => (
              <li key={leader}>
                <span className="leader-rank">#{index + 1}</span>
                <span>{leader}</span>
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="insights-row community-insights">
        <div className="panel-card info-card">
          <div className="info-header">
            <Flame size={18} />
            <span>Hot right now</span>
          </div>
          <strong>Creator systems + AI orchestration.</strong>
          <p>Builders are pairing community discovery with AI-driven product experiments and more direct monetization loops.</p>
        </div>

        <div className="panel-card info-card">
          <div className="info-header">
            <Users size={18} />
            <span>What teams need</span>
          </div>
          <strong>Better trust and actionable feedback.</strong>
          <p>Members are asking for clearer product signals, more transparent launch reasoning, and higher-quality validation loops.</p>
        </div>

        <div className="panel-card info-card">
          <div className="info-header">
            <Sparkles size={18} />
            <span>Opportunity</span>
          </div>
          <strong>From discovery to monetization.</strong>
          <p>The biggest path is turning community insight into clearer decisions, stronger product positioning, and conversion-ready systems.</p>
        </div>
      </section>

      <section className="cta-box cta-community">
        <div>
          <span className="section-kicker">Join the loop</span>
          <h2>Build in public. Learn from signal.</h2>
        </div>
        <Link href="/dashboard" className="primary-btn large-btn">
          Open workspace <ArrowRight size={18} />
        </Link>
      </section>
    </main>
  );
}
