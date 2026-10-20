import Link from "next/link";
import {
  Bell,
  Bot,
  Database,
  FolderKanban,
  Layers3,
  Search,
  Sparkles,
  TrendingUp,
  Users
} from "lucide-react";

const workspaceCards = [
  { title: "Launch pipeline", detail: "93% ready", accent: "blue" },
  { title: "Signal tracker", detail: "184 new signals", accent: "green" },
  { title: "Revenue loop", detail: "$4.2k MRR", accent: "orange" }
];

const workflowSuggestions = [
  "Summarize the strongest product opportunities from the community signal graph",
  "Draft the next launch brief for the AI workflow expansion",
  "Compare product demand by segment and identify the highest-converting messaging"
];

const recentActions = [
  { name: "Growth audit", status: "Complete", time: "2m ago" },
  { name: "Community pulse", status: "Running", time: "7m ago" },
  { name: "Launch brief", status: "Queued", time: "15m ago" }
];

export default function DashboardPage() {
  return (
    <main className="dashboard-shell">
      <section className="dashboard-hero panel-card">
        <div>
          <span className="section-kicker">Workspace overview</span>
          <h1>Run product operations with real signal.</h1>
        </div>

        <div className="top-actions">
          <button className="ghost-btn small-btn">
            <Search size={16} /> Search
          </button>
          <button className="ghost-btn small-btn icon-only" aria-label="Notifications">
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
            <span>Design the next release plan and identify the strongest conversion opportunities across onboarding, retention, and community demand.</span>
          </div>

          <div className="suggestions-list">
            {workflowSuggestions.map((item) => (
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
              <p className="mini-label">Execution flow</p>
              <h3>Current operating loop</h3>
            </div>
            <Link href="/community" className="ghost-btn small-btn">
              View signals
            </Link>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <span className="timeline-dot green" />
              <div>
                <strong>Research</strong>
                <p>Customer and community demand are mapped and prioritized.</p>
              </div>
            </div>
            <div className="timeline-item">
              <span className="timeline-dot blue" />
              <div>
                <strong>Prototype</strong>
                <p>Messaging, onboarding, and conversion flows are under review.</p>
              </div>
            </div>
            <div className="timeline-item">
              <span className="timeline-dot orange" />
              <div>
                <strong>Ship</strong>
                <p>Launch checklist is ready for the next release window.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="panel-card">
          <div className="panel-header-row">
            <div>
              <p className="mini-label">Recent actions</p>
              <h3>Workflow history</h3>
            </div>
          </div>

          <div className="run-list">
            {recentActions.map((run) => (
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
            <span>Product insight</span>
          </div>
          <strong>Creator workflows are the strongest wedge.</strong>
          <p>Demand is rising fastest in AI-assisted product ideation, launch sequencing, and workflow clarity.</p>
        </div>

        <div className="panel-card info-card">
          <div className="info-header">
            <TrendingUp size={18} />
            <span>Growth signal</span>
          </div>
          <strong>Activation is climbing week over week.</strong>
          <p>Teams using clear AI guidance and aligned product loops are seeing stronger retention and faster adoption.</p>
        </div>

        <div className="panel-card info-card">
          <div className="info-header">
            <Database size={18} />
            <span>Graph health</span>
          </div>
          <strong>Signal quality is holding steady.</strong>
          <p>Topic clustering, feedback routing, and product insight mapping continue to improve decision quality.</p>
        </div>
      </section>
    </main>
  );
}
