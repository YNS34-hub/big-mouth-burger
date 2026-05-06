'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshTransmissionMaterial, Float } from '@react-three/drei'
import * as THREE from 'three'

// 汉堡面包（上层）
function TopBun() {
  return (
    <group position={[0, 0.85, 0]}>
      {/* 主面包体 */}
      <mesh position={[0, 0.15, 0]}>
        <sphereGeometry args={[1.1, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial
          color="#D4A04A"
          roughness={0.6}
          metalness={0.1}
        />
      </mesh>
      {/* 芝麻 */}
      {Array.from({ length: 20 }).map((_, i) => {
        const theta = Math.random() * Math.PI * 2
        const phi = Math.random() * Math.PI / 3
        const r = 1.05
        return (
          <mesh
            key={i}
            position={[
              r * Math.sin(phi) * Math.cos(theta),
              0.15 + r * Math.cos(phi),
              r * Math.sin(phi) * Math.sin(theta),
            ]}
            rotation={[Math.random(), Math.random(), Math.random()]}
          >
            <sphereGeometry args={[0.03, 8, 8]} />
            <meshStandardMaterial color="#FFF8DC" roughness={0.3} />
          </mesh>
        )
      })}
    </group>
  )
}

// 汉堡面包（下层）
function BottomBun() {
  return (
    <mesh position={[0, -0.65, 0]}>
      <cylinderGeometry args={[1.1, 1.05, 0.35, 32]} />
      <meshStandardMaterial
        color="#D4A04A"
        roughness={0.6}
        metalness={0.1}
      />
    </mesh>
  )
}

// 肉饼
function Patty() {
  return (
    <mesh position={[0, -0.3, 0]}>
      <cylinderGeometry args={[1.0, 1.0, 0.25, 32]} />
      <meshStandardMaterial
        color="#5C3317"
        roughness={0.8}
        metalness={0.05}
      />
    </mesh>
  )
}

// 芝士片（略微融化效果）
function Cheese() {
  return (
    <group position={[0, -0.05, 0]}>
      <mesh>
        <boxGeometry args={[2.0, 0.06, 2.0]} />
        <meshStandardMaterial
          color="#FFD700"
          roughness={0.4}
          metalness={0.1}
        />
      </mesh>
      {/* 融化下垂效果 */}
      {[[-0.7, 0, 0.8], [0.6, 0, -0.7], [0.9, 0, 0.3]].map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]}>
          <boxGeometry args={[0.4, 0.15, 0.3]} />
          <meshStandardMaterial color="#FFD700" roughness={0.4} />
        </mesh>
      ))}
    </group>
  )
}

// 生菜
function Lettuce() {
  return (
    <group position={[0, 0.1, 0]}>
      {/* 生菜叶 - 多个不规则形状 */}
      {Array.from({ length: 6 }).map((_, i) => {
        const angle = (i / 6) * Math.PI * 2
        const r = 0.8
        return (
          <mesh
            key={i}
            position={[Math.cos(angle) * r, 0, Math.sin(angle) * r]}
            rotation={[0.2 * Math.random(), angle, 0.1 * Math.random()]}
          >
            <sphereGeometry args={[0.4, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
            <meshStandardMaterial
              color="#4CAF50"
              roughness={0.7}
              side={THREE.DoubleSide}
            />
          </mesh>
        )
      })}
    </group>
  )
}

// 番茄片
function Tomato() {
  return (
    <group position={[0, 0.25, 0]}>
      {Array.from({ length: 3 }).map((_, i) => {
        const angle = (i / 3) * Math.PI * 2 + Math.random() * 0.5
        const r = 0.5
        return (
          <mesh
            key={i}
            position={[Math.cos(angle) * r, 0, Math.sin(angle) * r]}
          >
            <cylinderGeometry args={[0.3, 0.3, 0.08, 16]} />
            <meshStandardMaterial
              color="#FF4444"
              roughness={0.5}
              metalness={0.05}
            />
          </mesh>
        )
      })}
    </group>
  )
}

// 洋葱圈
function Onion() {
  return (
    <mesh position={[0, 0.35, 0]} rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[0.6, 0.06, 8, 32]} />
      <meshStandardMaterial
        color="#E8E0D8"
        roughness={0.5}
        transparent
        opacity={0.9}
      />
    </mesh>
  )
}

// 主汉堡组件
export default function Burger() {
  const groupRef = useRef<THREE.Group>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (groupRef.current) {
      // 缓慢自动旋转
      groupRef.current.rotation.y += 0.005

      // 轻微上下浮动
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <group
        ref={groupRef}
        scale={hovered ? 1.05 : 1}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <TopBun />
        <Onion />
        <Tomato />
        <Lettuce />
        <Cheese />
        <Patty />
        <BottomBun />
      </group>
    </Float>
  )
}

// 添加 useState 导入
import { useState } from 'react'
