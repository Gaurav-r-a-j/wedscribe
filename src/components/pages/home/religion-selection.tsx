import React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';

interface ReligionCardProps {
  name: string;
  selected?: boolean;
  onClick: () => void;
}

const ReligionCard: React.FC<ReligionCardProps> = ({ name, selected, onClick }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="h-full"
  >
    <Card 
      onClick={onClick}
      className={cn(
        "relative h-full cursor-pointer transition-all duration-300 border-2 hover:shadow-md",
        selected 
          ? "border-primary shadow-lg ring-2 ring-primary/20" 
          : "border-border hover:border-primary/50"
      )}
    >
      <CardContent className="flex flex-col items-center justify-center p-6 h-full aspect-[1.5/1]">
        <span className={cn(
          "text-lg font-bold mb-1 transition-colors",
          selected ? "text-primary" : "text-foreground"
        )}>
          {name}
        </span>
        <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Biodata</span>
      </CardContent>
    </Card>
  </motion.div>
);

interface ReligionSelectionProps {
  onSelect?: (religion: string) => void;
}

export const ReligionSelection: React.FC<ReligionSelectionProps> = ({ onSelect }) => {
  const religions = [
    "Hindu", "Muslim", "Christian", "Sikh", "Buddhist", "Jain"
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-serif text-foreground mb-4">Select Your Community</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground max-w-lg mx-auto">
            We have specialized formats tailored for every community's unique traditions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {religions.map((religion, index) => (
            <motion.div
              key={religion}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ReligionCard 
                name={religion} 
                onClick={() => onSelect?.(religion)} 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
