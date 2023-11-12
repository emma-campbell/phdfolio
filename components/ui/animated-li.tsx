"use client";

import { motion } from "framer-motion";
import { FC } from "react";

type AnimatedLiProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  animate?: any;
  variants?: any;
  transition?: any;
  initial?: any;
};

const AnimatedLi: FC<AnimatedLiProps> = ({
  children,
  className,
  id,
  animate,
  variants,
  transition,
  initial,
}) => {
  return (
    <motion.div
      className={className}
      animate={animate}
      variants={variants}
      transition={transition}
      initial={initial}
      id={id}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedLi;
