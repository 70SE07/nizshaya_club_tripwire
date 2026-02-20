'use client'

import { Suspense, useRef, useEffect, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useGLTF, Environment } from '@react-three/drei'
import * as THREE from 'three'

function Model() {
  const { scene } = useGLTF('/vlad.glb')
  const groupRef = useRef<THREE.Group>(null)
  const mouse = useRef({ x: 0, y: 0 })
  const { viewport, camera } = useThree()
  const [fitted, setFitted] = useState(false)

  useEffect(() => {
    if (!scene || fitted) return
    const box = new THREE.Box3().setFromObject(scene)
    const size = box.getSize(new THREE.Vector3())
    const center = box.getCenter(new THREE.Vector3())

    // Center the model
    scene.position.sub(center)
    // Shift down slightly so head isn't cut off at top
    scene.position.y -= size.y * 0.05

    // Fit camera to show full body
    const maxDim = Math.max(size.x, size.y, size.z)
    const fov = (camera as THREE.PerspectiveCamera).fov * (Math.PI / 180)
    const dist = maxDim / (2 * Math.tan(fov / 2))
    camera.position.set(0, 0, dist * 1.2)
    camera.lookAt(0, 0, 0)
    camera.updateProjectionMatrix()

    setFitted(true)
  }, [scene, camera, fitted])

  const windowMouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize to -1..1 range
      windowMouse.current.x = (e.clientX / window.innerWidth) * 2 - 1
      windowMouse.current.y = (e.clientY / window.innerHeight) * 2 - 1
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useFrame(() => {
    if (!groupRef.current) return
    mouse.current.x = THREE.MathUtils.lerp(mouse.current.x, windowMouse.current.x * 0.3, 0.4)
    mouse.current.y = THREE.MathUtils.lerp(mouse.current.y, windowMouse.current.y * 0.15, 0.4)
    groupRef.current.rotation.y = mouse.current.x
    groupRef.current.rotation.x = -mouse.current.y
  })

  return (
    <group ref={groupRef}>
      <primitive object={scene} />
    </group>
  )
}

interface VladSceneProps {
  className?: string
}

export function VladScene({ className }: VladSceneProps) {
  return (
    <div className={className}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
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
