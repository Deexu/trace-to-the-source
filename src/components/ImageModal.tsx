import React, { useEffect } from 'react';
import { X, ZoomIn, Download, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionItem } from '../types';

interface ImageModalProps {
  section: SectionItem | null;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  section,
  onClose,
  onPrev,
  onNext
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
      if (e.key === 'ArrowRight' && onNext) onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext]);

  if (!section) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-3 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative max-w-6xl w-full bg-slate-950 border border-cyan-500/40 rounded-xl overflow-hidden shadow-2xl shadow-cyan-950/50 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-cyan-500/30">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
            <div>
              <h3 className="text-white font-semibold text-base sm:text-lg flex items-center gap-2">
                {section.title}
                <span className="text-xs text-cyan-400 font-normal px-2 py-0.5 rounded bg-cyan-950/70 border border-cyan-500/30">
                  {section.tag}
                </span>
              </h3>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a 
              href={section.image} 
              target="_blank" 
              rel="noreferrer"
              className="p-1.5 text-slate-400 hover:text-cyan-300 hover:bg-slate-800 rounded transition"
              title="在新标签页查看原始图像"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-rose-900/40 hover:border-rose-500/50 rounded border border-transparent transition"
              title="关闭预览 (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Image Content Container */}
        <div className="relative flex-1 bg-black flex items-center justify-center overflow-auto p-2 sm:p-4 min-h-[300px]">
          {onPrev && (
            <button
              onClick={(e) => { e.stopPropagation(); onPrev(); }}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 text-cyan-300 bg-slate-900/80 hover:bg-cyan-950 border border-cyan-500/40 rounded-full backdrop-blur-sm transition shadow-lg"
              title="上一图 (左方向键)"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          <img
            src={section.image}
            alt={section.title}
            className="max-h-[65vh] w-auto object-contain rounded border border-slate-800"
            referrerPolicy="no-referrer"
          />

          {onNext && (
            <button
              onClick={(e) => { e.stopPropagation(); onNext(); }}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 text-cyan-300 bg-slate-900/80 hover:bg-cyan-950 border border-cyan-500/40 rounded-full backdrop-blur-sm transition shadow-lg"
              title="下一图 (右方向键)"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Bottom Details Footer */}
        <div className="p-3 sm:p-4 bg-slate-900/80 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm">
          <p className="text-slate-300 line-clamp-2 max-w-2xl">
            {section.desc}
          </p>
          <div className="flex flex-wrap gap-2 items-center">
            {section.metrics.slice(0, 3).map((m, idx) => (
              <div key={idx} className="bg-slate-950/70 border border-cyan-500/20 px-2.5 py-1 rounded text-xs flex items-center gap-1.5">
                <span className="text-slate-400">{m.label}:</span>
                <span className="text-cyan-300 font-semibold">{m.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
