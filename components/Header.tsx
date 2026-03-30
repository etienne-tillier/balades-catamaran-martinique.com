"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { useState } from "react";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 glass">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between max-w-7xl">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <svg
            className="w-10 h-10 group-hover:scale-110 transition-transform duration-300"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="16" cy="16" r="16" fill="#0EA5B0" />
            <polygon points="16,4 26,24 6,24" fill="white" opacity="0.95" />
            <rect x="5" y="24" width="22" height="3" rx="1.5" fill="#F59E0B" />
            <rect x="6" y="26.5" width="8" height="2" rx="1" fill="#0D2B33" opacity="0.7" />
            <rect x="18" y="26.5" width="8" height="2" rx="1" fill="#0D2B33" opacity="0.7" />
          </svg>
          <div className="flex flex-col leading-tight">
            <span
              className="font-display font-bold text-foreground text-sm tracking-tight"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Balades Catamaran
            </span>
            <span
              className="text-primary text-xs font-medium tracking-widest uppercase"
              style={{ fontFamily: "var(--font-open-sans)" }}
            >
              Martinique
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {siteConfig.mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-4 py-2 rounded-full text-sm font-medium text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              {item.title}
            </Link>
          ))}
          <Link
            href="/excursions"
            className="ml-2 px-6 py-2.5 bg-primary text-white rounded-full text-sm font-semibold hover:bg-primary/85 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Réserver
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          aria-label="Menu navigation"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {mobileOpen ? (
              <>
                <line x1="4" y1="4" x2="20" y2="20" />
                <line x1="20" y1="4" x2="4" y2="20" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden glass border-t border-primary/10">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {siteConfig.mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-medium text-foreground hover:text-primary hover:bg-primary/10 transition-all"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                {item.title}
              </Link>
            ))}
            <Link
              href="/excursions"
              onClick={() => setMobileOpen(false)}
              className="mt-2 px-6 py-3 bg-primary text-white rounded-full text-sm font-semibold text-center hover:bg-primary/85 transition-all"
            >
              Réserver une excursion
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
