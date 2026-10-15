import LegalPage from "@/components/LegalPage";
import { SITE, canonical } from "@/lib/site-config";

export const metadata = { title: "Affiliate Disclosure | PrimeGearLab", alternates: { canonical: canonical("/affiliate-disclosure") } };

export default function Page() {
  return (
    <LegalPage title="Affiliate Disclosure">
      <p>{SITE.disclosure}</p>
      <p>Links to NIU on this page are affiliate links. {SITE.name} is an independent publisher and is not operated by or endorsed by NIU unless stated otherwise.</p>
    </LegalPage>
  );
}
