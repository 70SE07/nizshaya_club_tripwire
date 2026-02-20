'use client'

import { Suspense, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useGLTF, Environment } from '@react-three/drei'
import * as THREE from 'three'

function Model() {
  const { scene } = useGLTF('/vlad.glb')
  const groupRef = useRef<THREE.Group>(null)
  const mouse = useRef({ x: 0, y: 0 })
  const { viewport } = useThree()

  useFrame((state) => {
    if (!groupRef.current) return
    const x = (state.pointer.x * viewport.width) / 2
    const y = (state.pointer.y * viewport.height) / 2
    mouse.current.x = THREE.MathUtils.lerp(mouse.current.x, x * 0.2, 0.4)
    mouse.current.y = THREE.MathUtils.lerp(mouse.current.y, y * 0.15, 0.4)
    groupRef.current.rotation.y = mouse.current.x
    groupRef.current.rotation.x = -mouse.current.y
  })

  return (
    <group ref={groupRef}>
      <primitive object={scene} scale={1.8} position={[0, -1.8, 0]} />
    </group>
  )
}

interface VladSceneProps {
  className?: string
}

export function VladScene({ className }: VladSceneProps) {
  return (
    <div className={className}>
      <Canvas camera={{ position: [0, 0, 4], fov: 55 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <directionalLight position={[-3, 3, -3]} intensity={0.4} />
        <Suspense fallback={null}>
          <Model />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  )
}
