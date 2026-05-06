'use client'

import { motion } from 'framer-motion'

const features = [
  {
    icon: '🥩',
    title: '精选食材',
    description: '采用澳洲进口牛肉，每日新鲜蔬菜，只为给你最纯正的美味体验。',
    gradient: 'from-orange-500/20 to-red-500/20',
    border: 'border-orange-500/30',
  },
  {
    icon: '👨‍🍳',
    title: '匠心制作',
    description: '每一份汉堡都由资深厨师手工制作，确保每一口都是完美的味觉享受。',
    gradient: 'from-yellow-500/20 to-orange-500/20',
    border: 'border-yellow-500/30',
  },
  {
    icon: '🚀',
    title: '闪电配送',
    description: '30分钟内送达，热腾腾的汉堡直接送到你手中，美味不用等。',
    gradient: 'from-green-500/20 to-teal-500/20',
    border: 'border-green-500/30',
  },
  {
    icon: '🎨',
    title: '创意口味',
    description: '每周推出限定口味，从经典芝士到麻辣小龙虾，总有惊喜等你发现。',
    gradient: 'from-purple-500/20 to-pink-500/20',
    border: 'border-purple-500/30',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
}

export default function Features() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* 背景 */}
      <div className="absolute inset-0 bg-gray-900" />

      {/* 装饰 */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* 标题 */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-orange-400 font-medium text-sm tracking-wider uppercase">
            为什么选择我们
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            情报局的
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              秘密武器
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            每一个细节都经过精心设计，只为给你带来最极致的汉堡体验
          </p>
        </motion.div>

        {/* 卡片网格 */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative group p-6 rounded-2xl bg-gradient-to-br ${feature.gradient} border ${feature.border} backdrop-blur-sm hover:border-opacity-60 transition-all duration-300`}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* 图标 */}
              <div className="text-5xl mb-4">{feature.icon}</div>

              {/* 标题 */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>

              {/* 描述 */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* 悬浮装饰 */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* 底部 CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            探索全部菜单 →
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
