import { motion } from "framer-motion";
import familyImg from "../assets/family.jpg";
import {
  GaneshaMark,
  EucalyptusSprays,
  CardFloralDivider,
  SamaiDiyaIllustration,
  KalashIllustration,
  CalendarIcon,
  PinIcon,
  ClockIcon,
} from "./Ornaments";
import "./DigitalCard.css";

// Luxurious, slow, stately pacing so each element glides in gracefully
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.42, // Generous, unhurried delay between each element
      delayChildren: 0.3,
    },
  },
};

const itemFadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.35, ease: [0.22, 1, 0.36, 1] },
  },
};

const houseArtVariant = {
  hidden: { opacity: 0, scale: 0.86, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 1.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function DigitalCard() {
  return (
    <section className="fullscreen-invitation" id="invitation" aria-label="Official Invitation Details">
      {/* Background Ambience with Foliage Sprays */}
      <div className="fullscreen-invitation__bg-overlay" />

      {/* Top Corner Sage Foliage Branches */}
      <motion.div
        className="invitation-spray invitation-spray--tl"
        animate={{ rotate: [-0.5, 1, -0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <EucalyptusSprays className="invitation-spray-svg" />
      </motion.div>

      <motion.div
        className="invitation-spray invitation-spray--tr"
        animate={{ rotate: [0.5, -1, 0.5] }}
        transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <EucalyptusSprays className="invitation-spray-svg" flip />
      </motion.div>

      {/* Main Full-Screen Content with Sequential Staggered Animations */}
      <div className="container fullscreen-invitation__container">
        <motion.div
          className="invitation-main-flow"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {/* STEP 1: Crisp Family Portrait Centerpiece (Appears First, Slower & Majestic) */}
          <motion.div
            className="invitation-house-showcase"
            variants={houseArtVariant}
            whileHover={{ scale: 1.02, transition: { duration: 0.4 } }}
          >
            <div className="invitation-house-frame">
              <div className="invitation-family-matting">
                <img
                  src={familyImg}
                  alt="The Family - Suvarna Nivasa"
                  className="invitation-house-img"
                />
              </div>
              {/* Corner Gold Accent Brackets */}
              <span className="corner-bracket corner-bracket--tl" />
              <span className="corner-bracket corner-bracket--br" />
            </div>
          </motion.div>

          {/* STEP 2: Ganesha Mark */}
          <motion.div variants={itemFadeUp} className="invitation-ganesha-wrap">
            <GaneshaMark className="invitation-ganesha-svg" />
          </motion.div>

          {/* STEP 3: Heartfelt Welcome Sentence from First Page */}
          <motion.p variants={itemFadeUp} className="invitation-lead-text">
            With open hearts &amp; joyful smiles, we warmly welcome you to bless our new home.
          </motion.p>

          {/* STEP 4: Title: HOUSE Warming CEREMONY */}
          <motion.div variants={itemFadeUp} className="invitation-title-group">
            <span className="title-house">HOUSE</span>
            <span className="title-warming">Warming</span>
            <span className="title-ceremony">CEREMONY</span>
          </motion.div>

          {/* STEP 5: Floral Divider */}
          <motion.div variants={itemFadeUp} className="invitation-divider-wrap">
            <CardFloralDivider className="invitation-divider-svg" />
          </motion.div>

          {/* STEP 6: House Name: Suvarna nivasa */}
          <motion.h2 variants={itemFadeUp} className="invitation-house-name">
            Suvarna nivasa
          </motion.h2>

          {/* STEP 7: 3-Column Info Block (Date, Place, Time) */}
          <motion.div variants={itemFadeUp} className="invitation-info-grid">
            {/* Column 1: DATE */}
            <div className="info-column">
              <div className="info-header">
                <CalendarIcon className="info-icon" />
                <span className="info-tag">DATE</span>
              </div>
              <p className="info-primary">21/08/26</p>
              <p className="info-secondary">Friday</p>
            </div>

            <div className="info-divider-line" />

            {/* Column 2: PLACE */}
            <div className="info-column info-column--center">
              <div className="info-header">
                <PinIcon className="info-icon" />
                <span className="info-tag">PLACE</span>
              </div>
              <address className="info-address-text">
                Beside NKMV highschool
                <br />
                Morabagi
                <br />
                TQ:. Jath
                <br />
                Dist: Sangli
              </address>
            </div>

            <div className="info-divider-line" />

            {/* Column 3: TIME */}
            <div className="info-column">
              <div className="info-header">
                <ClockIcon className="info-icon" />
                <span className="info-tag">TIME</span>
              </div>
              <p className="info-primary">9:00 AM</p>
              <p className="info-secondary">Morning</p>
            </div>
          </motion.div>

          {/* STEP 8: Bottom Quote & Corner Illustrations */}
          <motion.div variants={itemFadeUp} className="invitation-bottom-wrap">
            <div className="invitation-separator-line" />

            <div className="invitation-quote-block">
              <p className="invitation-quote-text">
                Your presence will make our home complete.
              </p>
              <motion.span
                className="invitation-heart"
                animate={{ scale: [1, 1.22, 1] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              >
                ♥
              </motion.span>
            </div>

            {/* Brass Samai Diya & Kalash Framing Bottom */}
            <div className="invitation-corner-decor">
              <div className="corner-decor corner-decor--left">
                <SamaiDiyaIllustration className="corner-decor-svg" />
              </div>
              <div className="corner-decor corner-decor--right">
                <KalashIllustration className="corner-decor-svg" />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Minimal Signature Footer */}
        <p className="invitation-footer-copy">
          Suvarna Nivasa &middot; House Warming Ceremony &middot; 21 August 2026
        </p>
      </div>
    </section>
  );
}
