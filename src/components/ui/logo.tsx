import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string; // For the container
  textClassName?: string; // Specifically for the text color
}

export const Logo: React.FC<LogoProps> = ({ className, textClassName }) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <img src="/wedscribe-logo.png" alt="WedScribe Logo" className="w-8 h-8 object-contain" />
      <span className={cn("text-xl font-bold font-serif tracking-tight text-foreground", textClassName)}>WedScribe</span>
    </div>
  );
};
