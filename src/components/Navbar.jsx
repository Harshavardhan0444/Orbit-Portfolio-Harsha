import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Compass, ChevronRight } from 'lucide-react';
import { personalData } from '../data/personal';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Resume', href: '#resume' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll spy to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = navItems.map((item) => item.href.replace('#', ''));
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    // If we're not on home page (e.g. on project details page), navigate to / and then anchor
    if (window.location.pathname !== '/') {
      window.location.href = '/' + href;
      return;
    }

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(targetId);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-orbit-bg/85 backdrop-blur-md border-b border-cyan-500/20 shadow-lg shadow-black/40 py-2.5'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="relative w-9 h-9 rounded-lg bg-gradient-to-tr from-cyan-500 via-blue-600 to-purple-600 p-[1.5px] shadow-neon-cyan transition-transform group-hover:scale-105">
              <div className="w-full h-full bg-orbit-bg rounded-[7px] flex items-center justify-center">
                <Compass className="w-5 h-5 text-cyan-400 group-hover:rotate-45 transition-transform duration-500" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-lg tracking-wider text-white flex items-center gap-1.5">
                ORBIT
                <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              </span>
              <span className="text-[10px] text-slate-400 tracking-wider uppercase font-mono">
                Harshavardhan A V
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 bg-slate-900/40 backdrop-blur-md border border-cyan-500/15 rounded-full px-4 py-1.5 shadow-inner">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 relative ${
                    isActive
                      ? 'text-cyan-300 bg-cyan-500/15 shadow-[0_0_12px_rgba(0,240,255,0.25)] border border-cyan-400/30'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Medium Screens (lg) compact nav */}
          <nav className="hidden lg:flex xl:hidden items-center gap-1">
            {navItems.slice(0, 6).map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                  activeSection === item.href.replace('#', '')
                    ? 'text-cyan-400 font-semibold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right Action: Download Resume Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={personalData.resumePath}
              download="Harshavardhan_AV_Resume.pdf"
              className="relative group overflow-hidden px-4 py-2 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-neon-cyan transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <Download className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile navigation menu"
              className="p-2 rounded-lg bg-slate-900/60 border border-cyan-500/30 text-cyan-400 hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-slate-950/95 backdrop-blur-xl border-b border-cyan-500/20 px-4 pt-3 pb-6 shadow-2xl transition-all">
          <div className="grid grid-cols-2 gap-2 mb-4">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 font-semibold'
                      : 'text-slate-300 hover:bg-slate-900/80 hover:text-white border border-transparent'
                  }`}
                >
                  <span>{item.name}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-cyan-400/60" />
                </a>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
            <a
              href={personalData.resumePath}
              download="Harshavardhan_AV_Resume.pdf"
              className="w-full py-2.5 rounded-xl text-center text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 shadow-neon-cyan flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download Resume (PDF)
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
