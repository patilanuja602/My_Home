import { useEffect } from "react";
import { motion } from "framer-motion";
import { GaneshaMark, CardFloralDivider } from "./Ornaments";
import "./OpeningSequence.css";

export default function OpeningSequence({ onFinish }) {
  useEffect(() => {
    // Automatically transition after 2.2 seconds - zero clicks needed
    const timer = setTimeout(() => {
      onFinish();
    }, 2200);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      className="card-intro"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.03, transition: { duration: 0.85, ease: "easeInOut" } }}
      role="status"
      aria-live="polite"
    >
      <div className="card-intro__bg" />

      <motion.div
        className="card-intro__content"
        initial={{ opacity: 0, scale: 0.92, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      >
        <GaneshaMark className="card-intro__ganesha" />

        <p className="card-intro__shloka">॥ Shri Ganeshaya Namaha ॥</p>

        <h2 className="card-intro__heading">
          <span className="card-intro__script">A Warm Welcome</span>
          <span className="card-intro__sub">to Our Special Celebration</span>
        </h2>

        <CardFloralDivider className="card-intro__divider" />

        <p className="card-intro__hint">Opening Invitation...</p>

        <div className="card-intro__loader">
          <motion.div
            className="card-intro__loader-bar"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.1, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
