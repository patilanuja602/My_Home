import { useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import OpeningSequence from "./components/OpeningSequence";
import Hero from "./components/Hero";
import DigitalCard from "./components/DigitalCard";
import ParentsSection from "./components/ParentsSection";
import SiblingsSection from "./components/SiblingsSection";
import LocationQRSection from "./components/LocationQRSection";
import MusicToggle from "./components/MusicToggle";
import "./App.css";

export default function App() {
  const [introDone, setIntroDone] = useState(false);

  const finishIntro = useCallback(() => {
    setIntroDone(true);
  }, []);

  return (
    <>
      {/* Starting Welcome Screen (Automatic 2.2s cinematic intro, zero clicks needed) */}
      <AnimatePresence>
        {!introDone && (
          <OpeningSequence key="opening-intro" onFinish={finishIntro} />
        )}
      </AnimatePresence>

      {/* Main 5-Page Aesthetic Digital Invitation Story */}
      <main className={`site ${introDone ? "site--visible" : "site--hidden"}`}>
        {/* Page 1: Cinematic Cover (Clear Home -> Soft Blur -> Family Photo -> Moving Texts) */}
        <Hero isTriggered={introDone} />

        {/* Page 2: Official Fullscreen Digital Invitation Details */}
        <DigitalCard />

        {/* Page 3: Parents Photo & Heartfelt Blessing Quote */}
        <ParentsSection />

        {/* Page 4: Siblings Photo & Warm Welcome Quote */}
        <SiblingsSection />

        {/* Page 5: Scannable Google Maps Navigation QR Code & Directions */}
        <LocationQRSection />
      </main>

      {/* Subtle Background Music Toggle */}
      <MusicToggle visible={introDone} />
    </>
  );
}
