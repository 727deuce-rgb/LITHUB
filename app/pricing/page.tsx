import Link from "next/link";
import { Check, CreditCard, ShieldCheck, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$19",
    description: "For solo builders and early operators.",
    perks: ["AI workspace", "Signal graph", "Community access"],
    featured: false
  },
  {
    name: "Growth",
    price: "$79",
    description: "For product teams turning signal into execution.",
    perks: ["Unlimited AI workflows", "Connected product loops", "Stripe-ready billing"],
    featured: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For larger organizations with security and scale requirements.",
    perks: ["Private deployment", "Role-based security", "Advanced integrations"],
    featured: false
  }
];

export default function PricingPage() {
  return (
    <main className="pricing-shell">
      <section className="pricing-header">
        <span className="section-kicker">Simple pricing</span>
        <h1>Pick the plan that fits how your team ships.</h1>
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
          <p>Role-based access, secure defaults, and enterprise-grade operational patterns are already built into the system.</p>
        </div>

        <div className="panel-card info-card">
          <div className="info-header">
            <CreditCard size={18} />
            <span>Stripe-ready</span>
          </div>
          <strong>Turn product momentum into revenue.</strong>
          <p>Collect subscriptions, manage plans, and connect billing systems to a product motion designed for modern SaaS teams.</p>
        </div>

        <div className="panel-card info-card">
          <div className="info-header">
            <Sparkles size={18} />
            <span>Product fit</span>
          </div>
          <strong>Built around momentum.</strong>
          <p>Pricing is designed to support early growth, launch velocity, and community-led expansion without adding friction.</p>
        </div>
      </section>
    </main>
  );
}
