// Web Audio API sound synthesizer for authentic Indian temple bell chimes and ambient Indian tanpura drones.

let audioCtx = null;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      audioCtx = new AudioContext();
    }
  }
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  return audioCtx;
}

// Auspicious Temple Bell (Ghanti) chime synthesis
export function playTempleChime() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;

    // Harmonic frequencies of brass temple bell (Fundamental ~587Hz (D5), overtones)
    const bellPartials = [
      { freq: 587.33, gain: 0.5, decay: 2.8 },
      { freq: 1174.66, gain: 0.35, decay: 2.2 },
      { freq: 1760.0, gain: 0.25, decay: 1.8 },
      { freq: 2349.32, gain: 0.15, decay: 1.2 },
      { freq: 2936.65, gain: 0.08, decay: 0.8 },
    ];

    bellPartials.forEach((partial) => {
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(partial.freq, now);

      gainNode.gain.setValueAtTime(0, now);
      gainNode.gain.linearRampToValueAtTime(partial.gain, now + 0.015);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, now + partial.decay);

      osc.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + partial.decay + 0.1);
    });

    // Secondary subtle chime at +0.35s
    setTimeout(() => {
      if (!audioCtx) return;
      const t = audioCtx.currentTime;
      [
        { freq: 880.0, gain: 0.25, decay: 2.0 },
        { freq: 1760.0, gain: 0.15, decay: 1.5 },
      ].forEach((p) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(p.freq, t);
        gain.gain.setValueAtTime(0, t);
        gain.gain.linearRampToValueAtTime(p.gain, t + 0.01);
        gain.gain.exponentialRampToValueAtTime(0.0001, t + p.decay);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(t);
        osc.stop(t + p.decay + 0.1);
      });
    }, 350);
  } catch (err) {
    console.warn("Temple chime audio could not play", err);
  }
}
