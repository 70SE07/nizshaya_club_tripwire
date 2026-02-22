'use client'

import { Suspense, useRef, useEffect, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useGLTF, Environment, SpotLight } from '@react-three/drei'
import * as THREE from 'three'

function Model() {
  const { scene } = useGLTF('/vlad.glb')
  const groupRef = useRef<THREE.Group>(null)
  const mouse = useRef({ x: 0, y: 0 })
  const smoothMouse = useRef({ x: 0, y: 0 })
  const { camera } = useThree()
  const [fitted, setFitted] = useState(false)
  const headRef = useRef<THREE.Object3D | null>(null)

  useEffect(() => {
    if (!scene || fitted) return
    const box = new THREE.Box3().setFromObject(scene)
    const size = box.getSize(new THREE.Vector3())
    const center = box.getCenter(new THREE.Vector3())

    scene.position.sub(center)
    scene.position.y -= size.y * 0.05

    const maxDim = Math.max(size.x, size.y, size.z)
    const fov = (camera as THREE.PerspectiveCamera).fov * (Math.PI / 180)
    const dist = maxDim / (2 * Math.tan(fov / 2))
    camera.position.set(0, 0, dist * 1.2)
    camera.lookAt(0, 0, 0)
    camera.updateProjectionMatrix()

    // Apply glossy dark material & find head bone
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh
        mesh.material = new THREE.MeshPhysicalMaterial({
          color: '#1a1a1a',
          metalness: 0.9,
          roughness: 0.15,
          clearcoat: 1.0,
          clearcoatRoughness: 0.05,
          envMapIntensity: 1.5,
        })
      }
      if (!headRef.current && child.name.toLowerCase().includes('head')) {
        headRef.current = child
      }
    })

    setFitted(true)
  }, [scene, camera, fitted])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.current.y = (e.clientY / window.innerHeight) * 2 - 1
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useFrame(() => {
    const target = headRef.current ?? groupRef.current
    if (!target) return

    const maxAngle = headRef.current ? 0.3 : 0.15
    const targetX = mouse.current.x * maxAngle
    const targetY = -mouse.current.y * maxAngle

    smoothMouse.current.x = THREE.MathUtils.lerp(smoothMouse.current.x, targetX, 0.05)
    smoothMouse.current.y = THREE.MathUtils.lerp(smoothMouse.current.y, targetY, 0.05)

    target.rotation.y = smoothMouse.current.x
    target.rotation.x = smoothMouse.current.y
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
        <directionalLight position={[5, 5, 5]} intensity={1.8} />
        <directionalLight position={[-3, 3, -3]} intensity={0.6} />
        <SpotLight
          position={[3, 5, 2]}
          angle={0.5}
          penumbra={0.8}
          intensity={1.5}
          color="#e11d48"
          castShadow={false}
        />
        <Suspense fallback={null}>
          <Model />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  )
}
