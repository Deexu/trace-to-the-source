import React, { useState } from 'react';
import { Copy, Check, ExternalLink, Chrome, ShieldAlert, Smartphone } from 'lucide-react';

interface FooterProps {
  onOpenQr: () => void;
  onCopyUrl: () => void;
  copied: boolean;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenQr,
  onCopyUrl,
  copied
}) => {
  return (
    <footer className="w-full bg-[#050811] border-t border-cyan-500/20 py-8 px-4 sm:px-6 text-center">
      <div className="max-w-xl mx-auto flex flex-col items-center">
        {/* Experience Notice matching exact text from reference */}
        <p className="text-sm sm:text-base font-semibold text-slate-100 tracking-wide mb-1">
          为保证更加体验，请复制网址前往电脑端浏览器体验查看
        </p>

        {/* Browser Suggestion */}
        <div className="flex items-center justify-center gap-1.5 text-xs text-slate-400 mb-5">
          <Chrome className="w-3.5 h-3.5 text-cyan-400" />
          <span>建议使用Chrome浏览器</span>
        </div>

        {/* Copy Button matching exact text from reference */}
        <button
          onClick={onCopyUrl}
          className="w-full max-w-sm py-3 px-6 rounded-lg bg-black hover:bg-slate-900 border border-white/80 hover:border-cyan-400 text-white font-medium text-sm sm:text-base flex items-center justify-center gap-2 transition duration-200 shadow-lg shadow-black/50 group active:scale-[0.98]"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-300">网址已复制！请在电脑端粘贴打开</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 text-slate-300 group-hover:text-cyan-300 transition" />
              <span>复制网址，在电脑端浏览器打开</span>
            </>
          )}
        </button>

        {/* Secondary options */}
        <div className="mt-4 flex items-center gap-4 text-xs text-slate-400">
          <button
            onClick={onOpenQr}
            className="hover:text-cyan-300 underline underline-offset-4 flex items-center gap-1 transition"
          >
            <Smartphone className="w-3.5 h-3.5" />
            手机扫码体验
          </button>
          <span>·</span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="hover:text-cyan-300 underline underline-offset-4 transition"
          >
            返回顶部
          </button>
        </div>

        {/* Compliance & Ownership Info */}
        <div className="mt-8 pt-6 border-t border-slate-900 w-full text-[11px] text-slate-400 space-y-1">
          <div>长白山野山参全过程数据管理平台 · 数字化示范项目</div>
          <div>Hainan Data Exchange Co., Ltd. 海南数据交易服务有限公司 版权所有</div>
        </div>
      </div>
    </footer>
  );
};
