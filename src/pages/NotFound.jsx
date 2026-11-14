import React from 'react';
import { Compass, ArrowLeft, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-orbit-bg text-white flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -bottom-10 -right-10" />

      <div className="relative z-10 max-w-md w-full text-center space-y-6 p-8 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-md shadow-2xl">
        <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mx-auto text-cyan-400">
          <Compass className="w-8 h-8 animate-spin-slow" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
            Error 404 • Orbital Trajectory Lost
          </span>
          <h1 className="font-display font-black text-4xl text-white">
            Lost in Deep Space
          </h1>
          <p className="text-sm text-slate-400 leading-relaxed">
            The coordinates you requested do not exist within the ORBIT network. Re-align your trajectory to return to base.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-neon-cyan flex items-center justify-center gap-2 transition-transform hover:scale-105"
          >
            <Home className="w-4 h-4" />
            <span>Return to Orbit Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
