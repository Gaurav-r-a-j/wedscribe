import React from 'react';
import { Zap, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export const AISection: React.FC = () => {
  return (
    <section className="py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-16 h-16 bg-background/10 rounded-full mb-8 backdrop-blur-sm border border-background/20"
          >
              <Zap size={32} className="text-primary-foreground" fill="currentColor" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold font-serif mb-6 leading-tight"
          >
            Struggling with words?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-secondary-foreground/80 mb-10 max-w-2xl mx-auto font-light"
          >
              Our integrated AI writing assistant helps you craft a humble yet impressive professional summary based on your career and values.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative max-w-2xl mx-auto"
          >
            <Card className="bg-card text-card-foreground border-none shadow-2xl overflow-visible">
              <div className="absolute -top-3 -right-3 z-10">
                <Badge className="bg-primary hover:bg-primary/90 text-primary-foreground border-none text-xs font-bold px-3 py-1 uppercase tracking-wider">
                  AI Generated
                </Badge>
              </div>
              <CardContent className="p-8 text-left">
                <p className="font-serif italic text-lg leading-relaxed text-muted-foreground">
                    "<span className="text-primary font-bold">I am a grounded and ambitious individual</span> who values family traditions while embracing modern progressive thinking. With a Master's in Computer Science and a passion for travel, I seek a partner who is intellectual, kind-hearted, and ready to share a journey of mutual growth."
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                     <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                        <Sparkles size={14} className="text-primary" />
                     </div>
                     <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Generative AI Preview</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
      </div>
    </section>
  );
};
