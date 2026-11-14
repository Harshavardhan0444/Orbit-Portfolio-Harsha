import React from 'react';
import { ExternalLink, Github, ArrowRight, CheckCircle2, Clock, Sparkles, Layers } from 'lucide-react';

export default function ProjectCard({ project, onSelect }) {
  return (
    <div className="group relative rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 backdrop-blur-md overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-1 flex flex-col justify-between">
      {/* Top ambient highlight */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Card Header & Visual Graphic */}
      <div>
        <div className="p-5 sm:p-6 pb-4">
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-md bg-cyan-950/60 text-cyan-300 border border-cyan-500/30">
              {project.category}
            </span>

            {/* Status indicator */}
            <span
              className={`text-[11px] font-medium px-2 py-0.5 rounded-full flex items-center gap-1.5 border ${
                project.statusType === 'completed'
                  ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
                  : project.statusType === 'in-progress'
                  ? 'bg-amber-500/10 text-amber-300 border-amber-500/30'
                  : 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30'
              }`}
            >
              {project.statusType === 'completed' ? (
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
              ) : (
                <Clock className="w-3 h-3 text-amber-400" />
              )}
              {project.status}
            </span>
          </div>

          <h3 className="font-display font-bold text-lg sm:text-xl text-white group-hover:text-cyan-300 transition-colors line-clamp-2">
            {project.title}
          </h3>

          <p className="mt-2.5 text-xs text-slate-300 leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Highlighted Module Count or Dataset Benchmark */}
        <div className="px-5 sm:px-6 py-2.5 bg-slate-950/40 border-y border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
          <span className="flex items-center gap-1 text-cyan-400">
            <Layers className="w-3.5 h-3.5" />
            {project.keyModules ? `${project.keyModules.length} Functional Modules` : 'System Core'}
          </span>
          {project.datasetInfo ? (
            <span className="font-mono text-slate-300 truncate max-w-[170px]">
              {project.datasetInfo.targetSize.split('(')[0]}
            </span>
          ) : (
            <span className="font-mono text-purple-300">Architecture Verified</span>
          )}
        </div>

        {/* Technology Tags */}
        <div className="p-5 sm:p-6 pt-3 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 5).map((tech, idx) => (
            <span
              key={idx}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/40 text-cyan-300 border border-cyan-800/40">
              +{project.technologies.length - 5} more
            </span>
          )}
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="p-5 sm:p-6 pt-0 border-t border-slate-800/60 flex items-center justify-between gap-2 mt-4">
        <button
          onClick={() => onSelect(project)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 group/btn transition-colors py-2"
        >
          <span>View Architecture Details</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
        </button>

        <div className="flex items-center gap-1.5">
          {project.links?.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Repository"
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
              title="View Repository"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
          )}
          {project.links?.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live Demo"
              className="p-2 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/30 transition-colors"
              title="Live Demo"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
