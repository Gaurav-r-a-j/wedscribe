import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, ArrowRight, PenTool } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'motion/react';

// Using a premium gradient placeholder or the generated image if I can move it.
// I will use a robust gradient layout which is safer.

export const Hero: React.FC = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/editor');
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#FAFAFA] pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-pink-100/50 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-amber-100/40 rounded-full blur-[100px] -translate-x-1/4 translate-y-1/4"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left"
        >
            <Badge variant="secondary" className="mb-6 px-4 py-2 bg-white/80 backdrop-blur border border-pink-100 text-pink-700 shadow-sm rounded-full gap-2 hover:bg-white">
                <Sparkles size={14} className="fill-pink-200 text-pink-500" /> 
                <span className="tracking-wide text-xs font-bold uppercase">India's Premimum Biodata Maker</span>
            </Badge>

            <h1 className="text-5xl lg:text-7xl font-bold font-serif text-slate-900 leading-[1.1] mb-6 tracking-tight">
                Design Your <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-amber-500 italic pr-2">Perfect Match</span> 
                Profile
            </h1>

            <p className="text-xl text-slate-500 leading-relaxed mb-10 max-w-lg font-light">
                create stunning matrimonial biodatas that leave a lasting impression. 
                <span className="text-slate-800 font-medium"> Professional templates, AI-assisted writing, and instant PDF downloads.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={handleStart} size="lg" className="rounded-full px-8 h-14 text-base shadow-xl shadow-pink-500/20 bg-slate-900 hover:bg-slate-800 transition-all hover:scale-105 active:scale-95">
                    Create Biodata <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                
                <Button onClick={() => document.getElementById('templates')?.scrollIntoView({ behavior: 'smooth'})} variant="outline" size="lg" className="rounded-full px-8 h-14 text-base border-slate-200 hover:border-slate-300 hover:bg-white transition-all">
                    View Templates
                </Button>
            </div>

            <div className="mt-12 flex items-center gap-4 text-sm font-medium text-slate-400">
                <div className="flex -space-x-3">
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-100"></div>
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-200"></div>
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-300"></div>
                </div>
                <p>Trusted by <span className="text-slate-900 font-bold">10,000+</span> families</p>
            </div>
        </motion.div>

        {/* Right Visual */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[600px] hidden lg:block perspective-1000"
        >
            {/* Main Template Card Visual */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[80%] aspect-[1/1.414] bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden transform rotate-y-[-10deg] rotate-x-[5deg] hover:rotate-0 transition-transform duration-700 ease-out">
                 {/* Visual Representation of a Biodata */}
                 <div className="w-full h-full bg-slate-50 relative p-6 flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full bg-slate-200 mb-6"></div>
                    <div className="w-3/4 h-8 bg-slate-200 rounded mb-4"></div>
                    <div className="w-1/2 h-4 bg-slate-200 rounded opacity-60 mb-8"></div>
                    
                    <div className="w-full grid grid-cols-2 gap-4">
                        <div className="h-24 bg-white rounded shadow-sm border border-slate-100"></div>
                        <div className="h-24 bg-white rounded shadow-sm border border-slate-100"></div>
                        <div className="h-24 bg-white rounded shadow-sm border border-slate-100"></div>
                        <div className="h-24 bg-white rounded shadow-sm border border-slate-100"></div>
                    </div>
                 </div>
            </div>

            {/* Decorative Elements */}
            <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 left-10 w-48 bg-white p-4 rounded-xl shadow-xl border border-slate-100 z-20 flex items-center gap-3"
            >
                <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600">
                    <PenTool size={20} />
                </div>
                <div>
                    <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Status</div>
                    <div className="font-bold text-slate-900">Print Ready PDF</div>
                </div>
            </motion.div>

            <motion.div 
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-40 left-0 w-48 bg-white p-4 rounded-xl shadow-xl border border-slate-100 z-20 flex items-center gap-3"
            >
                 <div className="p-2 bg-amber-100 rounded-lg text-amber-600">
                    <Sparkles size={20} />
                </div>
                <div>
                    <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Feature</div>
                    <div className="font-bold text-slate-900">AI Writer</div>
                </div>
            </motion.div>

        </motion.div>
      </div>
    </section>
  );
};
