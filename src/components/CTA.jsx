import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section id="cta" className="relative bg-black py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-tr from-fuchsia-500/20 via-violet-500/20 to-cyan-400/20 p-8 ring-1 ring-white/10 backdrop-blur">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <h3 className="text-2xl font-bold">Build your cosmic landing today</h3>
              <p className="mt-2 max-w-xl text-white/80">A stunning, parallax-forward hero with a 3D Spline cover. Perfect for games, entertainment, and futuristic brands.</p>
            </div>
            <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black shadow-lg transition-transform hover:scale-[1.02]">
              Get Started <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
