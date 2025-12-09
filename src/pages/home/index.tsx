import React from 'react';
import { Navbar } from '../../components/pages/home/navbar';
import { Hero } from '../../components/pages/home/hero';
import { Features } from '../../components/pages/home/features';
import { ReligionSelection } from '../../components/pages/home/religion-selection';
import { AISection } from '../../components/pages/home/ai-section';
import { FAQ } from '../../components/pages/home/faq';
import { Footer } from '../../components/pages/home/footer';

interface Props {
  onStart: () => void;
}

export const LandingPage: React.FC<Props> = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20 selection:text-primary">
      <Navbar onStart={onStart} />
      <Hero onStart={onStart} />
      <Features />
      <ReligionSelection />
      <AISection />
      <FAQ />
      <Footer />
    </div>
  );
};