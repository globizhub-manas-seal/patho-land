import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ClientMarquee from '../components/ClientMarquee';
import VideoAd from '../components/VideoAd';
import ValueProps from '../components/ValueProps';
import ComparisonTable from '../components/ComparisonTable';
import IoTIntegration from '../components/IoTIntegration';
import ReportViewer from '../components/ReportViewer';
import EcosystemGrid from '../components/EcosystemGrid';
import ClientReview from '../components/ClientReview';
import Testimonials from '../components/Testimonials';
import Security from '../components/Security';
import Faq from '../components/Faq';
import FooterCta from '../components/FooterCta';
import Footer from '../components/Footer';
import StickyMobileBar from '../components/StickyMobileBar';

export default function Home() {
  return (
    <div className="min-h-screen bg-paper text-bodyText flex flex-col selection:bg-sage selection:text-ink">
      {/* 1. Sticky Navigation with Saffron Scroll Progress Bar */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Horizontally Scrolling Client Labs Marquee */}
        <ClientMarquee />

        {/* 4. Video Showcase */}
        <VideoAd />

        {/* 5. Value Propositions (0 Server / 0 Setup / 0 IT) */}
        <ValueProps />

        {/* 6. Legacy vs Cloud Comparison Table */}
        <ComparisonTable />

        {/* 7. IoT Machine Interfacing (The One Allowed Dark Section in #0F3D3E) */}
        <IoTIntegration />

        {/* 8. Live Interactive NABL Sample Report Viewer */}
        <ReportViewer />

        {/* 9. Bento Grid Ecosystem (8 Modules in unified Teal/Sage accent) */}
        <EcosystemGrid />

        {/* 10. Spotlight Client Story */}
        <ClientReview />

        {/* 11. Customer Testimonials */}
        <Testimonials />

        {/* 12. Bank-Grade ISO Security */}
        <Security />

        {/* 13. Interactive FAQ Accordion */}
        <Faq />

        {/* 14. Pre-Footer Call to Action */}
        <FooterCta />
      </main>

      {/* 15. Global Footer */}
      <Footer />

      {/* 16. Floating Sticky Mobile Quick-Action Bar */}
      <StickyMobileBar />
    </div>
  );
}
