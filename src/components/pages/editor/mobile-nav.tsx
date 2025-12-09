import React from 'react';
import { LayoutGrid, PenTool, Eye } from 'lucide-react';

interface MobileNavProps {
  mobileTab: 'designs' | 'edit' | 'preview';
  setMobileTab: (tab: 'designs' | 'edit' | 'preview') => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ mobileTab, setMobileTab }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 z-50 flex items-center justify-around h-16 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <button 
            onClick={() => setMobileTab('designs')}
            className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${mobileTab === 'designs' ? 'text-primary' : 'text-slate-400'}`}
        >
            <LayoutGrid size={20} />
            <span className="text-[10px] font-bold uppercase tracking-wide">Designs</span>
        </button>
        <button 
            onClick={() => setMobileTab('edit')}
            className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${mobileTab === 'edit' ? 'text-primary' : 'text-slate-400'}`}
        >
            <PenTool size={20} />
            <span className="text-[10px] font-bold uppercase tracking-wide">Edit</span>
        </button>
        <button 
            onClick={() => setMobileTab('preview')}
            className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${mobileTab === 'preview' ? 'text-primary' : 'text-slate-400'}`}
        >
            <Eye size={20} />
            <span className="text-[10px] font-bold uppercase tracking-wide">Preview</span>
        </button>
    </div>
  );
};
