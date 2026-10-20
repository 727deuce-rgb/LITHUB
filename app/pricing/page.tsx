import Link from "next/link";
import { Check, CreditCard, ShieldCheck, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$19",
    description: "For solo creators and confident explorers.",
    perks: ["AI workspace", "One knowledge graph", "Community access"],
    featured: false
  },
  {
    name: "Scale",
    price: "$79",
    description: "For teams shipping and learning fast.",
    perks: ["Unlimited AI agents", "Multi-project workflows", "Stripe billing tools"],
    featured: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For larger organizations with compliance needs.",
    perks: ["Private deployment", "SAML / SSO access", "Advanced integrations"],
    featured: false
  }
];

export default function PricingPage() {
  return (
    <main className="pricing-shell">
      <section className="pricing-header">
        <span className="section-kicker">Simple pricing</span>
        <h1>Choose the plan that fits your build stage.</h1>
      </section>

      <section className="price-grid page-pricing-grid">
        {plans.map((plan) => (
          <article key={plan.name} className={`price-card ${plan.featured ? "featured" : ""}`}>
            {plan.featured && <div className="badge">Most popular</div>}
            <h3>{plan.name}</h3>
            <div className="price">{plan.price}<span>{plan.price === "Custom" ? "" : "/mo"}</span></div>
            <p className="plan-description">{plan.description}</p>

            <ul>
              {plan.perks.map((perk) => (
                <li key={perk}><Check size={14} /> {perk}</li>
              ))}
            </ul>

            <Link href="/dashboard" className={plan.featured ? "primary-btn full-width-btn" : "ghost-btn full-width-btn"}>
              {plan.featured ? "Start scaling" : "Get started"}
            </Link>
          </article>
        ))}
      </section>

      <section className="pricing-extra">
        <div className="panel-card info-card">
          <div className="info-header">
            <ShieldCheck size={18} />
            <span>Built to scale</span>
          </div>
          <strong>Secure from day one.</strong>
          <p>Role-based access, secure app infrastructure, and enterprise-safe defaults are built into the workflow.</p>
        </div>

        <div className="panel-card info-card">
          <div className="info-header">
            <CreditCard size={18} />
            <span>Stripe-ready</span>
          </div>
          <strong>Launch subscription revenue fast.</strong>
          <p>Collect payments, manage plans, and route customers with a clean monetization system designed for modern SaaS teams.</p>
        </div>

        <div className="panel-card info-card">
          <div className="info-header">
            <Sparkles size={18} />
            <span>Product fit</span>
          </div>
          <strong>Built around momentum.</strong>
          <p>The pricing model is designed to support early growth, creator communities, and product-led expansion.</p>
        </div>
      </section>
    </main>
  );
}
