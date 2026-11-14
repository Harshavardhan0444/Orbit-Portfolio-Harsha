import React from 'react';
import { Trophy, Award, Users2, Medal, ShieldCheck, CheckCircle2, Star } from 'lucide-react';

const iconMap = {
  Trophy,
  Award,
  Users2,
  Medal,
  ShieldCheck
};

export default function AchievementCard({ achievement }) {
  const IconComponent = iconMap[achievement.icon] || Trophy;

  return (
    <div className="relative rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/30 backdrop-blur-md p-6 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/5 hover:-translate-y-1 group flex flex-col justify-between">
      <div>
        {/* Top Badge and Icon */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-500/20 via-blue-500/10 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 group-hover:border-cyan-400/50 transition-all shadow-sm">
            <IconComponent className="w-6 h-6" />
          </div>

          <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-slate-800/90 text-cyan-300 border border-cyan-500/30 flex items-center gap-1">
            <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
            {achievement.badge}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display font-bold text-lg text-white group-hover:text-cyan-300 transition-colors">
          {achievement.title}
        </h3>

        {/* Organization / Context */}
        <div className="text-xs font-semibold text-purple-400 mt-1 mb-3">
          {achievement.organization}
        </div>

        {/* Description */}
        <p className="text-xs text-slate-300 leading-relaxed mb-4">
          {achievement.description}
        </p>

        {/* Key Highlights */}
        {achievement.highlights && (
          <ul className="space-y-1.5 text-xs text-slate-400 border-t border-slate-800/60 pt-3">
            {achievement.highlights.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Category Footer */}
      <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400 font-mono">
        <span>{achievement.category}</span>
        <span className="text-cyan-400">Position: {achievement.role}</span>
      </div>
    </div>
  );
}
