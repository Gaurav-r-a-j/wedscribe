import React from 'react';
import { Heart, Lock } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
         <div className="flex items-center gap-2">
            <div className="text-primary">
               <Heart size={20} fill="currentColor" />
            </div>
            <span className="font-bold font-serif text-xl text-foreground">WedScribe</span>
         </div>
         <p className="text-muted-foreground text-sm">
           © {new Date().getFullYear()} WedScribe. Crafted with care.
         </p>
         <div className="flex items-center gap-6 text-sm font-medium text-muted-foreground h-5">
           <span className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer"><Lock size={14} /> Secure</span>
           <Separator orientation="vertical" />
           <span className="hover:text-primary transition-colors cursor-pointer">Free Forever</span>
         </div>
      </div>
    </footer>
  );
};
