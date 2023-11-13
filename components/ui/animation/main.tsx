"use client";

import { motion } from "framer-motion";
import { FC } from "react";
import { AnimationProps } from "./props";

const AnimatedMain: FC<AnimationProps> = ({
  children,
  className,
  id,
  animate,
  variants,
  transition,
  initial,
}) => {
  return (
    <motion.main
      className={className}
      animate={animate}
      variants={variants}
      transition={transition}
      initial={initial}
      id={id}
    >
      {children}
    </motion.main>
  );
};

export default AnimatedMain;
