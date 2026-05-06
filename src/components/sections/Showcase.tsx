'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const menuItems = [
  {
    name: '经典大嘴堡',
    en: 'Classic Big Mouth',
    price: '¥42',
    tag: '招牌',
    desc: '双层安格斯牛肉 · 秘制酱汁 · 手工面包',
  },
  {
    name: '芝士熔岩堡',
    en: 'Cheese Lava',
    price: '¥48',
    tag: '人气',
    desc: '四重芝士 · 烟熏培根 · 焦糖洋葱',
  },
  {
    name: '麻辣小龙虾堡',
    en: 'Spicy Crayfish',
    price: '¥58',
    tag: '限定',
    desc: '小龙虾尾 · 麻辣酱 · 香脆生菜',
  },
]

export default function Showcase() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden noise">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0f0d0a] to-[#0a0a0a]" />
      <div className="absolute top-0 left-0 right-0 line-glow" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* 标题 */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-amber-500" />
            <span className="text-amber-500 text-xs font-semibold tracking-[0.2em] uppercase">
              Hot Menu
            </span>
            <div className="w-8 h-px bg-amber-500" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white">
            热门<span className="text-gradient ml-1">情报</span>
          </h2>
        </motion.div>

        {/* 菜单卡片 */}
        <div className="grid md:grid-cols-3 gap-5">
          {menuItems.map((item, i) => (
            <motion.div
              key={i}
              className="group relative rounded-2xl overflow-hidden border-gradient bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              {/* 图片区 */}
              <div className="relative h-56 lg:h-64 overflow-hidden bg-gradient-to-br from-amber-900/20 to-stone-900/20">
                <Image
                  src="/burger.png"
                  alt={item.name}
                  fill
                  className="object-cover scale-110 group-hover:scale-100 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />

                {/* 标签 */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-[11px] font-semibold bg-amber-500 text-black rounded-full">
                    {item.tag}
                  </span>
                </div>

                {/* 价格 */}
                <div className="absolute top-4 right-4">
                  <span className="text-xl font-bold text-white drop-shadow-lg">
                    {item.price}
                  </span>
                </div>
              </div>

              {/* 内容 */}
              <div className="p-6">
                <div className="text-[10px] text-amber-500/60 font-semibold tracking-[0.15em] uppercase mb-1">
                  {item.en}
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                  {item.name}
                </h3>
                <p className="text-sm text-stone-500 mb-5">
                  {item.desc}
                </p>
                <motion.button
                  className="w-full py-3 text-sm font-semibold text-black bg-gradient-to-r from-amber-400 to-amber-500 rounded-xl hover:from-amber-300 hover:to-amber-400 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  加入购物车
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
