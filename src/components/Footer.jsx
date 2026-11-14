import React from 'react';
import { Compass, Linkedin, Mail, MapPin, Github, ArrowUp, Heart } from 'lucide-react';
import { personalData } from '../data/personal';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-950 border-t border-cyan-500/20 pt-16 pb-12 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-cyan-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand & Tagline */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-400 to-purple-600 p-[1.5px]">
                <div className="w-full h-full bg-slate-950 rounded-[6px] flex items-center justify-center">
                  <Compass className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
              <span className="font-display font-extrabold text-xl tracking-wider text-white">
                ORBIT
              </span>
            </div>
            <p className="text-sm font-semibold text-cyan-400">
              {personalData.mainTagline}
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              A personal digital universe showcasing software engineering, enterprise ITSM workflows, machine learning models, and big data exploration.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>{personalData.location}</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-4 text-cyan-300">
              System Modules
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">About Me</a>
              </li>
              <li>
                <a href="#education" className="hover:text-cyan-400 transition-colors">Education & Academics</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-cyan-400 transition-colors">Technical Skills</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-cyan-400 transition-colors">Genpact Experience</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-400 transition-colors">Featured Projects</a>
              </li>
              <li>
                <a href="#certifications" className="hover:text-cyan-400 transition-colors">Certifications</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Focus Areas */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-4 text-purple-300">
              Core Competencies
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>ServiceNow & ITSM Workflows</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                <span>Java & Spring Boot Development</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                <span>AI & Predictive Machine Learning</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                <span>Big Data & Smart City Analytics</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>Power BI & Interactive Dashboards</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Connect & Socials */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-4 text-cyan-300">
              Let's Connect
            </h4>
            <p className="text-xs text-slate-400">
              Open for software engineering opportunities, MCA campus placements, and technical collaborations.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={personalData.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-lg bg-slate-900 border border-cyan-500/30 text-cyan-400 hover:text-white hover:bg-cyan-500/20 hover:border-cyan-400 transition-all shadow-sm hover:scale-105"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 transition-all shadow-sm hover:scale-105"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalData.email}`}
                aria-label="Email"
                className="p-2.5 rounded-lg bg-slate-900 border border-purple-500/30 text-purple-400 hover:text-white hover:bg-purple-500/20 hover:border-purple-400 transition-all shadow-sm hover:scale-105"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                Return to Top of Orbit
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800/80 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} Harshavardhan A V. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Engineered with React, Three.js, Vite & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
