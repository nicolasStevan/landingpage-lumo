import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { PlansSection } from './components/PlansSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Navigation />
      
      <main className="relative">
        <HeroSection />
        <AboutSection />
        <PlansSection />
        <ServicesSection />
        <HowItWorksSection />
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
}