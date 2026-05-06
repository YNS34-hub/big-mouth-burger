'use client'

import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 50)
  })

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        className={`transition-all duration-700 ${
          scrolled
            ? 'bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/[0.04]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:shadow-amber-500/40 transition-shadow duration-500">
                <span className="text-sm lg:text-base">🍔</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-sm lg:text-[15px] font-semibold tracking-tight text-white">
                  大嘴堡
                </span>
                <span className="text-[10px] lg:text-[11px] text-amber-500/80 font-medium tracking-wider uppercase">
                  Intelligence
                </span>
              </div>
            </a>

            {/* Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {['菜单', '情报', '故事', '门店'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="px-4 py-2 text-[13px] font-medium text-stone-400 hover:text-white transition-colors duration-300 rounded-lg hover:bg-white/[0.04]"
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Right */}
            <div className="flex items-center gap-3">
              <button className="hidden sm:flex w-9 h-9 items-center justify-center rounded-lg text-stone-400 hover:text-white hover:bg-white/[0.04] transition-all duration-300">
                <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </button>
              <button className="relative w-9 h-9 flex items-center justify-center rounded-lg text-stone-400 hover:text-white hover:bg-white/[0.04] transition-all duration-300">
                <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-amber-500 text-[10px] font-bold text-black rounded-full flex items-center justify-center">
                  3
                </span>
              </button>
              <motion.button
                className="btn-glow ml-2 px-5 py-2 bg-white text-black text-[13px] font-semibold rounded-full hover:bg-amber-100 transition-colors duration-300"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                立即点餐
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
