import { motion } from "framer-motion";
import parentsImg from "../assets/parents.jpg";
import { CardFloralDivider } from "./Ornaments";
import "./ParentsSection.css";

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

export default function ParentsSection() {
  return (
    <section className="parents-section" id="parents" aria-label="Parents Blessing & Invitation">
      <div className="parents-section__bg-overlay" />

      <div className="container parents-section__container">
        <motion.div
          className="parents-main-flow"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {/* STEP 1: Parents Photo (Moves and appears first) */}
          <motion.div
            className="parents-photo-showcase"
            variants={photoVariant}
            whileHover={{ y: -4, transition: { duration: 0.3 } }}
          >
            <div className="parents-card-frame">
              <div className="parents-card-matting">
                <img
                  src={parentsImg}
                  alt="Parents of Suvarna Nivasa"
                  className="parents-card-img"
                />
              </div>
              {/* Corner Gold Accent Brackets */}
              <span className="corner-bracket corner-bracket--tl" />
              <span className="corner-bracket corner-bracket--br" />

              <div className="parents-card-badge">
                <span>With Love &amp; Blessings</span>
              </div>
            </div>
          </motion.div>

          {/* STEP 2: Quote Paragraph 1 */}
          <motion.p variants={itemFadeUp} className="parents-quote-lead">
            With grateful hearts to the Almighty,
            <br />
            we step into a new chapter...
            <br />
            By God&apos;s abundant grace,
            <br />
            our long-cherished dream has come true.
          </motion.p>

          {/* STEP 3: Divider */}
          <motion.div variants={itemFadeUp} className="parents-divider-wrap">
            <CardFloralDivider className="parents-divider-svg" />
          </motion.div>

          {/* STEP 4: Subtitle */}
          <motion.p variants={itemFadeUp} className="parents-invite-sub">
            We joyfully invite you to our
          </motion.p>

          {/* STEP 5: Title */}
          <motion.h2 variants={itemFadeUp} className="parents-main-title">
            <span className="parents-title-house">House</span>
            <span className="parents-title-warming">Warming</span>
            <span className="parents-title-ceremony">Ceremony</span>
          </motion.h2>
        </motion.div>
      </div>
    </section>
  );
}
