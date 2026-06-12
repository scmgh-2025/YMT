import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Building2, Users2, ShieldCheck, Award, Briefcase, Landmark, Trophy, LineChart, Coins, Network, Store, UploadCloud, X as CloseIcon } from 'lucide-react';
import { enterpriseData, yunmatongData } from '../data';
import { getAssetUrl } from '../utils';

export default function CompanyOverview() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedImage(URL.createObjectURL(file));
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      setUploadedImage(URL.createObjectURL(file));
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <div className="space-y-16" id="overview">
      {/* 1.1 主体介绍 Title */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex flex-col mb-8 text-left"
      >
        <h2 className="text-2xl md:text-3xl font-extrabold font-display text-slate-800 tracking-tight">
          一、华创云信企业介绍与核心业务
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mt-3" />
      </motion.div>

      {/* Stock Code & Overview Card */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-[#F8FAFC]/90 border border-slate-100 rounded-[24px] p-6 md:p-10 text-left shadow-[0_4px_30px_rgba(0,0,0,0.01)]"
      >
        <div className="font-mono text-xs font-bold tracking-widest text-slate-400 mb-2 uppercase">
          STOCK CODE: 600155.SH
        </div>
        <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4 tracking-tight">
          华创云信数字技术股份有限公司
        </h3>
        <p className="text-sm md:text-base text-slate-605 leading-relaxed font-normal">
          华创云信数字技术股份有限公司（简称“华创云信”，股票代码：600155.SH）是上海证券交易所上市企业，系国资、员工集体持股主导的多元融合混合所有制公司。公司现已构建证券金融、数字科技、数字化交易市场服务三大核心业务板块。
        </p>
      </motion.div>

      {/* Core Businesses Header */}
      <div className="flex items-center gap-2.5 mt-10 text-left">
        <div className="w-1 h-[18px] bg-indigo-700 rounded-full" />
        <h4 className="text-lg font-bold text-slate-900 tracking-tight">
          核心业务
        </h4>
      </div>

      {/* Three Core Businesses Cards Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {/* Card 1: 证券金融业务 */}
        <motion.div 
          variants={itemVariants}
          className="bg-white p-6 md:p-8 rounded-[24px] border border-slate-200/85 hover:shadow-md transition-shadow duration-300 flex flex-col justify-between text-left"
        >
          <div>
            <h5 className="font-bold text-slate-900 text-lg mb-4">
              证券金融业务
            </h5>
            <p className="text-sm text-slate-650 leading-relaxed font-normal mb-6">
              公司全资控股华创证券，系全国A类A级综合证券金融机构，中国经济社会理事会理事，中国证券业协会理事、证券信息科技专业委员会顾问，上海证券交易所理事会科技发展委员会委员。
            </p>
          </div>
          <div>
            <div className="border-t border-slate-100/90 my-4" />
            <div className="mb-3">
              <span className="text-xs text-slate-450 font-medium block">
                截至2025年末
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div>
                <span className="text-[10px] text-slate-400 block font-medium leading-none mb-1">
                  总资产
                </span>
                <div className="flex items-baseline gap-0.5">
                  <span className="text-indigo-600 font-extrabold text-xl md:text-2xl font-mono">
                    502
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium">
                    亿元
                  </span>
                </div>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 block font-medium leading-none mb-1">
                  净资产
                </span>
                <div className="flex items-baseline gap-0.5">
                  <span className="text-indigo-600 font-extrabold text-xl md:text-2xl font-mono">
                    168
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium">
                    亿元
                  </span>
                </div>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 block font-medium leading-none mb-1">
                  管理资产规模
                </span>
                <div className="flex items-baseline gap-0.5">
                  <span className="text-indigo-600 font-extrabold text-xl md:text-2xl font-mono">
                    3000+
                  </span>
                  <span className="text-[10px] text-slate-450 font-medium">
                    亿元
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 2: 数字科技业务 */}
        <motion.div 
          variants={itemVariants}
          className="bg-white p-6 md:p-8 rounded-[24px] border border-slate-200/85 hover:shadow-md transition-shadow duration-300 flex flex-col justify-between text-left"
        >
          <div>
            <h5 className="font-bold text-slate-900 text-lg mb-4">
              数字科技业务
            </h5>
            <p className="text-sm text-slate-650 leading-relaxed font-normal mb-6">
              华创云信基于多年对新型AI技术底座及本地数联网基础设施、金融服务生态的研究与探索，联合云码通、思特奇（股票代码：SZ.300608）、联合天成、证联支付等机构，构建了覆盖人工智能、云计算、大数据、数字支付及区块链的技术矩阵。目前，智能体及相关解决方案已在贵州、海南、广西等多地落地应用。
            </p>
          </div>
          <div>
            <div className="border-t border-slate-100/90 my-4" />
            <div className="text-[10px] font-mono tracking-widest text-slate-400 uppercase font-medium pt-2">
              TECHNOLOGY CAPABILITY
            </div>
          </div>
        </motion.div>

        {/* Card 3: 数字化交易市场业务 */}
        <motion.div 
          variants={itemVariants}
          className="bg-white p-6 md:p-8 rounded-[24px] border border-slate-200/85 hover:shadow-md transition-shadow duration-300 flex flex-col justify-between text-left"
        >
          <div>
            <h5 className="font-bold text-slate-900 text-lg mb-4">
              数字化交易市场业务
            </h5>
            <p className="text-sm text-slate-650 leading-relaxed font-normal mb-6">
              该业务由贵州白酒交易所股份有限公司承担，贵州白酒交易所是经贵州省人民政府批准设立的国家级白酒要素交易场所，承担了贵州白酒数字化市场的建设，通过建立市场通讯标准、完善价格形成机制、优化市场运营模式、支持诚实劳动者和小微企业就业创业等，致力于构建相生共荣的白酒市场新生态。
            </p>
          </div>
          <div>
            <div className="border-t border-slate-100/90 my-4" />
            <div className="text-[10px] font-mono tracking-widest text-slate-400 uppercase font-medium pt-2">
              TECHNOLOGY CAPABILITY
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* 1.1.3 Subsidiaries Grid */}
      <div className="mt-12 bg-slate-50/50 rounded-3xl p-6 md:p-8 border border-slate-100">
        <h4 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
          <Users2 className="w-5 h-5 text-sky-600" />
          华创云信主要参股、控股公司
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {enterpriseData.subsidiaries.map((sub, idx) => {
            const getTagColor = (type: string) => {
              if (type === '控股') return 'bg-rose-50 text-rose-700 border-rose-100';
              if (type === '牵头成立' || type === '参、控') return 'bg-sky-50 text-sky-700 border-sky-100';
              return 'bg-amber-50 text-amber-700 border-amber-100';
            };
            return (
              <motion.div 
                key={idx}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start gap-2 mb-2">
                    <h5 className="font-bold text-slate-800 text-base">{sub.name}</h5>
                  </div>
                  <p className="text-[13px] md:text-[14px] text-slate-600 leading-relaxed mb-4">{sub.desc}</p>
                </div>
                <div className="text-[10px] text-slate-400 font-mono tracking-wider text-right uppercase">
                  ACTIVE SUBORD #0{idx + 1}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* 1.2 云码通 Sub Section (Horizontal Layout, Larger Font) */}
      <div className="mt-12 border-t border-dashed border-slate-200 pt-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-indigo-900 to-indigo-950 rounded-[32px] p-6 md:p-10 text-white relative overflow-hidden shadow-2xl"
        >
          {/* Background decorations */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-12 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 md:space-y-10 space-y-8">
            {/* Top row: Title and basic intro designed horizontally */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-white/10">
              <div className="space-y-3 lg:max-w-2xl text-left">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-black font-display leading-tight tracking-tight text-white">
                  {yunmatongData.name}
                </h3>
              </div>
              <div className="lg:max-w-xl text-left">
                <p className="text-indigo-100 text-base md:text-lg leading-relaxed font-semibold">
                  {yunmatongData.name}由华创云信牵头，联合<strong className="text-white font-bold">北京思特奇</strong>、<strong className="text-white font-bold">贵州燃气集团</strong>于{yunmatongData.establishment}合资设立。
                </p>
              </div>
            </div>

            {/* Bottom row: Columns side-by-side horizontally with compact typography & padding */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 text-left">
              {/* Column 1: Tech Providers - Compact Style */}
              <div className="p-4 md:p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-200 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" /> 技术支持方
                </h4>
                <div className="flex flex-wrap gap-1.5 pt-0.5">
                  {[
                    "北京思特奇信息技术股份有限公司",
                    "北京联合天成价值网络科技有限公司",
                    "证联支付有限责任公司",
                    "北京清格科技有限公司",
                    "北京融汇金信信息技术有限公司",
                    "贵州信用通科技服务股份有限公司"
                  ].map((techName, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-white/10 border border-white/5 text-slate-200 text-sm font-medium hover:bg-white/15 transition-colors cursor-default"
                    >
                      {techName}
                    </span>
                  ))}
                </div>
              </div>

              {/* Column 2: Company Technical Strength - Compact Style */}
              <div className="p-4 md:p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-200 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" /> 公司技术实力
                </h4>
                <p className="text-slate-100 text-xs md:text-sm leading-relaxed font-normal">
                  云码通在云计算、大数据、区块链、数字支付、人工智能等技术上拥有庞大的经验积累和完备的技术团队，目前技术生态开发团队主要分布在北京、杭州、成都、贵阳等地。
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 1.3 荣誉与资质 Block Card */}
      <div className="mt-12 border-t border-dashed border-slate-200 pt-12">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-b from-white to-slate-50/30 border border-slate-200/80 rounded-[32px] p-6 md:p-8 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.01)] text-left animate-fade-in"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 shrink-0 font-bold">
              <Award className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h4 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight leading-snug">
                企业资质与行业荣誉认证
              </h4>
              <p className="text-[10px] text-emerald-600 font-extrabold font-sans mt-0.5 uppercase tracking-wider">
                Authority Core Certifications & Corporate Honors
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-2">
            
            {/* Left Portion: 7 columns for Honors Grid */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pb-2">
                {[
                  { name: "国家高新技术企业", label: "核心技术认定" },
                  { name: "CMMI 5级评估认证", label: "全球软件能力成熟度最高评级" },
                  { name: "贵州省专精特新企业", label: "省级重点培育骨干" },
                  { name: "ISO9001 质量管理体系认证", label: "国际质量管理标准认证" },
                  { name: "ISO27001 信息安全管理体系认证", label: "国际信息安全管理标准认证" },
                  { name: "ISO20000 信息技术服务体系认证", label: "IT服务管理体系国际标准认证" },
                  { name: "信息系统建设和服务能力评估 (CS) 1级", label: "信息系统建设与服务基础能力认证" },
                  { name: "软件企业证书认证", label: "专业权威软件行业资质认定" }
                ].map((honor, idx) => (
                  <div key={idx} className="p-4 bg-white border border-slate-100/90 hover:border-emerald-300 hover:bg-emerald-50/15 transition-all duration-300 rounded-2xl flex items-center justify-between gap-4 shadow-[0_2px_8px_rgba(0,0,0,0.015)] hover:shadow-[0_8px_24px_rgba(16,185,129,0.06)]">
                    <div className="space-y-1">
                      <h5 className="font-extrabold text-slate-900 text-sm md:text-[15px] tracking-tight">{honor.name}</h5>
                      <span className="inline-block text-[11px] md:text-xs text-slate-400 font-extrabold font-sans">{honor.label}</span>
                    </div>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20 shrink-0 animate-pulse" />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Portion: 5 columns for Interactive Image Container */}
            <div className="lg:col-span-5 flex flex-col">
              <div 
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`flex-1 rounded-[24px] border-2 border-dashed transition-all p-5 flex flex-col items-center justify-center text-center cursor-pointer min-h-[260px] relative overflow-hidden group select-none ${
                  isDragging 
                    ? "border-emerald-500 bg-emerald-500/5 shadow-inner scale-[0.99]" 
                    : "border-slate-200 bg-slate-50/20 hover:border-emerald-400 hover:bg-emerald-50/10 hover:scale-[1.01]"
                }`}
                onClick={() => document.getElementById('certs-uploader-trigger')?.click()}
              >
                {/* Hidden File Input */}
                <input 
                  type="file" 
                  id="certs-uploader-trigger" 
                  accept="image/*" 
                  className="hidden" 
                  onChange={handleImageChange} 
                />

                {/* Display single image */}
                <div className="max-w-md mx-auto w-full">
                  <img
                    src={getAssetUrl('assets/14.png')}
                    alt="荣誉资质"
                    className="w-full h-auto object-contain rounded-lg shadow-md border border-slate-200 bg-white"
                  />
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
}
