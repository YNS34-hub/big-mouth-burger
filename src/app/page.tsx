'use client'

import Navigation from '@/components/ui/Navigation'
import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import Showcase from '@/components/sections/Showcase'
import CTA from '@/components/sections/CTA'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="relative bg-[#0a0a0a] min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <Showcase />
      <CTA />

      {/* 页脚 */}
      <footer className="relative py-16 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            {/* 品牌 */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                  <span className="text-base">🍔</span>
                </div>
                <div>
                  <div className="text-white font-semibold text-[15px]">大嘴堡情报局</div>
                  <div className="text-amber-500/70 text-[10px] font-medium tracking-wider uppercase">
                    Big Mouth Burger Intelligence
                  </div>
                </div>
              </div>
              <p className="text-stone-500 text-sm max-w-sm leading-relaxed">
                探索美味的无限可能。每一份汉堡，都是一份精心编撰的味蕾情报。
              </p>
            </div>

            {/* 链接 */}
            <div>
              <h4 className="text-xs font-semibold text-stone-400 tracking-wider uppercase mb-4">
                导航
              </h4>
              <ul className="space-y-2.5">
                {['菜单', '情报', '故事', '门店', '加盟'].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-stone-500 hover:text-white transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* 联系 */}
            <div>
              <h4 className="text-xs font-semibold text-stone-400 tracking-wider uppercase mb-4">
                联系我们
              </h4>
              <ul className="space-y-2.5 text-sm text-stone-500">
                <li>400-888-8888</li>
                <li>hello@dazuibao.com</li>
                <li>上海市浦东新区</li>
              </ul>
            </div>
          </div>

          {/* 底部 */}
          <motion.div
            className="pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-xs text-stone-600">
              © 2024 大嘴堡情报局. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {['微信', '微博', '抖音'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-xs text-stone-600 hover:text-stone-400 transition-colors duration-300"
                >
                  {social}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </footer>
    </main>
  )
}
