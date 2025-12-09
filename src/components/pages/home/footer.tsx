import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '@/components/ui/logo';
import { Heart, Instagram, Twitter, Linkedin, Mail, ExternalLink, Sparkles, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'motion/react';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className="relative overflow-hidden border-t border-primary/20">
      {/* Gradient Background with Brand Colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
      
      {/* Animated Color Blobs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] bg-primary/20 rounded-full blur-[120px] sm:blur-[180px] pointer-events-none animate-blob opacity-60"></div>
      <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] sm:w-[600px] sm:h-[600px] bg-amber-500/15 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none animate-blob animation-delay-2000 opacity-50"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[550px] sm:h-[550px] bg-rose-500/10 rounded-full blur-[90px] sm:blur-[140px] pointer-events-none animate-blob animation-delay-4000 opacity-40"></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16">
        
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-5 sm:space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block"
            >
              <div className="bg-gradient-to-br from-primary/20 via-rose-500/10 to-amber-500/10 p-4 sm:p-5 rounded-2xl backdrop-blur-md border border-primary/30 shadow-2xl shadow-primary/10 hover:shadow-primary/20 transition-all duration-300 hover:scale-105 hover:border-primary/50">
                <Logo textClassName="text-white" /> 
              </div>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-300 leading-relaxed text-xs sm:text-sm max-w-md font-light"
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
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-primary/20 flex items-center justify-center text-slate-300 hover:bg-gradient-to-br hover:from-primary/30 hover:to-primary/20 hover:text-primary hover:border-primary/40 transition-all hover:scale-110 hover:shadow-lg hover:shadow-primary/30"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-rose-500/20 flex items-center justify-center text-slate-300 hover:bg-gradient-to-br hover:from-rose-500/30 hover:to-rose-500/20 hover:text-rose-400 hover:border-rose-500/40 transition-all hover:scale-110 hover:shadow-lg hover:shadow-rose-500/30"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-amber-500/20 flex items-center justify-center text-slate-300 hover:bg-gradient-to-br hover:from-amber-500/30 hover:to-amber-500/20 hover:text-amber-400 hover:border-amber-500/40 transition-all hover:scale-110 hover:shadow-lg hover:shadow-amber-500/30"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </motion.div>
          </div>

          {/* Links Column 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-white font-bold mb-5 sm:mb-6 tracking-wide uppercase text-[10px] sm:text-xs flex items-center gap-2 pb-3 border-b border-primary/30">
              <Sparkles size={14} className="text-amber-400 animate-pulse" />
              {t('footer.col.product')}
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <Link to="/editor" className="text-slate-400 hover:text-primary transition-all duration-300 flex items-center gap-2 group py-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary transition-all mr-1 group-hover:scale-125"></span>
                  {t('nav.templates')}
                  <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                </Link>
              </li>
              <li>
                <a href="#features" className="text-slate-400 hover:text-primary transition-all duration-300 flex items-center gap-2 group py-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary transition-all mr-1 group-hover:scale-125"></span>
                  Features
                  <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                </a>
              </li>
              <li>
                <a href="#templates" className="text-slate-400 hover:text-primary transition-all duration-300 flex items-center gap-2 group py-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary transition-all mr-1 group-hover:scale-125"></span>
                  Templates
                  <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Links Column 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <h3 className="text-white font-bold mb-5 sm:mb-6 tracking-wide uppercase text-[10px] sm:text-xs flex items-center gap-2 pb-3 border-b border-rose-500/30">
              <Sparkles size={14} className="text-rose-400 animate-pulse" />
              {t('footer.col.company')}
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <a href="https://designbyte.dev" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-rose-400 transition-all duration-300 flex items-center gap-2 group py-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500/0 group-hover:bg-rose-500 transition-all mr-1 group-hover:scale-125"></span>
                  About DesignByte
                  <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-rose-400" />
                </a>
              </li>
              <li>
                <a href="https://studio.designbyte.dev" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-rose-400 transition-all duration-300 flex items-center gap-2 group py-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500/0 group-hover:bg-rose-500 transition-all mr-1 group-hover:scale-125"></span>
                  Studio
                  <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-rose-400" />
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-rose-400 transition-all duration-300 flex items-center gap-2 group py-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500/0 group-hover:bg-rose-500 transition-all mr-1 group-hover:scale-125"></span>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-rose-400 transition-all duration-300 flex items-center gap-2 group py-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500/0 group-hover:bg-rose-500 transition-all mr-1 group-hover:scale-125"></span>
                  Terms of Service
                </a>
              </li>
            </ul>
          </motion.div>
          
        </div>

        {/* Contact Section - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-12 sm:mb-16"
        >
          <div className="bg-gradient-to-r from-primary/10 via-rose-500/5 to-amber-500/10 rounded-2xl p-6 sm:p-8 border border-primary/20 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 mb-3">
                  <Mail size={18} className="text-amber-400" />
                  <h3 className="text-white font-bold tracking-wide uppercase text-xs sm:text-sm">
                    {t('footer.col.contact')}
                  </h3>
                </div>
                <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">Have questions? We're here to help.</p>
                <a 
                  href="mailto:hello@designbyte.dev" 
                  className="inline-flex items-center gap-2 text-primary hover:text-amber-400 transition-all font-semibold text-sm sm:text-base group mt-2"
                >
                  hello@designbyte.dev
                  <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
              
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 p-5 rounded-xl border border-primary/20 backdrop-blur-sm hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                <p className="text-xs text-slate-400 mb-2 font-medium uppercase tracking-wider">Built by</p>
                <a 
                  href="https://designbyte.dev" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white font-bold text-sm sm:text-base hover:text-primary transition-all flex items-center gap-2 group"
                >
                  DesignByte Studio
                  <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-primary group-hover:translate-x-1" />
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
          className="pt-6 sm:pt-8 md:pt-10 border-t border-primary/20 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-center md:text-left text-[10px] sm:text-xs text-slate-400 font-medium">
            © 2024 <span className="text-white font-semibold">WedScribe</span> by{' '}
            <a href="https://designbyte.dev" target="_blank" rel="noopener noreferrer" className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-rose-500 to-amber-500 hover:from-primary hover:via-rose-400 hover:to-amber-400 transition-all font-semibold">
              DesignByte Studio
            </a>
            . {t('footer.rights')}
          </p>
          <div className="flex items-center gap-2 text-[10px] sm:text-xs text-slate-400 font-medium opacity-90 hover:opacity-100 transition-opacity group">
            Made with <Heart size={12} className="text-rose-500 fill-rose-500 animate-pulse group-hover:scale-125 transition-transform" /> in{' '}
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500">India</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
