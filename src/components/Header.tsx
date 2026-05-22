"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

function applyThemeToDocument(mode: "dark" | "light") {
  if (typeof document === "undefined") return;
  document.body.classList.remove("theme-dark", "theme-light");
  document.body.classList.add(mode === "light" ? "theme-light" : "theme-dark");
}

function ThemeIcon({ mode }: { mode: "dark" | "light" }) {
  if (mode === "dark") {
    return (
      <svg className="header-icon-svg" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v3" />
        <path d="M12 19v3" />
        <path d="m4.93 4.93 2.12 2.12" />
        <path d="m16.95 16.95 2.12 2.12" />
        <path d="M2 12h3" />
        <path d="M19 12h3" />
        <path d="m4.93 19.07 2.12-2.12" />
        <path d="m16.95 7.05 2.12-2.12" />
      </svg>
    );
  }

  return (
    <svg className="header-icon-svg" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.35 15.35A9 9 0 0 1 8.65 3.65a9 9 0 1 0 11.7 11.7Z" />
    </svg>
  );
}

export function Header() {
  const [themeMode, setThemeMode] = useState<"dark" | "light">("dark");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Always start each fresh load in dark mode.
    applyThemeToDocument("dark");
    setThemeMode("dark");
  }, []);

  const toggleThemeMode = () => {
    const nextMode = themeMode === "dark" ? "light" : "dark";
    setThemeMode(nextMode);
    applyThemeToDocument(nextMode);
  };

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.classList.toggle("mobile-menu-open", mobileMenuOpen);
    return () => document.body.classList.remove("mobile-menu-open");
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const onResize = () => {
      if (window.innerWidth > 900) setMobileMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="site-header site-header--enhanced">
      <div className="header-top">
        <div className="container header-top__inner">
          <Link className="brand-block" href="/">
            <img className="brand-logo-img" src="/revampfy-logo.jpeg" alt="Revampfy" />
            <p className="brand-tagline">Certified refurbished laptops for smart businesses.</p>
            <p className="brand-unit">A unit of PCGS Enterprises</p>
          </Link>
        </div>
      </div>

      <div className="header-tabs">
        <div className="container header-tabs__inner">
          <nav className="nav nav--tabs">
            <button
              type="button"
              className="nav__toggle"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileMenuOpen((prev) => !prev)}
            >
              <span />
              <span />
              <span />
            </button>
            <ul className="nav__links nav__links--tabs nav__links--desktop">
              <li><Link href="/" className="nav__link--active">Home</Link></li>
              <li><a href="https://store.revampfy.in/">All Categories</a></li>
              <li><a href="https://store.revampfy.in/">Collections</a></li>
              <li><Link href="/contact-us">Contact Us</Link></li>
              <li><Link href="/bulk-orders-enquiry">Bulk Orders</Link></li>
              <li className="nav__item nav__item--has-mega">
                <Link href="/policies">Company</Link>
                <div className="nav__mega">
                  <Link href="/about-us">About Us</Link>
                  <Link href="/partners">Partners</Link>
                  <Link href="/resellers">Resellers</Link>
                </div>
              </li>
            </ul>
          </nav>

          <div className="header__actions">
            <a href="https://store.revampfy.in">
              <button className="primary top-selling-btn">Store</button>
            </a>
            <button
              type="button"
              className="ghost header-theme-btn"
              aria-label="Toggle theme"
              onClick={toggleThemeMode}
              title={themeMode === "dark" ? "Switch to Light Theme" : "Switch to Dark Theme"}
            >
              <ThemeIcon mode={themeMode} />
            </button>
          </div>
        </div>
      </div>

      <div
        className={`rev-mobile-nav${mobileMenuOpen ? " is-open" : ""}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden={!mobileMenuOpen}
      >
        <aside className="rev-mobile-nav__panel" role="dialog" aria-label="Mobile navigation" onClick={(e) => e.stopPropagation()}>
          <div className="rev-mobile-nav__header">
            <p className="rev-mobile-nav__brand">Menu</p>
            <button
              type="button"
              className="rev-mobile-nav__close"
              aria-label="Close menu"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span />
              <span />
            </button>
          </div>

          <nav className="rev-mobile-nav__links">
            <a href="/" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="https://store.revampfy.in/" onClick={() => setMobileMenuOpen(false)}>All Categories</a>
            <a href="https://store.revampfy.in/" onClick={() => setMobileMenuOpen(false)}>Collections</a>
            <a href="/contact-us" onClick={() => setMobileMenuOpen(false)}>Contact Us</a>
            <a href="/bulk-orders-enquiry" onClick={() => setMobileMenuOpen(false)}>Bulk Orders</a>
            <a href="/policies" onClick={() => setMobileMenuOpen(false)}>Company</a>
            <a href="/about-us" onClick={() => setMobileMenuOpen(false)}>About Us</a>
            <a href="/partners" onClick={() => setMobileMenuOpen(false)}>Partners</a>
            <a href="/resellers" onClick={() => setMobileMenuOpen(false)}>Resellers</a>
            <a href="https://store.revampfy.in/" onClick={() => setMobileMenuOpen(false)}>Store</a>
          </nav>
        </aside>
      </div>
    </header>
  );
}
