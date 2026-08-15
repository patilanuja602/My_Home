import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import "./MusicToggle.css";

// Synthesizes a soft, warm ambient acoustic melody
class AestheticAmbientDrone {
  constructor() {
    this.ctx = null;
    this.oscillators = [];
    this.gainNode = null;
    this.intervalId = null;
  }

  start() {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    this.ctx = new AudioContext();

    this.gainNode = this.ctx.createGain();
    this.gainNode.gain.setValueAtTime(0.01, this.ctx.currentTime);
    this.gainNode.gain.linearRampToValueAtTime(0.12, this.ctx.currentTime + 1.2);
    this.gainNode.connect(this.ctx.destination);

    // Warm peaceful acoustic drone frequencies (C major 9th / F major)
    const baseFreqs = [130.81, 196.0, 261.63, 329.63];
    baseFreqs.forEach((freq) => {
      const osc = this.ctx.createOscillator();
      const oscGain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      oscGain.gain.setValueAtTime(0.15, this.ctx.currentTime);
      osc.connect(oscGain);
      oscGain.connect(this.gainNode);
      osc.start();
      this.oscillators.push(osc);
    });

    // Soft melodic bell/chime notes
    const notes = [261.63, 329.63, 392.0, 523.25, 587.33, 659.25];
    let idx = 0;
    this.intervalId = setInterval(() => {
      if (!this.ctx || this.ctx.state === "suspended") return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const noteGain = this.ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(notes[idx % notes.length], now);
      idx++;

      noteGain.gain.setValueAtTime(0.001, now);
      noteGain.gain.linearRampToValueAtTime(0.06, now + 0.3);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, now + 2.0);

      osc.connect(noteGain);
      noteGain.connect(this.gainNode);
      osc.start(now);
      osc.stop(now + 2.1);
    }, 2000);
  }

  stop() {
    if (this.intervalId) clearInterval(this.intervalId);
    if (this.gainNode && this.ctx) {
      this.gainNode.gain.linearRampToValueAtTime(0.0001, this.ctx.currentTime + 0.6);
      setTimeout(() => {
        this.oscillators.forEach((o) => {
          try { o.stop(); } catch (e) {}
        });
        if (this.ctx) this.ctx.close();
      }, 700);
    }
  }
}

export default function MusicToggle({ visible = true }) {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);
  const synthRef = useRef(null);

  const toggleMusic = useCallback(() => {
    if (playing) {
      if (audioRef.current && !audioRef.current.paused) {
        audioRef.current.pause();
      }
      if (synthRef.current) {
        synthRef.current.stop();
        synthRef.current = null;
      }
      setPlaying(false);
    } else {
      if (audioRef.current && audioRef.current.src) {
        audioRef.current
          .play()
          .then(() => setPlaying(true))
          .catch(() => {
            const synth = new AestheticAmbientDrone();
            synth.start();
            synthRef.current = synth;
            setPlaying(true);
          });
      } else {
        const synth = new AestheticAmbientDrone();
        synth.start();
        synthRef.current = synth;
        setPlaying(true);
      }
    }
  }, [playing]);

  if (!visible) return null;

  return (
    <>
      <audio ref={audioRef} src="/audio/background-music.mp3" loop preload="none" />

      <motion.button
        type="button"
        className={`aesthetic-music-btn ${playing ? "aesthetic-music-btn--playing" : ""}`}
        onClick={toggleMusic}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        title={playing ? "Mute ambient music" : "Play ambient music"}
        aria-label={playing ? "Mute ambient music" : "Play ambient music"}
      >
        <span className="music-icon">{playing ? "♫" : "♪"}</span>
        <span className="music-label">{playing ? "Music On" : "Play Music"}</span>
      </motion.button>
    </>
  );
}
