import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Workflow, Cpu, Layers } from 'lucide-react';
import { experienceData } from '../data/experience';

export default function ExperienceTimeline() {
  return (
    <div className="space-y-8">
      {experienceData.map((exp) => (
        <div
          key={exp.id}
          className="relative rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 backdrop-blur-md p-6 sm:p-8 shadow-2xl transition-all duration-300 hover:shadow-cyan-500/10 group overflow-hidden"
        >
          {/* Subtle accent gradient line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500" />

          {/* Top header row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 p-0.5 shadow-neon-blue flex items-center justify-center shrink-0">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white group-hover:text-cyan-300 transition-colors">
                    {exp.company}
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                    {exp.badge}
                  </span>
                </div>
                <h4 className="text-sm sm:text-base font-semibold text-cyan-400">
                  {exp.role}
                </h4>
              </div>
            </div>

            <div className="flex flex-wrap md:flex-col md:items-end gap-2 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-1.5 bg-slate-950/60 px-3 py-1 rounded-full border border-slate-800 text-slate-300">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                <span>{exp.date}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-950/60 px-3 py-1 rounded-full border border-slate-800">
                <MapPin className="w-3.5 h-3.5 text-purple-400" />
                <span>{exp.location}</span>
              </div>
            </div>
          </div>

          {/* Internship Summary */}
          <div className="py-5">
            <p className="text-sm text-slate-300 leading-relaxed bg-slate-950/40 p-4 rounded-xl border border-slate-800/80">
              {exp.summary}
            </p>
          </div>

          {/* Responsibilities Section */}
          <div className="py-2">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-cyan-400 mb-3 flex items-center gap-2">
              <Workflow className="w-4 h-4" />
              Core Responsibilities & Technical Contributions
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {exp.responsibilities.map((resp, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/50 border border-slate-800/60 hover:border-cyan-500/20 transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                  <span className="text-xs text-slate-300 leading-relaxed">
                    {resp}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Takeaways */}
          {exp.takeaways && (
            <div className="mt-5 p-4 rounded-xl bg-blue-950/20 border border-blue-500/20 space-y-2">
              <h5 className="text-xs font-semibold text-blue-300 uppercase tracking-wider flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-blue-400" />
                Professional Takeaways
              </h5>
              <ul className="space-y-1 text-xs text-slate-300">
                {exp.takeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technology Tags */}
          <div className="mt-6 pt-5 border-t border-slate-800">
            <h5 className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-3 flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-cyan-400" />
              Applied Enterprise Technologies
            </h5>
            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-cyan-950/40 text-cyan-300 border border-cyan-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
