'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei'
import { Suspense } from 'react'
import Burger from './Burger'

export default function Scene() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          {/* 环境光 */}
          <ambientLight intensity={0.5} />

          {/* 主光源 */}
          <directionalLight
            position={[5, 5, 5]}
            intensity={1}
            castShadow
            shadow-mapSize={[1024, 1024]}
          />

          {/* 补光 */}
          <pointLight position={[-5, 5, -5]} intensity={0.5} color="#FF6B6B" />
          <pointLight position={[5, -5, 5]} intensity={0.3} color="#4ECDC4" />

          {/* 环境贴图 */}
          <Environment preset="studio" />

          {/* 汉堡模型 */}
          <Burger />

          {/* 地面阴影 */}
          <ContactShadows
            position={[0, -1.5, 0]}
            opacity={0.4}
            scale={10}
            blur={2.5}
            far={4}
          />

          {/* 轨道控制 - 鼠标拖拽旋转 */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 1.5}
            autoRotate
            autoRotateSpeed={1}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}
