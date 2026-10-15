import LegalPage from "@/components/LegalPage";
import { SITE, canonical } from "@/lib/site-config";

export const metadata = { title: "Privacy Policy | PrimeGearLab", alternates: { canonical: canonical("/privacy") } };

export default function Page() {
  return (
    <LegalPage title="Privacy Policy">
      <p>{SITE.name} is an independent publisher of affiliate guides. This page explains what we collect when you visit this page.</p>
      <p>We do not ask you to create an account or submit personal details on this page. If you email us, we use your message and email address only to reply.</p>
      <p>When analytics or advertising tools are enabled (such as Google Analytics, Google Ads or Meta Pixel), they may set cookies or collect device and usage information, including which links you click. Those providers handle that data under their own policies. If none are enabled, no such data is collected by us.</p>
      <p>When you click a link to NIU's store, NIU and its affiliate tracking handle your visit under NIU's own privacy policy.</p>
      <p>Questions: <a className="underline" href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>
      <p className="text-sm">This page is general information, not legal advice.</p>
    </LegalPage>
  );
}
