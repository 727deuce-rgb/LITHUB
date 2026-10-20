import Link from "next/link";
import {
  Activity,
  ArrowUpRight,
  Bell,
  Bot,
  BriefcaseBusiness,
  CheckCircle2,
  CircleDashed,
  Database,
  FolderKanban,
  Layers3,
  MessageSquareText,
  Search,
  Sparkles,
  TrendingUp
} from "lucide-react";

const workspaceCards = [
  { title: "Launch pipeline", detail: "93% ready", accent: "blue" },
  { title: "Community loop", detail: "184 new insights", accent: "green" },
  { title: "Monetization stack", detail: "$4.2k MRR", accent: "orange" }
];

const recentRuns = [
  { name: "Growth audit", status: "Complete", time: "2m ago" },
  { name: "Community pulse", status: "Running", time: "7m ago" },
  { name: "Product brief", status: "Queued", time: "15m ago" }
];

const suggestions = [
  "Create a launch brief for the next product drop",
  "Summarize Reddit sentiment across the builder community",
  "Identify the strongest monetization opportunities this week"
];

export default function DashboardPage() {
  return (
    <main className="dashboard-shell">
      <section className="dashboard-hero panel-card">
        <div>
          <span className="section-kicker">Workspace overview</span>
          <h1>Build with a smarter operating layer.</h1>
        </div>

        <div className="top-actions">
          <button className="ghost-btn small-btn">
            <Search size={16} /> Search
          </button>
          <button className="ghost-btn small-btn icon-only">
            <Bell size={16} />
          </button>
        </div>
      </section>

      <section className="dashboard-grid">
        <div className="panel-card wide-panel">
          <div className="panel-header-row">
            <div>
              <p className="mini-label">AI command center</p>
              <h2>What should we build next?</h2>
            </div>
            <button className="primary-btn small-btn">Run workflow</button>
          </div>

          <div className="prompt-box">
            <Bot size={18} />
            <span>Design a launch plan for a new AI workspace feature targeting creators and product teams.</span>
          </div>

          <div className="suggestions-list">
            {suggestions.map((item) => (
              <div key={item} className="suggestion-row">
                <Sparkles size={16} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="stack-panel">
          {workspaceCards.map((card) => (
            <div key={card.title} className={`mini-panel ${card.accent}`}>
              <div className="mini-panel-head">
                <span className="mini-dot" />
                <span>{card.title}</span>
              </div>
              <strong>{card.detail}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="two-column-layout">
        <div className="panel-card">
          <div className="panel-header-row">
            <div>
              <p className="mini-label">Workflow map</p>
              <h3>Current build loop</h3>
            </div>
            <Link href="/community" className="ghost-btn small-btn">
              View network
            </Link>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <span className="timeline-dot green" />
              <div>
                <strong>Research</strong>
                <p>Audience, use cases, and demand map complete.</p>
              </div>
            </div>
            <div className="timeline-item">
              <span className="timeline-dot blue" />
              <div>
                <strong>Prototype</strong>
                <p>Messaging and onboarding flows in review.</p>
              </div>
            </div>
            <div className="timeline-item">
              <span className="timeline-dot orange" />
              <div>
                <strong>Ship</strong>
                <p>Launch checklist is ready for the next release.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="panel-card">
          <div className="panel-header-row">
            <div>
              <p className="mini-label">Recent actions</p>
              <h3>AI runs</h3>
            </div>
          </div>

          <div className="run-list">
            {recentRuns.map((run) => (
              <div key={run.name} className="run-item">
                <div className="run-icon">
                  <FolderKanban size={16} />
                </div>
                <div className="run-copy">
                  <strong>{run.name}</strong>
                  <span>{run.time}</span>
                </div>
                <span className={`status-tag ${run.status.toLowerCase()}`}>{run.status}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="insights-row">
        <div className="panel-card info-card">
          <div className="info-header">
            <Layers3 size={18} />
            <span>Product insights</span>
          </div>
          <strong>Creator workflows are your strongest wedge.</strong>
          <p>Demand is rising fastest in AI-assisted product ideation and launch operations.</p>
        </div>

        <div className="panel-card info-card">
          <div className="info-header">
            <TrendingUp size={18} />
            <span>Growth signal</span>
          </div>
          <strong>Activation improving week over week.</strong>
          <p>Retention is highest in creator teams using collaborative AI and launch tracking tools.</p>
        </div>

        <div className="panel-card info-card">
          <div className="info-header">
            <Database size={18} />
            <span>Graph health</span>
          </div>
          <strong>Knowledge graph remains stable.</strong>
          <p>Issue clustering and idea classification are producing stronger decision quality.</p>
        </div>
      </section>
    </main>
  );
}
