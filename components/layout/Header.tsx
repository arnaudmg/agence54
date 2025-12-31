"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { ContactPopup, useContactPopup } from "@/components/ui/ContactPopup";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Le Studio", href: "/studio" },
  { name: "Offres", href: "/#offres" },
  { name: "Blog", href: "/blog" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const contactPopup = useContactPopup();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle smooth scroll for anchor links
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      // Check if it's an anchor link
      if (href.includes("#")) {
        const [path, hash] = href.split("#");
        const targetId = hash;
        const isHomePage = pathname === "/";
        const targetPath = path || "/";

        // If we're on the target page, just smooth scroll
        if (isHomePage && (targetPath === "/" || targetPath === "")) {
          e.preventDefault();
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        } else if (targetPath === "/" || targetPath === "") {
          // If we're on a different page, navigate to home then scroll
          e.preventDefault();
          router.push(`/${href.includes("#") ? `#${targetId}` : ""}`);

          // Wait for navigation then scroll
          setTimeout(() => {
            const element = document.getElementById(targetId);
            if (element) {
              element.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }, 100);
        }
      }
    },
    [pathname, router]
  );

  // Handle hash on initial load and route changes
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const targetId = hash.replace("#", "");
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, [pathname]);

  return (
    <>
      <ContactPopup isOpen={contactPopup.isOpen} onClose={contactPopup.close} />

      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
          scrolled
            ? "bg-black/80 backdrop-blur-md border-white/10 py-4"
            : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold tracking-tighter text-white z-50 relative uppercase"
          >
            54BCN<span className="text-zinc-500">.</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors uppercase tracking-wide"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button
              onClick={contactPopup.open}
              className="bg-white text-black hover:bg-zinc-200 rounded-none h-10 px-6"
            >
              Nous contacter
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white z-50 relative"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center gap-8 md:hidden"
              >
                <nav className="flex flex-col items-start gap-6 pl-10 w-full">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-4xl font-bold text-zinc-400 hover:text-white transition-colors uppercase"
                      onClick={(e) => {
                        handleNavClick(e, item.href);
                        setIsOpen(false);
                      }}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Button
                    className="mt-4"
                    size="lg"
                    onClick={() => {
                      setIsOpen(false);
                      contactPopup.open();
                    }}
                  >
                    Nous contacter
                  </Button>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
    </>
  );
}
