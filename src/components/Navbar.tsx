"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const programSubmenu: Array<{ href?: string; label?: string; divider?: boolean; indent?: boolean }> = [
  { href: "/program", label: "Semua Program" },
  { divider: true },
  { href: "/program?level=basic", label: "Basic Level", indent: true },
  { href: "/program?level=middle", label: "Middle Level", indent: true },
  { href: "/program?level=upper", label: "Upper / Manajerial", indent: true },
  { divider: true },
  { href: "/program?category=soft", label: "Soft Competency", indent: true },
  { href: "/program?category=hard", label: "Hard Skill HR", indent: true },
  { href: "/program?category=comprehensive", label: "Komprehensif", indent: true },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [programOpen, setProgramOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProgramOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
            <span className="text-accent text-2xl">◆</span>
            <span>Titi<span className="text-accent">Academy</span></span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href={isHome ? "#home" : "/"}
              className="text-sm font-medium text-muted hover:text-accent transition-colors"
            >
              Home
            </Link>

            {/* Program dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setProgramOpen(!programOpen)}
                className="flex items-center gap-1 text-sm font-medium text-muted hover:text-accent transition-colors"
              >
                Program
                <svg
                  className={`w-3 h-3 transition-transform ${programOpen ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {programOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white border border-gray-200 rounded-xl shadow-lg py-2 z-50">
                  {programSubmenu.map((item, i) =>
                    item.divider ? (
                      <div key={i} className="border-t border-gray-100 my-1" />
                    ) : (
                      <Link
                        key={i}
                        href={item.href!}
                        className={`block px-4 py-2 text-sm hover:bg-surface transition-colors ${
                          item.indent ? "pl-8 text-muted" : "font-medium text-primary"
                        }`}
                        onClick={() => setProgramOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )
                  )}
                </div>
              )}
            </div>

            <Link
              href={isHome ? "#about" : "/#about"}
              className="text-sm font-medium text-muted hover:text-accent transition-colors"
            >
              Tentang
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium text-muted hover:text-accent transition-colors"
            >
              Blog
            </Link>
            <a
              href={isHome ? "#contact" : "/#contact"}
              className="bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-light transition-colors"
            >
              Hubungi Kami
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-primary"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-1">
            <MobileLink href={isHome ? "#home" : "/"} onClick={() => setMobileOpen(false)}>Home</MobileLink>
            <MobileLink href="/program" onClick={() => setMobileOpen(false)}>← Semua Program</MobileLink>
            <MobileLink href="/program?level=basic" onClick={() => setMobileOpen(false)} indent>Basic Level</MobileLink>
            <MobileLink href="/program?level=middle" onClick={() => setMobileOpen(false)} indent>Middle Level</MobileLink>
            <MobileLink href="/program?level=upper" onClick={() => setMobileOpen(false)} indent>Upper / Manajerial</MobileLink>
            <div className="border-t border-gray-100 my-2" />
            <MobileLink href="/program?category=soft" onClick={() => setMobileOpen(false)} indent>Soft Competency</MobileLink>
            <MobileLink href="/program?category=hard" onClick={() => setMobileOpen(false)} indent>Hard Skill HR</MobileLink>
            <MobileLink href="/program?category=comprehensive" onClick={() => setMobileOpen(false)} indent>Komprehensif</MobileLink>
            <div className="border-t border-gray-100 my-2" />
            <MobileLink href={isHome ? "#about" : "/#about"} onClick={() => setMobileOpen(false)}>Tentang</MobileLink>
            <MobileLink href="/blog" onClick={() => setMobileOpen(false)}>Blog</MobileLink>
            <a
              href={isHome ? "#contact" : "/#contact"}
              className="block text-center bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-medium mt-3"
              onClick={() => setMobileOpen(false)}
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

function MobileLink({
  href, children, indent, onClick,
}: {
  href: string; children: React.ReactNode; indent?: boolean; onClick: () => void;
}) {
  return (
    <Link
      href={href}
      className={`block text-sm font-medium py-2 transition-colors ${
        indent ? "pl-6 text-muted hover:text-accent" : "text-primary hover:text-accent"
      }`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
