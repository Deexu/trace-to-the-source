import React, { useState } from 'react';
import { Check, Copy, Maximize2, X } from 'lucide-react';

interface Section {
  id: number;
  code: string;
  title: string;
  image: string;
}

const TARGET_COPY_URL =
  'http://gov.ginseng.ktopia.cn/home/dashboard-1?token=gov_token_7433_1_n8is6wvma86m1r2gxl8o2kfbdo7tjf81';

const SECTIONS: Section[] = [
  { id: 1, code: '01', title: '数字化全过程管控', image: '/1.png' },
  { id: 2, code: '02', title: '环境数据实时感知终端', image: '/2.png' },
  { id: 3, code: '03', title: '全天候动态识别监控', image: '/3.png' },
  { id: 4, code: '04', title: '地块精细化数字台账', image: '/4.png' },
  { id: 5, code: '05', title: '农事操作全流程记录', image: '/5.png' },
];

export default function App() {
  const [copied, setCopied] = useState(false);
  const [previewImage, setPreviewImage] = useState<{ src: string; title: string } | null>(null);

  const handleCopyUrl = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(TARGET_COPY_URL);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = TARGET_COPY_URL;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2600);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2600);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#0b101b] bg-cyber-grid text-white flex flex-col relative overflow-x-hidden">
      {/* Ambient Decorative Background Glows */}
      <div
        className="pointer-events-none fixed top-1/4 -left-32 w-96 h-96 rounded-full bg-cyan-500/5 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none fixed bottom-1/4 -right-32 w-96 h-96 rounded-full bg-emerald-500/5 blur-[120px]"
        aria-hidden="true"
      />

      {/* Toast Notification */}
      {copied && (
        <div className="fixed top-16 left-1/2 -translate-x-1/2 z-50 bg-[#131d31]/95 border border-cyan-400/50 text-white px-5 py-2.5 rounded-md shadow-[0_0_25px_rgba(6,182,212,0.3)] text-xs sm:text-sm flex items-center gap-2 backdrop-blur-md">
          <Check className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>网址已复制，请前往电脑端浏览器粘贴打开</span>
        </div>
      )}

      {/* Top Header Bar (No left back icon, full-width with tech ornaments) */}
      <header className="sticky top-0 z-40 w-full bg-[#0b101b]/90 backdrop-blur-md border-b border-cyan-500/20 h-12 sm:h-14 flex items-center justify-center px-4 relative">
        {/* Top subtle glowing line */}
        <div
          className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"
          aria-hidden="true"
        />

        <div className="flex items-center justify-center gap-2.5 sm:gap-4">
          {/* Left decorative tech wing */}
          <div className="flex items-center gap-1 opacity-75" aria-hidden="true">
            <span className="w-4 sm:w-8 h-[1px] bg-gradient-to-r from-transparent to-cyan-400" />
            <span className="w-1.5 h-1.5 rotate-45 bg-cyan-400 shadow-[0_0_6px_#22d3ee]" />
            <span className="hidden sm:inline-block w-1 h-3 -skew-x-12 bg-cyan-400/40 ml-0.5" />
          </div>

          <h1 className="text-white text-base sm:text-lg md:text-xl font-bold tracking-wider text-center drop-shadow-[0_2px_10px_rgba(6,182,212,0.2)]">
            长白山野山参全过程数据管理平台
          </h1>

          {/* Right decorative tech wing */}
          <div className="flex items-center gap-1 opacity-75" aria-hidden="true">
            <span className="hidden sm:inline-block w-1 h-3 skew-x-12 bg-cyan-400/40 mr-0.5" />
            <span className="w-1.5 h-1.5 rotate-45 bg-cyan-400 shadow-[0_0_6px_#22d3ee]" />
            <span className="w-4 sm:w-8 h-[1px] bg-gradient-to-l from-transparent to-cyan-400" />
          </div>
        </div>

        {/* Bottom center accent highlight */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 sm:w-64 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent"
          aria-hidden="true"
        />
      </header>

      {/* Full-Bleed Top Banner (顶部banner图通铺) */}
      <div className="w-full relative group">
        <img
          src="/top_banner.png"
          alt="长白山野山参全过程数据平台"
          className="w-full h-auto block select-none cursor-pointer"
          referrerPolicy="no-referrer"
          onClick={() =>
            setPreviewImage({ src: '/top_banner.png', title: '长白山野山参全过程数据平台' })
          }
        />
        {/* Subtle bottom transition divider */}
        <div
          className="w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent"
          aria-hidden="true"
        />
      </div>

      {/* Main Content Container - Adaptive for Mobile & PC */}
      <main className="w-full max-w-5xl mx-auto flex-1 flex flex-col px-3 sm:px-6 md:px-8 pt-2 sm:pt-6 pb-4">
        {SECTIONS.map((section) => (
          <section key={section.id} className="w-full pt-5 sm:pt-8 pb-2 sm:pb-4">
            {/* Section Title with Tech Decorative Accents (No extra text descriptions) */}
            <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
              {/* Glowing vertical indicator & geometric accent */}
              <div className="flex items-center gap-1.5 shrink-0" aria-hidden="true">
                <span className="w-1 h-4 sm:h-5 bg-gradient-to-b from-cyan-300 to-cyan-600 rounded-xs shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
                <span className="text-[11px] sm:text-xs font-mono font-bold text-cyan-400/90 tracking-tighter">
                  {section.code}
                </span>
              </div>

              <h2 className="text-white text-base sm:text-lg md:text-xl font-bold tracking-wide shrink-0">
                {section.title}
              </h2>

              {/* Decorative tech line extending right */}
              <div className="flex-1 flex items-center gap-1.5 ml-1" aria-hidden="true">
                <div className="h-[1px] flex-1 bg-gradient-to-r from-cyan-500/35 via-cyan-500/10 to-transparent" />
                <div className="flex items-center gap-1 opacity-50">
                  <span className="w-1 h-1 rounded-full bg-cyan-400" />
                  <span className="w-1 h-1 rounded-full bg-cyan-400/60" />
                  <span className="w-1 h-1 rounded-full bg-cyan-400/30" />
                </div>
              </div>
            </div>

            {/* Section Image Card with HUD Corner Ornaments (Does not modify or crop the image) */}
            <div
              className="relative p-[3px] sm:p-1 rounded-md bg-gradient-to-b from-cyan-500/15 via-white/5 to-cyan-500/15 border border-cyan-500/25 shadow-[0_8px_30px_rgba(0,0,0,0.6)] cursor-pointer group transition duration-300 hover:border-cyan-400/50"
              onClick={() => setPreviewImage({ src: section.image, title: section.title })}
            >
              {/* Decorative HUD Corners outside image */}
              <span
                className="pointer-events-none absolute -top-[1px] -left-[1px] w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 border-t-2 border-l-2 border-cyan-400 rounded-tl-[2px]"
                aria-hidden="true"
              />
              <span
                className="pointer-events-none absolute -top-[1px] -right-[1px] w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 border-t-2 border-r-2 border-cyan-400 rounded-tr-[2px]"
                aria-hidden="true"
              />
              <span
                className="pointer-events-none absolute -bottom-[1px] -left-[1px] w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 border-b-2 border-l-2 border-cyan-400 rounded-bl-[2px]"
                aria-hidden="true"
              />
              <span
                className="pointer-events-none absolute -bottom-[1px] -right-[1px] w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 border-b-2 border-r-2 border-cyan-400 rounded-br-[2px]"
                aria-hidden="true"
              />

              {/* Unmodified Original Image */}
              <div className="w-full overflow-hidden rounded-[3px] bg-[#080c15] relative">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-auto block select-none"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle hover zoom prompt on PC */}
                <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-[#0b101b]/85 text-cyan-200 text-xs px-3 py-1.5 rounded border border-cyan-400/40 flex items-center gap-1.5 backdrop-blur-sm shadow-lg">
                    <Maximize2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>点击查看大图</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </main>

      {/* Bottom Callout Section strictly matching reference text + decorative frame */}
      <footer className="w-full max-w-5xl mx-auto pt-8 pb-14 px-4 flex flex-col items-center text-center relative">
        {/* Decorative top divider */}
        <div className="w-full max-w-md flex items-center justify-center gap-3 mb-7" aria-hidden="true">
          <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-cyan-500/30 to-cyan-500/50" />
          <span className="w-1.5 h-1.5 rotate-45 bg-cyan-400/70" />
          <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-cyan-500/30 to-cyan-500/50" />
        </div>

        <p className="text-white text-xs sm:text-sm font-medium whitespace-nowrap">
          为保证更加体验，请复制网址前往电脑端浏览器体验查看
        </p>
        <p className="text-slate-400 text-[11px] sm:text-xs mt-1.5 mb-5">
          建议使用Chrome浏览器
        </p>

        {/* Copy URL Button with subtle corner ornaments */}
        <div className="relative w-full max-w-xs group">
          <span
            className="pointer-events-none absolute -top-[1px] -left-[1px] w-2 h-2 border-t border-l border-cyan-400/80"
            aria-hidden="true"
          />
          <span
            className="pointer-events-none absolute -bottom-[1px] -right-[1px] w-2 h-2 border-b border-r border-cyan-400/80"
            aria-hidden="true"
          />
          <button
            type="button"
            onClick={handleCopyUrl}
            className="w-full py-2.5 px-6 rounded-md bg-[#070a12] hover:bg-[#11192c] active:bg-black border border-white/85 hover:border-cyan-300 text-white text-sm font-medium transition duration-200 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.12)] cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-emerald-300">已复制网址</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-cyan-300/90 shrink-0" />
                <span>复制网址，在电脑端浏览器打开</span>
              </>
            )}
          </button>
        </div>
      </footer>

      {/* Fullscreen Image Preview Lightbox */}
      {previewImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-3 sm:p-6 animate-in fade-in"
          onClick={() => setPreviewImage(null)}
        >
          <div className="w-full max-w-6xl flex items-center justify-between pb-3 text-white">
            <span className="text-sm sm:text-base font-semibold truncate">{previewImage.title}</span>
            <button
              type="button"
              onClick={() => setPreviewImage(null)}
              className="p-1.5 rounded hover:bg-white/10 text-white/80 hover:text-white transition"
              aria-label="关闭预览"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="max-w-6xl max-h-[86vh] overflow-auto flex items-center justify-center">
            <img
              src={previewImage.src}
              alt={previewImage.title}
              className="max-h-[86vh] w-auto object-contain rounded"
              referrerPolicy="no-referrer"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}
