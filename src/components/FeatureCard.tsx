import React, { useState } from 'react';
import { Maximize2, CheckCircle2, ChevronRight, Activity, Database, Sparkles, Layers } from 'lucide-react';
import { SectionItem } from '../types';

interface FeatureCardProps {
  section: SectionItem;
  index: number;
  onImageClick: (section: SectionItem) => void;
  viewMode: 'auto' | 'mobile-mockup';
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  section,
  index,
  onImageClick,
  viewMode
}) => {
  const [activeTab, setActiveTab] = useState<'visual' | 'data'>('visual');

  // If in mobile mockup mode or mobile screen, prioritize the authentic clean stack from "人参体验页面"
  const isMobileLayout = viewMode === 'mobile-mockup';

  return (
    <section 
      id={`section-${section.id}`}
      className={`scroll-mt-20 ${
        isMobileLayout 
          ? 'py-4 px-3 sm:px-4' 
          : 'py-6 px-3 sm:px-6'
      }`}
    >
      <div className={`mx-auto ${isMobileLayout ? 'max-w-md' : 'max-w-7xl'}`}>
        {/* Section Header: Title matching exact reference */}
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <div className="flex items-center gap-2.5">
            {/* Number Pill / Indicator */}
            <div className="w-6 h-6 rounded-md bg-cyan-950 border border-cyan-500/50 flex items-center justify-center text-cyan-300 font-mono text-xs font-bold shadow-sm shadow-cyan-500/20">
              0{section.id}
            </div>
            
            <h2 className="text-white font-bold text-lg sm:text-xl md:text-2xl tracking-wide flex items-center gap-2">
              {section.title}
            </h2>
          </div>

          <button
            onClick={() => onImageClick(section)}
            className="flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-200 bg-cyan-950/40 hover:bg-cyan-900/60 border border-cyan-500/30 px-2.5 py-1 rounded-md transition"
            title="放大查看原图"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">放大详情</span>
          </button>
        </div>

        {/* Content Body: Split layout on Desktop, Clean Card on Mobile */}
        <div className={`overflow-hidden rounded-xl bg-slate-900/80 border border-cyan-500/30 shadow-xl shadow-cyan-950/20 ${
          !isMobileLayout ? 'lg:grid lg:grid-cols-12 gap-0' : ''
        }`}>
          {/* Main Visual Image Area */}
          <div className={`relative group cursor-pointer overflow-hidden bg-black flex items-center justify-center ${
            !isMobileLayout ? 'lg:col-span-8' : 'w-full'
          }`}
          onClick={() => onImageClick(section)}
          >
            {/* HUD Corner Tech Accents */}
            <div className="absolute top-2 left-2 z-10 w-3 h-3 border-t-2 border-l-2 border-cyan-400 pointer-events-none"></div>
            <div className="absolute top-2 right-2 z-10 w-3 h-3 border-t-2 border-r-2 border-cyan-400 pointer-events-none"></div>
            <div className="absolute bottom-2 left-2 z-10 w-3 h-3 border-b-2 border-l-2 border-cyan-400 pointer-events-none"></div>
            <div className="absolute bottom-2 right-2 z-10 w-3 h-3 border-b-2 border-r-2 border-cyan-400 pointer-events-none"></div>

            {/* Top Left Tag Badge */}
            <div className="absolute top-3 left-3 z-10">
              <span className="text-[11px] font-medium text-cyan-300 bg-slate-950/80 backdrop-blur-md border border-cyan-500/40 px-2 py-0.5 rounded shadow">
                {section.tag}
              </span>
            </div>

            {/* The Image from 1.png, 2.png, 3.png, 4.png, 5.png */}
            <img
              src={section.image}
              alt={section.title}
              className="w-full h-auto object-cover block transition duration-500 group-hover:scale-[1.02]"
              referrerPolicy="no-referrer"
            />

            {/* Hover overlay hint */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end justify-between p-3 sm:p-4">
              <span className="text-xs text-white flex items-center gap-1.5 font-medium bg-cyan-950/80 px-2.5 py-1 rounded border border-cyan-400/40">
                <Maximize2 className="w-3.5 h-3.5 text-cyan-300" />
                点击全屏高清查看
              </span>
              <span className="text-[11px] text-cyan-300">
                系统实时截图存证
              </span>
            </div>
          </div>

          {/* Side Telemetry & Features Info (Visible on Wide Screen, or Toggleable) */}
          {!isMobileLayout && (
            <div className="lg:col-span-4 p-4 sm:p-6 bg-gradient-to-b from-slate-900/90 to-slate-950 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-cyan-500/20">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 flex items-center gap-1">
                    <Activity className="w-3.5 h-3.5" />
                    模块数据遥测
                  </span>
                  <span className="text-[11px] text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700">
                    {section.badge}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {section.desc}
                </p>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {section.metrics.map((m, idx) => (
                    <div 
                      key={idx}
                      className={`p-2.5 rounded-lg border transition ${
                        m.highlight 
                          ? 'bg-cyan-950/50 border-cyan-500/40' 
                          : 'bg-slate-950/50 border-slate-800'
                      }`}
                    >
                      <div className="text-[11px] text-slate-400 mb-0.5">{m.label}</div>
                      <div className={`text-sm sm:text-base font-bold font-mono ${
                        m.highlight ? 'text-cyan-300' : 'text-slate-200'
                      }`}>
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Features List */}
                <div className="space-y-1.5">
                  <div className="text-[11px] font-semibold text-slate-400 mb-1">关键能力支撑</div>
                  {section.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 font-mono">
                  NODE-DATA-REF #{section.id}09-GNS
                </span>
                <button
                  onClick={() => onImageClick(section)}
                  className="text-xs text-cyan-300 hover:text-white flex items-center gap-1 font-medium transition"
                >
                  查看原图大图
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
