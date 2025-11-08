import React from 'react';
import { Sparkles, Zap, Shield } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Holographic Visuals',
    desc: 'Liquid gradient waveforms and neon futurism for a mesmerizing look.'
  },
  {
    icon: Zap,
    title: 'Parallax Depth',
    desc: 'Layered motion and 3D perspective create immersive movement.'
  },
  {
    icon: Shield,
    title: 'Smooth Performance',
    desc: 'Optimized rendering ensures a seamless, responsive experience.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative isolate bg-black py-24 text-white">
      {/* gradient accents */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 -top-24 -z-0 blur-3xl">
        <div className="mx-auto h-56 w-[80%] bg-gradient-to-r from-fuchsia-500/30 via-violet-500/30 to-cyan-400/30 opacity-60" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Designed for immersion</h2>
          <p className="mt-3 text-white/70">Everything you need to craft a futuristic, cosmic landing experience.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 transition-all hover:bg-white/10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-fuchsia-500 to-cyan-400 text-black">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
