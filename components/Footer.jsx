import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="bg-ink px-4 py-10 text-sm text-slate-300">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <Link href="/" aria-label="PrimeGearLab home" className="shrink-0">
          <Image src={SITE.logo.src} alt={SITE.logo.alt} width={SITE.logo.width} height={SITE.logo.height} className="h-24 w-auto" />
        </Link>

        {/* Right-hand wrapper: sits on the right on desktop; its own text is left-aligned so lines wrap evenly. */}
        <div className="w-full max-w-xl md:ml-auto">
          <nav aria-label="Legal" className="flex flex-wrap gap-x-6 gap-y-2 md:justify-end">
            <Link className="hover:text-white" href="/privacy">Privacy Policy</Link>
            <Link className="hover:text-white" href="/terms">Terms of Service</Link>
            <Link className="hover:text-white" href="/affiliate-disclosure">Affiliate Disclosure</Link>
            <Link className="hover:text-white" href="/contact">Contact</Link>
          </nav>

          <div className="mt-4 space-y-2 text-left">
            <p>{SITE.disclosure}</p>
            <p>PrimeGearLab is an independent publisher, not NIU. Purchases are completed on NIU's store.</p>
            <p>Contact Email: <a className="underline" href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
            <p>© 2026 PrimeGearLab. All rights reserved. Managed &amp; Operated in partnership with authorized media agency partners.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
