import { Smartphone, ExternalLink, RefreshCw, Layers } from 'lucide-react';
import { useState, useRef } from 'react';

export default function DuoCaiHuangXiaoXi() {
  const [iframeKey, setIframeKey] = useState(0);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleRefresh = () => {
    setIframeKey(prev => prev + 1);
  };

  return (
    <div className="bg-white border border-slate-200/80 rounded-[32px] p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.02)]" id="tour-ecosystem">
      {/* Mini indicator */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
        <div className="space-y-1.5 text-left">
          <div className="flex items-center gap-2">
            <Smartphone className="w-5 h-5 text-blue-600" />
            <span className="text-xs font-bold text-blue-600 tracking-wider uppercase font-mono">
              ECOLOGICAL EMBEDDED WEB
            </span>
          </div>
          <h3 className="text-xl md:text-2xl font-black text-slate-800 tracking-tight">
            多彩“黄小西”全域文旅智能服务生态 
          </h3>
        </div>


      </div>

      {/* Browser Shell Mockup Container for Embedded Webpage */}
      <div className="relative rounded-[24px] border border-slate-200/80 overflow-hidden bg-slate-50 flex flex-col shadow-sm">
        {/* Embedded Iframe */}
        <div className="w-full relative bg-white">
          <iframe
            key={iframeKey}
            ref={iframeRef}
            src="https://scmgh-2025.github.io/DuoCaihuangxiaoxiSenTai/"
            className="w-full h-[1450px] sm:h-[1550px] md:h-[1650px] rounded-[24px] border-none outline-none block overflow-hidden"
            title="DuoCai HuangXiaoXi Ecosystem"
            referrerPolicy="no-referrer"
            scrolling="no"
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          />
        </div>
      </div>
    </div>
  );
}

