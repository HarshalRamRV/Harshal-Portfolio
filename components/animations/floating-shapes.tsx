"use client";

import { motion } from "framer-motion";

export function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Top right gradient blob */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl"
      />

      {/* Bottom left gradient blob */}
      <motion.div
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
      />

      {/* Center accent blob */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/10 rounded-full blur-3xl"
      />

      {/* Small floating circles */}
      <motion.div
        animate={{
          y: [0, -40, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-20 left-1/4 w-4 h-4 bg-primary/40 rounded-full"
      />

      <motion.div
        animate={{
          y: [0, 30, 0],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-32 right-1/4 w-3 h-3 bg-secondary/40 rounded-full"
      />

      <motion.div
        animate={{
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 right-20 w-2 h-2 bg-accent/60 rounded-full"
      />
    </div>
  );
}
