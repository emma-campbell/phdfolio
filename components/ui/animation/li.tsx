"use client";

import { motion } from "framer-motion";
import { FC } from "react";
import { AnimationProps } from "./props";

const AnimatedLi: FC<AnimationProps> = ({
  children,
  className,
  id,
  animate,
  variants,
  transition,
  initial,
}) => {
  return (
    <motion.li
      className={className}
      animate={animate}
      variants={variants}
      transition={transition}
      initial={initial}
      id={id}
    >
      {children}
    </motion.li>
  );
};

export default AnimatedLi;
