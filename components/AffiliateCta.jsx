"use client";

// Native anchor, always opens a new tab. Analytics fire without blocking navigation.
export default function AffiliateCta({ href, label, productKey, location, variant = "primary", className = "", block = true }) {
  if (!href) return null;
  const onClick = () => {
    try {
      if (typeof window.gtag === "function") window.gtag("event", "affiliate_click", { item: productKey, location });
      if (typeof window.fbq === "function") window.fbq("trackCustom", "AffiliateClick", { item: productKey, location });
    } catch (e) {
      /* tracking must never affect navigation */
    }
  };
  const styles = variant === "primary" ? "bg-brand text-white hover:bg-brand-dark" : variant === "light" ? "border-2 border-white text-white hover:bg-white hover:text-ink" : "border-2 border-ink text-ink hover:bg-ink hover:text-white";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={`inline-flex min-h-[48px] items-center justify-center rounded-lg px-6 py-3 text-base font-semibold transition-colors ${block ? "w-full sm:w-auto" : ""} ${styles} ${className}`}
    >
      {label}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
