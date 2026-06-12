import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Database, UserCheck, Flame, Wallet, Users, HelpCircle, Network, Cpu, 
  Server, BookOpen, Layers, Shield, ChevronRight, CheckCircle, BarChart3, 
  Radio, FileText, AlertTriangle, Activity, Globe, MessageSquare, PhoneCall,
  X, Tablet, Compass
} from 'lucide-react';
import { projects2020 } from '../data';
import DuoCaiHuangXiaoXi from './DuoCaiHuangXiaoXi';
import VerticalAgents from './VerticalAgents';
import { getAssetUrl } from '../utils';

export default function TimelineSection() {
  const [activeMockup, setActiveMockup] = useState<{ productId: number, mockupIndex: number, isPhone?: boolean } | null>(null);
  const [infraTab, setInfraTab] = useState<number>(0);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  const getMockupTitle = (productIdx: number, mockupIdx: number) => {
    if (productIdx === 1) {
      return mockupIdx === 1 ? '成品油智慧大脑运行监视' : '加油站全景智慧电子监测系统';
    } else if (productIdx === 2) {
      return mockupIdx === 1 ? '黔薪保劳动用工智能预警大屏' : '欠薪预警与线索闭环联动中心';
    } else if (productIdx === 3) {
      return mockupIdx === 1 ? '12345热线智慧派单协同中心' : '"1+N"一体化数字报表中心';
    } else if (productIdx === 4) {
      return mockupIdx === 1 ? '省旅游产业数智互联运营监测平台' : '旅游供应链多端联合清算结算系统';
    } else if (productIdx === 5) {
      return mockupIdx === 1 ? '黔南全域数字化通用底座智能运行监控' : '黔南通识语料库与数据要素确权舱';
    } else if (productIdx === 6) {
      return mockupIdx === 1 ? '语音实时采集录入' : 'AI 协同自动派单';
    } else if (productIdx === 7) {
      return mockupIdx === 1 ? '基层医生智能助手工作台' : '健康管家客户端';
    }
    return '系统监视大屏';
  };

  const renderTabletInner = (productIdx: number, mockupIdx: number, isFullscreen = false) => {
    if (productIdx === 1 && mockupIdx === 1) {
      return (
        <div className="bg-[#0B0F19] h-full flex items-center justify-center">
          <img src={getAssetUrl('assets/3.png')} alt="成品油智慧大脑运行监视" className="w-full h-full object-cover" />
        </div>
      );
    }

    if (productIdx === 1 && mockupIdx === 2) {
      return (
        <div className="bg-[#090E1A] h-full flex items-center justify-center">
          <img src={getAssetUrl('assets/4.png')} alt="加油站全景智慧电子监测系统" className="w-full h-full object-cover" />
        </div>
      );
    }

    if (productIdx === 2 && mockupIdx === 1) {
      return (
        <div className="bg-[#0D111E] h-full flex items-center justify-center">
          <img src={getAssetUrl('assets/5.png')} alt="黔薪保劳动用工智能预警大屏" className="w-full h-full object-cover" />
        </div>
      );
    }

    if (productIdx === 2 && mockupIdx === 2) {
      return (
        <div className="bg-[#0A0D17] h-full flex items-center justify-center">
          <img src={getAssetUrl('assets/6.png')} alt="欠薪预警与线索闭环联动中心" className="w-full h-full object-cover" />
        </div>
      );
    }

    if (productIdx === 3 && mockupIdx === 1) {
      return (
        <div className="bg-[#0C0F17] h-full flex items-center justify-center">
          <img src={getAssetUrl('assets/7.png')} alt="12345热线派单协同中心" className="w-full h-full object-cover" />
        </div>
      );
    }

    if (productIdx === 3 && mockupIdx === 2) {
      return (
        <div className="bg-[#0B0E1A] h-full flex items-center justify-center">
          <img src={getAssetUrl('assets/8.png')} alt='"1+N"一体化数字报表中心' className="w-full h-full object-cover" />
        </div>
      );
    }

    if (productIdx === 4 && mockupIdx === 1) {
      return (
        <div className="bg-[#0A0D17] h-full flex items-center justify-center">
          <img src={getAssetUrl('assets/9.png')} alt="省旅游产业数智互联运营监测平台" className="w-full h-full object-cover" />
        </div>
      );
    }

    if (productIdx === 4 && mockupIdx === 2) {
      return (
        <div className="bg-[#0B0E20] h-full flex items-center justify-center">
          <img src={getAssetUrl('assets/10.png')} alt="旅游供应链多端联合清算结算系统" className="w-full h-full object-cover" />
        </div>
      );
    }

    if (productIdx === 5 && mockupIdx === 1) {
      return (
        <div className="bg-[#0A0E1A] h-full flex items-center justify-center">
          <img src={getAssetUrl('assets/1.png')} alt="黔南全域数字化通用底座智能运行监控" className="w-full h-full object-cover" />
        </div>
      );
    }

    if (productIdx === 5 && mockupIdx === 2) {
      return (
        <div className="bg-[#0A0E1A] h-full flex items-center justify-center">
          <img src={getAssetUrl('assets/2.png')} alt="黔南通识语料库与数据要素确权舱" className="w-full h-full object-cover" />
        </div>
      );
    }

    if (productIdx === 6 && mockupIdx === 1) {
      return (
        <div className="bg-[#090D17] h-full flex items-center justify-center">
          <img src={getAssetUrl('assets/15.png')} alt="语音实时采集录入" className="w-full h-full object-cover" />
        </div>
      );
    }

    if (productIdx === 6 && mockupIdx === 2) {
      return (
        <div className="bg-[#090D17] h-full flex items-center justify-center">
          <img src={getAssetUrl('assets/16.png')} alt="AI 协同自动派单" className="w-full h-full object-cover" />
        </div>
      );
    }

    if (productIdx === 7 && mockupIdx === 1) {
      return (
        <div className="bg-[#090D17] h-full flex items-center justify-center">
          <img src={getAssetUrl('assets/17.png')} alt="基层医生智能助手工作台" className="w-full h-full object-cover" />
        </div>
      );
    }

    if (productIdx === 7 && mockupIdx === 2) {
      return (
        <div className="bg-[#090D17] h-full flex items-center justify-center">
          <img src={getAssetUrl('assets/18.png')} alt="健康管家客户端" className="w-full h-full object-cover" />
        </div>
      );
    }

    return null;
  };

  const getSubProjectIcon = (type: string) => {
    switch (type) {
      case 'user': return <UserCheck className="w-5 h-5 text-blue-600" />;
      case 'oil': return <Flame className="w-5 h-5 text-amber-600" />;
      case 'salary': return <Wallet className="w-5 h-5 text-rose-600" />;
      case 'service': return <Layers className="w-5 h-5 text-purple-600" />;
      default: return <Database className="w-5 h-5 text-blue-600" />;
    }
  };

  const getSubProjectBg = (type: string) => {
    switch (type) {
      case 'user': return 'from-blue-400 to-blue-500';
      case 'oil': return 'from-amber-400 to-amber-500';
      case 'salary': return 'from-rose-400 to-rose-500';
      case 'service': return 'from-purple-400 to-purple-500';
      default: return 'from-blue-400 to-blue-500';
    }
  };

  return (
    <div className="space-y-16" id="products">
      {/* section title */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-3.5 mb-12"
      >
        <div className="w-1.5 h-7 bg-blue-600 rounded-full" />
        <h2 className="text-2xl md:text-3xl font-bold font-display text-slate-800">
          主要产品与成效
        </h2>
      </motion.div>

      {/* TIMELINE FRAMEWORK */}
      <div className="relative border-l-2 border-slate-200 ml-4 md:ml-8 pl-8 md:pl-10 space-y-24">
        
        {/* ======================= 2018 MILESTONE ======================= */}
        <div className="relative">
          {/* timeline nodes */}
          <div className="absolute -left-[45px] md:-left-[53px] top-1.5 w-10 h-10 rounded-full bg-blue-600 border-4 border-white flex items-center justify-center z-10 shadow-lg shadow-blue-200">
            <span className="w-3.5 h-3.5 bg-white rounded-full animate-ping absolute" />
            <span className="w-2.5 h-2.5 bg-white rounded-full" />
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            className="space-y-6 text-left"
          >
            {/* Year & Title Header */}
            <div>
              <span className="px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs md:text-sm font-bold uppercase tracking-wider inline-block mb-3 border border-blue-100">
                2018年
              </span>
              <h3 className="text-xl md:text-2xl font-bold font-display text-slate-900 leading-tight">
                建设黔南数字底座
              </h3>
              <p className="text-slate-500 text-sm md:text-base mt-2 max-w-3xl leading-relaxed">
                <strong>产品定位：</strong>新型AI技术底座及全域数字化转型基础设施
              </p>
            </div>

            {/* Row 1: 产品功能 (7 columns) and Tablet Mockup (5 columns) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6 items-stretch">
              {/* LEFT COLUMN: 产品功能 (7 columns) */}
              <div className="lg:col-span-7">
                <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-md transition-shadow duration-300 text-left h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-slate-50">
                      <div className="w-1.5 h-5 bg-blue-500 rounded-full" />
                      <h4 className="text-base font-bold text-slate-900 tracking-wide">
                        【产品功能】数字底座四大核心系统
                      </h4>
                    </div>
                    
                    <div className="space-y-6">
                      {/* Item 1 */}
                      <div className="flex gap-3.5 items-start">
                        <div className="w-8 h-8 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100">
                          <Network className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                          <h5 className="font-semibold text-slate-800 text-sm md:text-base">① 数字技术底座</h5>
                          <p className="text-xs md:text-sm text-slate-500 leading-relaxed mt-1">
                            涵盖交易结算中心、通用账户中心、业务功能中心、数据运算平台、低代码平台等数联网基础设施，驱动服务交互，匹配服务需求。
                          </p>
                        </div>
                      </div>

                      {/* Item 2 */}
                      <div className="flex gap-3.5 items-start">
                        <div className="w-8 h-8 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100">
                          <Cpu className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                          <h5 className="font-semibold text-slate-800 text-sm md:text-base">② 算力调度平台</h5>
                          <p className="text-xs md:text-sm text-slate-500 leading-relaxed mt-1">
                            构建区域算力“一张网”，实现算力协同，降低算力使用成本；
                          </p>
                        </div>
                      </div>

                      {/* Item 3 */}
                      <div className="flex gap-3.5 items-start">
                        <div className="w-8 h-8 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100">
                          <Server className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                          <h5 className="font-semibold text-slate-800 text-sm md:text-base">③ AI应用开发支持平台</h5>
                          <p className="text-xs md:text-sm text-slate-500 leading-relaxed mt-1">
                            集成各类大模型的AI应用开发支持平台，构建AI应用开发工具，打造低门槛的AI应用开发环境，提升开发效率。
                          </p>
                        </div>
                      </div>

                      {/* Item 4 */}
                      <div className="flex gap-3.5 items-start">
                        <div className="w-8 h-8 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100">
                          <BookOpen className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                          <h5 className="font-semibold text-slate-800 text-sm md:text-base">④ 通识语料库（可信数据空间）</h5>
                          <p className="text-xs md:text-sm text-slate-500 leading-relaxed mt-1">
                            聚焦积累“鲜活语料”，通过快速落地各类行业应用，积累在实时交互中产生的高价值语料。
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: Tablet Mockup 16:9 (5 columns) */}
              <div className="lg:col-span-5 flex flex-col justify-center items-center">
                {/* Tablet container */}
                <div
                  onClick={() => setActiveMockup({ productId: 5, mockupIndex: 1 })}
                  className="w-full max-w-[460px] aspect-[16/9] bg-[#090C15] rounded-[24px] p-2.5 shadow-[0_20px_40px_rgba(15,23,42,0.22)] border-[0.8px] border-slate-800 relative flex flex-col overflow-hidden text-slate-200 select-none cursor-pointer hover:scale-[1.02] transition-transform duration-300"
                >
                  {/* Camera lens hole */}
                  <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-slate-800 z-25" />

                  {/* Tablet Workspace Screen */}
                  <div className="flex-1 bg-[#0A0E1A] rounded-xl overflow-hidden border border-slate-900 flex items-center justify-center">
                    <img src={getAssetUrl('assets/1.png')} alt="黔南全域数字化通用底座智能运行监控" className="w-full h-full object-cover rounded-xl" />
                  </div>
                </div>

                {/* Tablet container 2 */}
                <div
                  onClick={() => setActiveMockup({ productId: 5, mockupIndex: 2 })}
                  className="w-full max-w-[460px] aspect-[16/9] bg-[#090C15] rounded-[24px] p-2.5 shadow-[0_20px_40px_rgba(15,23,42,0.22)] border-[0.8px] border-slate-800 relative flex flex-col overflow-hidden text-slate-200 select-none mt-6 cursor-pointer hover:scale-[1.02] transition-transform duration-300"
                >
                  {/* Camera lens hole */}
                  <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-slate-800 z-25" />

                  {/* Tablet Workspace Screen */}
                  <div className="flex-1 bg-[#0A0E1A] rounded-xl overflow-hidden border border-slate-900 flex items-center justify-center">
                    <img src={getAssetUrl('assets/2.png')} alt="黔南通识语料库与数据要素确权舱" className="w-full h-full object-cover rounded-xl" />
                  </div>
                </div>


              </div>
            </div>

            {/* Row 2: CARD 2: 落地成效 (Full row, spanning the full container width below) */}
            <div className="bg-slate-50/70 p-6 md:p-8 rounded-3xl border border-slate-200/50 mt-8 text-left">
              <div>
                <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-slate-200/60">
                  <div className="w-1.5 h-6 bg-emerald-500 rounded-full" />
                  <h4 className="text-lg md:text-xl font-extrabold text-slate-900 tracking-wide">
                    落地成效：
                  </h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* G1 */}
                  <div className="bg-white p-6 rounded-2xl border border-slate-100 flex flex-col justify-between hover:shadow-sm transition-all duration-300">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center border border-emerald-100 text-emerald-600 mb-4">
                        <Layers className="w-5 h-5" />
                      </div>
                      <h5 className="font-bold text-slate-800 text-base md:text-lg mb-3 flex items-center gap-1.5">
                        ① 政务端
                      </h5>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-normal">
                        创新职能部门监管服务工具集约化建设模式，统一支持各类监管服务平台的低成本、快速建设，实现数据跨系统互通与业务协同，充分释放数据要素价值；
                      </p>
                      <div className="mt-4 pt-4 border-t border-slate-100">
                        <h6 className="text-sm font-bold text-emerald-700 mb-2">落地成效</h6>
                        <ul className="space-y-1.5">
                          <li className="flex items-start gap-2 text-sm text-slate-600 leading-relaxed">
                            <span className="w-1 h-1 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                            服务州政府及15个部门
                          </li>
                          <li className="flex items-start gap-2 text-sm text-slate-600 leading-relaxed">
                            <span className="w-1 h-1 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                            保障成品油监管、政策找企、&quot;一网统管&quot;等工程落地
                          </li>
                          <li className="flex items-start gap-2 text-sm text-slate-600 leading-relaxed">
                            <span className="w-1 h-1 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                            累计服务企业24万家、居民400万人
                          </li>
                          <li className="flex items-start gap-2 text-sm text-slate-600 leading-relaxed">
                            <span className="w-1 h-1 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                            旅游产业数智互联运营平台、成品油一体化监管服务平台已升级为省级平台。
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* G2 */}
                  <div className="bg-white p-6 rounded-2xl border border-slate-100 flex flex-col justify-between hover:shadow-sm transition-all duration-300">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center border border-emerald-100 text-emerald-600 mb-4">
                        <BarChart3 className="w-5 h-5" />
                      </div>
                      <h5 className="font-bold text-slate-800 text-base md:text-lg mb-3 flex items-center gap-1.5">
                        ② 产业端
                      </h5>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-normal">
                        组织本地优势产业互联运营，通过数字化工具植入或数据直连，聚合本地商品与服务资源，建立统一资源池，支撑各类平台高效运营、数字化联盟构建及本地交易市场建设等；
                      </p>
                      <div className="mt-4 pt-4 border-t border-slate-100">
                        <h6 className="text-sm font-bold text-emerald-700 mb-2">落地成效</h6>
                        <ul className="space-y-1.5">
                          <li className="flex items-start gap-2 text-sm text-slate-600 leading-relaxed">
                            <span className="w-1 h-1 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                            通过&quot;建标准、汇数据、聚商品、推应用&quot;推进工作，构建旅游产业互联运营生态
                          </li>
                          <li className="flex items-start gap-2 text-sm text-slate-600 leading-relaxed">
                            <span className="w-1 h-1 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                            顺利完成省旅游行业大模型黔南试点
                          </li>
                          <li className="flex items-start gap-2 text-sm text-slate-600 leading-relaxed">
                            <span className="w-1 h-1 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                            累计推送涉旅市场主体3598家、商品4628个
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* G3 */}
                  <div className="bg-white p-6 rounded-2xl border border-slate-100 flex flex-col justify-between hover:shadow-sm transition-all duration-300">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center border border-emerald-100 text-emerald-600 mb-4">
                        <Users className="w-5 h-5" />
                      </div>
                      <h5 className="font-bold text-slate-800 text-base md:text-lg mb-3 flex items-center gap-1.5">
                        ③ 社会端
                      </h5>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-normal">
                        为商户及劳动者提供公私域运营工具，降低互联网头部企业的虹吸效应，降低居民生活与企业经营成本，推动本地交易结算与数据资金回流。
                      </p>
                      <div className="mt-4 pt-4 border-t border-slate-100">
                        <h6 className="text-sm font-bold text-emerald-700 mb-2">落地成效</h6>
                        <ul className="space-y-1.5">
                          <li className="flex items-start gap-2 text-sm text-slate-600 leading-relaxed">
                            <span className="w-1 h-1 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                            打造本地生活服务移动端
                          </li>
                          <li className="flex items-start gap-2 text-sm text-slate-600 leading-relaxed">
                            <span className="w-1 h-1 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                            提供服务：线上商城、工会活动、招工就业、外卖配送、交通出行等
                          </li>
                          <li className="flex items-start gap-2 text-sm text-slate-600 leading-relaxed">
                            <span className="w-1 h-1 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                            个人注册用户：61.15万
                          </li>
                          <li className="flex items-start gap-2 text-sm text-slate-600 leading-relaxed">
                            <span className="w-1 h-1 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                            企业注册用户：24.2万
                          </li>
                          <li className="flex items-start gap-2 text-sm text-slate-600 leading-relaxed">
                            <span className="w-1 h-1 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                            活动期间日活用户：超1.5万
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>


        {/* ======================= 2020 MILESTONE ======================= */}
        <div className="relative">
          {/* timeline nodes */}
          <div className="absolute -left-[45px] md:-left-[53px] top-1.5 w-10 h-10 rounded-full bg-indigo-600 border-4 border-white flex items-center justify-center z-10 shadow-lg shadow-indigo-200">
            <span className="w-3.5 h-3.5 bg-indigo-600 rounded-full animate-ping absolute opacity-40" />
            <span className="w-2.5 h-2.5 bg-white rounded-full" />
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            className="space-y-12 text-left"
          >
            {/* Year & Title Header */}
            <div>
              <span className="px-3.5 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-xs md:text-sm font-bold uppercase tracking-wider inline-block mb-3 border border-indigo-100">
                2020年
              </span>
              <h3 className="text-xl md:text-2xl font-bold font-display text-slate-900 leading-tight">
                打造各类政府监管服务平台和企业应用
              </h3>
            </div>

            {/* Redesigned Product List */}
            <div className="space-y-16">

              {/* PRODUCT 1: 贵州省成品油一体化监管服务平台 */}
              <motion.div 
                variants={itemVariants}
                className="bg-white rounded-3xl p-6 md:p-8 lg:p-10 border border-slate-150/70 shadow-[0_8px_30px_rgb(0,0,0,0.015)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.03)] transition-all duration-300 relative overflow-hidden"
              >
                {/* Visual badge top right corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 rounded-bl-[80px] -z-10 flex items-center justify-center pl-6 pb-6">
                  <span className="font-mono text-3xl font-extrabold text-slate-100/80">01</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                  
                  {/* Left Column: Product Info & Achievements */}
                  <div className="lg:col-span-7 space-y-6">
                    <div>
                      <div className="flex items-center gap-3 mb-3.5">
                        <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 shrink-0">
                          <Flame className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="text-xl md:text-2xl font-black text-slate-950 tracking-tight leading-snug">
                            1. 贵州省成品油一体化监管服务平台
                          </h4>
                        </div>
                      </div>
                      <p className="text-slate-600 text-sm md:text-base leading-relaxed mt-4">
                        在省委、省政府指导下，由省商务厅牵头联合省市监局、省税务、省交通厅等单位，指导我司承建并运营"贵州省成品油一体化监管服务平台"。
                        <br /><br />
                        该平台聚焦行业规范化与信息化监管，通过提供全信息电子档案、数据直采、一网监管、多维数据汇集及双向多级预警等核心功能，全面赋能贵州省成品油流通企业高质量发展。获得省级领导及商务部领导认可。
                      </p>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-4 pt-4 border-t border-slate-100">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="w-5 h-5 text-amber-500 shrink-0" />
                        <span className="text-xs md:text-sm font-bold text-slate-500 uppercase tracking-wider block">主要落地成效</span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* 1 */}
                        <div className="bg-slate-50/60 p-4 rounded-2xl border border-slate-100 hover:bg-slate-50 transition-colors">
                          <span className="inline-block text-xs font-bold px-2.5 py-1 bg-amber-50 border border-amber-100 text-amber-700 rounded-full mb-1.5">
                            全量接入
                          </span>
                          <p className="text-sm text-slate-700 font-medium leading-relaxed">
                            全量接入省内<strong className="text-slate-900">2800</strong>余座加油站实时数据
                          </p>
                        </div>
                        {/* 2 */}
                        <div className="bg-slate-50/60 p-4 rounded-2xl border border-slate-100 hover:bg-slate-50 transition-colors">
                          <span className="inline-block text-xs font-bold px-2.5 py-1 bg-blue-50 border border-blue-100 text-blue-700 rounded-full mb-1.5">
                            官方认可
                          </span>
                          <p className="text-sm text-slate-700 leading-relaxed">
                            获商务部肯定并纳入<strong>《商务参阅》全国推广</strong>，省领导批示认可，多省赴黔调研，主流媒体深度报道。
                          </p>
                        </div>
                        {/* 3 */}
                        <div className="bg-slate-50/60 p-4 rounded-2xl border border-slate-100 hover:bg-slate-50 transition-colors">
                          <span className="inline-block text-xs font-bold px-2.5 py-1 bg-emerald-50 border border-emerald-100 text-emerald-700 rounded-full mb-1.5">
                            提升财政收入
                          </span>
                          <p className="text-sm text-slate-700 leading-relaxed font-normal">
                            截至2025前三季度，助力全省成品油逆势增长，销售额提升<strong>3.7%</strong>，入库税收提升<strong>21.5%</strong>，拉动限上消费<strong>1.7%</strong>。
                          </p>
                        </div>
                        {/* 4 */}
                        <div className="bg-slate-50/60 p-4 rounded-2xl border border-slate-100 hover:bg-slate-50 transition-colors">
                          <span className="inline-block text-xs font-bold px-2.5 py-1 bg-rose-50 border border-rose-100 text-rose-700 rounded-full mb-1.5">
                            规范市场
                          </span>
                          <p className="text-sm text-slate-700 leading-relaxed">
                            截至2025年，全省累计开展联合执法<strong>926次</strong>，破获及端掉黑窝点<strong>141个</strong>，没收罚没<strong>1177万元</strong>。
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Two Tablet Mockup Screens */}
                  <div className="lg:col-span-5 flex justify-center pb-8 lg:pb-0 w-full">
                    <div className="flex flex-col gap-6 w-full max-w-[440px]">
                      
                      {/* Tablet 1 */}
                      <div 
                        onClick={() => setActiveMockup({ productId: 1, mockupIndex: 1 })}
                        className="group relative w-full aspect-[16/9] bg-slate-900 rounded-[24px] p-2 md:p-2.5 shadow-[0_12px_30px_rgba(15,23,42,0.15)] border-[0.4px] border-slate-800 hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col overflow-hidden"
                      >
                        {/* Camera lens */}
                        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-slate-800 z-20" />
                        
                        <div className="flex-1 rounded-[16px] overflow-hidden border border-slate-800/60 relative">
                          {renderTabletInner(1, 1)}
                          
                          {/* Hover effect mask */}
                          <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/25 flex items-center justify-center transition-all">
                            <span className="opacity-0 group-hover:opacity-100 bg-slate-900/95 text-slate-200 text-xs font-bold px-3 py-1.5 rounded-full border border-slate-700 shadow-lg flex items-center gap-1.5 transition-all transform translate-y-2 group-hover:translate-y-0">
                              <Globe className="w-3.5 h-3.5 animate-spin-slow text-amber-500" />
                              点击全屏查看
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Tablet 2 */}
                      <div 
                        onClick={() => setActiveMockup({ productId: 1, mockupIndex: 2 })}
                        className="group relative w-full aspect-[16/9] bg-slate-900 rounded-[24px] p-2 md:p-2.5 shadow-[0_20px_45_rgba(15,23,42,0.22)] border-[0.4px] border-slate-800 hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col overflow-hidden"
                      >
                        {/* Camera lens */}
                        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-slate-800 z-20" />
                        
                        <div className="flex-1 rounded-[16px] overflow-hidden border border-slate-800/60 relative">
                          {renderTabletInner(1, 2)}
                          
                          {/* Hover effect mask */}
                          <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/25 flex items-center justify-center transition-all">
                            <span className="opacity-0 group-hover:opacity-100 bg-slate-900/95 text-slate-200 text-xs font-bold px-3 py-1.5 rounded-full border border-slate-700 shadow-lg flex items-center gap-1.5 transition-all transform translate-y-2 group-hover:translate-y-0">
                              <Globe className="w-3.5 h-3.5 animate-spin-slow text-sky-400" />
                              点击全屏查看
                            </span>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              </motion.div> 

              {/* PRODUCT 2: "黔薪保"劳动用工大数据平台 */}
              <motion.div 
                variants={itemVariants}
                className="bg-white rounded-3xl p-6 md:p-8 lg:p-10 border border-slate-150/70 shadow-[0_8px_30px_rgb(0,0,0,0.015)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.03)] transition-all duration-300 relative overflow-hidden"
              >
                {/* Visual badge top right corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 rounded-bl-[80px] -z-10 flex items-center justify-center pl-6 pb-6">
                  <span className="font-mono text-3xl font-extrabold text-slate-100/80">02</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                  
                  {/* Left Column: Product Info & Achievements */}
                  <div className="lg:col-span-7 space-y-6">
                    <div>
                      <div className="flex items-center gap-3 mb-3.5">
                        <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-600 shrink-0">
                          <Wallet className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="text-xl md:text-2xl font-black text-slate-950 tracking-tight leading-snug">
                            2. "黔薪保"劳动用工大数据平台
                          </h4>
                        </div>
                      </div>
                      <p className="text-slate-600 text-sm md:text-base leading-relaxed mt-4">
                        聚焦防范与解决欠薪问题，依托“农民工实名制+工资支付预警”模式搭建“五端一库”（政府端、企业端、项目端、民工端、银保端协同，劳动用工主题数据库），实现用工实名管理、欠薪智能预警、全渠道线索处置等功能。
                      </p>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-4 pt-4 border-t border-slate-100">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="w-5 h-5 text-rose-500 shrink-0" />
                        <span className="text-xs md:text-sm font-bold text-slate-500 uppercase tracking-wider block">主要落地成效</span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* 1 */}
                        <div className="bg-slate-50/60 p-4 rounded-2xl border border-slate-100 hover:bg-slate-50 transition-colors">
                          <span className="inline-block text-xs font-bold px-2.5 py-1 bg-rose-50 border border-rose-100 text-rose-700 rounded-full mb-1.5">
                            覆盖广 / 协同高
                          </span>
                          <p className="text-sm text-slate-700 font-medium leading-relaxed">
                            纳入监管项目<strong>1.84万个</strong>、务工人员<strong>330万</strong>，保障工资发放超<strong>1600亿元</strong>；推动省市县<strong>1455个</strong>单位在线高效协同。
                          </p>
                        </div>
                        {/* 2 */}
                        <div className="bg-slate-50/60 p-4 rounded-2xl border border-slate-100 hover:bg-slate-50 transition-colors">
                          <span className="inline-block text-xs font-bold px-2.5 py-1 bg-emerald-50 border border-emerald-100 text-emerald-700 rounded-full mb-1.5">
                            预警准 / 处置快
                          </span>
                          <p className="text-sm text-slate-700 leading-relaxed">
                            精准推送断发预警，及时、动态核获联动处置<strong>28个渠道</strong>的欠薪线索，农民工人实名制落实率基本保持在<strong>90%左右</strong>。
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Two Tablet Mockup Screens */}
                  <div className="lg:col-span-5 flex justify-center pb-8 lg:pb-0 w-full">
                    <div className="flex flex-col gap-6 w-full max-w-[440px]">
                      
                      {/* Tablet 1 */}
                      <div 
                        onClick={() => setActiveMockup({ productId: 2, mockupIndex: 1 })}
                        className="group relative w-full aspect-[16/9] bg-slate-900 rounded-[24px] p-2 md:p-2.5 shadow-[0_12px_30px_rgba(15,23,42,0.15)] border-[0.4px] border-slate-800 hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col overflow-hidden"
                      >
                        {/* Camera lens */}
                        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-slate-800 z-20" />
                        
                        <div className="flex-1 rounded-[16px] overflow-hidden border border-slate-800/60 relative">
                          {renderTabletInner(2, 1)}
                          
                          {/* Hover effect mask */}
                          <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/25 flex items-center justify-center transition-all">
                            <span className="opacity-0 group-hover:opacity-100 bg-slate-900/95 text-slate-200 text-xs font-bold px-3 py-1.5 rounded-full border border-slate-700 shadow-lg flex items-center gap-1.5 transition-all transform translate-y-2 group-hover:translate-y-0">
                              <Globe className="w-3.5 h-3.5 animate-spin-slow text-rose-400" />
                              点击全屏查看
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Tablet 2 */}
                      <div 
                        onClick={() => setActiveMockup({ productId: 2, mockupIndex: 2 })}
                        className="group relative w-full aspect-[16/9] bg-slate-900 rounded-[24px] p-2 md:p-2.5 shadow-[0_20px_45_rgba(15,23,42,0.22)] border-[0.4px] border-slate-800 hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col overflow-hidden"
                      >
                        {/* Camera lens */}
                        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-slate-800 z-20" />
                        
                        <div className="flex-1 rounded-[16px] overflow-hidden border border-slate-800/60 relative">
                          {renderTabletInner(2, 2)}
                          
                          {/* Hover effect mask */}
                          <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/25 flex items-center justify-center transition-all">
                            <span className="opacity-0 group-hover:opacity-100 bg-slate-900/95 text-slate-200 text-xs font-bold px-3 py-1.5 rounded-full border border-slate-700 shadow-lg flex items-center gap-1.5 transition-all transform translate-y-2 group-hover:translate-y-0">
                              <Globe className="w-3.5 h-3.5 animate-spin-slow text-rose-500" />
                              点击全屏查看
                            </span>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              </motion.div>


              {/* PRODUCT 3: 基层综合服务协同平台 */}
              <motion.div 
                variants={itemVariants}
                className="bg-white rounded-3xl p-6 md:p-8 lg:p-10 border border-slate-150/70 shadow-[0_8px_30px_rgb(0,0,0,0.015)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.03)] transition-all duration-300 relative overflow-hidden"
              >
                {/* Visual badge top right corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 rounded-bl-[80px] -z-10 flex items-center justify-center pl-6 pb-6">
                  <span className="font-mono text-3xl font-extrabold text-slate-100/80">03</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                  
                  {/* Left Column: Product Info & Achievements */}
                  <div className="lg:col-span-7 space-y-6">
                    <div>
                      <div className="flex items-center gap-3 mb-3.5">
                        <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-600 shrink-0">
                          <Layers className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="text-xl md:text-2xl font-black text-slate-950 tracking-tight leading-snug">
                            3.基层服务平台
                          </h4>
                        </div>
                      </div>
                      <p className="text-slate-600 text-sm md:text-base leading-relaxed mt-4">
                        融合“12345”热线与社会工作体系，建立四级联动的基层服务“总客服”与协同“总平台”，实现一网管数据、一网管事件、一网管市场、一网统业务。
                      </p>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-4 pt-4 border-t border-slate-100">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="w-5 h-5 text-purple-500 shrink-0" />
                        <span className="text-xs md:text-sm font-bold text-slate-500 uppercase tracking-wider block">主要落地成效</span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* 1 */}
                        <div className="bg-slate-50/60 p-4 rounded-2xl border border-slate-100 hover:bg-slate-50 transition-colors">
                          <span className="inline-block text-xs font-bold px-2.5 py-1 bg-purple-50 border border-purple-100 text-purple-700 rounded-full mb-1.5">
                            政务减负
                          </span>
                          <p className="text-sm text-slate-700 font-medium leading-relaxed">
                            深度整合核心政务入口<strong>40余个</strong>，服务保障<strong>15个委办局</strong>；推行“1+N”数字报表，数据<strong>“一次录入、多方共享”</strong>。
                          </p>
                        </div>
                        {/* 2 */}
                        <div className="bg-slate-50/60 p-4 rounded-2xl border border-slate-100 hover:bg-slate-50 transition-colors">
                          <span className="inline-block text-xs font-bold px-2.5 py-1 bg-sky-50 border border-sky-100 text-sky-700 rounded-full mb-1.5">
                            企业赋能
                          </span>
                          <p className="text-sm text-slate-700 leading-relaxed">
                            累计快速输送产业要素与暖企政策服务达<strong>21.8万余家</strong>属地各类大小企业。
                          </p>
                        </div>
                        {/* 3 */}
                        <div className="bg-slate-50/60 p-4 rounded-2xl border border-slate-100 hover:bg-slate-50 transition-colors md:col-span-2">
                          <span className="inline-block text-xs font-bold px-2.5 py-1 bg-emerald-50 border border-emerald-100 text-emerald-700 rounded-full mb-1.5">
                            高效流转
                          </span>
                          <p className="text-sm text-slate-700 leading-relaxed">
                            链接495个政府部门与1.17万余名网格员，平缩短业务流转时间1天以上。
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Two Tablet Mockup Screens */}
                  <div className="lg:col-span-5 flex justify-center pb-8 lg:pb-0 w-full">
                    <div className="flex flex-col gap-6 w-full max-w-[440px]">
                      
                      {/* Tablet 1 */}
                      <div 
                        onClick={() => setActiveMockup({ productId: 3, mockupIndex: 1 })}
                        className="group relative w-full aspect-[16/9] bg-slate-900 rounded-[24px] p-2 md:p-2.5 shadow-[0_12px_30px_rgba(15,23,42,0.15)] border-[0.4px] border-slate-800 hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col overflow-hidden"
                      >
                        {/* Camera lens */}
                        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-slate-800 z-20" />
                        
                        <div className="flex-1 rounded-[16px] overflow-hidden border border-slate-800/60 relative">
                          {renderTabletInner(3, 1)}
                          
                          {/* Hover effect mask */}
                          <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/25 flex items-center justify-center transition-all bg-gradient-to-t">
                            <span className="opacity-0 group-hover:opacity-100 bg-slate-900/95 text-slate-200 text-xs font-bold px-3 py-1.5 rounded-full border border-slate-700 shadow-lg flex items-center gap-1.5 transition-all transform translate-y-2 group-hover:translate-y-0">
                              <Globe className="w-3.5 h-3.5 animate-spin-slow text-purple-400" />
                              点击全屏查看
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Tablet 2 */}
                      <div 
                        onClick={() => setActiveMockup({ productId: 3, mockupIndex: 2 })}
                        className="group relative w-full aspect-[16/9] bg-slate-900 rounded-[24px] p-2 md:p-2.5 shadow-[0_20px_45_rgba(15,23,42,0.22)] border-[0.4px] border-slate-800 hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col overflow-hidden"
                      >
                        {/* Camera lens */}
                        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-slate-800 z-20" />
                        
                        <div className="flex-1 rounded-[16px] overflow-hidden border border-slate-800/60 relative">
                          {renderTabletInner(3, 2)}
                          
                          {/* Hover effect mask */}
                          <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/25 flex items-center justify-center transition-all bg-gradient-to-t">
                            <span className="opacity-0 group-hover:opacity-100 bg-slate-900/95 text-slate-200 text-xs font-bold px-3 py-1.5 rounded-full border border-slate-700 shadow-lg flex items-center gap-1.5 transition-all transform translate-y-2 group-hover:translate-y-0">
                              <Globe className="w-3.5 h-3.5 animate-spin-slow text-purple-500" />
                              点击全屏查看
                            </span>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              </motion.div>


              {/* PRODUCT 4: 省旅游产业数智互联运营平台 */}
              <motion.div 
                variants={itemVariants}
                className="bg-white rounded-3xl p-6 md:p-8 lg:p-10 border border-slate-150/70 shadow-[0_8px_30px_rgb(0,0,0,0.015)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.03)] transition-all duration-300 relative overflow-hidden"
              >
                {/* Visual badge top right corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 rounded-bl-[80px] -z-10 flex items-center justify-center pl-6 pb-6">
                  <span className="font-mono text-3xl font-extrabold text-slate-100/80">04</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                  
                  {/* Left Column: Product Info & Achievements */}
                  <div className="lg:col-span-7 space-y-6 text-left">
                    <div>
                      <div className="flex items-center gap-3 mb-3.5">
                        <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 shrink-0">
                          <Compass className="w-6 h-6 animate-spin-slow" />
                        </div>
                        <div>
                          <h4 className="text-xl md:text-2xl font-black text-slate-950 tracking-tight leading-snug">
                            4.省旅游产业数智互联运营平台
                          </h4>
                        </div>
                      </div>
                      <p className="text-slate-600 text-sm md:text-base leading-relaxed mt-4">
                        2022年，为帮助涉旅主体纾困解难并恢复发展，省委、省政府提出探索旅游供应链服务的指示，华创云信积极响应，联合体系内各公司开发建设"省旅游产业数智互联运营平台"。
                        <br /><br />
                        平台以统筹省内旅游资源为核心，一端连接大型线上渠道，另一端聚合本地企业及消费者，并引入金融机构提供信贷、结算等支持，构建了本地统一交易结算市场，取得良好成效，获得了省委、省政府的高度重视及认可。
                      </p>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-4 pt-4 border-t border-slate-100">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                        <span className="text-xs md:text-sm font-bold text-slate-500 uppercase tracking-wider block">主要落地成效</span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Stat 1 */}
                        <div className="bg-slate-50/60 p-4 rounded-2xl border border-slate-100 hover:bg-slate-50 transition-colors">
                          <span className="inline-block text-xs font-bold px-1.5 py-0.5 bg-emerald-50 border border-emerald-100 text-emerald-700 rounded-full mb-1.5 max-w-full text-center truncate">
                            涉旅主体接入
                          </span>
                          <div className="text-xl font-extrabold text-emerald-600 font-mono mb-1">
                            31,558 <span className="text-xs font-bold text-slate-500 font-sans">家</span>
                          </div>
                          <p className="text-xs text-slate-500 leading-normal">
                            全省已累计接入各类涉旅主体
                          </p>
                        </div>
                        {/* Stat 2 */}
                        <div className="bg-slate-50/60 p-4 rounded-2xl border border-slate-100 hover:bg-slate-50 transition-colors">
                          <span className="inline-block text-xs font-bold px-1.5 py-0.5 bg-sky-50 border border-sky-100 text-sky-700 rounded-full mb-1.5 max-w-full text-center truncate">
                            交易额度
                          </span>
                          <div className="text-xl font-extrabold text-sky-600 font-mono mb-1">
                            8.20 <span className="text-sm font-bold text-slate-500 font-sans">亿元</span>
                          </div>
                          <p className="text-xs text-slate-500 leading-normal">
                            平台累计产生交易结算额
                          </p>
                        </div>
                        {/* Stat 3 */}
                        <div className="bg-[#FFFDF5] p-4 rounded-2xl border border-amber-100 hover:bg-amber-50/50 transition-colors">
                          <span className="inline-block text-xs font-bold px-1.5 py-0.5 bg-amber-50 border border-amber-100 text-amber-700 rounded-full mb-1.5 max-w-full text-center truncate">
                            数字金融服务
                          </span>
                          <div className="text-xl font-extrabold text-amber-600 font-mono mb-1">
                            5.19 <span className="text-sm font-bold text-slate-500 font-sans">亿元</span>
                          </div>
                          <p className="text-xs text-slate-500 leading-normal">
                            累计为涉旅主体提供数字金融规模
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Two Tablet Mockup Screens */}
                  <div className="lg:col-span-5 flex justify-center pb-8 lg:pb-0 w-full">
                    <div className="flex flex-col gap-6 w-full max-w-[440px]">
                      
                      {/* Tablet 1 */}
                      <div 
                        onClick={() => setActiveMockup({ productId: 4, mockupIndex: 1 })}
                        className="group relative w-full aspect-[16/9] bg-slate-900 rounded-[24px] p-2 md:p-2.5 shadow-[0_12px_30px_rgba(15,23,42,0.15)] border-[0.4px] border-slate-800 hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col overflow-hidden"
                      >
                        {/* Camera lens */}
                        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-slate-800 z-20" />
                        
                        <div className="flex-1 rounded-[16px] overflow-hidden border border-slate-800/60 relative">
                          {renderTabletInner(4, 1)}
                          
                          {/* Hover effect mask */}
                          <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/25 flex items-center justify-center transition-all bg-gradient-to-t">
                            <span className="opacity-0 group-hover:opacity-100 bg-slate-900/95 text-slate-200 text-xs font-bold px-3 py-1.5 rounded-full border border-slate-700 shadow-lg flex items-center gap-1.5 transition-all transform translate-y-2 group-hover:translate-y-0">
                              <Globe className="w-3.5 h-3.5 animate-spin-slow text-emerald-400" />
                              点击全屏查看
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Tablet 2 */}
                      <div 
                        onClick={() => setActiveMockup({ productId: 4, mockupIndex: 2 })}
                        className="group relative w-full aspect-[16/9] bg-slate-900 rounded-[24px] p-2 md:p-2.5 shadow-[0_20px_45_rgba(15,23,42,0.22)] border-[0.4px] border-slate-800 hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col overflow-hidden"
                      >
                        {/* Camera lens */}
                        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-slate-800 z-20" />
                        
                        <div className="flex-1 rounded-[16px] overflow-hidden border border-slate-800/60 relative">
                          {renderTabletInner(4, 2)}
                          
                          {/* Hover effect mask */}
                          <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/25 flex items-center justify-center transition-all bg-gradient-to-t">
                            <span className="opacity-0 group-hover:opacity-100 bg-slate-900/95 text-slate-200 text-xs font-bold px-3 py-1.5 rounded-full border border-slate-700 shadow-lg flex items-center gap-1.5 transition-all transform translate-y-2 group-hover:translate-y-0">
                              <Globe className="w-3.5 h-3.5 animate-spin-slow text-teal-400" />
                              点击全屏查看
                            </span>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>

        {/* ======================= 2025 MILESTONE ======================= */}
        <div className="relative">
          {/* timeline nodes */}
          <div className="absolute -left-[45px] md:-left-[53px] top-1.5 w-10 h-10 rounded-full bg-emerald-600 border-4 border-white flex items-center justify-center z-10 shadow-lg shadow-emerald-200">
            <span className="w-3.5 h-3.5 bg-emerald-600 rounded-full animate-ping absolute opacity-40" />
            <span className="w-2.5 h-2.5 bg-white rounded-full" />
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            className="space-y-10 text-left"
          >
            {/* Year & Title Header */}
            <div>
              <span className="px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-xs md:text-sm font-bold uppercase tracking-wider inline-block mb-3 border border-emerald-100">
                2025年
              </span>
              <h3 className="text-xl md:text-2xl font-bold font-display text-slate-900 leading-tight">
                全面进入 AI 大模型智能体时代
              </h3>
              <p className="text-slate-500 text-sm md:text-base mt-2 max-w-3xl leading-relaxed">
                随着AI时代到来，华创云信聚焦AI技术底座与智能体开发，推动技术普惠和商业平权，初步构建了以AI驱动为核心智能体生态。
              </p>
            </div>

            {/* Embedded Components */}
            <div className="space-y-12">
              <DuoCaiHuangXiaoXi />
              <VerticalAgents onOpenMockup={(p, m, isPhone) => setActiveMockup({ productId: p, mockupIndex: m, isPhone })} />
            </div>
          </motion.div>
        </div>

      </div>

      {/* ======================= FULLSCREEN MOCKUP MODAL ZONE ======================= */}
      <AnimatePresence>
        {activeMockup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 lg:p-8">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveMockup(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className={`relative w-full bg-slate-950 border-[0.4px] border-slate-800 rounded-3xl p-3 md:p-4 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden z-10 ${activeMockup.isPhone ? 'max-w-[420px]' : 'max-w-5xl'}`}
            >
              {/* Outer physical tablet rim border detail */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-slate-800 z-30 pointer-events-none" />

              {/* Tablet Inner Content container */}
              <div className={`w-full rounded-2xl overflow-hidden border border-slate-900 relative ${activeMockup.isPhone ? 'aspect-[9/18]' : 'aspect-[16/9]'}`}>
                {renderTabletInner(activeMockup.productId, activeMockup.mockupIndex, true)}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
