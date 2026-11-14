import React, { useEffect } from 'react';
import { X, ExternalLink, Github, Layers, Database, Sparkles, CheckCircle2, Clock, Compass } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      {/* Modal Backdrop click */}
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-3xl bg-slate-900 border border-cyan-500/30 rounded-2xl shadow-2xl shadow-cyan-500/10 z-10 overflow-hidden my-8 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-slate-800 bg-slate-900/80 flex items-start justify-between gap-4 sticky top-0 z-10 backdrop-blur-md">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                {project.category}
              </span>
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border flex items-center gap-1 ${
                project.statusType === 'completed'
                  ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
                  : project.statusType === 'in-progress'
                  ? 'bg-amber-500/15 text-amber-300 border-amber-500/30'
                  : 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30'
              }`}>
                {project.statusType === 'completed' ? (
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                ) : (
                  <Clock className="w-3 h-3 text-amber-400" />
                )}
                {project.status}
              </span>
            </div>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
              {project.title}
            </h3>
            {project.tagline && (
              <p className="text-sm text-cyan-400/90 font-medium">
                {project.tagline}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            aria-label="Close project modal"
            className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-300">
          {/* Overview */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-cyan-400 mb-2 flex items-center gap-1.5">
              <Compass className="w-4 h-4" />
              Project Overview
            </h4>
            <p className="text-sm leading-relaxed text-slate-300 bg-slate-950/50 p-4 rounded-xl border border-slate-800">
              {project.description}
            </p>
          </div>

          {/* Dataset Specifications (For AI/ML & Big Data) */}
          {project.datasetInfo && (
            <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/30 space-y-2">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-cyan-300 flex items-center gap-1.5">
                <Database className="w-4 h-4 text-cyan-400" />
                Dataset & Benchmark Architecture
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                  <span className="text-slate-400 block mb-0.5">Target Scale:</span>
                  <span className="font-semibold text-slate-200">{project.datasetInfo.targetSize}</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                  <span className="text-slate-400 block mb-0.5">Integration Status:</span>
                  <span className="font-semibold text-slate-200">{project.datasetInfo.processedCount}</span>
                </div>
              </div>
              {project.datasetInfo.note && (
                <p className="text-[11px] text-cyan-300/80 italic pt-1">
                  * {project.datasetInfo.note}
                </p>
              )}
            </div>
          )}

          {/* Key Modules */}
          {project.keyModules && project.keyModules.length > 0 && (
            <div>
              <h4 className="text-xs uppercase tracking-wider font-semibold text-purple-400 mb-3 flex items-center gap-1.5">
                <Layers className="w-4 h-4" />
                Key Modules & Functional Architecture
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.keyModules.map((module, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-950/40 border border-slate-800 hover:border-cyan-500/30 transition-colors"
                  >
                    <div className="font-semibold text-xs text-slate-100 flex items-center gap-1.5 mb-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      {module.name}
                    </div>
                    <p className="text-xs text-slate-400 leading-normal">
                      {module.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Proposed Data Sources (For UrbanPulse) */}
          {project.proposedDataSources && (
            <div>
              <h4 className="text-xs uppercase tracking-wider font-semibold text-cyan-400 mb-2 flex items-center gap-1.5">
                <Database className="w-4 h-4" />
                Planned Satellite & Open Environmental Feeds
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.proposedDataSources.map((source, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-xs rounded-lg bg-slate-800/80 border border-slate-700 text-slate-200"
                  >
                    {source}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Technologies Used */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-2.5 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              Technologies & Frameworks
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 border-t border-slate-800 bg-slate-900/90 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {project.links.github ? (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 flex items-center gap-2 transition-all hover:scale-105"
              >
                <Github className="w-4 h-4" />
                Source Repository
              </a>
            ) : (
              <span className="text-xs text-slate-500 italic">
                Repository link will be attached upon publication
              </span>
            )}

            {project.links.demo ? (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-neon-cyan flex items-center gap-2 transition-all hover:scale-105"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            ) : (
              <span className="text-xs text-slate-500 italic">
                (Deployment / Demo Link in staging)
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
}
