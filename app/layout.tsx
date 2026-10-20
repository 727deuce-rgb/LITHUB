import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LITHUB",
  description: "Hybrid AI workspace and community platform for builders, creators, and operators."
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

          <nav className="nav">
            <Link href="/">Home</Link>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/community">Community</Link>
            <Link href="/pricing">Pricing</Link>
          </nav>

          <div className="nav-actions">
            <Link href="/community" className="ghost-btn small-btn">
              Sign in
            </Link>
            <Link href="/dashboard" className="primary-btn small-btn">
              Start building
            </Link>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}
