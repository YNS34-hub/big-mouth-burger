'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const menuItems = [
  {
    id: 'NO. 01',
    name: '烈焰双层安格斯大嘴堡',
    en: 'FLAME SEARED // DOUBLE ANGUS',
    price: '¥42',
    calories: '840 KCAL · 200°C 直火炙烤',
    tag: '镇店招牌',
    image: '/poster-01-flame.jpg',
    desc: '双层 150g 澳洲谷饲安格斯牛肉饼 · 四重熟成切达芝士 · 酥炸洋葱圈 · 果木烟熏培根',
  },
  {
    id: 'NO. 02',
    name: '黑松露四重芝士熔岩堡',
    en: 'MOLTEN GOLD // QUAD CHEDDAR',
    price: '¥48',
    calories: '920 KCAL · 瀑布流心芝士',
    tag: '主厨热推',
    image: '/poster-02-lava.jpg',
    desc: '四重陈年切达与烟熏高达芝士瀑布 · 焦糖慢炒洋葱 · 黑松露蛋黄酱 · 手工布里欧修面包',
  },
  {
    id: 'NO. 03',
    name: '赤焰秘制脆皮和牛堡',
    en: 'CRIMSON HEAT // SPICY CRUNCH',
    price: '¥58',
    calories: '890 KCAL · 暗黑竹炭面包',
    tag: '限定情报',
    image: '/poster-03-crimson.jpg',
    desc: '竹炭黑金芝麻面包 · 黄金脆皮辣味鸡排与炙烤和牛双拼 · 墨西哥腌渍辣椒 · 赤焰秘制辣酱',
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
                Campaign Lookbook // 2026 Edition
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#f5ebdc]">
              烈焰画报 <span className="text-gradient ml-1">王牌系列</span>
            </h2>
          </div>
          <p className="text-stone-400 text-sm sm:text-base max-w-md leading-relaxed">
            致敬经典美式直火炙烤海报美学。200°C 明火锁汁、手工黄油布里欧修与浓郁瀑布芝士的视觉档案。
          </p>
        </motion.div>

        {/* 3:4 宣传海报矩阵 */}
        <div className="grid md:grid-cols-3 gap-7 lg:gap-8">
          {menuItems.map((item, i) => (
            <motion.div
              key={i}
              className="group relative rounded-3xl overflow-hidden border border-amber-500/20 bg-[#120b07] hover:border-amber-500/50 transition-all duration-500 shadow-2xl shadow-black/80"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              {/* 3:4 竖版商业海报画幅 */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#0d0805]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#120b07] via-transparent to-black/20 opacity-85" />

                {/* 顶部编号与标签 */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3.5 py-1 text-[11px] font-bold tracking-wider uppercase bg-amber-500 text-black rounded-full shadow-lg">
                    {item.tag}
                  </span>
                  <span className="px-3 py-1 text-[11px] font-mono font-bold tracking-widest bg-black/70 backdrop-blur-md text-amber-300 border border-amber-500/30 rounded-full">
                    {item.id}
                  </span>
                </div>
              </div>

              {/* 底部档案详情 */}
              <div className="p-6 lg:p-7 relative -mt-6 bg-gradient-to-b from-transparent via-[#120b07] to-[#120b07]">
                <div className="flex items-center justify-between text-[11px] font-mono text-amber-400/80 tracking-[0.15em] uppercase mb-2">
                  <span>{item.en}</span>
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
