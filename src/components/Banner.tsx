import React from 'react';
import { Eye, ShieldCheck, Activity, Radio, Cpu } from 'lucide-react';

interface BannerProps {
  onImageClick?: (image: string, title: string) => void;
}

export const Banner: React.FC<BannerProps> = ({ onImageClick }) => {
  return (
    <div className="relative w-full overflow-hidden bg-slate-950 border-b border-cyan-500/20">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent pointer-events-none"></div>

      <div className="relative w-full max-w-7xl mx-auto">
        <div 
          className="relative group cursor-pointer overflow-hidden"
          onClick={() => onImageClick?.('/top_banner.png', '长白山野山参全过程数据平台 - 头部全景')}
        >
          {/* Main Top Banner Image */}
          <img
            src="/top_banner.png"
            alt="长白山野山参全过程数据平台 - 数智赋能 · 生态全链 · 溯源求真"
            className="w-full h-auto object-cover block transition duration-500 group-hover:scale-[1.01]"
            referrerPolicy="no-referrer"
          />

          {/* Hover Overlay Hint */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end justify-between p-4 sm:p-6">
            <div className="flex items-center gap-2 text-cyan-300 text-xs sm:text-sm font-medium">
              <Eye className="w-4 h-4 text-cyan-400" />
              <span>点击查看高清头图大图</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-slate-300">
              <span className="flex items-center gap-1">
                <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                物联感知在线
              </span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                全过程数据存证
              </span>
            </div>
          </div>
        </div>

        {/* Live Telemetry Bar underneath banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 px-3 py-2.5 sm:px-6 sm:py-3 bg-slate-950/90 border-t border-slate-800/80 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="text-slate-400">基地位置:</span>
            <span className="text-cyan-200 font-mono font-medium">北纬42° 长白山原始林区</span>
          </div>
          <div className="flex items-center gap-2">
            <Activity className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-slate-400">监测参龄:</span>
            <span className="text-cyan-200 font-medium">10年~20年以上野山参</span>
          </div>
          <div className="flex items-center gap-2">
            <Cpu className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-slate-400">数字孪生:</span>
            <span className="text-cyan-200 font-medium">全域无人机多光谱 & GIS网格</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-slate-400">溯源状态:</span>
            <span className="text-emerald-300 font-medium">一物一码不可篡改</span>
          </div>
        </div>
      </div>
    </div>
  );
};
