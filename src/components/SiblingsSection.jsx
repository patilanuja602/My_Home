import { motion } from "framer-motion";
import siblingsImg from "../assets/siblings.jpg";
import { CardFloralDivider } from "./Ornaments";
import "./SiblingsSection.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.35,
      delayChildren: 0.2,
    },
  },
};

const itemFadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
  },
};

const photoVariant = {
  hidden: { opacity: 0, scale: 0.88, y: 28 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function SiblingsSection() {
  return (
    <section className="siblings-section" id="siblings" aria-label="Siblings Welcome & Celebration">
      <div className="siblings-section__bg-overlay" />

      <div className="container siblings-section__container">
        <motion.div
          className="siblings-main-flow"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {/* STEP 1: Siblings Photo (Moves and appears first) */}
          <motion.div
            className="siblings-photo-showcase"
            variants={photoVariant}
            whileHover={{ y: -4, transition: { duration: 0.3 } }}
          >
            <div className="siblings-card-frame">
              <div className="siblings-card-matting">
                <img
                  src={siblingsImg}
                  alt="Siblings of Suvarna Nivasa"
                  className="siblings-card-img"
                />
              </div>
              {/* Corner Gold Accent Brackets */}
              <span className="corner-bracket corner-bracket--tl" />
              <span className="corner-bracket corner-bracket--br" />

              <div className="siblings-card-badge">
                <span>The Siblings</span>
              </div>
            </div>
          </motion.div>

          {/* STEP 2: Quote Title */}
          <motion.h2 variants={itemFadeUp} className="siblings-quote-heading">
            You&apos;re Invited to Plant Roots with Us!
          </motion.h2>

          {/* STEP 3: Divider */}
          <motion.div variants={itemFadeUp} className="siblings-divider-wrap">
            <CardFloralDivider className="siblings-divider-svg" />
          </motion.div>

          {/* STEP 4: Quote Body */}
          <motion.p variants={itemFadeUp} className="siblings-quote-body">
            As we embark on this exciting journey of turning our new house into a
            home, we invite you to join us for a special housewarming celebration
            unlike any other!
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
