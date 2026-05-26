import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";

const LOGO = "https://ik.imagekit.io/mitsioss/petrakopoulou/logo-banners/logo.png?updatedAt=1779706378171";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: "Σχετικά" },
    { href: "#programs", label: "Προγράμματα" },
    { href: "#technology", label: "Τεχνολογία" },
    { href: "#stats", label: "Επιτυχίες" },
    { href: "#gallery", label: "Gallery" },
    { href: "#reviews", label: "Κριτικές" },
    { href: "#contact", label: "Επικοινωνία" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md shadow-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container-page flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3">
          <img src={LOGO} alt="Λογότυπο Κέντρου" className="h-12 w-auto" loading="eager" />
          <span className={`hidden md:block font-display text-base leading-tight max-w-[200px] ${scrolled ? "text-foreground" : "text-white drop-shadow"}`}>
            Κέντρο Ξένων Γλωσσών<br />Πετρακοπούλου - Λουκουζά
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors hover:text-gold ${
                scrolled ? "text-foreground/80" : "text-white/90 drop-shadow"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <button
          className={`lg:hidden p-2 ${scrolled ? "text-foreground" : "text-white"}`}
          onClick={() => setOpen(!open)}
          aria-label="Άνοιγμα μενού"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-background border-t border-border">
          <nav className="container-page py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 text-foreground/80 hover:text-gold">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
