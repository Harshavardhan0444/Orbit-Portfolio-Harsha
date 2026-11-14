import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Inner pulsating core
function CentralSphere() {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      meshRef.current.rotation.x = time * 0.2;
      meshRef.current.rotation.y = time * 0.3;
      const scale = 1 + Math.sin(time * 2) * 0.05;
      meshRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1.2, 32, 32]} />
      <meshStandardMaterial
        color="#00f0ff"
        emissive="#0284c7"
        emissiveIntensity={0.6}
        wireframe={true}
        transparent={true}
        opacity={0.4}
      />
    </mesh>
  );
}

// Inner glowing dense nucleus
function Nucleus() {
  const nucleusRef = useRef();

  useFrame((state) => {
    if (nucleusRef.current) {
      const time = state.clock.getElapsedTime();
      nucleusRef.current.rotation.z = -time * 0.15;
    }
  });

  return (
    <mesh ref={nucleusRef}>
      <icosahedronGeometry args={[0.7, 2]} />
      <meshStandardMaterial
        color="#8b5cf6"
        emissive="#7c3aed"
        emissiveIntensity={0.8}
        roughness={0.2}
        metalness={0.8}
        wireframe={false}
      />
    </mesh>
  );
}

// Interactive Orbital Rings with orbiting satellites
function OrbitalRing({ radius, tiltX, tiltZ, speed, color, satelliteColor }) {
  const ringRef = useRef();
  const satRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime() * speed;
    if (ringRef.current) {
      ringRef.current.rotation.y = time;
    }
    if (satRef.current) {
      satRef.current.position.x = Math.cos(time * 1.5) * radius;
      satRef.current.position.z = Math.sin(time * 1.5) * radius;
    }
  });

  return (
    <group rotation={[tiltX, 0, tiltZ]}>
      {/* The Orbit Track */}
      <mesh ref={ringRef}>
        <torusGeometry args={[radius, 0.02, 16, 100]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.7}
          transparent
          opacity={0.6}
        />
      </mesh>
      {/* Orbiting Satellite Node */}
      <mesh ref={satRef}>
        <sphereGeometry args={[0.09, 16, 16]} />
        <meshStandardMaterial
          color={satelliteColor}
          emissive={satelliteColor}
          emissiveIntensity={1.2}
        />
      </mesh>
    </group>
  );
}

// Futuristic Floating Data Particles
function ParticleCloud({ count = 180 }) {
  const pointsRef = useRef();

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const colorOptions = [
      new THREE.Color('#00f0ff'),
      new THREE.Color('#38bdf8'),
      new THREE.Color('#818cf8'),
      new THREE.Color('#c084fc')
    ];

    for (let i = 0; i < count; i++) {
      const radius = 2.2 + Math.random() * 2.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);

      const chosenColor = colorOptions[Math.floor(Math.random() * colorOptions.length)];
      col[i * 3] = chosenColor.r;
      col[i * 3 + 1] = chosenColor.g;
      col[i * 3 + 2] = chosenColor.b;
    }
    return [pos, col];
  }, [count]);

  useFrame((state) => {
    if (pointsRef.current) {
      const time = state.clock.getElapsedTime();
      pointsRef.current.rotation.y = time * 0.05;
      pointsRef.current.rotation.x = Math.sin(time * 0.03) * 0.1;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  );
}

// 3D Scene Container
function OrbitScene() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#00f0ff" />
      <pointLight position={[-10, -10, -10]} intensity={1.2} color="#8b5cf6" />
      <directionalLight position={[0, 5, 5]} intensity={0.8} color="#ffffff" />

      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
        <CentralSphere />
        <Nucleus />
        <OrbitalRing radius={1.9} tiltX={Math.PI / 4} tiltZ={0.2} speed={0.4} color="#00f0ff" satelliteColor="#38bdf8" />
        <OrbitalRing radius={2.5} tiltX={-Math.PI / 3} tiltZ={-0.3} speed={-0.3} color="#818cf8" satelliteColor="#c084fc" />
        <OrbitalRing radius={3.1} tiltX={Math.PI / 6} tiltZ={Math.PI / 3} speed={0.25} color="#0284c7" satelliteColor="#00f0ff" />
        <ParticleCloud count={220} />
      </Float>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={false}
        maxPolarAngle={Math.PI / 1.7}
        minPolarAngle={Math.PI / 2.3}
      />
    </>
  );
}

// Fallback CSS Orbital Animation in case WebGL is unavailable
function CSSOrbitalFallback() {
  return (
    <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center">
      {/* Outer Pulse */}
      <div className="absolute inset-0 rounded-full border border-cyan-500/20 animate-ping opacity-25" />
      
      {/* Ring 1 */}
      <div className="absolute inset-4 rounded-full border-2 border-dashed border-cyan-400/40 animate-spin-slow" />
      
      {/* Ring 2 */}
      <div className="absolute inset-10 rounded-full border border-purple-500/50 animate-spin-reverse-slow" />
      
      {/* Glowing Orbiting Nodes */}
      <div className="absolute top-2 left-1/2 w-4 h-4 bg-cyan-400 rounded-full shadow-neon-cyan -translate-x-1/2 animate-bounce" />
      <div className="absolute bottom-6 right-8 w-3 h-3 bg-purple-400 rounded-full shadow-neon-purple" />

      {/* Core Sphere */}
      <div className="relative w-32 h-32 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 flex items-center justify-center shadow-neon-cyan animate-pulse">
        <div className="w-20 h-20 rounded-full bg-orbit-bg/80 backdrop-blur-md border border-cyan-300/40 flex items-center justify-center">
          <span className="font-display font-bold text-xl text-cyan-300 tracking-wider">ORBIT</span>
        </div>
      </div>
    </div>
  );
}

export default function Hero3D() {
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setHasWebGL(false);
      }
    } catch {
      setHasWebGL(false);
    }
  }, []);

  return (
    <div className="relative w-full h-[380px] sm:h-[460px] md:h-[540px] flex items-center justify-center select-none">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-gradient-radial from-cyan-500/15 via-purple-600/5 to-transparent blur-2xl pointer-events-none" />

      {hasWebGL ? (
        <div className="w-full h-full cursor-grab active:cursor-grabbing">
          <Canvas
            camera={{ position: [0, 0, 6.2], fov: 45 }}
            gl={{ antialias: true, alpha: true }}
            onCreated={({ gl }) => {
              gl.setClearColor(0x000000, 0);
            }}
          >
            <OrbitScene />
          </Canvas>
        </div>
      ) : (
        <CSSOrbitalFallback />
      )}

      {/* Subtle interaction tip */}
      <div className="absolute bottom-1 right-2 sm:right-6 text-[10px] sm:text-xs text-slate-400/80 bg-slate-900/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-cyan-500/20 flex items-center gap-1.5 pointer-events-none">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
        Interactive 3D Orbit • Drag to Rotate
      </div>
    </div>
  );
}
