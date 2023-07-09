import { motion } from "framer-motion/dist/framer-motion";
import React from "react";

const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      transition={{ duration: 0.2 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
