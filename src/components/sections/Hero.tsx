'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

// 动态导入 3D 场景，避免 SSR 问题
const Scene = dynamic(() => import('@/components/3d/Scene'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="text-orange-400 text-xl animate-pulse">加载中...</div>
    </div>
  ),
})

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* 背景渐变 */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900/20" />

      {/* 网格装饰 */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(255,165,0,0.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,165,0,0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 左侧文字 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* 标签 */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-full mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
              <span className="text-orange-300 text-sm font-medium">情报局出品</span>
            </motion.div>

            {/* 主标题 */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="block">大嘴堡</span>
              <span className="block bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                情报局
              </span>
            </h1>

            {/* 副标题 */}
            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-lg">
              探索美味的无限可能。我们用最优质的食材，打造最极致的汉堡体验。
            </p>

            {/* 按钮组 */}
            <div className="flex flex-wrap gap-4">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                查看菜单
              </motion.button>
              <motion.button
                className="px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-full hover:border-orange-500 hover:text-orange-400 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                了解更多
              </motion.button>
            </div>

            {/* 数据统计 */}
            <motion.div
              className="flex gap-12 mt-12 pt-8 border-t border-gray-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {[
                { value: '100+', label: '汉堡种类' },
                { value: '50K+', label: '满意顾客' },
                { value: '4.9', label: '平均评分' },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* 右侧 3D 汉堡 */}
          <motion.div
            className="h-[500px] md:h-[600px] lg:h-[700px] relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* 光晕效果 */}
            <div className="absolute inset-0 bg-gradient-radial from-orange-500/20 via-transparent to-transparent blur-3xl" />

            <Scene />

            {/* 交互提示 */}
            <motion.div
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gray-500 text-sm flex items-center gap-2"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
              </svg>
              拖拽旋转汉堡
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* 装饰元素 */}
      <motion.div
        className="absolute top-20 right-10 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-24 h-24 bg-red-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      />
    </section>
  )
}
