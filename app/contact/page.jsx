import LegalPage from "@/components/LegalPage";
import { SITE, canonical } from "@/lib/site-config";

export const metadata = { title: "Contact | PrimeGearLab", alternates: { canonical: canonical("/contact") } };

export default function Page() {
  return (
    <LegalPage title="Contact">
      <p>Email us at <a className="underline" href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>
      <p>For orders, shipping, returns or warranty, contact NIU directly, since NIU handles those.</p>
    </LegalPage>
  );
}
