import { motion } from 'motion/react';
import { 
  Smartphone, ClipboardCheck, Activity, Stethoscope, HeartPulse, Sparkles
} from 'lucide-react';

interface VerticalAgentsProps {
  onOpenMockup?: (productId: number, mockupIndex: number, isPhone?: boolean) => void;
}

export default function VerticalAgents({ onOpenMockup }: VerticalAgentsProps) {
  return (
    <div className="space-y-12 animate-fade-in" id="vertical-agents">
      {/* SECTION HEADER */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-left"
      >
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2.5 h-6 bg-blue-600 rounded-full" />
          <h3 className="text-xl md:text-2xl font-black text-slate-800 font-sans tracking-tight">
            其他各类场景智能体
          </h3>
        </div>
      </motion.div>

      {/* 1. 基层服务智能体 Row Card */}
      <div className="bg-white border border-slate-200/80 rounded-[32px] p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.015)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left text portion (7 columns) */}
        <div className="lg:col-span-7 text-left space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-blue-50 border border-blue-100 text-blue-600">
              <ClipboardCheck className="w-5 h-5" />
            </div>
            <h4 className="text-lg md:text-xl font-bold font-sans text-slate-900 tracking-tight">
              1. 基层服务智能体
            </h4>
          </div>

          <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-sans">
            基层智能体聚焦网格员核心工作痛点，具备多模态信息采集、智能填表、工单协同、决策分析等核心功能，实现数据“一次采集、多方复用”、任务“智能拆解、精准派单”、文书“自动生成、一键上报”，全面减少基层重复劳动，做到智能体好用、功能易用、基层爱用。
          </p>

          {/* Grid stats indicator */}
          <div className="grid grid-cols-3 gap-3 pt-1">
            <div className="bg-slate-50/50 p-3 rounded-2xl border border-slate-100 text-center">
              <span className="text-[12px] md:text-xs text-slate-500 block font-sans mb-1 font-semibold">数据重复录入</span>
              <span className="text-sm md:text-base font-extrabold text-blue-600 font-mono">-91.5%</span>
            </div>
            <div className="bg-slate-50/50 p-3 rounded-2xl border border-slate-100 text-center">
              <span className="text-[12px] md:text-xs text-slate-500 block font-sans mb-1 font-semibold">事件流转速度</span>
              <span className="text-sm md:text-base font-extrabold text-indigo-600 font-mono">提升 2倍</span>
            </div>
            <div className="bg-slate-50/50 p-3 rounded-2xl border border-slate-100 text-center">
              <span className="text-[12px] md:text-xs text-slate-500 block font-sans mb-1 font-semibold">网格员满意度</span>
              <span className="text-sm md:text-base font-extrabold text-emerald-600 font-mono">98.2%</span>
            </div>
          </div>
        </div>

        {/* Right mockup portion (5 columns): Two smartphone mockups */}
        <div className="lg:col-span-5 flex flex-wrap md:flex-nowrap items-center justify-center gap-4 w-full">
          {/* Phone Mockup 1: Voice Input & Transcription */}
          <div
            onClick={() => onOpenMockup?.(6, 1, true)}
            className="w-[155px] md:w-[165px] aspect-[519/978] bg-[#080B12] rounded-[28px] p-2 shadow-[0_12px_24px_rgba(15,23,42,0.12)] border-[0.5px] border-slate-800 relative flex flex-col overflow-hidden text-slate-200 select-none shrink-0 hover:scale-[1.03] transition-transform duration-300 cursor-pointer"
          >
            {/* Smart Phone Screen */}
            <div className="flex-grow bg-[#090D17] rounded-[21px] overflow-hidden border border-slate-900 flex items-center justify-center">
              <img src="/assets/15.png" alt="语音实时采集录入" className="w-full h-full object-cover rounded-[21px]" />
            </div>
          </div>

          {/* Phone Mockup 2: Smart form mapping & Dispatch workflow */}
          <div
            onClick={() => onOpenMockup?.(6, 2, true)}
            className="w-[155px] md:w-[165px] aspect-[262/492] bg-[#080B12] rounded-[28px] p-2 shadow-[0_12px_24px_rgba(15,23,42,0.12)] border-[0.5px] border-slate-800 relative flex flex-col overflow-hidden text-slate-200 select-none shrink-0 hover:scale-[1.03] transition-transform duration-300 cursor-pointer"
          >
            {/* Smart Phone Screen */}
            <div className="flex-grow bg-[#090D17] rounded-[21px] overflow-hidden border border-slate-900 flex items-center justify-center">
              <img src="/assets/16.png" alt="AI 协同自动派单" className="w-full h-full object-cover rounded-[21px]" />
            </div>
          </div>
        </div>
      </div>

      {/* 2. 诊所智能体 Row Card */}
      <div className="bg-white border border-slate-200/80 rounded-[32px] p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.015)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left text portion (5 columns) */}
        <div className="lg:col-span-5 text-left space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-emerald-50 border border-emerald-100 text-emerald-600">
              <Stethoscope className="w-5 h-5" />
            </div>
            <h4 className="text-lg md:text-xl font-bold font-sans text-slate-900 tracking-tight">
              2. 诊所智能体
            </h4>
          </div>

          <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-sans">
            面向基层医疗场景，通过先进的多模态大模型与权威医学知识库紧密耦合，同时双向赋能并服务于居民与医生两端：
          </p>

          <div className="flex flex-col gap-4">
            <div className="p-4.5 md:p-5 rounded-2xl bg-white border border-slate-100 hover:bg-slate-50 transition-colors text-left shadow-[0_2px_8px_rgba(0,0,0,0.01)]">
              <span className="inline-block text-xs md:text-[13px] font-black px-2 py-0.5 rounded-md bg-teal-50 border border-teal-150 text-teal-700 font-sans mb-2">
                对居民
              </span>
              <p className="text-slate-650 text-sm md:text-[15px] leading-relaxed">
                作为患者看病助手，提供7×24小时在线全科问诊、详细用药指导、健康档案管理、预约挂号、购药及报告解读等健康服务；
              </p>
            </div>

            <div className="p-4.5 md:p-5 rounded-2xl bg-white border border-slate-100 hover:bg-slate-50 transition-colors text-left shadow-[0_2px_8px_rgba(0,0,0,0.01)]">
              <span className="inline-block text-xs md:text-[13px] font-black px-2 py-0.5 rounded-md bg-emerald-50 border border-emerald-150 text-emerald-700 font-sans mb-2">
                对基层医生
              </span>
              <p className="text-slate-650 text-sm md:text-[15px] leading-relaxed">
                作为高效诊疗助手，帮助医生同时管理多个家庭的患者信息、诊疗记录和随访任务，大幅提升基层医疗服务效率与覆盖面。
              </p>
            </div>
          </div>
        </div>

        {/* Right mockup portion (7 columns): One Tablet & One Smartphone side-by-side */}
        <div className="lg:col-span-7 flex flex-wrap md:flex-nowrap items-center justify-center gap-4 w-full">
          
          {/* Tablet Mockup: Doctor Assisting Workstation */}
          <div
            onClick={() => onOpenMockup?.(7, 1, false)}
            className="w-[280px] md:w-[320px] aspect-[3/2] bg-[#080B12] rounded-[24px] p-2 shadow-[10px_10px_25px_rgba(0,0,0,0.15)] border-[0.3px] border-slate-800 relative flex flex-col overflow-hidden text-slate-200 select-none shrink-0 hover:scale-[1.03] transition-transform duration-300 cursor-pointer"
          >
            {/* Camera lens */}
            <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-slate-800 z-30" />

            {/* Tablet Screen */}
            <div className="flex-grow bg-[#090D17] rounded-[16px] overflow-hidden border border-slate-900 flex items-center justify-center">
              <img src="/assets/17.png" alt="基层医生智能助手工作台" className="w-full h-full object-cover rounded-[16px]" />
            </div>
          </div>

          {/* Smartphone Mockup: Resident/Patient Mobile View */}
          <div
            onClick={() => onOpenMockup?.(7, 2, true)}
            className="w-[155px] md:w-[165px] aspect-[750/1624] bg-[#080B12] rounded-[28px] p-2 shadow-[10px_10px_25px_rgba(0,0,0,0.15)] border-[0.5px] border-slate-800 relative flex flex-col overflow-hidden text-slate-200 select-none shrink-0 hover:scale-[1.03] transition-transform duration-300 cursor-pointer"
          >
            {/* Smart Phone Screen */}
            <div className="flex-grow bg-[#090D17] rounded-[21px] overflow-hidden border border-slate-900 flex items-center justify-center">
              <img src="/assets/18.png" alt="健康管家客户端" className="w-full h-full object-cover rounded-[21px]" />
            </div>
          </div>

        </div>
      </div>


    </div>
  );
}
