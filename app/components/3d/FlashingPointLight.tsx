"use client"

import { useRef} from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function FlashingPointLight() {
  const pointLight = useRef<THREE.PointLight>(null)
  const phaseRef = useRef(0)
  
  const secondaryLight = useRef<THREE.PointLight>(null)
  const tertiaryLight = useRef<THREE.PointLight>(null)

  useFrame((_state, delta) => {
    phaseRef.current += delta * 2

    if (pointLight.current && secondaryLight.current && tertiaryLight.current) {
      const primaryIntensity = 20 + Math.sin(phaseRef.current) * 15
      pointLight.current.intensity = primaryIntensity
      
      const secondaryIntensity = 15 + Math.sin(phaseRef.current + Math.PI / 2) * 10
      secondaryLight.current.intensity = secondaryIntensity
      
      const tertiaryIntensity = 10 + Math.sin(phaseRef.current * 3) * 5
      tertiaryLight.current.intensity = tertiaryIntensity

      pointLight.current.position.x = Math.sin(phaseRef.current * 0.5) * 0.5
      pointLight.current.position.y = Math.cos(phaseRef.current * 0.5) * 0.5
      
      secondaryLight.current.position.x = -Math.sin(phaseRef.current * 0.3) * 0.3
      secondaryLight.current.position.z = Math.cos(phaseRef.current * 0.3) * 0.3
    }
  })

  return (
    <>
      <pointLight
        ref={pointLight}
        position={[0, 0, 0]}
        intensity={20}
        color="cyan"
        distance={10}
        decay={2}
      />
      <pointLight
        ref={secondaryLight}
        position={[0.5, 0, 0]}
        intensity={15}
        color="aqua"
        distance={8}
        decay={2}
      />
      <pointLight
        ref={tertiaryLight}
        position={[-0.5, 0, 0]}
        intensity={10}
        color="mediumturquoise"
        distance={6}
        decay={2}
      />
    </>
  )
}

