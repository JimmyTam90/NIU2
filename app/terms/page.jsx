import LegalPage from "@/components/LegalPage";
import { SITE, canonical } from "@/lib/site-config";

export const metadata = { title: "Terms of Service | PrimeGearLab", alternates: { canonical: canonical("/terms") } };

export default function Page() {
  return (
    <LegalPage title="Terms of Service">
      <p>{SITE.name} publishes independent product guides. We are not NIU, and we do not sell, ship or service NIU products.</p>
      <p>Prices, stock, specifications and policies come from NIU's public store when we checked and can change at any time. Confirm details on NIU before you buy. Purchases are a contract between you and NIU.</p>
      <p>Content is for general information and is not professional advice. Follow NIU's safety guidance and local laws when you ride.</p>
      <p>We may update this page at any time. Contact: <a className="underline" href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>
    </LegalPage>
  );
}
