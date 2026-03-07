import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import type { Group, Points } from 'three';

function FloatingOrbs() {
  const group = useRef<Group>(null);

  useFrame((state) => {
    if (!group.current) {
      return;
    }

    group.current.rotation.z = state.clock.elapsedTime * 0.05;
    group.current.rotation.y = state.clock.elapsedTime * 0.08;
  });

  return (
    <group ref={group}>
      <mesh position={[-1.2, 0.6, 0]}>
        <sphereGeometry args={[0.65, 32, 32]} />
        <meshStandardMaterial color="#00A651" transparent opacity={0.4} />
      </mesh>
      <mesh position={[0.7, -0.2, 0.4]}>
        <sphereGeometry args={[0.78, 32, 32]} />
        <meshStandardMaterial color="#FFCB00" transparent opacity={0.32} />
      </mesh>
      <mesh position={[1.4, 0.9, -0.5]}>
        <sphereGeometry args={[0.48, 32, 32]} />
        <meshStandardMaterial color="#E30613" transparent opacity={0.24} />
      </mesh>
    </group>
  );
}

function BeninParticles() {
  const pointsRef = useRef<Points>(null);
  const { positions, colors } = useMemo(() => {
    const count = 210;
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const palette = [
      [0 / 255, 166 / 255, 81 / 255],
      [255 / 255, 203 / 255, 0 / 255],
      [227 / 255, 6 / 255, 19 / 255]
    ];

    for (let index = 0; index < count; index += 1) {
      const offset = index * 3;
      const band = index % 3;
      const xBase = band === 0 ? -1.4 : band === 1 ? 0 : 1.4;
      pos[offset] = xBase + (Math.random() - 0.5) * 0.9;
      pos[offset + 1] = (Math.random() - 0.5) * 3.4;
      pos[offset + 2] = (Math.random() - 0.5) * 1.8;

      col[offset] = palette[band][0];
      col[offset + 1] = palette[band][1];
      col[offset + 2] = palette[band][2];
    }

    return { positions: pos, colors: col };
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) {
      return;
    }

    pointsRef.current.rotation.z = state.clock.elapsedTime * 0.035;
    pointsRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.08;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={colors.length / 3} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.05} vertexColors transparent opacity={0.72} sizeAttenuation />
    </points>
  );
}

export function HeroScene() {
  return (
    <div className="absolute inset-0 hidden overflow-hidden rounded-[2rem] lg:block">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.28),_transparent_28%),linear-gradient(120deg,_rgba(0,166,81,0.82)_0%,_rgba(255,203,0,0.58)_48%,_rgba(227,6,19,0.48)_100%)]" />
      <Canvas camera={{ position: [0, 0, 4] }}>
        <ambientLight intensity={1.6} />
        <directionalLight intensity={2.2} position={[3, 4, 4]} />
        <BeninParticles />
        <FloatingOrbs />
      </Canvas>
    </div>
  );
}
