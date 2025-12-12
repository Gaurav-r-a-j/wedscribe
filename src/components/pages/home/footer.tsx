import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '@/components/ui/logo';
import { Heart, Instagram, Twitter, Linkedin, Mail, ExternalLink, Sparkles, ArrowRight, Github } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'motion/react';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className="relative overflow-hidden border-t border-primary/20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Animated Brand Color Blobs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] bg-primary/12 rounded-full blur-[150px] sm:blur-[200px] pointer-events-none animate-blob"></div>
      <div className="absolute bottom-0 right-1/4 w-[550px] h-[550px] sm:w-[750px] sm:h-[750px] bg-primary/8 rounded-full blur-[130px] sm:blur-[180px] pointer-events-none animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] bg-primary/6 rounded-full blur-[120px] sm:blur-[170px] pointer-events-none animate-blob animation-delay-4000"></div>

      {/* Gradient Mesh Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-primary/3 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16">

          {/* Brand Column - Larger */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block group"
            >
              <div className="relative bg-gradient-to-br from-primary/20 to-primary/10 p-4 sm:p-5 rounded-xl backdrop-blur-md border border-primary/30 shadow-xl shadow-primary/10 hover:shadow-primary/20 transition-all duration-300 hover:scale-[1.02] hover:border-primary/50 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <Logo textClassName="text-white drop-shadow-md" />
                </div>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-300 leading-relaxed text-sm max-w-md font-light"
            >
              {t('footer.brand.desc')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex gap-2.5 pt-1"
            >
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-11 h-11 rounded-lg bg-slate-800/60 backdrop-blur-sm border border-primary/20 flex items-center justify-center text-slate-300 hover:text-primary transition-all hover:scale-110 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/20"
                aria-label="Twitter"
              >
                <Twitter size={18} className="group-hover:scale-110 transition-transform" />
                <div className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-11 h-11 rounded-lg bg-slate-800/60 backdrop-blur-sm border border-primary/20 flex items-center justify-center text-slate-300 hover:text-primary transition-all hover:scale-110 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/20"
                aria-label="Instagram"
              >
                <Instagram size={18} className="group-hover:scale-110 transition-transform" />
                <div className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-11 h-11 rounded-lg bg-slate-800/60 backdrop-blur-sm border border-primary/20 flex items-center justify-center text-slate-300 hover:text-primary transition-all hover:scale-110 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/20"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
                <div className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
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
            <h3 className="text-white font-bold mb-5 tracking-wide uppercase text-xs flex items-center gap-2 pb-2.5 border-b border-primary/30">
              <div className="p-1 rounded-md bg-primary/20 border border-primary/30">
                <Sparkles size={12} className="text-primary" />
              </div>
              {t('footer.col.product')}
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link to="/editor" className="text-slate-400 hover:text-primary transition-all duration-200 flex items-center gap-2 group py-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary transition-all group-hover:scale-125"></span>
                  <span className="flex-1 text-sm">{t('nav.templates')}</span>
                  <ExternalLink size={11} className="opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                </Link>
              </li>
              <li>
                <a href="#features" className="text-slate-400 hover:text-primary transition-all duration-200 flex items-center gap-2 group py-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary transition-all group-hover:scale-125"></span>
                  <span className="flex-1 text-sm">Features</span>
                  <ExternalLink size={11} className="opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                </a>
              </li>
              <li>
                <a href="#templates" className="text-slate-400 hover:text-primary transition-all duration-200 flex items-center gap-2 group py-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary transition-all group-hover:scale-125"></span>
                  <span className="flex-1 text-sm">Templates</span>
                  <ExternalLink size={11} className="opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
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
            <h3 className="text-white font-bold mb-5 tracking-wide uppercase text-xs flex items-center gap-2 pb-2.5 border-b border-primary/30">
              <div className="p-1 rounded-md bg-primary/20 border border-primary/30">
                <Sparkles size={12} className="text-primary" />
              </div>
              {t('footer.col.company')}
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a href="https://designbyte.dev" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-all duration-200 flex items-center gap-2 group py-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary transition-all group-hover:scale-125"></span>
                  <span className="flex-1 text-sm">About DesignByte</span>
                  <ExternalLink size={11} className="opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                </a>
              </li>
              <li>
                <a href="https://studio.designbyte.dev" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-all duration-200 flex items-center gap-2 group py-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary transition-all group-hover:scale-125"></span>
                  <span className="flex-1 text-sm">Studio</span>
                  <ExternalLink size={11} className="opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-primary transition-all duration-200 flex items-center gap-2 group py-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary transition-all group-hover:scale-125"></span>
                  <span className="flex-1 text-sm">Privacy Policy</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-primary transition-all duration-200 flex items-center gap-2 group py-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary transition-all group-hover:scale-125"></span>
                  <span className="flex-1 text-sm">Terms of Service</span>
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
            <h3 className="text-white font-bold mb-5 tracking-wide uppercase text-xs flex items-center gap-2 pb-2.5 border-b border-primary/30">
              <div className="p-1 rounded-md bg-primary/20 border border-primary/30">
                <Mail size={12} className="text-primary" />
              </div>
              {t('footer.col.contact')}
            </h3>
            <div className="space-y-3">
              <p className="text-slate-300 text-sm font-light leading-relaxed">Have questions? We're here to help.</p>
              <a
                href="mailto:hello@designbyte.dev"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-all font-semibold text-sm group"
              >
                hello@designbyte.dev
                <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
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
          className="mb-10 sm:mb-12"
        >
          <div className="bg-gradient-to-br from-primary/12 to-primary/6 rounded-xl p-5 sm:p-6 border border-primary/25 backdrop-blur-md shadow-xl shadow-primary/5 hover:shadow-primary/10 transition-all duration-300 hover:border-primary/40">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
              <div className="space-y-2">
                <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Built with ❤️ by</p>
                <a
                  href="https://designbyte.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-bold text-base sm:text-lg hover:text-primary transition-all flex items-center gap-2 group"
                >
                  DesignByte Studio
                  <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-all text-primary group-hover:translate-x-1" />
                </a>
                <p className="text-slate-400 text-xs font-light">Crafting beautiful digital experiences</p>
              </div>

              <a
                href="https://designbyte.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-primary/20 border border-primary/30 text-primary hover:bg-primary/30 hover:border-primary/40 transition-all text-sm font-semibold whitespace-nowrap"
              >
                Visit Studio
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="pt-6 sm:pt-8 border-t border-primary/20 flex flex-col md:flex-row justify-between items-center gap-3"
        >
          <p className="text-center md:text-left text-xs text-slate-400 font-medium">
            © 2024 <span className="text-white font-semibold">WedScribe</span> by{' '}
            <a href="https://designbyte.dev" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-all font-semibold">
              DesignByte Studio
            </a>
            . {t('footer.rights')}
          </p>
          <div className="flex items-center gap-2 text-xs text-slate-400 font-medium opacity-90 hover:opacity-100 transition-opacity group">
            Made with <Heart size={12} className="text-primary fill-primary animate-pulse group-hover:scale-125 transition-transform" /> in{' '}
            <span className="font-semibold text-primary">India</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
