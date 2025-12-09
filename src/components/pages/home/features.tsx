import React from 'react';
import { Shield, Layout, Printer } from 'lucide-react';
import { motion } from 'motion/react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const FeatureCard = ({ icon, title, description, delay }: { icon: React.ReactNode, title: string, description: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
  >
    <Card className="h-full border-border hover:border-primary/20 hover:shadow-xl transition-all duration-300 group">
      <CardHeader>
        <div className="mb-4 bg-muted w-14 h-14 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300 group-hover:bg-primary/10">
            {icon}
        </div>
        <CardTitle className="text-xl font-bold text-foreground font-serif">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground leading-relaxed text-sm">{description}</p>
      </CardContent>
    </Card>
  </motion.div>
);

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold font-serif text-foreground mb-4"
          >
            Refined Features
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-primary mx-auto rounded-full mb-4"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground max-w-lg mx-auto"
          >
            We've stripped away the complexity to give you a tool that focuses purely on aesthetics and ease of use.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <FeatureCard 
            icon={<Shield size={28} className="text-primary" />}
            title="Privacy First"
            description="Your personal details never leave your device. We process everything locally in your browser for 100% security."
            delay={0.1}
          />
          <FeatureCard 
            icon={<Layout size={28} className="text-secondary-foreground" />}
            title="Curated Templates"
            description="Choose from a collection of professionally typeset layouts designed specifically for modern Indian arranged marriages."
            delay={0.2}
          />
          <FeatureCard 
            icon={<Printer size={28} className="text-foreground" />}
            title="Print Ready"
            description="Download industry-standard A4 PDFs that look crisp on screen and perfect on paper. No watermarks."
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};
