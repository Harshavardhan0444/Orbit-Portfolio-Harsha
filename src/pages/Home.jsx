import React, { useState } from 'react';
import {
  Compass,
  ArrowRight,
  Download,
  Mail,
  User,
  GraduationCap,
  Code2,
  BrainCircuit,
  DatabaseZap,
  Briefcase,
  Layers,
  Award,
  Trophy,
  FileText,
  Send,
  Sparkles,
  ChevronDown,
  CheckCircle2,
  Terminal,
  ExternalLink,
  Github,
  Linkedin,
  MapPin,
  Camera
} from 'lucide-react';

import { personalData } from '../data/personal';
import { educationData } from '../data/education';
import { skillCategories } from '../data/skills';
import { experienceData } from '../data/experience';
import { projectsData, projectCategories } from '../data/projects';
import { certificationsData } from '../data/certifications';
import { achievementsData } from '../data/achievements';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero3D from '../components/Hero3D';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import SkillCard from '../components/SkillCard';
import EducationTimeline from '../components/EducationTimeline';
import ExperienceTimeline from '../components/ExperienceTimeline';
import CertificationCard from '../components/CertificationCard';
import AchievementCard from '../components/AchievementCard';
import ResumeViewer from '../components/ResumeViewer';
import ContactForm from '../components/ContactForm';
import ScrollProgress from '../components/ScrollProgress';
import BackToTop from '../components/BackToTop';

// Icon map for visual cards in About section
const visualIcons = {
  Code2,
  BrainCircuit,
  DatabaseZap
};

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeProjectModal, setActiveProjectModal] = useState(null);
  const [imageError, setImageError] = useState(false);

  // Filter projects by category
  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 75;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-orbit-bg text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 relative overflow-x-hidden">
      <ScrollProgress />
      <Navbar />

      {/* Ambient Cyber Grid & Glow Lights */}
      <div className="fixed inset-0 bg-cyber-grid bg-[size:40px_40px] opacity-20 pointer-events-none z-0" />
      <div className="fixed top-20 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="fixed top-1/2 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none z-0" />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION (#home) */}
      {/* ========================================================================= */}
      <section
        id="home"
        className="relative min-h-screen pt-28 pb-16 flex items-center justify-center z-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Hero Text & Identity */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Futuristic badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono backdrop-blur-md shadow-neon-cyan">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>ORBIT • Futuristic Digital Workspace</span>
              </div>

              {/* Greeting & Name */}
              <div className="space-y-2">
                <p className="text-sm sm:text-base font-mono uppercase tracking-widest text-slate-400">
                  Hello, I'm
                </p>
                <h1 className="font-display font-extrabold text-4xl sm:text-6xl xl:text-7xl tracking-tight text-white">
                  <span className="text-white">{personalData.name}</span>
                </h1>
                <p className="font-display font-semibold text-lg sm:text-2xl text-gradient-cyan">
                  {personalData.heroSubtitle}
                </p>
              </div>

              {/* Main Tagline Banner */}
              <div className="p-3 sm:p-4 rounded-2xl bg-slate-900/50 border border-cyan-500/20 backdrop-blur-sm max-w-xl">
                <p className="font-display font-bold text-base sm:text-lg text-cyan-300 italic">
                  "{personalData.mainTagline}"
                </p>
                <p className="text-xs text-slate-400 mt-1 font-mono">
                  {personalData.secondaryTagline}
                </p>
              </div>

              {/* Short Introduction */}
              <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
                {personalData.heroIntro}
              </p>

              {/* Hero Action Buttons (All 4 requested) */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="px-6 py-3.5 rounded-xl font-semibold text-xs tracking-wider uppercase text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-blue-500 shadow-neon-cyan transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
                >
                  <span>Explore My Work</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => scrollToSection('about')}
                  className="px-5 py-3.5 rounded-xl font-semibold text-xs text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/40 backdrop-blur-md transition-all hover:scale-105 flex items-center gap-2"
                >
                  <User className="w-4 h-4 text-cyan-400" />
                  <span>About Me</span>
                </button>

                <a
                  href={personalData.resumePath}
                  download="Harshavardhan_AV_Resume.pdf"
                  className="px-5 py-3.5 rounded-xl font-semibold text-xs text-cyan-300 hover:text-white bg-cyan-950/40 hover:bg-cyan-900/50 border border-cyan-500/40 shadow-sm transition-all hover:scale-105 flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </a>

                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-5 py-3.5 rounded-xl font-semibold text-xs text-purple-300 hover:text-white bg-purple-950/40 hover:bg-purple-900/50 border border-purple-500/40 shadow-sm transition-all hover:scale-105 flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Contact Me</span>
                </button>
              </div>

              {/* Social Links Bar */}
              <div className="pt-4 flex items-center justify-center lg:justify-start gap-4 text-slate-400 text-xs">
                <span className="font-mono text-slate-500">Connect:</span>
                <a
                  href={personalData.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                >
                  <Linkedin className="w-4 h-4 text-cyan-400" />
                  <span>LinkedIn</span>
                </a>
                <span className="text-slate-700">•</span>
                <a
                  href={personalData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <span className="text-slate-700">•</span>
                <a
                  href={`mailto:${personalData.email}`}
                  className="hover:text-purple-400 transition-colors flex items-center gap-1.5"
                >
                  <Mail className="w-4 h-4 text-purple-400" />
                  <span>Email</span>
                </a>
              </div>
            </div>

            {/* Right Column: 3D Interactive Orbital Scene + Profile Area */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
              {/* 3D Canvas Visualizer */}
              <div className="w-full relative">
                <Hero3D />
              </div>

              {/* Professional Profile Image Area with Placeholder Architecture */}
              <div className="mt-4 w-full max-w-sm rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-md p-4 flex items-center gap-4 shadow-xl">
                {/* Avatar with fallback */}
                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-purple-600 p-[2px] shrink-0 shadow-neon-cyan">
                  <div className="w-full h-full rounded-[14px] bg-slate-950 overflow-hidden flex items-center justify-center">
                    {!imageError ? (
                      <img
                        src={personalData.profileImage}
                        alt="Harshavardhan A V"
                        onError={() => setImageError(true)}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center text-cyan-400 bg-slate-900">
                        <User className="w-7 h-7" />
                        <span className="text-[9px] font-mono mt-0.5 font-bold">HAV</span>
                      </div>
                    )}
                  </div>
                  <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-slate-950 flex items-center justify-center" title="Open to Opportunities">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                  </span>
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="font-display font-bold text-sm text-white truncate">
                    {personalData.name}
                  </h4>
                  <p className="text-[11px] text-cyan-400 font-mono truncate">
                    Sapthagiri NPS University
                  </p>
                  <p className="text-[10px] text-slate-400 mt-0.5">
                    To set photograph: place at <code className="text-cyan-300 font-mono">public/images/profile.jpg</code>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500 hover:text-cyan-400 transition-colors cursor-pointer" onClick={() => scrollToSection('about')}>
          <span className="text-[10px] uppercase font-mono tracking-widest">Orbit Navigation</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-cyan-400" />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. ABOUT ME SECTION (#about) */}
      {/* ========================================================================= */}
      <section id="about" className="py-24 relative z-10 border-t border-slate-800/80 bg-slate-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono">
              <User className="w-3.5 h-3.5" />
              <span>Identity Profile</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left side: Detailed Intro Prose */}
            <div className="lg:col-span-7 space-y-5">
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/70 border border-slate-800 backdrop-blur-md shadow-xl text-slate-300 text-sm sm:text-base leading-relaxed space-y-4">
                <p className="font-medium text-white">
                  I am <span className="text-cyan-300 font-bold">Harshavardhan A V</span>, currently pursuing a Master of Computer Applications (MCA) at Sapthagiri NPS University (Autonomous), Bengaluru. I have completed my Bachelor of Computer Applications from Kristu Jayanti College.
                </p>
                <p>
                  I have practical internship experience at <span className="text-cyan-300 font-semibold">Genpact</span>, where I worked with ServiceNow ITSM modules, workflow automation, Service Catalog configuration, JavaScript-based Client Scripts, and Business Rules.
                </p>
                <p>
                  My technical interests include software development, artificial intelligence, machine learning, big data analytics, database management, and building interactive web applications.
                </p>
                <p>
                  I enjoy learning new technologies, working on practical projects, and transforming ideas into useful software solutions.
                </p>
              </div>

              {/* Professional Highlights Area */}
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-cyan-500/20 backdrop-blur-md space-y-4">
                <h3 className="font-display font-bold text-base uppercase tracking-wider text-cyan-300 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  Key Professional Highlights
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {personalData.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                      <div>
                        <span className="text-xs font-semibold text-white block">
                          {item.label}
                        </span>
                        <span className="text-[11px] text-slate-400">
                          {item.text}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side: 3 Visual Information Cards */}
            <div className="lg:col-span-5 space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-2">
                Core Specialization Spheres
              </h3>

              {personalData.visualCards.map((card) => {
                const Icon = visualIcons[card.icon] || Code2;
                return (
                  <div
                    key={card.id}
                    className={`p-6 rounded-2xl bg-gradient-to-br ${card.gradient} bg-slate-900/80 border ${card.borderColor} backdrop-blur-md shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-500/10 group`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-slate-900/90 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform shrink-0 shadow-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-lg text-white group-hover:text-cyan-300 transition-colors">
                          {card.title}
                        </h4>
                        <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. EDUCATION SECTION (#education) */}
      {/* ========================================================================= */}
      <section id="education" className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Academic Milestones</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white">
              Education
            </h2>
            <p className="text-sm text-slate-400">
              Verified academic background and degree coursework.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full" />
          </div>

          <EducationTimeline />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. TECHNICAL SKILLS SECTION (#skills) */}
      {/* ========================================================================= */}
      <section id="skills" className="py-24 relative z-10 border-t border-slate-800/80 bg-slate-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono">
              <Terminal className="w-3.5 h-3.5" />
              <span>Technical Matrix</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white">
              Technical Skills
            </h2>
            <p className="text-sm text-slate-400">
              Categorized technologies with honest proficiency labels based on academic and project experience.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full" />
          </div>

          {/* Skill Cards Dashboard */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category) => (
              <SkillCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. EXPERIENCE SECTION (#experience) */}
      {/* ========================================================================= */}
      <section id="experience" className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Industry Experience</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white">
              Professional Experience
            </h2>
            <p className="text-sm text-slate-400">
              Corporate internship journey and enterprise ITSM workflow engineering.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full" />
          </div>

          <div className="max-w-4xl mx-auto">
            <ExperienceTimeline />
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. PROJECTS SECTION (#projects) */}
      {/* ========================================================================= */}
      <section id="projects" className="py-24 relative z-10 border-t border-slate-800/80 bg-slate-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono">
              <Layers className="w-3.5 h-3.5" />
              <span>Engineered Solutions</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white">
              Featured Projects
            </h2>
            <p className="text-sm text-slate-400">
              Exploration across Artificial Intelligence, Big Data Analytics, Full Stack Java, and Web Applications.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full" />
          </div>

          {/* Project Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {projectCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-neon-cyan scale-105'
                    : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={(proj) => setActiveProjectModal(proj)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. CERTIFICATIONS SECTION (#certifications) */}
      {/* ========================================================================= */}
      <section id="certifications" className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono">
              <Award className="w-3.5 h-3.5" />
              <span>Skill Credentials</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white">
              Certifications
            </h2>
            <p className="text-sm text-slate-400">
              Verified certifications from NASSCOM, Infosys Springboard, and Simplilearn.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificationsData.map((cert) => (
              <CertificationCard key={cert.id} cert={cert} />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. ACHIEVEMENTS SECTION (#achievements) */}
      {/* ========================================================================= */}
      <section id="achievements" className="py-24 relative z-10 border-t border-slate-800/80 bg-slate-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono">
              <Trophy className="w-3.5 h-3.5" />
              <span>Honors & Leadership</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white">
              Achievements
            </h2>
            <p className="text-sm text-slate-400">
              Intercollegiate fest honors, leadership appointments, and competitive participation.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievementsData.map((achievement) => (
              <AchievementCard key={achievement.id} achievement={achievement} />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. RESUME SECTION (#resume) */}
      {/* ========================================================================= */}
      <section id="resume" className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono">
              <FileText className="w-3.5 h-3.5" />
              <span>Professional Document</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white">
              My Resume
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full" />
          </div>

          <ResumeViewer />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. CONTACT SECTION (#contact) */}
      {/* ========================================================================= */}
      <section id="contact" className="py-24 relative z-10 border-t border-slate-800/80 bg-slate-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono">
              <Send className="w-3.5 h-3.5" />
              <span>Reach Out</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white">
              Contact
            </h2>
            <p className="text-sm text-slate-400">
              Open for professional inquiries, campus recruitment, and technical collaborations.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full" />
          </div>

          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Floating Back to Top Button */}
      <BackToTop />

      {/* Modal for In-depth Project Details */}
      {activeProjectModal && (
        <ProjectModal
          project={activeProjectModal}
          onClose={() => setActiveProjectModal(null)}
        />
      )}
    </div>
  );
}
