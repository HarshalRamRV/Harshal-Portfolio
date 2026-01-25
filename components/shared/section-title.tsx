"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionTitle({
  title,
  subtitle,
  className,
  align = "center",
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "mb-12",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      <h2 className="text-3xl sm:text-4xl font-bold">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: align === "center" ? "6rem" : "4rem" }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={cn(
          "h-1 bg-gradient-to-r from-primary to-secondary rounded-full mt-4",
          align === "center" ? "mx-auto" : ""
        )}
      />
    </motion.div>
  );
}
