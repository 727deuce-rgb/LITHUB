import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LITHUB — AI workspace for product teams",
  description: "LITHUB brings workflows, product insights, and community signals together in one AI-native workspace."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="topbar">
          <div className="brand-wrap">
            <div className="brand-mark">L</div>
            <div className="brand-text">LITHUB</div>
          </div>

          <nav className="nav" aria-label="Main navigation">
            <Link href="/">Home</Link>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/community">Community</Link>
            <Link href="/pricing">Pricing</Link>
          </nav>

          <div className="nav-actions">
            <Link href="/community" className="ghost-btn small-btn">
              Log in
            </Link>
            <Link href="/dashboard" className="primary-btn small-btn">
              Start building
            </Link>
          </div>
        </header>

        {children}

        <footer className="site-footer">
          <div>
            <strong>LITHUB</strong>
            <span>AI workflow OS for product teams.</span>
          </div>
          <div className="footer-links">
            <Link href="/pricing">Pricing</Link>
            <Link href="/community">Community</Link>
            <Link href="/dashboard">Dashboard</Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
