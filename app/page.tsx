import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  BriefcaseBusiness,
  ChevronRight,
  CreditCard,
  Database,
  GitBranch,
  MessagesSquare,
  Rocket,
  Sparkles,
  TrendingUp,
  Users,
  Wand2
} from "lucide-react";

const statHighlights = [
  { label: "Product teams active", value: "24.8k" },
  { label: "AI workflows shipped", value: "1.4M" },
  { label: "Operating revenue tracked", value: "$4.2M" }
];

const featureCards = [
  {
    icon: BrainCircuit,
    title: "AI workflow OS",
    text: "Turn research, planning, and execution into a single, organized operating system for your team."
  },
  {
    icon: Database,
    title: "Signal graph",
    text: "Connect customer feedback, product ideas, release data, and community momentum in one clear graph."
  },
  {
    icon: Users,
    title: "Creator network",
    text: "Bring community discovery, product validation, and launch conversations into one shared layer."
  },
  {
    icon: CreditCard,
    title: "Revenue engine",
    text: "Design pricing, activate subscriptions, and align growth loops around the metrics that matter."
  }
];

const networkFeed = [
  { tag: "Launch", title: "Product teams are standardizing AI launch planning", meta: "22 min ago • 1.2k reactions" },
  { tag: "Research", title: "A clearer pattern is emerging around AI onboarding loops", meta: "53 min ago • 842 reactions" },
  { tag: "Growth", title: "Creator SaaS teams are turning community feedback into roadmap decisions", meta: "1 hr ago • 2.1k reactions" },
  { tag: "Build", title: "Signal-driven product teams are shipping faster with less churn", meta: "2 hrs ago • 516 reactions" }
];

const graphNodes = ["Ideas", "Agents", "Signals", "Users", "Products", "Revenue", "Launches", "Feedback"];

export default function HomePage() {
  return (
    <main className="page-shell">
      <div className="bg-orb orb-one" />
      <div className="bg-orb orb-two" />
      <div className="bg-orb orb-three" />

      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow">
            <Sparkles size={14} />
            AI-native operating system
          </div>

          <h1>
            Turn product thinking into a <span>faster shipping engine</span>.
          </h1>

          <p className="subtitle">
            LITHUB brings product strategy, community intelligence, launch workflows, and AI execution into one system built for modern teams.
          </p>

          <div className="cta-row">
            <Link href="/dashboard" className="primary-btn large-btn">
              Open workspace <ArrowRight size={18} />
            </Link>
            <Link href="/community" className="ghost-btn large-btn">
              Explore signals
            </Link>
          </div>

          <div className="mini-stats">
            {statHighlights.map((stat) => (
              <div key={stat.label} className="mini-stat">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-panel">
          <div className="panel-header">
            <div className="live-pill">
              <span className="dot" />
              Live product loop
            </div>
            <button className="chip">Auto-route</button>
          </div>

          <div className="workspace-card">
            <div className="workspace-top">
              <div className="task">
                <GitBranch size={16} />
                Launch readiness sync
              </div>
              <div className="status good">Healthy</div>
            </div>

            <div className="agent-strip">
              <div className="agent-item">
                <Wand2 size={14} />
                Strategy AI
              </div>
              <div className="agent-item">
                <MessagesSquare size={14} />
                Community AI
              </div>
              <div className="agent-item">
                <Rocket size={14} />
                Growth AI
              </div>
            </div>

            <div className="graph-box">
              {graphNodes.map((node, index) => {
                const positions = [
                  { x: -120, y: -60 },
                  { x: 110, y: -50 },
                  { x: -150, y: 70 },
                  { x: 130, y: 75 },
                  { x: 0, y: -110 },
                  { x: 0, y: 110 },
                  { x: -190, y: 0 },
                  { x: 200, y: 0 }
                ];

                return (
                  <span
                    key={node}
                    className="node"
                    style={{ transform: `translate(-50%, -50%) translate(${positions[index].x}px, ${positions[index].y}px)` }}
                  >
                    {node}
                  </span>
                );
              })}
            </div>

            <div className="progress-row">
              <div className="metric-label">Launch confidence</div>
              <div className="metric-score">92%</div>
            </div>
            <div className="progress">
              <span style={{ width: "92%" }} />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="section">
        <div className="section-header">
          <span className="section-kicker">Built for the next wave of teams</span>
          <h2>Every critical product layer, unified.</h2>
        </div>

        <div className="feature-grid">
          {featureCards.map((feature) => {
            const Icon = feature.icon;
            return (
              <article key={feature.title} className="feature-card">
                <div className="feature-icon">
                  <Icon size={20} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
                <Link href="/dashboard">
                  Learn more <ChevronRight size={16} />
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <section id="network" className="network-section">
        <div className="network-copy">
          <span className="section-kicker">Live network</span>
          <h2>See what the market is validating before you ship.</h2>
          <p>
            LITHUB turns community discussions, launch conversations, and customer feedback into product signals that help your team move with clarity.
          </p>
          <ul>
            <li><BriefcaseBusiness size={16} /> Product signals and roadmap clarity</li>
            <li><BarChart3 size={16} /> Signal monitoring across product and community</li>
            <li><TrendingUp size={16} /> Faster iteration cycles and stronger launch outcomes</li>
          </ul>
        </div>

        <div className="feed-panel">
          {networkFeed.map((entry) => (
            <div key={entry.title} className="feed-item">
              <span className="tag">{entry.tag}</span>
              <h4>{entry.title}</h4>
              <small>{entry.meta}</small>
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" className="pricing-section">
        <div className="section-header center">
          <span className="section-kicker">Simple pricing</span>
          <h2>Choose the setup that matches your operating stage.</h2>
        </div>

        <div className="price-grid">
          <div className="price-card">
            <h3>Starter</h3>
            <div className="price">$19<span>/mo</span></div>
            <ul>
              <li>AI workspace</li>
              <li>One signal graph</li>
              <li>Community access</li>
            </ul>
            <Link href="/pricing" className="ghost-btn full-width-btn">
              Try free
            </Link>
          </div>

          <div className="price-card featured">
            <div className="badge">Most popular</div>
            <h3>Growth</h3>
            <div className="price">$79<span>/mo</span></div>
            <ul>
              <li>Unlimited AI workflows</li>
              <li>Connected product loops</li>
              <li>Stripe-ready billing</li>
            </ul>
            <Link href="/pricing" className="primary-btn full-width-btn">
              Start scaling
            </Link>
          </div>

          <div className="price-card">
            <h3>Enterprise</h3>
            <div className="price">Custom</div>
            <ul>
              <li>Private deployment</li>
              <li>Role-based security</li>
              <li>Advanced integrations</li>
            </ul>
            <Link href="/pricing" className="ghost-btn full-width-btn">
              Book a demo
            </Link>
          </div>
        </div>
      </section>

      <section id="launch" className="cta-section">
        <div className="cta-box">
          <div>
            <span className="section-kicker">Ready to launch</span>
            <h2>Build the next operating layer for your product org.</h2>
          </div>
          <Link href="/dashboard" className="primary-btn large-btn">
            Build on LITHUB
          </Link>
        </div>
      </section>
    </main>
  );
}
