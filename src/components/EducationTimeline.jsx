import React from 'react';
import { GraduationCap, Calendar, Award, Building2, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/education';

export default function EducationTimeline() {
  return (
    <div className="relative">
      {/* Central spine line for desktop */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 -translate-x-1/2 opacity-40" />

      {/* Mobile spine line */}
      <div className="md:hidden absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 opacity-40" />

      <div className="space-y-12">
        {educationData.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={item.id}
              className={`relative flex flex-col md:flex-row items-center ${
                isEven ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Center Node */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-slate-900 border-2 border-cyan-400 shadow-neon-cyan flex items-center justify-center z-10">
                <GraduationCap className="w-5 h-5 text-cyan-300" />
              </div>

              {/* Card Container */}
              <div className="w-full md:w-1/2 pl-14 md:pl-0 md:px-8">
                <div className={`p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 backdrop-blur-md shadow-xl transition-all duration-300 hover:-translate-y-1 group ${
                  item.featured ? 'border-cyan-500/30 shadow-cyan-500/5' : ''
                }`}>
                  {/* Top degree & status */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-cyan-950/60 text-cyan-300 border border-cyan-500/30">
                      {item.type}
                    </span>
                    <span className="text-xs font-mono text-cyan-400 bg-slate-800/80 px-2.5 py-0.5 rounded-full border border-slate-700 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      {item.date || item.duration}
                    </span>
                  </div>

                  {/* Degree Title */}
                  <h3 className="font-display font-bold text-lg sm:text-xl text-white group-hover:text-cyan-300 transition-colors">
                    {item.degree}
                  </h3>

                  {/* Institution */}
                  <div className="flex items-center gap-2 text-sm text-slate-300 mt-1 mb-4">
                    <Building2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span className="font-medium">{item.institution}</span>
                  </div>

                  {/* Academic Performance Metric */}
                  <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-between mb-4">
                    <span className="text-xs text-slate-400 flex items-center gap-1.5">
                      <Award className="w-4 h-4 text-amber-400" />
                      Academic Performance ({item.gradeType}):
                    </span>
                    <span className="font-display font-bold text-base text-cyan-300 px-2.5 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30">
                      {item.grade}
                    </span>
                  </div>

                  {/* Highlights */}
                  {item.highlights && (
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {item.highlights.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
