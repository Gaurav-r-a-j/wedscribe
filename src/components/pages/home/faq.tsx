import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from 'motion/react';

export const FAQ: React.FC = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold font-serif text-foreground mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground"
          >
            Everything you need to know about creating your biodata.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is my data private?</AccordionTrigger>
              <AccordionContent>
                Yes, absolutely. WedScribe runs entirely in your browser. Your personal information is never sent to our servers. It stays on your device until you choose to download your biodata.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Can I edit my biodata later?</AccordionTrigger>
              <AccordionContent>
                Since we don't store your data, you cannot "log in" to edit later. However, you can save your progress as a JSON file and re-upload it to continue editing anytime.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it really free?</AccordionTrigger>
              <AccordionContent>
                Yes! You can create and download standard biodatas for free. We may offer premium templates or features in the future, but the core functionality will always remain accessible.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>What format is the download?</AccordionTrigger>
              <AccordionContent>
                You get a high-quality A4 PDF file, perfect for sharing via WhatsApp, Email, or printing.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
