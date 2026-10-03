import React from 'react';
import { ChevronLeft, Monitor, Smartphone, Share2, Layers, Cpu, Compass } from 'lucide-react';

interface HeaderProps {
  viewMode: 'auto' | 'mobile-mockup';
  onToggleViewMode: () => void;
  onOpenQr: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  viewMode,
  onToggleViewMode,
  onOpenQr
}) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#080d19]/95 backdrop-blur-md border-b border-cyan-500/20">
      {/* Top Banner Accent Line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        {/* Left: Back button & Title */}
        <div className="flex items-center gap-2 sm:gap-4 overflow-hidden">
          <button 
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-1 sm:p-1.5 text-slate-300 hover:text-white hover:bg-cyan-950/40 rounded-lg transition border border-transparent hover:border-cyan-500/30 flex-shrink-0"
            title="返回顶部"
          >
            <ChevronLeft className="w-6 h-6 text-slate-200" />
          </button>

          <div className="flex items-center gap-2 overflow-hidden">
            {/* Hainan Data Exchange Emblem icon */}
            <div className="hidden lg:flex w-7 h-7 rounded-md bg-gradient-to-br from-amber-500/20 to-cyan-500/20 border border-cyan-400/40 items-center justify-center flex-shrink-0">
              <Compass className="w-4 h-4 text-cyan-300" />
            </div>

            <div className="truncate">
              <h1 className="text-white font-bold text-sm sm:text-base md:text-lg tracking-wide flex items-center gap-2 truncate">
                长白山野山参全过程数据管理平台
                <span className="hidden md:inline-flex items-center gap-1 text-[11px] font-normal text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-2 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  数智赋能
                </span>
              </h1>
              <p className="hidden xl:block text-[10px] text-slate-400 tracking-wider">
                Hainan Data Exchange Co., Ltd. 海南数据交易服务有限公司
              </p>
            </div>
          </div>
        </div>

        {/* Right: Mode Switcher & Quick Navigation */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          {/* Quick anchor tags for PC view */}
          <nav className="hidden xl:flex items-center gap-1 text-xs text-slate-300 mr-2">
            <a href="#section-1" className="px-2.5 py-1 rounded hover:text-cyan-300 hover:bg-slate-800/60 transition">
              过程管控
            </a>
            <a href="#section-2" className="px-2.5 py-1 rounded hover:text-cyan-300 hover:bg-slate-800/60 transition">
              环境感知
            </a>
            <a href="#section-3" className="px-2.5 py-1 rounded hover:text-cyan-300 hover:bg-slate-800/60 transition">
              动态监控
            </a>
            <a href="#section-4" className="px-2.5 py-1 rounded hover:text-cyan-300 hover:bg-slate-800/60 transition">
              数字台账
            </a>
            <a href="#section-5" className="px-2.5 py-1 rounded hover:text-cyan-300 hover:bg-slate-800/60 transition">
              农事记录
            </a>
          </nav>

          {/* View Mode Toggle: Simulator vs Full View (on wide screens) */}
          <div className="hidden sm:flex items-center bg-slate-900/90 border border-cyan-500/30 rounded-lg p-0.5 text-xs">
            <button
              onClick={onToggleViewMode}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition ${
                viewMode === 'auto'
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title="自适应响应式宽屏模式"
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>宽屏</span>
            </button>
            <button
              onClick={onToggleViewMode}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition ${
                viewMode === 'mobile-mockup'
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title="移动端仿真单栏效果"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>手机端</span>
            </button>
          </div>

          {/* QR Code button */}
          <button
            onClick={onOpenQr}
            className="p-1.5 sm:px-2.5 sm:py-1.5 text-xs text-cyan-300 bg-cyan-950/60 hover:bg-cyan-900/60 border border-cyan-500/40 rounded-lg transition flex items-center gap-1.5"
            title="手机扫码打开"
          >
            <Share2 className="w-4 h-4" />
            <span className="hidden sm:inline">扫码分享</span>
          </button>
        </div>
      </div>
    </header>
  );
};
