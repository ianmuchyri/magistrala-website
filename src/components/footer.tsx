import { FooterCompanyInfo } from './footer-company-info';
import { FooterCopyright } from './footer-copyright';
import { FooterNewsletter } from './footer-newsletter';
import { FooterQuickLinks } from './footer-quick-links';
import { FooterSocialLinks } from './footer-social-links';
import { Separator } from './ui/separator';

export default function Footer() {
  return (
    <footer className="bg-blue-200 py-12">
      <div className="container mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col sm:flex-row justify-between gap-8 mb-8">
          <FooterCompanyInfo />
          <FooterQuickLinks />
          <FooterSocialLinks />
          <FooterNewsletter />
        </div>

        <Separator />

        {/* Footer Bottom */}
        <FooterCopyright />
      </div>
    </footer>
  );
}
