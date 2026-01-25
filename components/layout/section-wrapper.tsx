"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export function SectionWrapper({ children, id, className }: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn("py-20 px-4 sm:px-6 lg:px-8", className)}
    >
      <div className="max-w-6xl mx-auto">{children}</div>
    </motion.section>
  );
}
