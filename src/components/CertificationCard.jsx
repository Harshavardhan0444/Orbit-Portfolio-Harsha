import React, { useState } from 'react';
import { Award, ExternalLink, Eye, CheckCircle2, ShieldCheck, X, UploadCloud } from 'lucide-react';

export default function CertificationCard({ cert }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/30 backdrop-blur-md p-5 sm:p-6 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/5 group flex flex-col justify-between">
        <div>
          {/* Header */}
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-105 group-hover:border-purple-400/40 transition-all">
              <Award className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
              {cert.category}
            </span>
          </div>

          <h3 className="font-display font-bold text-base text-white group-hover:text-cyan-300 transition-colors">
            {cert.title}
          </h3>

          <div className="flex items-center gap-1.5 text-xs text-cyan-400 font-medium mt-1 mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{cert.issuer}</span>
          </div>

          {/* Competencies */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {cert.skills.map((skill, idx) => (
              <span
                key={idx}
                className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950/60 text-slate-300 border border-slate-800"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Action Row */}
        <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
          <button
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors py-1.5"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>View Certificate</span>
          </button>

          {cert.credentialUrl ? (
            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-400 hover:text-white flex items-center gap-1 p-1"
              title="Verify Credential"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ) : (
            <span className="text-[10px] text-slate-500 italic">
              Verification pending
            </span>
          )}
        </div>
      </div>

      {/* Certificate Preview & Replace Details Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="fixed inset-0" onClick={() => setModalOpen(false)} />
          <div className="relative w-full max-w-lg bg-slate-900 border border-cyan-500/30 rounded-2xl shadow-2xl p-6 z-10 overflow-hidden">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider block">
                  {cert.issuer}
                </span>
                <h3 className="font-display font-bold text-lg text-white">
                  {cert.title}
                </h3>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Certificate Display Area */}
            <div className="my-4 p-6 rounded-xl bg-slate-950 border border-slate-800 text-center flex flex-col items-center justify-center min-h-[180px]">
              {cert.certificateImage ? (
                <img
                  src={cert.certificateImage}
                  alt={cert.title}
                  className="max-h-56 object-contain rounded-lg border border-slate-700"
                />
              ) : (
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-200">
                      Certificate Issued by {cert.issuer}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 max-w-xs mx-auto">
                      Completed training in {cert.category}.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Certificate Replace / Upload Guidance */}
            <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs text-slate-300 space-y-1.5 mb-5">
              <div className="flex items-center gap-1.5 font-semibold text-cyan-300">
                <UploadCloud className="w-4 h-4" />
                <span>Certificate File / Credential Setup</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                To attach your certificate PDF or image, place the file in <code className="text-cyan-300 font-mono">public/certificates/</code> and update the <code className="text-cyan-300 font-mono">certificateImage</code> path or <code className="text-cyan-300 font-mono">credentialUrl</code> in <code className="text-cyan-300 font-mono">src/data/certifications.js</code>.
              </p>
            </div>

            <div className="flex items-center justify-between gap-3">
              {cert.credentialUrl ? (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Official Credential Verification
                </a>
              ) : (
                <span className="text-xs text-slate-500 italic">
                  No public credential URL attached yet
                </span>
              )}
              <button
                onClick={() => setModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
