import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradient overlays for mood without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(65%_60%_at_50%_0%,rgba(10,10,30,0.4),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center text-white">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium ring-1 ring-white/15 backdrop-blur">
          <Star className="h-3.5 w-3.5 text-yellow-300" />
          Immersive cosmic experience
        </div>
        <h1 className="mt-6 bg-gradient-to-tr from-white via-fuchsia-200 to-cyan-200 bg-clip-text text-5xl font-bold leading-tight text-transparent sm:text-6xl md:text-7xl">
          Trippy Galaxy Rollercoaster
        </h1>
        <p className="mt-5 max-w-2xl text-base text-white/80 sm:text-lg">
          Dive into a futuristic universe with neon waveforms and holographic gradients. Glide along a glowing path built for games, entertainment, and pure vibes.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a href="#cta" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black shadow-xl shadow-fuchsia-500/20 transition-transform hover:scale-[1.02]">
            <Rocket className="h-4 w-4" /> Start the ride
          </a>
          <a href="#showcase" className="inline-flex items-center rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 backdrop-blur transition-colors hover:bg-white/15">
            Explore features
          </a>
        </div>
      </div>
    </section>
  );
}
