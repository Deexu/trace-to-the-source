import React from 'react';
import { X, Smartphone, Check, Copy } from 'lucide-react';

interface QrModalProps {
  url: string;
  isOpen: boolean;
  onClose: () => void;
  onCopy: () => void;
  copied: boolean;
}

export const QrModal: React.FC<QrModalProps> = ({
  url,
  isOpen,
  onClose,
  onCopy,
  copied
}) => {
  if (!isOpen) return null;

  // Simple clean SVG QR code representation that renders without external libraries
  // Uses a high-tech agritech styled QR frame
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 animate-in fade-in"
      onClick={onClose}
    >
      <div 
        className="relative max-w-sm w-full bg-slate-900 border border-cyan-500/50 rounded-2xl p-6 text-center shadow-2xl shadow-cyan-950/60"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mx-auto mb-3 text-cyan-400">
          <Smartphone className="w-6 h-6" />
        </div>

        <h3 className="text-lg font-bold text-white mb-1">手机扫码 · 沉浸体验</h3>
        <p className="text-xs text-slate-400 mb-5">
          使用手机微信或自带相机扫码，在移动端体验长白山野山参全过程数据管理平台
        </p>

        {/* QR Code Container */}
        <div className="bg-white p-4 rounded-xl inline-block shadow-inner mx-auto mb-5 border-4 border-cyan-500/20">
          {/* Fallback QR generator via standard SVG matrix or QR image */}
          <img
            src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(url)}&color=082f49`}
            alt="Mobile Access QR Code"
            className="w-44 h-44 mx-auto block"
            onError={(e) => {
              // If offline or external API fails, replace with high-tech badge
              const target = e.currentTarget;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent) {
                parent.innerHTML = `<div class="w-44 h-44 flex flex-col items-center justify-center text-slate-800 text-xs font-mono p-2 text-center bg-cyan-50 rounded"><div>📱 移动端自适应</div><div class="mt-2 text-[10px] break-all text-slate-600">${url}</div></div>`;
              }
            }}
          />
        </div>

        <div className="flex flex-col gap-2">
          <button
            onClick={onCopy}
            className="w-full py-2.5 px-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold rounded-lg flex items-center justify-center gap-2 text-sm transition shadow-lg shadow-cyan-500/20"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                网址已复制成功
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                复制网页链接
              </>
            )}
          </button>
          <div className="text-[11px] text-slate-500 truncate mt-1">
            {url}
          </div>
        </div>
      </div>
    </div>
  );
};
