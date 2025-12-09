import React from 'react';
import { Heart, RefreshCw, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  onBack: () => void;
  onReset: () => void;
  onPrint: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onBack, onReset, onPrint }) => {
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 md:px-6 z-40 shrink-0">
      <div className="flex items-center gap-4">
          <button onClick={onBack} className="group flex items-center gap-2 hover:bg-slate-50 pr-3 py-1.5 rounded-full transition-colors">
              <div className="bg-primary text-white p-1.5 rounded-lg shadow-sm">
                  <Heart size={18} fill="currentColor" />
              </div>
              <h1 className="text-lg font-bold text-slate-900 tracking-tight leading-none font-serif hidden md:block">WedScribe</h1>
          </button>
      </div>

      <div className="flex items-center gap-2 md:gap-3">
           <Button 
              onClick={onReset}
              variant="ghost"
              className={`w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded text-sm text-slate-700 font-medium focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all`}
          >
              <RefreshCw size={14} /> <span className="hidden sm:inline">Reset</span>
          </Button>
          <div className="h-6 w-px bg-slate-200 mx-1 hidden md:block"></div>
          <Button 
              onClick={onPrint}
              className="px-4 md:px-5 py-2 rounded-full text-xs md:text-sm font-bold flex items-center gap-2 transition-all hover:shadow-primary/30"
          >
              <Download size={16} /> <span className="hidden sm:inline">Download PDF</span>
              <span className="sm:hidden">Save</span>
          </Button>
      </div>
    </header>
  );
};
