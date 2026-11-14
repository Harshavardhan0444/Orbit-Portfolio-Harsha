import React, { useState } from 'react';
import { Download, ExternalLink, FileText, CheckCircle2, UploadCloud, Info } from 'lucide-react';
import { personalData } from '../data/personal';

export default function ResumeViewer() {
  const [showReplaceInfo, setShowReplaceInfo] = useState(false);

  return (
    <div className="rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 backdrop-blur-md p-6 sm:p-10 shadow-2xl transition-all">
      {/* Top action header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 font-mono">
              Curriculum Vitae • Verified Profile
            </span>
          </div>
          <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
            Harshavardhan A V – Official Resume
          </h3>
          <p className="text-sm text-slate-300 mt-2 max-w-2xl leading-relaxed">
            Explore my academic background, technical skills, internship experience, projects, certifications, and achievements.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={personalData.resumePath}
            download="Harshavardhan_AV_Resume.pdf"
            className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-blue-500 shadow-neon-cyan flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
          >
            <Download className="w-4 h-4" />
            <span>Download Resume (PDF)</span>
          </a>

          <a
            href={personalData.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 flex items-center gap-2 transition-all hover:scale-105"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Open in New Tab</span>
          </a>

          <button
            onClick={() => setShowReplaceInfo(!showReplaceInfo)}
            className="px-3 py-2.5 rounded-xl text-xs font-medium text-slate-400 hover:text-cyan-300 bg-slate-950/60 border border-slate-800 hover:border-cyan-500/30 flex items-center gap-1.5 transition-colors"
          >
            <UploadCloud className="w-4 h-4" />
            <span>Replace Resume</span>
          </button>
        </div>
      </div>

      {/* Replace Guidance Notice for Harshavardhan */}
      {showReplaceInfo && (
        <div className="my-6 p-4 rounded-2xl bg-cyan-950/30 border border-cyan-500/30 text-xs text-slate-300 space-y-2 animate-fadeIn">
          <div className="flex items-center gap-2 font-semibold text-cyan-300">
            <Info className="w-4 h-4" />
            <span>How to Update Your Live Resume PDF:</span>
          </div>
          <p className="leading-relaxed text-slate-400">
            Simply place your latest PDF file at the path:{' '}
            <code className="text-cyan-300 font-mono px-2 py-0.5 rounded bg-slate-900 border border-cyan-500/30">
              public/resume/Harshavardhan_AV_Resume.pdf
            </code>
            . The website will automatically deliver your updated resume to recruiters and hiring managers without needing any code changes.
          </p>
        </div>
      )}

      {/* Resume Highlights Summary Banner */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
        <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
          <span className="text-[11px] font-mono text-cyan-400 uppercase block mb-1">Education</span>
          <p className="text-xs font-semibold text-white">MCA (Sapthagiri NPS University)</p>
          <p className="text-[11px] text-slate-400">June 2025 • CGPA: 8.64</p>
        </div>

        <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
          <span className="text-[11px] font-mono text-purple-400 uppercase block mb-1">Internship</span>
          <p className="text-xs font-semibold text-white">Genpact (Bengaluru)</p>
          <p className="text-[11px] text-slate-400">ServiceNow ITSM & Workflows</p>
        </div>

        <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
          <span className="text-[11px] font-mono text-blue-400 uppercase block mb-1">Core Projects</span>
          <p className="text-xs font-semibold text-white">AI Attrition & UrbanPulse</p>
          <p className="text-[11px] text-slate-400">ML, Big Data, Java Spring Boot</p>
        </div>

        <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
          <span className="text-[11px] font-mono text-emerald-400 uppercase block mb-1">Achievements</span>
          <p className="text-xs font-semibold text-white">Runner-Up ADVAYA 2026</p>
          <p className="text-[11px] text-slate-400">Event Head Synchronize (200+)</p>
        </div>
      </div>

      {/* PDF Preview Area */}
      <div className="rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden shadow-inner">
        <div className="p-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-cyan-400" />
            <span className="font-mono text-slate-200">Harshavardhan_AV_Resume.pdf</span>
          </div>
          <span className="text-[11px] bg-slate-800 px-2 py-0.5 rounded text-cyan-300">
            Interactive PDF Embed
          </span>
        </div>

        <div className="w-full h-[520px] sm:h-[680px] bg-slate-950 relative">
          <object
            data={personalData.resumePath}
            type="application/pdf"
            className="w-full h-full"
          >
            {/* Fallback if browser does not embed inline PDF */}
            <div className="h-full flex flex-col items-center justify-center p-8 text-center space-y-4">
              <FileText className="w-16 h-16 text-cyan-400/60 animate-pulse" />
              <div>
                <h4 className="text-base font-bold text-white mb-1">
                  Preview Ready for Viewing
                </h4>
                <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed">
                  Click below to view or download the high-resolution PDF document directly in your browser.
                </p>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href={personalData.resumePath}
                  download="Harshavardhan_AV_Resume.pdf"
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-cyan-600 hover:bg-cyan-500 flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
                <a
                  href={personalData.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Open PDF Viewer
                </a>
              </div>
            </div>
          </object>
        </div>
      </div>
    </div>
  );
}
