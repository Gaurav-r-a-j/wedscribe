import React from 'react';
import { Sparkles, PenTool, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'motion/react';

interface HeroProps {
  onStart: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStart }) => {
  return (
    <header className="relative pt-32 pb-32 overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -right-[5%] w-[600px] h-[600px] bg-accent rounded-full blur-3xl opacity-60 mix-blend-multiply"
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, -5, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] -left-[10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl opacity-60 mix-blend-multiply"
        />
        <motion.div 
          animate={{ scale: [1, 1.1, 1], x: [0, 20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[40%] right-[20%] w-[300px] h-[300px] bg-secondary/20 rounded-full blur-3xl opacity-60 mix-blend-multiply"
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-8"
        >
          <Badge variant="outline" className="px-4 py-1.5 text-sm font-medium border-primary/20 bg-background/50 backdrop-blur text-muted-foreground gap-2">
            <Sparkles size={14} className="text-primary" /> India's Premium Biodata Maker
          </Badge>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-foreground mb-8 font-serif leading-[1.1]"
        >
          Craft the Perfect <br/>
          <span className="text-primary italic">Introduction</span> to Your Future
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          Design elegant matrimonial biodatas in minutes. Professional templates, AI-assisted writing, and complete privacy — all in your browser.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <Button 
            onClick={onStart}
            size="lg"
            className="w-full sm:w-auto px-10 py-6 text-lg hover:-translate-y-1 gap-2 shadow-lg shadow-primary/20 transition-all"
          >
            Start Creating for Free <PenTool size={18} />
          </Button>
          <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium px-6 py-4 bg-background/50 backdrop-blur rounded-full border border-border shadow-sm">
            <CheckCircle size={16} className="text-emerald-500" /> No Login Required
          </div>
        </motion.div>
      </div>
    </header>
  );
};
