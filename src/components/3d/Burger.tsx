'use client'

import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

function seededRandom(seed: number) {
  const value = Math.sin(seed * 16.371 + 91.719) * 43758.5453
  return value - Math.floor(value)
}

const SESAME_SEEDS = Array.from({ length: 20 }, (_, i) => {
  const theta = seededRandom(i * 5 + 1) * Math.PI * 2
  const phi = seededRandom(i * 5 + 2) * (Math.PI / 3)
  const radius = 1.05

  return {
    position: [
      radius * Math.sin(phi) * Math.cos(theta),
      0.15 + radius * Math.cos(phi),
      radius * Math.sin(phi) * Math.sin(theta),
    ] as [number, number, number],
    rotation: [
      seededRandom(i * 5 + 3) * Math.PI,
      seededRandom(i * 5 + 4) * Math.PI,
      seededRandom(i * 5 + 5) * Math.PI,
    ] as [number, number, number],
  }
})

const LETTUCE_LEAVES = Array.from({ length: 6 }, (_, i) => {
  const angle = (i / 6) * Math.PI * 2
  const radius = 0.8

  return {
    position: [
      Math.cos(angle) * radius,
      0,
      Math.sin(angle) * radius,
    ] as [number, number, number],
    rotation: [
      0.2 * seededRandom(100 + i * 2),
      angle,
      0.1 * seededRandom(101 + i * 2),
    ] as [number, number, number],
  }
})

const TOMATO_SLICES = Array.from({ length: 3 }, (_, i) => {
  const angle =
    (i / 3) * Math.PI * 2 + (seededRandom(200 + i) - 0.5) * 0.4
  const radius = 0.5

  return {
    position: [
      Math.cos(angle) * radius,
      0,
      Math.sin(angle) * radius,
    ] as [number, number, number],
    rotation: [0, -angle, 0] as [number, number, number],
  }
})

const CHEESE_DRIPS: [number, number, number][] = [
  [-0.7, 0, 0.8],
  [0.6, 0, -0.7],
  [0.9, 0, 0.3],
]

function TopBun() {
  return (
    <group position={[0, 0.85, 0]}>
      <mesh position={[0, 0.15, 0]}>
        <sphereGeometry args={[1.1, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#D4A04A" roughness={0.6} metalness={0.1} />
      </mesh>

      {SESAME_SEEDS.map((seed, i) => (
        <mesh key={i} position={seed.position} rotation={seed.rotation}>
          <sphereGeometry args={[0.03, 8, 8]} />
          <meshStandardMaterial color="#FFF8DC" roughness={0.3} />
        </mesh>
      ))}
    </group>
  )
}

function BottomBun() {
  return (
    <mesh position={[0, -0.65, 0]}>
      <cylinderGeometry args={[1.1, 1.05, 0.35, 32]} />
      <meshStandardMaterial color="#D4A04A" roughness={0.6} metalness={0.1} />
    </mesh>
  )
}

function Patty() {
  return (
    <mesh position={[0, -0.3, 0]}>
      <cylinderGeometry args={[1, 1, 0.25, 32]} />
      <meshStandardMaterial color="#5C3317" roughness={0.8} metalness={0.05} />
    </mesh>
  )
}

function Cheese() {
  return (
    <group position={[0, -0.05, 0]}>
      <mesh>
        <boxGeometry args={[2, 0.06, 2]} />
        <meshStandardMaterial color="#FFD700" roughness={0.4} metalness={0.1} />
      </mesh>

      {CHEESE_DRIPS.map((position, i) => (
        <mesh key={i} position={position}>
          <boxGeometry args={[0.4, 0.15, 0.3]} />
          <meshStandardMaterial color="#FFD700" roughness={0.4} />
        </mesh>
      ))}
    </group>
  )
}

function Lettuce() {
  return (
    <group position={[0, 0.1, 0]}>
      {LETTUCE_LEAVES.map((leaf, i) => (
        <mesh key={i} position={leaf.position} rotation={leaf.rotation}>
          <sphereGeometry args={[0.4, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <meshStandardMaterial
            color="#4CAF50"
            roughness={0.7}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  )
}

function Tomato() {
  return (
    <group position={[0, 0.25, 0]}>
      {TOMATO_SLICES.map((slice, i) => (
        <mesh key={i} position={slice.position} rotation={slice.rotation}>
          <cylinderGeometry args={[0.3, 0.3, 0.08, 16]} />
          <meshStandardMaterial color="#FF4444" roughness={0.5} metalness={0.05} />
        </mesh>
      ))}
    </group>
  )
}

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

export default function Burger() {
  const groupRef = useRef<THREE.Group>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (!groupRef.current) return

    groupRef.current.rotation.y += 0.005
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
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
