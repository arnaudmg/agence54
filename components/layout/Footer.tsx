import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";

interface FooterProps {
  data?: {
    description?: string | null;
    email?: string | null;
    addressLine1?: string | null;
    addressLine2?: string | null;
  };
}

export function Footer({ data }: FooterProps) {
  const {
    description = "Personal Branding & Contenu Vidéo Clé-en-main. Pour dirigeants et entrepreneurs francophones.",
    email = "contact@54bcn.com",
    addressLine1 = "Studio 54",
    addressLine2 = "Barcelone, Casp 54",
  } = data || {};

  return (
    <footer className="bg-black border-t border-zinc-900 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 text-left">
          <div className="space-y-6">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tighter text-white uppercase"
            >
              54BCN<span className="text-zinc-600">.</span>
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              {description}
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">
              Navigation
            </h4>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li>
                <Link
                  href="/studio"
                  className="hover:text-white transition-colors"
                >
                  Le Studio
                </Link>
              </li>
              <li>
                <Link
                  href="/#offres"
                  className="hover:text-white transition-colors"
                >
                  Offres
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">
              Contact
            </h4>
            <address className="not-italic text-sm text-zinc-500 space-y-4">
              <p>{addressLine1}</p>
              <p>{addressLine2}</p>
              <p>
                <a
                  href={`mailto:${email}`}
                  className="hover:text-white transition-colors"
                >
                  {email}
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-xs text-zinc-600">
          <p>© 2025 54BCN. Tous droits réservés.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-zinc-400">
              Mentions légales
            </Link>
            <Link href="#" className="hover:text-zinc-400">
              CGV
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
