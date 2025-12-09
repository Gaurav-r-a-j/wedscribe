import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Menu } from 'lucide-react';
import { Logo } from '@/components/ui/logo';
import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const handleStart = () => navigate('/editor');
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl transition-all"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Logo />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink href="#features" className={navigationMenuTriggerStyle()}>
                  Features
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#templates" className={navigationMenuTriggerStyle()}>
                  Templates
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#faq" className={navigationMenuTriggerStyle()}>
                  FAQ
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <Button 
            onClick={handleStart}
            size="sm"
            className="gap-2 group ml-4"
          >
            Create Now <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="font-serif text-2xl text-left">WedScribe</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-4 mt-8">
                <a href="#features" className="text-lg font-medium hover:text-primary transition-colors">Features</a>
                <a href="#templates" className="text-lg font-medium hover:text-primary transition-colors">Templates</a>
                <a href="#faq" className="text-lg font-medium hover:text-primary transition-colors">FAQ</a>
                <Button onClick={handleStart} className="w-full mt-4">
                  Create Now
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
};
