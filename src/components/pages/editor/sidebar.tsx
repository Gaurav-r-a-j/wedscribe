import React from 'react';
import { LayoutGrid, PenTool, Heart } from 'lucide-react';
import { TemplateType } from '@/types';
import { BiodataProfile } from '@/types';
import { EditorContent } from './editor-content';
import { motion } from 'motion/react';

interface SidebarProps {
  desktopTab: 'templates' | 'edit';
  setDesktopTab: (tab: 'templates' | 'edit') => void;
  activeTemplate: TemplateType;
  setActiveTemplate: (type: TemplateType) => void;
  profile: BiodataProfile;
  setProfile: React.Dispatch<React.SetStateAction<BiodataProfile>>;
  onGenerateBio: () => void;
  isGeneratingBio: boolean;
  handleImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ 
  desktopTab, 
  setDesktopTab, 
  activeTemplate, 
  setActiveTemplate,
  profile,
  setProfile,
  onGenerateBio,
  isGeneratingBio,
  handleImageUpload
}) => {
  
  const TemplateCard = ({ type, name, colorClass }: { type: TemplateType, name: string, colorClass: string }) => (
    <motion.button 
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setActiveTemplate(type)}
        className="group flex flex-col text-left transition-all duration-300 w-full"
    >
        <div className={`w-full aspect-[1/1.4] rounded-lg border-2 mb-3 overflow-hidden relative transition-all shadow-sm group-hover:shadow-md ${activeTemplate === type ? 'border-primary ring-2 ring-primary/10' : 'border-slate-100 group-hover:border-primary/30'}`}>
             <div className={`w-full h-full ${colorClass} p-3 flex flex-col`}>
                 <div className="w-full h-1/4 bg-current opacity-10 rounded-sm mb-2" />
                 <div className="flex gap-2 mb-2 grow">
                     <div className="w-full h-full bg-current opacity-5 rounded-sm border border-current/10" />
                 </div>
             </div>
             
             {activeTemplate === type && (
                 <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-2 right-2 bg-primary text-white p-1 rounded-full shadow-lg"
                 >
                     <Heart size={10} fill="currentColor" />
                 </motion.div>
             )}
        </div>
        <span className={`text-xs font-bold uppercase tracking-wider text-center transition-colors ${activeTemplate === type ? 'text-primary' : 'text-slate-500 group-hover:text-slate-700'}`}>{name}</span>
    </motion.button>
  );

  const TemplatesGrid = () => (
    <div className="grid grid-cols-2 gap-x-4 gap-y-8 pb-20 md:pb-0">
        <TemplateCard type={TemplateType.SKY_BLOSSOM} name="Sky Blossom" colorClass="bg-sky-50 text-sky-600" />
        <TemplateCard type={TemplateType.REGAL_ANVIKA} name="Regal Anvika" colorClass="bg-regal-bg text-regal-gold" />
        <TemplateCard type={TemplateType.IVORY_LINES} name="Ivory Lines" colorClass="bg-stone-50 text-stone-600" />
        <TemplateCard type={TemplateType.MINT_BLOSSOM} name="Mint Blossom" colorClass="bg-mint-bg text-mint-dark" />
        <TemplateCard type={TemplateType.ROYAL_RED} name="Royal Red" colorClass="bg-red-50 text-red-900" />
        <TemplateCard type={TemplateType.MINIMALIST} name="Minimalist" colorClass="bg-white text-slate-900 border border-slate-100" />
    </div>
  );

  return (
    <aside className="hidden md:flex w-[400px] bg-white border-r border-slate-200 flex-col z-30 shrink-0 h-full shadow-[4px_0_24px_rgba(0,0,0,0.01)]">
        {/* Desktop Tabs */}
        <div className="px-5 pt-5 pb-4 border-b border-slate-100">
            <div className="flex p-1 bg-slate-100 rounded-lg">
                <button 
                    onClick={() => setDesktopTab('templates')}
                    className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-md text-xs font-bold uppercase tracking-wide transition-all ${desktopTab === 'templates' ? 'bg-white text-primary shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                >
                    <LayoutGrid size={14} /> Templates
                </button>
                <button 
                    onClick={() => setDesktopTab('edit')}
                    className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-md text-xs font-bold uppercase tracking-wide transition-all ${desktopTab === 'edit' ? 'bg-white text-primary shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                >
                    <PenTool size={14} /> Edit Details
                </button>
            </div>
        </div>

        {/* Desktop Content */}
        <div className="flex-1 overflow-y-auto custom-scrollbar bg-white">
            {desktopTab === 'templates' && (
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-6"
                >
                     <div className="mb-6">
                         <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">Select Design</h2>
                         <p className="text-xs text-slate-500">Choose a layout to get started.</p>
                     </div>
                    <TemplatesGrid />
                </motion.div>
            )}
            {desktopTab === 'edit' && (
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-5"
                >
                     <EditorContent 
                        profile={profile} 
                        setProfile={setProfile} 
                        onGenerateBio={onGenerateBio} 
                        isGeneratingBio={isGeneratingBio}
                        handleImageUpload={handleImageUpload}
                     />
                </motion.div>
            )}
        </div>
    </aside>
  );
};
