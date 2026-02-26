'use client'

import { Suspense, useRef, useEffect, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useGLTF, Environment, SpotLight } from '@react-three/drei'
import * as THREE from 'three'

function useWalkAnimation(scene: THREE.Group, animations: THREE.AnimationClip[]) {
  const mixerRef = useRef<THREE.AnimationMixer | null>(null)

  useEffect(() => {
    if (!scene || !animations.length) return
    const mixer = new THREE.AnimationMixer(scene)
    mixerRef.current = mixer
    animations.forEach((clip) => {
      const cleaned = clip.clone()
      cleaned.tracks = cleaned.tracks.filter((track) => {
        if (track.name.match(/^(Armature|Hips|mixamorig.*Hips)\.position/)) return false
        if (track.name.match(/Head\.(quaternion|rotation)/)) return false
        return true
      })
      const action = mixer.clipAction(cleaned)
      action.setLoop(THREE.LoopRepeat, Infinity)
      action.play()
    })
    return () => { mixer.stopAllAction() }
  }, [scene, animations])

  return mixerRef
}

function useCameraFit(scene: THREE.Group, camera: THREE.PerspectiveCamera) {
  const [fitted, setFitted] = useState(false)
  const headRef = useRef<THREE.Object3D | null>(null)

  useEffect(() => {
    if (!scene || fitted) return
    const box = new THREE.Box3().setFromObject(scene)
    const size = box.getSize(new THREE.Vector3())
    const center = box.getCenter(new THREE.Vector3())

    scene.position.sub(center)

    const fov = camera.fov * (Math.PI / 180)
    const dist = (size.y / 2) / Math.tan(fov / 2)
    camera.position.set(0, 0, dist * 1.15)
    camera.lookAt(0, 0, 0)
    camera.updateProjectionMatrix()

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
      if ((child as THREE.Bone).isBone && child.name === 'Head') {
        headRef.current = child
      }
    })

    setFitted(true)
  }, [scene, camera, fitted])

  return { headRef }
}

function useMouseTracking() {
  const mouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.current.y = (e.clientY / window.innerHeight) * 2 - 1
    }
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return mouse
}

function Model() {
  const { scene, animations } = useGLTF('/vlad-walking.glb', true)
  const groupRef = useRef<THREE.Group>(null)
  const { camera } = useThree()

  const mixerRef = useWalkAnimation(scene, animations)
  const { headRef } = useCameraFit(scene, camera as THREE.PerspectiveCamera)
  const mouse = useMouseTracking()

  useFrame((_, delta) => {
    if (mixerRef.current) mixerRef.current.update(delta)

    const head = headRef.current
    if (!head) return

    head.rotation.y = mouse.current.x * 1.6
    head.rotation.x = Math.max(mouse.current.y * 1.0, -0.1)
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
