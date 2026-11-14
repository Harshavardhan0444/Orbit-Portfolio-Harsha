import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Database, Layers, Sparkles, CheckCircle2, Clock, Compass } from 'lucide-react';
import { projectsData } from '../data/projects';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projectsData.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-orbit-bg text-white flex flex-col justify-between">
        <Navbar />
        <div className="max-w-md mx-auto text-center py-32 px-4 space-y-4">
          <h2 className="text-2xl font-bold">Project Not Found</h2>
          <p className="text-sm text-slate-400">The requested project could not be located.</p>
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects Showcase
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-orbit-bg text-white flex flex-col justify-between selection:bg-cyan-500/30">
      <Navbar />

      <main className="pt-28 pb-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Navigation back */}
        <div className="mb-6">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* Hero Card */}
        <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 sm:p-10 shadow-2xl backdrop-blur-md mb-8">
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
              {project.category}
            </span>
            <span className={`px-3 py-1 rounded-full text-xs font-medium border flex items-center gap-1.5 ${
              project.statusType === 'completed'
                ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
                : project.statusType === 'in-progress'
                ? 'bg-amber-500/15 text-amber-300 border-amber-500/30'
                : 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30'
            }`}>
              {project.statusType === 'completed' ? (
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Clock className="w-3.5 h-3.5 text-amber-400" />
              )}
              {project.status}
            </span>
          </div>

          <h1 className="font-display font-extrabold text-2xl sm:text-4xl text-white mb-3">
            {project.title}
          </h1>

          <p className="text-base text-cyan-400/90 font-medium mb-6">
            {project.tagline}
          </p>

          <p className="text-sm text-slate-300 leading-relaxed bg-slate-950/50 p-5 rounded-2xl border border-slate-800/80 mb-6">
            {project.description}
          </p>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {project.links.github ? (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 flex items-center gap-2 transition-all hover:scale-105"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
            ) : (
              <span className="text-xs text-slate-500 italic">
                Source repository staging in progress
              </span>
            )}

            {project.links.demo ? (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-neon-cyan flex items-center gap-2 transition-all hover:scale-105"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            ) : (
              <span className="text-xs text-slate-500 italic">
                (Deployment staging)
              </span>
            )}
          </div>
        </div>

        {/* Dataset Specifications */}
        {project.datasetInfo && (
          <div className="rounded-3xl bg-slate-900/60 border border-cyan-500/30 p-6 sm:p-8 backdrop-blur-md mb-8 space-y-3">
            <h3 className="text-sm uppercase tracking-wider font-semibold text-cyan-300 flex items-center gap-2">
              <Database className="w-4 h-4 text-cyan-400" />
              Dataset Specifications & Verification Policy
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-2">
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <span className="text-slate-400 block mb-1">Target Benchmark Scale:</span>
                <span className="font-semibold text-slate-200 text-sm">{project.datasetInfo.targetSize}</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <span className="text-slate-400 block mb-1">Current Processed Status:</span>
                <span className="font-semibold text-slate-200 text-sm">{project.datasetInfo.processedCount}</span>
              </div>
            </div>
            {project.datasetInfo.note && (
              <p className="text-xs text-cyan-300/80 italic pt-2">
                * {project.datasetInfo.note}
              </p>
            )}
          </div>
        )}

        {/* Key Modules */}
        {project.keyModules && (
          <div className="rounded-3xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8 backdrop-blur-md mb-8">
            <h3 className="text-sm uppercase tracking-wider font-semibold text-purple-400 mb-6 flex items-center gap-2">
              <Layers className="w-4 h-4" />
              Functional Modules & Subsystems
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.keyModules.map((module, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-950/50 border border-slate-800/80 hover:border-cyan-500/30 transition-colors"
                >
                  <div className="font-semibold text-sm text-white flex items-center gap-2 mb-1.5">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    {module.name}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {module.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technologies */}
        <div className="rounded-3xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8 backdrop-blur-md">
          <h3 className="text-sm uppercase tracking-wider font-semibold text-slate-300 mb-4 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            Applied Technologies & Toolchain
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-xl text-xs font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
