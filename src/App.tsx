import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsStrip } from './components/StatsStrip';
import { About } from './components/About';
import { Services } from './components/Services';
import { BeforeAfter } from './components/BeforeAfter';
import { Portfolio } from './components/Portfolio';
import { Results } from './components/Results';
import { Process } from './components/Process';
import { WhyChooseMe } from './components/WhyChooseMe';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeDownloadModal } from './components/ResumeDownloadModal';

export function App() {
  const [writerName] = useState<string>('SALAR S');
  const [downloadModalOpen, setDownloadModalOpen] = useState<boolean>(false);
  const [contactServicePreFill, setContactServicePreFill] = useState<string>('');

  const handleSelectServiceForContact = (serviceTitle: string) => {
    setContactServicePreFill(serviceTitle);
    const element = document.getElementById('contact');
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth'
      });
    }
  };

  const handleSelectPackageForContact = (packageName: string) => {
    let serviceTitle = 'Resume Writing';
    if (packageName === 'Essential') serviceTitle = 'Resume Writing';
    if (packageName === 'Professional') serviceTitle = 'LinkedIn Optimization';
    if (packageName === 'Executive') serviceTitle = 'Executive Resume';
    
    handleSelectServiceForContact(serviceTitle);
  };

  return (
    <div className="portfolio-app">
      {/* 2. Navigation Header */}
      <Navbar
        name={writerName}
        onOpenDownloadModal={() => setDownloadModalOpen(true)}
        onSelectService={handleSelectServiceForContact}
      />

      {/* 3. Hero Section */}
      <Hero name={writerName} />

      {/* 4. Trust / Statistics Section */}
      <StatsStrip />

      {/* 5. About Me Section */}
      <About name={writerName} />

      {/* 6. Services Section */}
      <Services onSelectServiceForContact={handleSelectServiceForContact} />

      {/* 7. Resume Before & After Interactive Section */}
      <BeforeAfter />

      {/* 8. Portfolio / Resume Samples */}
      <Portfolio />

      {/* 9. Results Section */}
      <Results />

      {/* 10. My Process */}
      <Process />

      {/* 11. Why Work With Me */}
      <WhyChooseMe />

      {/* 12. Testimonials */}
      <Testimonials name={writerName} />

      {/* 13. Pricing */}
      <Pricing onSelectPackage={handleSelectPackageForContact} />

      {/* 14. FAQ */}
      <FAQ />

      {/* 15. Strong CTA Section */}
      <CTA />

      {/* 16. Contact Section */}
      <Contact name={writerName} selectedServicePreFill={contactServicePreFill} />

      {/* 17. Footer */}
      <Footer name={writerName} />

      {/* Interactive Resume Download Modal */}
      {downloadModalOpen && (
        <ResumeDownloadModal
          name={writerName}
          onClose={() => setDownloadModalOpen(false)}
        />
      )}
    </div>
  );
}

export default App;
