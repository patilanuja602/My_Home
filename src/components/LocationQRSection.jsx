import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import QRCode from "qrcode";
import { PinIcon, MapArrowIcon, CardFloralDivider } from "./Ornaments";
import "./LocationQRSection.css";

const LOCATION_NAME = "NKMV High School Morabagi, Morbagi, Maharashtra 416413";
const MAPS_NAV_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  LOCATION_NAME
)}`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.15,
    },
  },
};

const itemFadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function LocationQRSection() {
  const [qrDataUrl, setQrDataUrl] = useState("");

  useEffect(() => {
    // Generate high-resolution scannable QR code linking to direct Google Maps navigation
    QRCode.toDataURL(
      MAPS_NAV_URL,
      {
        width: 320,
        margin: 2,
        color: {
          dark: "#223828", // Forest sage dark ink
          light: "#faf7f0", // Warm ivory card
        },
        errorCorrectionLevel: "H",
      },
      (err, url) => {
        if (!err && url) {
          setQrDataUrl(url);
        }
      }
    );
  }, []);

  return (
    <section className="location-qr-section" id="location" aria-label="Location & QR Navigation">
      <div className="location-qr-section__bg-overlay" />

      <div className="container location-qr-container">
        <motion.div
          className="location-qr-flow"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {/* STEP 1: Heading */}
          <motion.div variants={itemFadeUp} className="location-header-block">
            <div className="location-pin-badge">
              <PinIcon className="location-pin-icon" />
              <span>Location &amp; Directions</span>
            </div>
            <h2 className="location-main-title">Find Our Home</h2>
            <CardFloralDivider className="location-divider-svg" />
          </motion.div>

          {/* STEP 2: Scannable QR Code Card */}
          <motion.div
            className="qr-card-showcase"
            variants={itemFadeUp}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <div className="qr-frame">
              {/* Corner Gold Accent Brackets */}
              <span className="corner-bracket corner-bracket--tl" />
              <span className="corner-bracket corner-bracket--br" />

              <div className="qr-image-matting">
                {qrDataUrl ? (
                  <img
                    src={qrDataUrl}
                    alt="QR code for Google Maps turn-by-turn navigation to Suvarna Nivasa"
                    className="qr-code-img"
                  />
                ) : (
                  <div className="qr-placeholder">Generating QR...</div>
                )}
              </div>

              <div className="qr-scan-badge">
                <span>Scan for Navigation</span>
              </div>
            </div>
          </motion.div>

          {/* STEP 3: Address & Directions Instruction */}
          <motion.div variants={itemFadeUp} className="location-address-card">
            <p className="address-highlight">
              Beside NKMV High School, Morabagi
            </p>
            <address className="address-full">
              Morbagi, TQ: Jath, Dist: Sangli, Maharashtra 416413
            </address>
            <p className="scan-instructions">
              Scan with your phone camera to start live Google Maps navigation.
            </p>
          </motion.div>

          {/* STEP 4: Direct Tap Button for Mobile */}
          <motion.div variants={itemFadeUp} className="location-action-wrap">
            <a
              href={MAPS_NAV_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="location-nav-btn"
            >
              <MapArrowIcon className="location-nav-icon" />
              <span>Navigate in Google Maps</span>
            </a>
          </motion.div>

          {/* STEP 5: Auspicious Closing Footer */}
          <motion.div variants={itemFadeUp} className="location-closing-footer">
            <p className="closing-mantra">॥ गृहप्रवेश &middot; सुवर्ण निवास ॥</p>
            <p className="closing-copy">
              Suvarna Nivasa &middot; House Warming Ceremony &middot; 21 August 2026
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
