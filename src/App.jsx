import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-black selection:bg-fuchsia-500/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CTA />
        <footer className="border-t border-white/10 bg-black py-10 text-center text-white/60">
          <p>© {new Date().getFullYear()} Cosmic Flow. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
