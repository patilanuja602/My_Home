import { motion, useReducedMotion } from "framer-motion";

// A small orchestration primitive so every section reveals with the same
// restrained, cinematic hand instead of each component inventing its own
// easing and offsets.
export default function Reveal({
  children,
  as = "div",
  delay = 0,
  y = 28,
  duration = 0.9,
  className,
  once = true,
  amount = 0.3,
  ...rest
}) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as] || motion.div;

  if (reduceMotion) {
    const Static = as;
    return (
      <Static className={className} {...rest}>
        {children}
      </Static>
    );
  }

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </Component>
  );
}
