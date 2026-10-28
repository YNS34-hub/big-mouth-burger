'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const menuItems = [
  {
    id: 'NO. 01',
    name: '黄金脆皮大嘴堡',
    en: 'GOLDEN CRUUUNCH // SUNLIT',
    price: '¥42',
    calories: '840 KCAL · 自然光胶片画报',
    tag: 'CRUUUNCH 首推',
    image: '/poster-01-flame.jpg',
    desc: '180°C 酥脆锁汁黄金外皮 · 双层澳洲安格斯牛排 · 熟成切达芝士 · 手工黄油布里欧修面包',
  },
  {
    id: 'NO. 02',
    name: '烈焰双层安格斯堡',
    en: '200°C FLAME // MONOLITH',
    price: '¥48',
    calories: '920 KCAL · 200°C 直火炙烤',
    tag: '镇店王牌',
    image: '/poster-02-lava.jpg',
    desc: '双层 150g 谷饲安格斯厚切牛排 · 四重瀑布切达芝士 · 果木烟熏培根 · 现炸酥脆洋葱圈',
  },
  {
    id: 'NO. 03',
    name: '赤焰脆皮和牛堡',
    en: 'RADICAL CRUUUNCH // SKY',
    price: '¥58',
    calories: '890 KCAL · 落日晴空限定',
    tag: '限定情报',
    image: '/poster-03-crimson.jpg',
    desc: '高分贝酥脆辣味鸡排与炙烤和牛双拼 · 竹炭黑金芝麻面包 · 墨西哥腌渍辣椒 · 赤焰秘制酱',
  },
]

export default function Showcase() {
  return (
    <section id="posters" className="relative py-28 lg:py-36 overflow-hidden noise">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0705] via-[#120b07] to-[#0a0705]" />
      <div className="absolute top-0 left-0 right-0 line-glow" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* 标题 */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span className="text-amber-500 text-xs font-bold tracking-[0.25em] uppercase">
                35MM Editorial Lookbook // 2026 Campaign
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#f5ebdc]">
              CRUUUNCH <span className="text-gradient ml-1">概念画报</span>
            </h2>
          </div>
          <p className="text-stone-400 text-sm sm:text-base max-w-md leading-relaxed">
            融合 35mm 胶片街头纪实与 200°C 明火美式汉堡视觉档案。每一张皆为独立装帧的味蕾画报。
          </p>
        </motion.div>

        {/* 3:4 独立装帧海报矩阵 */}
        <div className="grid md:grid-cols-3 gap-7 lg:gap-8">
          {menuItems.map((item, i) => (
            <motion.div
              key={i}
              className="group relative rounded-2xl overflow-hidden border border-amber-500/20 bg-[#14100d] hover:border-amber-500/50 transition-all duration-500 shadow-2xl shadow-black/80"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              {/* 3:4 完整装帧商业海报画幅 */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#EAE6DF]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                />
              </div>

              {/* 底部档案详情 */}
              <div className="p-6 lg:p-7 bg-[#14100d] border-t border-white/10">
                <div className="flex items-center justify-between text-[11px] font-mono text-amber-400/90 tracking-[0.12em] uppercase mb-2">
                  <span>{item.id} · {item.tag}</span>
                  <span>{item.calories}</span>
                </div>
                <div className="flex items-baseline justify-between gap-4 mb-3">
                  <h3 className="text-2xl font-extrabold text-[#f5ebdc] tracking-tight">
                    {item.name}
                  </h3>
                  <span className="text-2xl font-black text-amber-400">
                    {item.price}
                  </span>
                </div>
                <p className="text-sm text-stone-400 leading-relaxed mb-6">
                  {item.desc}
                </p>
                <motion.button
                  className="w-full py-3.5 text-sm font-bold tracking-wider uppercase text-black bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 rounded-xl hover:brightness-110 transition-all duration-300 shadow-lg shadow-amber-500/15"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  解锁味蕾档案 · 立即点单
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
