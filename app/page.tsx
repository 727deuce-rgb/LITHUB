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
  Users,
  Wand2
} from "lucide-react";

const stats = [
  { label: "Builders online", value: "24.8k" },
  { label: "AI prompts shipped", value: "1.4M" },
  { label: "Revenue activated", value: "$4.2M" }
];

const features = [
  {
    icon: BrainCircuit,
    title: "AI Workspace",
    text: "Let agents plan, code, route, and execute tasks in one unified operating layer."
  },
  {
    icon: Database,
    title: "Knowledge Graph",
    text: "Turn scattered ideas, repos, and community signals into one living graph."
  },
  {
    icon: Users,
    title: "Community Engine",
    text: "Blend Reddit-style discovery with GitHub-grade collaboration and product feedback loops."
  },
  {
    icon: CreditCard,
    title: "Monetization",
    text: "Launch products, memberships, and premium workflows with Stripe-ready infrastructure."
  }
];

const feed = [
  { tag: "Launch", title: "LITHUB Graph v2 is live", meta: "22 min ago • 1.2k reactions" },
  { tag: "AI", title: "Agent workflow templates are trending", meta: "53 min ago • 842 reactions" },
  { tag: "Marketing", title: "Creator monetization stack is exploding", meta: "1 hr ago • 2.1k reactions" },
  { tag: "Build", title: "Open source builder communities are compounding", meta: "2 hrs ago • 516 reactions" }
];

const graphNodes = [
  "Ideas",
  "Agents",
  "Repos",
  "Users",
  "Products",
  "Revenue",
  "Signals",
  "Launches"
];

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
            New hybrid AI operating system
          </div>

          <h1>
            Build products, communities, and revenue in one <span>living system</span>.
          </h1>

          <p className="subtitle">
            LITHUB combines AI workflows, developer tooling, creator economics, and a real network effect into one platform for shipping smarter.
          </p>

          <div className="cta-row">
            <Link href="/dashboard" className="primary-btn large-btn">
              Launch your workspace <ArrowRight size={18} />
            </Link>
            <Link href="/community" className="ghost-btn large-btn">
              Explore the graph
            </Link>
          </div>

          <div className="mini-stats">
            {stats.map((stat) => (
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
              Live build loop
            </div>
            <button className="chip">Auto-route</button>
          </div>

          <div className="workspace-card">
            <div className="workspace-top">
              <div className="task">
                <GitBranch size={16} />
                Ship new LITHUB launch
              </div>
              <div className="status good">Healthy</div>
            </div>

            <div className="agent-strip">
              <div className="agent-item">
                <Wand2 size={14} />
                AI Strategist
              </div>
              <div className="agent-item">
                <MessagesSquare size={14} />
                Community Scout
              </div>
              <div className="agent-item">
                <Rocket size={14} />
                Growth Ops
              </div>
            </div>

            <div className="graph-box">
              {graphNodes.map((node, idx) => {
                const layout = [
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
                    style={{ left: "50%", top: "50%", transform: `translate(-50%, -50%) translate(${layout[idx].x}px, ${layout[idx].y}px)` }}
                  >
                    {node}
                  </span>
                );
              })}
            </div>

            <div className="progress-row">
              <div className="metric-label">Launch readiness</div>
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
          <span className="section-kicker">Built for builders</span>
          <h2>Everything your next great product needs.</h2>
        </div>

        <div className="feature-grid">
          {features.map((feature) => {
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
          <h2>Discover what the world is building right now.</h2>
          <p>
            Keep your pulse on launches, experiments, demand, and product signals from the communities that matter most.
          </p>
          <ul>
            <li><BriefcaseBusiness size={16} /> Product signals and launch tracking</li>
            <li><BarChart3 size={16} /> Community insight and trend detection</li>
            <li><Rocket size={16} /> Faster feedback loops for startup teams</li>
          </ul>
        </div>

        <div className="feed-panel">
          {feed.map((item) => (
            <div key={item.title} className="feed-item">
              <span className="tag">{item.tag}</span>
              <h4>{item.title}</h4>
              <small>{item.meta}</small>
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" className="pricing-section">
        <div className="section-header center">
          <span className="section-kicker">Pricing</span>
          <h2>Simple plans for solo builders and teams.</h2>
        </div>

        <div className="price-grid">
          <div className="price-card">
            <h3>Starter</h3>
            <div className="price">$19<span>/mo</span></div>
            <ul>
              <li>AI workspace</li>
              <li>1 project graph</li>
              <li>Community access</li>
            </ul>
            <Link href="/pricing" className="ghost-btn full-width-btn">
              Try free
            </Link>
          </div>

          <div className="price-card featured">
            <div className="badge">Most popular</div>
            <h3>Scale</h3>
            <div className="price">$79<span>/mo</span></div>
            <ul>
              <li>Unlimited AI agents</li>
              <li>Multi-project graph</li>
              <li>Stripe billing tools</li>
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
              <li>Team permissions</li>
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
            <h2>Turn your idea into a product loop.</h2>
          </div>
          <Link href="/dashboard" className="primary-btn large-btn">
            Build on LITHUB
          </Link>
        </div>
      </section>
    </main>
  );
}
