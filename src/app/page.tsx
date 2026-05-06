'use client'

import Navigation from '@/components/ui/Navigation'
import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="relative bg-gray-900 min-h-screen">
      {/* 导航 */}
      <Navigation />

      {/* Hero 区域 */}
      <Hero />

      {/* 功能特性 */}
      <Features />

      {/* 页脚 */}
      <footer className="py-12 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {/* 品牌信息 */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                  <span className="text-xl">🍔</span>
                </div>
                <div>
                  <div className="text-white font-bold text-lg">大嘴堡情报局</div>
                  <div className="text-orange-400 text-xs">Burger Intelligence Agency</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm max-w-md">
                我们致力于探索美味的无限可能，用最优质的食材和最用心的制作，为你带来最极致的汉堡体验。
              </p>
            </div>

            {/* 快速链接 */}
            <div>
              <h4 className="text-white font-semibold mb-4">快速链接</h4>
              <ul className="space-y-2">
                {['菜单', '关于我们', '门店位置', '加盟合作'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* 联系方式 */}
            <div>
              <h4 className="text-white font-semibold mb-4">联系我们</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>📞 400-888-8888</li>
                <li>📧 hello@dazuibao.com</li>
                <li>📍 上海市浦东新区</li>
              </ul>
            </div>
          </div>

          {/* 底部版权 */}
          <motion.div
            className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            © 2024 大嘴堡情报局. All rights reserved.
          </motion.div>
        </div>
      </footer>
    </main>
  )
}
