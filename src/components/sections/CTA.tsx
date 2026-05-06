'use client'

import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden noise">
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      <div className="absolute top-0 left-0 right-0 line-glow" />

      {/* 光晕 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/[0.05] rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/20 bg-amber-500/[0.05] mb-8">
            <span className="text-amber-400 text-xs font-semibold tracking-wider uppercase">
              🍔 限时情报
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            今天，你想
            <br />
            <span className="text-gradient-warm">解锁哪份情报？</span>
          </h2>

          <p className="text-stone-400 text-base lg:text-lg max-w-xl mx-auto mb-10">
            首单立减 ¥10，新用户专享情报局礼遇
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              className="btn-glow px-10 py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-black text-sm font-bold rounded-full shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transition-shadow duration-500"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              立即点餐 →
            </motion.button>
            <motion.button
              className="px-10 py-4 text-sm font-medium text-stone-300 border border-white/10 rounded-full hover:border-white/20 hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              查看全部门店
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
