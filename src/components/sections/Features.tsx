'use client'

import { motion } from 'framer-motion'

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
    title: '食材情报',
    subtitle: 'INGREDIENTS',
    description: '澳洲安格斯牛肉、有机生菜、手工烘焙面包——每一份食材都有自己的情报档案。',
    stat: '38 种',
    statLabel: '核心食材',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
      </svg>
    ),
    title: '工艺情报',
    subtitle: 'CRAFT',
    description: '200°C 高温炙烤、12 小时慢炖酱汁、手工揉制面团——时间是最好的调味师。',
    stat: '12 小时',
    statLabel: '慢炖工艺',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: '速度情报',
    subtitle: 'SPEED',
    description: '从下单到送达，全程不超过 30 分钟。热腾腾的美味，准时抵达你的手中。',
    stat: '≤30 分钟',
    statLabel: '极速送达',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: '限定情报',
    subtitle: 'LIMITED',
    description: '每周推出限定口味情报，从经典芝士到麻辣小龙虾，总有惊喜等你解锁。',
    stat: '每周',
    statLabel: '新品情报',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
}

export default function Features() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden noise">
      {/* 背景 */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      <div className="absolute top-0 left-0 right-0 line-glow" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* 标题区 */}
        <motion.div
          className="mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-amber-500" />
            <span className="text-amber-500 text-xs font-semibold tracking-[0.2em] uppercase">
              Intelligence Briefing
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white">
            情报局的
            <span className="text-gradient ml-2">秘密档案</span>
          </h2>
          <p className="mt-4 text-stone-500 text-base lg:text-lg max-w-xl">
            每一份汉堡背后，都有一份精心编撰的情报档案
          </p>
        </motion.div>

        {/* 卡片 */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative rounded-2xl border-gradient p-6 lg:p-7 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 cursor-default"
            >
              {/* 图标 */}
              <div className="w-11 h-11 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 mb-5 group-hover:bg-amber-500/15 group-hover:text-amber-300 transition-all duration-500">
                {feature.icon}
              </div>

              {/* 副标题 */}
              <div className="text-[10px] text-amber-500/60 font-semibold tracking-[0.2em] uppercase mb-2">
                {feature.subtitle}
              </div>

              {/* 标题 */}
              <h3 className="text-lg font-semibold text-white mb-3 tracking-tight">
                {feature.title}
              </h3>

              {/* 描述 */}
              <p className="text-sm text-stone-500 leading-relaxed mb-6">
                {feature.description}
              </p>

              {/* 数据 */}
              <div className="pt-5 border-t border-white/[0.04]">
                <div className="text-xl font-bold text-white tracking-tight">
                  {feature.stat}
                </div>
                <div className="text-[11px] text-stone-600 font-medium mt-0.5">
                  {feature.statLabel}
                </div>
              </div>

              {/* 悬浮装饰 */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/[0.03] rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
