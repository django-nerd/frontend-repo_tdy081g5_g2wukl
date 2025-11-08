import React from 'react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl bg-black/30 backdrop-blur-xl ring-1 ring-white/10">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-fuchsia-500 via-violet-500 to-cyan-400" />
              <span className="text-sm font-semibold tracking-wide text-white/90">Cosmic Flow</span>
            </div>
            <nav className="hidden gap-6 text-sm text-white/70 md:flex">
              <a href="#features" className="hover:text-white transition-colors">Features</a>
              <a href="#showcase" className="hover:text-white transition-colors">Showcase</a>
              <a href="#cta" className="hover:text-white transition-colors">Get Started</a>
            </nav>
            <div className="flex items-center gap-3">
              <a href="#cta" className="inline-flex items-center rounded-xl bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur-md ring-1 ring-white/15 hover:bg-white/15 transition-colors">Launch</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
