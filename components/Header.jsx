"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AffiliateCta from "./AffiliateCta";
import { resolveCollectionUrl } from "@/lib/affiliate-links";
import { SITE } from "@/lib/site-config";

const NAV = [
  ["Models", "#models"],
  ["Compare", "#compare"],
  ["Full range", "#range"],
  ["FAQ", "#faq"],
];

// Logo only (the logo artwork already contains the brand name). Dark bar because the supplied logo is white-on-transparent.
export default function Header() {
  const [open, setOpen] = useState(false);
  const cta = resolveCollectionUrl("electric-scooters");
  return (
    <header className="sticky top-0 z-40 bg-ink text-white">
      <div className="mx-auto flex max-w-6xl items-center px-4 py-2">
        <Link href="/" aria-label="PrimeGearLab home" className="shrink-0">
          <Image src={SITE.logo.src} alt={SITE.logo.alt} width={SITE.logo.width} height={SITE.logo.height} priority className="h-16 w-auto" />
        </Link>

        <div className="ml-auto hidden items-center gap-6 md:flex">
          <nav aria-label="Primary" className="flex items-center gap-6 text-sm font-medium">
            {NAV.map(([label, href]) => (
              <a key={href} href={href} className="hover:text-brand">{label}</a>
            ))}
          </nav>
          <AffiliateCta href={cta.url} label="Shop NIU" productKey="electric-scooters" location="header" block={false} />
        </div>

        <button
          type="button"
          className="ml-auto inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/30 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open ? (
        <div id="mobile-menu" className="border-t border-white/10 bg-ink px-4 pb-4 md:hidden">
          <nav aria-label="Mobile" className="flex flex-col">
            <Link href="/" onClick={() => setOpen(false)} className="min-h-[48px] py-3 font-medium">Home</Link>
            {NAV.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="min-h-[48px] py-3 font-medium">{label}</a>
            ))}
          </nav>
          <div className="mt-2">
            <AffiliateCta href={cta.url} label="Shop NIU" productKey="electric-scooters" location="mobile-menu" />
          </div>
        </div>
      ) : null}
    </header>
  );
}
