import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import houseImg from "../assets/house.jpg";
import familyImg from "../assets/family.jpg";
import { GaneshaMark, CardFloralDivider } from "./Ornaments";
import "./Hero.css";

const TARGET_DATE = new Date("2026-08-21T09:00:00+05:30").getTime();

export default function Hero({ isTriggered = false }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const diff = TARGET_DATE - now;
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000),
        });
      }
    };
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="aesthetic-cover" id="cover" aria-label="Suvarna Nivasa Welcome">
      {/* Background Home Photo: Entire house fully visible & scaled, then smoothly blurs */}
      <div className="aesthetic-cover__bg">
        <motion.img
          src={houseImg}
          alt="Suvarna Nivasa Architecture"
          className="aesthetic-cover__bg-img"
          initial={{
            filter: "blur(0px) brightness(1) contrast(1)",
            scale: 1.0,
          }}
          animate={
            isTriggered
              ? {
                  filter: "blur(3.4px) brightness(0.92) contrast(1.02)",
                  scale: 1.02,
                }
              : {
                  filter: "blur(0px) brightness(1) contrast(1)",
                  scale: 1.0,
                }
          }
          transition={{
            duration: 1.5,
            delay: 0.8, // Brisk & snappy timing
            ease: [0.4, 0, 0.2, 1],
          }}
        />
        {/* Soft aesthetic overlay fades in as the background softens */}
        <motion.div
          className="aesthetic-cover__bg-overlay"
          initial={{ opacity: 0.05 }}
          animate={isTriggered ? { opacity: 1 } : { opacity: 0.05 }}
          transition={{
            duration: 1.5,
            delay: 0.8,
            ease: [0.4, 0, 0.2, 1],
          }}
        />
      </div>

      <div className="container aesthetic-cover__content">
        {/* Top Header: Texts glide in smoothly with snappy, engaging pace */}
        <div className="aesthetic-cover__header">
          {/* STEP 1 (Text): Ganesha Mark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -10 }}
            animate={isTriggered ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 1.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <GaneshaMark className="aesthetic-cover__ganesha" />
          </motion.div>

          {/* STEP 2 (Text): Sub-heading */}
          <motion.p
            className="aesthetic-cover__invite-text"
            initial={{ opacity: 0, y: 10 }}
            animate={isTriggered ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 2.1, ease: [0.22, 1, 0.36, 1] }}
          >
            You are cordially invited to our
          </motion.p>

          {/* STEP 3 (Text): Title: HOUSE Warming CEREMONY */}
          <motion.div
            className="aesthetic-cover__title-wrap"
            initial={{ opacity: 0, y: 12 }}
            animate={isTriggered ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.7, delay: 2.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="aesthetic-cover__house">HOUSE</span>
            <span className="aesthetic-cover__warming">Warming</span>
            <span className="aesthetic-cover__ceremony">CEREMONY</span>
          </motion.div>

          {/* STEP 4 (Text): Floral Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isTriggered ? { opacity: 1, scaleX: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 2.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <CardFloralDivider className="aesthetic-cover__divider" />
          </motion.div>

          {/* STEP 5 (Text): House Name */}
          <motion.h1
            className="aesthetic-cover__home-name"
            initial={{ opacity: 0, y: 12 }}
            animate={isTriggered ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.7, delay: 2.9, ease: [0.22, 1, 0.36, 1] }}
          >
            Suvarna nivasa
          </motion.h1>
        </div>

        {/* Centerpiece: Family Photo (No names below it on 1st page) */}
        <motion.div
          className="aesthetic-cover__centerpiece"
          initial={{ opacity: 0, scale: 0.88, y: 20 }}
          animate={isTriggered ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0 }}
          transition={{ duration: 0.85, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -3, transition: { duration: 0.25 } }}
        >
          <div className="family-card-frame">
            <div className="family-card-matting">
              <img
                src={familyImg}
                alt="The host family of Suvarna Nivasa"
                className="family-card-img"
              />
            </div>
            {/* Corner Gold Accent Brackets */}
            <span className="corner-bracket corner-bracket--tl" />
            <span className="corner-bracket corner-bracket--br" />

            <div className="family-card-badge">
              <span>The Family</span>
            </div>
          </div>
        </motion.div>

        {/* Bottom Details & Minimalist Countdown */}
        <motion.div
          className="aesthetic-cover__footer"
          initial={{ opacity: 0, y: 12 }}
          animate={isTriggered ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ duration: 0.7, delay: 3.3, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Heartfelt Welcome Sentence */}
          <p className="cover-heartfelt-welcome">
            With open hearts &amp; joyful smiles, we warmly welcome you to bless our new home.
          </p>

          {/* Live Countdown Pill */}
          <div className="aesthetic-countdown">
            <div className="countdown-item">
              <span className="countdown-num">{String(timeLeft.days).padStart(2, "0")}</span>
              <span className="countdown-txt">Days</span>
            </div>
            <span className="countdown-dots">:</span>
            <div className="countdown-item">
              <span className="countdown-num">{String(timeLeft.hours).padStart(2, "0")}</span>
              <span className="countdown-txt">Hours</span>
            </div>
            <span className="countdown-dots">:</span>
            <div className="countdown-item">
              <span className="countdown-num">{String(timeLeft.minutes).padStart(2, "0")}</span>
              <span className="countdown-txt">Mins</span>
            </div>
            <span className="countdown-dots">:</span>
            <div className="countdown-item">
              <span className="countdown-num">{String(timeLeft.seconds).padStart(2, "0")}</span>
              <span className="countdown-txt">Secs</span>
            </div>
          </div>

          <a href="#invitation" className="aesthetic-scroll-cta">
            <span>View Full Invitation Details</span>
            <span className="scroll-down-icon">↓</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
