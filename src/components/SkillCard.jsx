import React from 'react';
import { Terminal, Globe, Cpu, Workflow, BarChart3, Palette, CheckCircle2 } from 'lucide-react';

const iconMap = {
  Terminal,
  Globe,
  Cpu,
  Workflow,
  BarChart3,
  Palette
};

export default function SkillCard({ category }) {
  const IconComponent = iconMap[category.icon] || Terminal;

  // Level badge styling
  const getLevelStyle = (level) => {
    switch (level) {
      case 'Project Experience':
        return 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30';
      case 'Working Knowledge':
        return 'bg-blue-500/15 text-blue-300 border-blue-500/30';
      case 'Familiar':
      default:
        return 'bg-purple-500/15 text-purple-300 border-purple-500/30';
    }
  };

  return (
    <div className="rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/30 backdrop-blur-md p-6 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/5 group flex flex-col justify-between">
      <div>
        {/* Category Header */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-105 group-hover:border-cyan-400/40 transition-all shadow-sm">
            <IconComponent className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-display font-bold text-base text-white group-hover:text-cyan-300 transition-colors">
              {category.name}
            </h3>
            <span className="text-[11px] text-slate-400">
              {category.skills.length} Capabilities
            </span>
          </div>
        </div>

        <p className="text-xs text-slate-400 mb-4 leading-relaxed">
          {category.description}
        </p>

        {/* Skill list */}
        <div className="space-y-2.5">
          {category.skills.map((skill, idx) => (
            <div
              key={idx}
              className="p-2.5 rounded-xl bg-slate-950/50 border border-slate-800/80 hover:border-slate-700 transition-colors"
            >
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="text-xs font-semibold text-slate-200 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-cyan-400 shrink-0" />
                  {skill.name}
                </span>
                <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${getLevelStyle(skill.level)}`}>
                  {skill.level}
                </span>
              </div>
              {skill.notes && (
                <p className="text-[11px] text-slate-400 pl-4">
                  {skill.notes}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Subtle bottom tag */}
      <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[10px] text-slate-400">
        <span>Verified Academic & Lab Experience</span>
        <span className="font-mono text-cyan-400">{category.id}</span>
      </div>
    </div>
  );
}
