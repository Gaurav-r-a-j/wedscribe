import React from 'react';
import { SEO } from '../../components/common/SEO';
import { Navbar } from '../../components/pages/home/navbar';
import { Hero } from '../../components/pages/home/hero';
import { Features } from '../../components/pages/home/features';
import { ReligionSelection } from '../../components/pages/home/religion-selection';
import { FAQ } from '../../components/pages/home/faq';
import { Footer } from '../../components/pages/home/footer';

export const LandingPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="WedScribe - Premium Biodata Maker | Create Beautiful Indian Wedding Biodata Online"
        description="Create professional, elegant biodata for Indian weddings with WedScribe. 30+ premium templates, instant PDF/PNG downloads, and A4 print-ready layouts. Free online biodata maker."
        keywords="biodata maker, wedding biodata, matrimonial biodata, Indian wedding biodata, biodata generator, marriage biodata, biodata template, online biodata maker, biodata creator, shadi biodata"
      />
      <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20 selection:text-primary">
        <Navbar />
        <Hero />
        <Features />
        <div id="templates">
          <ReligionSelection />
        </div>
        <FAQ />
        <Footer />
      </div>
    </>
  );
};