import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '@/components/ui/logo';
import { Heart, Instagram, Twitter, Linkedin, Mail, ExternalLink, Sparkles, ArrowRight, Github } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'motion/react';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className="relative overflow-hidden border-t border-primary/30 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Animated Brand Color Blobs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] bg-primary/15 rounded-full blur-[150px] sm:blur-[200px] pointer-events-none animate-blob"></div>
      <div className="absolute bottom-0 right-1/4 w-[550px] h-[550px] sm:w-[750px] sm:h-[750px] bg-amber-500/12 rounded-full blur-[130px] sm:blur-[180px] pointer-events-none animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] bg-rose-500/10 rounded-full blur-[120px] sm:blur-[170px] pointer-events-none animate-blob animation-delay-4000"></div>
      
      {/* Gradient Mesh Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-rose-500/5 pointer-events-none"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 sm:gap-12 md:gap-16 mb-16 sm:mb-20">
        
          {/* Brand Column - Larger */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block group"
            >
              <div className="relative bg-gradient-to-br from-primary/25 via-rose-500/15 to-amber-500/15 p-5 sm:p-6 rounded-2xl backdrop-blur-xl border border-primary/40 shadow-2xl shadow-primary/20 hover:shadow-primary/30 transition-all duration-500 hover:scale-[1.02] hover:border-primary/60 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <Logo textClassName="text-white drop-shadow-lg" /> 
                </div>
            </div>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-300 leading-relaxed text-sm sm:text-base max-w-lg font-light"
            >
                {t('footer.brand.desc')}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex gap-3 pt-2"
            >
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-md border border-primary/30 flex items-center justify-center text-slate-300 hover:text-primary transition-all hover:scale-110 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/30"
                aria-label="Twitter"
              >
                <Twitter size={20} className="group-hover:scale-110 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-md border border-rose-500/30 flex items-center justify-center text-slate-300 hover:text-rose-400 transition-all hover:scale-110 hover:border-rose-500/50 hover:shadow-lg hover:shadow-rose-500/30"
                aria-label="Instagram"
              >
                <Instagram size={20} className="group-hover:scale-110 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-br from-rose-500/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-md border border-amber-500/30 flex items-center justify-center text-slate-300 hover:text-amber-400 transition-all hover:scale-110 hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/30"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
            </motion.div>
          </div>

          {/* Links Column 1 - Product */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-white font-bold mb-6 tracking-wide uppercase text-xs flex items-center gap-2.5 pb-3 border-b border-primary/40">
              <div className="p-1.5 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30">
                <Sparkles size={14} className="text-primary" />
              </div>
              {t('footer.col.product')}
            </h3>
            <ul className="space-y-3.5">
              <li>
                <Link to="/editor" className="text-slate-400 hover:text-primary transition-all duration-300 flex items-center gap-2.5 group py-2 px-2 -ml-2 rounded-lg hover:bg-primary/5">
                  <span className="w-2 h-2 rounded-full bg-primary/0 group-hover:bg-primary transition-all group-hover:scale-125 shadow-lg shadow-primary/0 group-hover:shadow-primary/50"></span>
                  <span className="flex-1">{t('nav.templates')}</span>
                  <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                </Link>
              </li>
              <li>
                <a href="#features" className="text-slate-400 hover:text-primary transition-all duration-300 flex items-center gap-2.5 group py-2 px-2 -ml-2 rounded-lg hover:bg-primary/5">
                  <span className="w-2 h-2 rounded-full bg-primary/0 group-hover:bg-primary transition-all group-hover:scale-125 shadow-lg shadow-primary/0 group-hover:shadow-primary/50"></span>
                  <span className="flex-1">Features</span>
                  <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                </a>
              </li>
              <li>
                <a href="#templates" className="text-slate-400 hover:text-primary transition-all duration-300 flex items-center gap-2.5 group py-2 px-2 -ml-2 rounded-lg hover:bg-primary/5">
                  <span className="w-2 h-2 rounded-full bg-primary/0 group-hover:bg-primary transition-all group-hover:scale-125 shadow-lg shadow-primary/0 group-hover:shadow-primary/50"></span>
                  <span className="flex-1">Templates</span>
                  <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Links Column 2 - Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <h3 className="text-white font-bold mb-6 tracking-wide uppercase text-xs flex items-center gap-2.5 pb-3 border-b border-rose-500/40">
              <div className="p-1.5 rounded-lg bg-gradient-to-br from-rose-500/20 to-rose-500/10 border border-rose-500/30">
                <Sparkles size={14} className="text-rose-400" />
              </div>
              {t('footer.col.company')}
            </h3>
            <ul className="space-y-3.5">
              <li>
                <a href="https://designbyte.dev" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-rose-400 transition-all duration-300 flex items-center gap-2.5 group py-2 px-2 -ml-2 rounded-lg hover:bg-rose-500/5">
                  <span className="w-2 h-2 rounded-full bg-rose-500/0 group-hover:bg-rose-500 transition-all group-hover:scale-125 shadow-lg shadow-rose-500/0 group-hover:shadow-rose-500/50"></span>
                  <span className="flex-1">About DesignByte</span>
                  <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-rose-400" />
                </a>
              </li>
              <li>
                <a href="https://studio.designbyte.dev" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-rose-400 transition-all duration-300 flex items-center gap-2.5 group py-2 px-2 -ml-2 rounded-lg hover:bg-rose-500/5">
                  <span className="w-2 h-2 rounded-full bg-rose-500/0 group-hover:bg-rose-500 transition-all group-hover:scale-125 shadow-lg shadow-rose-500/0 group-hover:shadow-rose-500/50"></span>
                  <span className="flex-1">Studio</span>
                  <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-rose-400" />
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-rose-400 transition-all duration-300 flex items-center gap-2.5 group py-2 px-2 -ml-2 rounded-lg hover:bg-rose-500/5">
                  <span className="w-2 h-2 rounded-full bg-rose-500/0 group-hover:bg-rose-500 transition-all group-hover:scale-125 shadow-lg shadow-rose-500/0 group-hover:shadow-rose-500/50"></span>
                  <span className="flex-1">Privacy Policy</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-rose-400 transition-all duration-300 flex items-center gap-2.5 group py-2 px-2 -ml-2 rounded-lg hover:bg-rose-500/5">
                  <span className="w-2 h-2 rounded-full bg-rose-500/0 group-hover:bg-rose-500 transition-all group-hover:scale-125 shadow-lg shadow-rose-500/0 group-hover:shadow-rose-500/50"></span>
                  <span className="flex-1">Terms of Service</span>
                </a>
              </li>
            </ul>
          </motion.div>
          
          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-white font-bold mb-6 tracking-wide uppercase text-xs flex items-center gap-2.5 pb-3 border-b border-amber-500/40">
              <div className="p-1.5 rounded-lg bg-gradient-to-br from-amber-500/20 to-amber-500/10 border border-amber-500/30">
                <Mail size={14} className="text-amber-400" />
              </div>
              {t('footer.col.contact')}
            </h3>
            <div className="space-y-4">
              <p className="text-slate-300 text-sm font-light leading-relaxed">Have questions? We're here to help.</p>
              <a 
                href="mailto:hello@designbyte.dev" 
                className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-all font-semibold text-sm group"
              >
                hello@designbyte.dev
                <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
        </div>
          </motion.div>
          
        </div>
        
        {/* Built By Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="mb-12 sm:mb-16"
        >
          <div className="bg-gradient-to-br from-primary/15 via-rose-500/10 to-amber-500/10 rounded-2xl p-6 sm:p-8 border border-primary/30 backdrop-blur-xl shadow-2xl shadow-primary/10 hover:shadow-primary/20 transition-all duration-500 hover:border-primary/50">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-3">
                <p className="text-xs text-slate-400 mb-1 font-semibold uppercase tracking-wider">Built with ❤️ by</p>
                <a 
                  href="https://designbyte.dev" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white font-bold text-lg sm:text-xl hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary hover:via-rose-400 hover:to-amber-400 transition-all flex items-center gap-2 group"
                >
                  DesignByte Studio
                  <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-all text-primary group-hover:translate-x-1" />
                </a>
                <p className="text-slate-400 text-sm font-light">Crafting beautiful digital experiences</p>
              </div>
              
              <div className="flex gap-3">
                <a 
                  href="https://designbyte.dev" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 text-primary hover:from-primary/30 hover:to-primary/20 transition-all text-sm font-semibold"
                >
                  Visit Studio
                </a>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="pt-8 sm:pt-10 md:pt-12 border-t border-primary/30 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-center md:text-left text-xs sm:text-sm text-slate-400 font-medium">
            © 2024 <span className="text-white font-semibold">WedScribe</span> by{' '}
            <a href="https://designbyte.dev" target="_blank" rel="noopener noreferrer" className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-rose-500 to-amber-500 hover:from-primary hover:via-rose-400 hover:to-amber-400 transition-all font-semibold">
              DesignByte Studio
            </a>
            . {t('footer.rights')}
          </p>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 font-medium opacity-90 hover:opacity-100 transition-opacity group">
            Made with <Heart size={14} className="text-rose-500 fill-rose-500 animate-pulse group-hover:scale-125 transition-transform" /> in{' '}
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500">India</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
