import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Welcome from '@/components/Welcome';
import Stats from '@/components/Stats';
import Amenities from '@/components/Amenities';

import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import ServicesPage from '@/components/ServicesPage';
import ContactPage from '@/components/ContactPage';
import TermsPage from '@/components/TermsPage';
import PrivacyPage from '@/components/PrivacyPage';
import UploadCvPage from '@/components/UploadCvPage';
import EmployerViewPage from '@/components/EmployerViewPage';
import ScrollToTop from '@/components/ScrollToTop';
import useRoute from '@/hooks/useRoute';

function App() {
  const route = useRoute();

  useEffect(() => {
    const handleScroll = () => {
      if (route === '/services' || route === '/contact' || route === '/terms' || route === '/privacy' || route === '/upload-cv' || route === '/view-cvs') {
        window.scrollTo(0, 0);
        return;
      }

      if (route === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      const targetId = route.substring(1); // 'about', 'specialties'
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const timer = setTimeout(handleScroll, 100);
    return () => clearTimeout(timer);
  }, [route]);

  return (
    <div className="font-sans antialiased scroll-smooth min-h-screen flex flex-col justify-between">
      <div>
        <Navbar />
        {route === '/services' ? (
          <ServicesPage />
        ) : route === '/contact' ? (
          <ContactPage />
        ) : route === '/terms' ? (
          <TermsPage />
        ) : route === '/privacy' ? (
          <PrivacyPage />
        ) : route === '/upload-cv' ? (
          <UploadCvPage />
        ) : route === '/view-cvs' ? (
          <EmployerViewPage />
        ) : (
          <>
            <Hero />
            <Welcome />
            <Stats />
            <Amenities />
            <Testimonials />
            <CTASection />
          </>
        )}
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
