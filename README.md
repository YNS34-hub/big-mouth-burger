<div align="center">

<!-- 00 · EDITORIAL CAMPAIGN COVER BOARD -->
<a href="https://big-mouth-burger.vercel.app">
  <img src="./docs/github-cover.png" width="100%" alt="Big Mouth Burger — CRUUUNCH · 200°C Flame · 3D Craft" />
</a>

<br />

<h1>大嘴堡情报局 · BIG MOUTH BURGER</h1>

<p>
  <b>35mm Editorial Campaign Lookbook &amp; Interactive 3D Ingredient Deconstruction</b><br />
  <sub>融合 35mm 街头胶片海报美学（CRUUUNCH 系列）、200°C 明火美式炙烤摄影与浏览器端 3D 滚动拆解交互</sub>
</p>

<p>
  <a href="https://big-mouth-burger.vercel.app"><b>↗ LAUNCH LIVE EXPERIENCE</b></a>
  &nbsp;&nbsp;·&nbsp;&nbsp;
  <a href="#01--35mm-campaign-lookbook--概念画报矩阵"><b>CAMPAIGN POSTERS</b></a>
  &nbsp;&nbsp;·&nbsp;&nbsp;
  <a href="#02--3d-scroll-deconstruction--空间拆解规范"><b>3D DECONSTRUCTION</b></a>
  &nbsp;&nbsp;·&nbsp;&nbsp;
  <a href="#03--engineering--quality-gates--工程架构"><b>ARCHITECTURE</b></a>
</p>

</div>

---

### `01` &nbsp; 35MM CAMPAIGN LOOKBOOK — *概念画报矩阵*

> **Editorial Food Photography × Bold Typographic Framing.**  
> 摒弃廉价抠图与生硬贴字，采用统一的暖色美术馆画板（`#EAE6DF`）与瑞士网格字偶距排版（`DIN Next LT Pro` × `思源黑体 Bold`），将 35mm 阳光胶片感 `CRUUUNCH` 咬合瞬间与 200°C 直火炙烤微距特写装帧为三联独立商业画报。

<table>
  <tr>
    <td width="33.3%" valign="top">
      <img src="./docs/poster-01-flame.jpg" width="100%" alt="NO. 01 — Golden Cruuunch Sunlit Edition" />
      <br /><br />
      <b>NO. 01 · 黄金脆皮大嘴堡</b><br />
      <sub><code>GOLDEN CRUUUNCH // SUNLIT</code> · <code>840 KCAL</code></sub><br />
      <sub>180°C 酥脆黄金外皮 · 双层安格斯牛排 · 熟成切达芝士 · 手工黄油布里欧修面包</sub>
    </td>
    <td width="33.3%" valign="top">
      <img src="./docs/poster-02-lava.jpg" width="100%" alt="NO. 02 — 200°C Flame Monolith Double Angus" />
      <br /><br />
      <b>NO. 02 · 烈焰双层安格斯堡</b><br />
      <sub><code>200°C FLAME // MONOLITH</code> · <code>920 KCAL</code></sub><br />
      <sub>双层 150g 谷饲安格斯厚切牛排 · 四重瀑布切达芝士 · 果木烟熏培根 · 现炸洋葱圈</sub>
    </td>
    <td width="33.3%" valign="top">
      <img src="./docs/poster-03-crimson.jpg" width="100%" alt="NO. 03 — Radical Cruuunch Sky Edition" />
      <br /><br />
      <b>NO. 03 · 赤焰脆皮和牛堡</b><br />
      <sub><code>RADICAL CRUUUNCH // SKY</code> · <code>890 KCAL</code></sub><br />
      <sub>高分贝酥脆辣味鸡排与炙烤和牛双拼 · 竹炭黑金芝麻面包 · 墨西哥腌渍辣椒</sub>
    </td>
  </tr>
</table>

<br />

---

### `02` &nbsp; 3D SCROLL DECONSTRUCTION — *空间拆解规范*

在滚动驱动的 7 层空间拆解视口（`BurgerDeconstruct.tsx`）中，每一层食材均遵循独立的纵向位移曲线与热量档案标注：

| 层级 | 食材模块 | 工艺与风味参数 | 热量指标 |
| :--- | :--- | :--- | :--- |
| **`LAYER 01`** | **手工黄金芝麻顶层面包** (*Artisan Sesame Brioche Crown*) | 法国发酵黄油面团 · 2,400+ 颗手撒烘焙白芝麻 · 微酥空气感气孔 | `140 KCAL` |
| **`LAYER 02`** | **现炸黄金酥脆洋葱圈** (*Crispy Golden Onion Rings*) | 180°C 植物油瞬时锁脆 · 黄金玉米粉脆衣 · 清甜紫洋葱芯 | `110 KCAL` |
| **`LAYER 03`** | **果木慢熏焦脆培根** (*Applewood Smoked Bacon*) | 12 小时苹果木低温冷熏 · 铁板高温逼出油脂 · 焦香酥脆边缘 | `130 KCAL` |
| **`LAYER 04`** | **四重瀑布熟成切达芝士** (*Quad Aged Melted Cheddar*) | 18 个月熟成黄金切达 · 65°C 余温自然融化包覆肉饼 | `160 KCAL` |
| **`LAYER 05`** | **双层 200°C 直火安格斯牛排** (*200°C Flame-Seared Double Angus*) | 2 × 150g 澳洲谷饲安格斯牛肩肉 · 200°C 明火美拉德焦壳锁汁 | `380 KCAL` |
| **`LAYER 06`** | **有机罗马生菜与秘制烟熏酱** (*Organic Romaine & Secret Sauce*) | 冷链鲜摘脆嫩生菜叶 · 焦糖洋葱与烟熏红椒秘制酱汁 | `65 KCAL` |
| **`LAYER 07`** | **焦糖黄油煎制底托面包** (*Caramelized Butter Brioche Heel*) | 铁板黄油微煎封底 · 阻隔肉汁渗透 · 保持整颗汉堡结构张力 | `120 KCAL` |

<br />

---

### `03` &nbsp; ENGINEERING & QUALITY GATES — *工程架构*

| 模块路径 | 核心职责与视觉表现 | 技术栈 |
| :--- | :--- | :--- |
| `src/components/sections/Hero.tsx` | **首屏流体视差剧场** — 视差滚动缩放、动态琥珀环境光晕与无边界悬浮汉堡主视觉 | `Framer Motion` · `Next/Image` |
| `src/components/sections/BurgerDeconstruct.tsx` | **7 层 3D 结构拆解台** — 基于滚动进度的多层食材 Y 轴爆炸图与实时卡路里总计面板 | `GSAP` · `React 19` |
| `src/components/sections/Showcase.tsx` | **CRUUUNCH 概念画报展厅** — 3:4 独立装帧胶片海报矩阵、微距双联画幅与风味档案卡 | `Tailwind CSS v4` · `Motion` |
| `src/components/sections/Story.tsx` | **品牌工艺时间轴** — 食材溯源、直火炙烤温度曲线与情报局数字叙事 | `TypeScript 5` · `App Router` |

#### 本地开发与自动化质量门禁

```bash
# 安装依赖
npm install

# 启动本地开发服务器 (http://localhost:3000)
npm run dev

# 执行代码规范检查与生产构建验证
npm run lint
npm run build
```

---

<div align="center">
  <sub><b>BIG MOUTH BURGER INTELLIGENCE</b> &nbsp;·&nbsp; CURATED BY <a href="https://github.com/YNS34-hub">JIE TIAN (YNS34)</a></sub>
</div>
