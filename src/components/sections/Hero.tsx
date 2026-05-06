'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 150])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 0.85])
  const textY = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden noise"
    >
      {/* 背景渐变 */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-amber-500/[0.04] rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-amber-600/[0.03] rounded-full blur-[120px]" />

      {/* 网格装饰 */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(251,191,36,0.4) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(251,191,36,0.4) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* 内容 */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-24 lg:pt-0"
        style={{ opacity }}
      >
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen py-20">
          {/* 左侧文字 */}
          <motion.div style={{ y: textY }} className="order-2 lg:order-1">
            {/* 标签 */}
            <motion.div
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-amber-500/20 bg-amber-500/[0.05] mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
              <span className="text-amber-400/90 text-xs font-medium tracking-wider uppercase">
                情报局 · 每日新鲜
              </span>
            </motion.div>

            {/* 主标题 */}
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold tracking-tight leading-[0.95] mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="block text-white">每一口</span>
              <span className="block text-gradient-warm mt-1">都是情报</span>
            </motion.h1>

            {/* 副标题 */}
            <motion.p
              className="text-stone-400 text-base lg:text-lg leading-relaxed max-w-md mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              精选全球优质食材，匠心工艺打造每一层风味。
              <br className="hidden sm:block" />
              大嘴堡情报局 — 你的味蕾情报专家。
            </motion.p>

            {/* 按钮 */}
            <motion.div
              className="flex flex-wrap items-center gap-4 mb-14"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.button
                className="btn-glow group relative px-8 py-3.5 bg-gradient-to-r from-amber-400 to-amber-500 text-black text-sm font-semibold rounded-full shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transition-shadow duration-500"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  探索菜单
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </motion.button>
              <motion.button
                className="px-8 py-3.5 text-sm font-medium text-stone-300 border border-white/10 rounded-full hover:border-white/20 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                我们的故事
              </motion.button>
            </motion.div>

            {/* 数据 */}
            <motion.div
              className="flex items-center gap-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              {[
                { value: '127', label: '秘方情报' },
                { value: '50K+', label: '满意顾客' },
                { value: '4.9', label: '平均评分' },
              ].map((stat, i) => (
                <div key={i} className="group">
                  <div className="text-2xl lg:text-3xl font-bold text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-stone-500 font-medium tracking-wider uppercase mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* 右侧汉堡图片 */}
          <motion.div
            className="order-1 lg:order-2 relative flex items-center justify-center"
            style={{ y: imageY, scale: imageScale }}
          >
            {/* 光晕 */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[80%] h-[80%] bg-amber-500/10 rounded-full blur-[80px] animate-pulse-glow" />
            </div>

            {/* 图片容器 */}
            <motion.div
              className="relative w-full max-w-lg lg:max-w-xl"
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="animate-float">
                <Image
                  src="/burger.png"
                  alt="大嘴堡经典汉堡"
                  width={600}
                  height={600}
                  className="w-full h-auto drop-shadow-[0_20px_60px_rgba(245,158,11,0.2)]"
                  priority
                />
              </div>

              {/* 浮动标签 */}
              <motion.div
                className="absolute -left-4 top-1/4 glass-strong rounded-2xl px-4 py-3 flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <div className="w-9 h-9 rounded-xl bg-amber-500/20 flex items-center justify-center text-lg">
                  🔥
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">人气 No.1</div>
                  <div className="text-[10px] text-stone-400">本周热销 2,847 份</div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -right-2 bottom-1/4 glass-strong rounded-2xl px-4 py-3 flex items-center gap-3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                <div className="w-9 h-9 rounded-xl bg-green-500/20 flex items-center justify-center text-lg">
                  ⭐
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">4.9 好评</div>
                  <div className="text-[10px] text-stone-400">12,000+ 条评价</div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* 底部渐变 */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent z-20" />

      {/* 滚动指示 */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-[11px] text-stone-600 font-medium tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-stone-600 to-transparent"
          animate={{ scaleY: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </section>
  )
}
