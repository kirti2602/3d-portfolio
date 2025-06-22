"use client";
import React from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Float, Html } from "@react-three/drei";
import { Suspense, useRef, useState, useEffect } from "react";
import {
  UserIcon,
  AcademicCapIcon,
  BoltIcon,
  BriefcaseIcon,
  TrophyIcon,
  ArrowsPointingOutIcon,
} from "@heroicons/react/24/outline";
import FullscreenView from "@/components/fullscreen-view";
import PersonalSection from "@/components/personal-section";
import EducationSection from "@/components/education-section";
import SkillsSection from "@/components/skills-section";
import ExperienceSection from "@/components/experience-section";
import AchievementsSection from "@/components/achievements-section";

function Card3D({ children, color = "#ffffff", isVisible = true }: any) {
  const meshRef = useRef<any>(null);
  const [hovered, setHovered] = useState(false);

  if (!isVisible) return null;

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.2}>
      <group>
        <mesh
          ref={meshRef}
          position={[0, 0, 0]}
          rotation={[0, 0, 0]}
          scale={hovered ? 1.08 : 1}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          castShadow
          receiveShadow
        >
          <boxGeometry args={[4, 5, 0.4]} />
          <meshPhysicalMaterial
            color={color}
            transparent
            opacity={0.95}
            roughness={0.1}
            metalness={0.2}
            clearcoat={1}
            clearcoatRoughness={0.1}
            reflectivity={0.8}
            envMapIntensity={1.5}
          />
        </mesh>

        <mesh position={[0, 0, 0.21]} castShadow>
          <boxGeometry args={[4.1, 5.1, 0.02]} />
          <meshPhysicalMaterial
            color="#ffffff"
            roughness={0.05}
            metalness={0.8}
            clearcoat={1}
            clearcoatRoughness={0.05}
          />
        </mesh>

        <mesh position={[0, 0, -0.21]} receiveShadow>
          <boxGeometry args={[3.9, 4.9, 0.02]} />
          <meshStandardMaterial color="#f8f9fa" roughness={0.3} />
        </mesh>

        {[
          [-1.9, 2.4, 0.22],
          [1.9, 2.4, 0.22],
          [-1.9, -2.4, 0.22],
          [1.9, -2.4, 0.22],
        ].map((position, index) => (
          // @ts-ignore
          <mesh key={index} position={position} castShadow>
            <meshPhysicalMaterial
              color={color}
              roughness={0.1}
              metalness={0.9}
              clearcoat={1}
            />
          </mesh>
        ))}

        {hovered && (
          <mesh position={[0, 0, 0.25]}>
            <boxGeometry args={[4.2, 5.2, 0.01]} />
            <meshBasicMaterial
              color={color}
              transparent
              opacity={0.3}
              side={2}
            />
          </mesh>
        )}

        <Html
          transform
          occlude
          position={[0, 0, 0.25]}
          style={{
            width: "380px",
            height: "480px",
            padding: "20px",
            background: "rgba(255, 255, 255, 0.98)",
            borderRadius: "16px",
            backdropFilter: "blur(15px)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            boxShadow: hovered
              ? "0 25px 60px rgba(0, 0, 0, 0.25), 0 0 30px rgba(99, 102, 241, 0.3)"
              : "0 20px 50px rgba(0, 0, 0, 0.2)",
            overflow: "auto",
            fontSize: "12px",
            lineHeight: "1.5",
            color: "#333",
            fontFamily:
              "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
            transition: "all 0.3s ease",
            transform: hovered ? "translateZ(10px)" : "translateZ(0px)",
          }}
        >
          {children}
        </Html>
      </group>
    </Float>
  );
}

function Scene({ activeSection }: { activeSection: number }) {
  const sections = [
    { component: <PersonalSection />, color: "#6366f1" },
    { component: <EducationSection />, color: "#10b981" },
    { component: <SkillsSection />, color: "#f59e0b" },
    { component: <ExperienceSection />, color: "#ef4444" },
    { component: <AchievementsSection />, color: "#8b5cf6" },
  ];

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1.2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <pointLight position={[-10, -10, -5]} intensity={0.6} color="#6366f1" />
      <pointLight position={[10, -10, -5]} intensity={0.6} color="#8b5cf6" />
      <spotLight
        position={[0, 15, 10]}
        intensity={1}
        angle={0.3}
        penumbra={0.5}
        castShadow
      />

      <directionalLight
        position={[-5, 0, -10]}
        intensity={0.8}
        color="#ffffff"
      />

      <Card3D color={sections[activeSection].color} isVisible={true}>
        {sections[activeSection].component}
      </Card3D>

      <OrbitControls
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        maxDistance={25}
        minDistance={3}
        enableDamping={true}
        dampingFactor={0.05}
      />
    </>
  );
}

export default function Portfolio3D() {
  const [activeSection, setActiveSection] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const tabs = [
    { name: "Personal", icon: UserIcon, color: "#6366f1" },
    { name: "Education", icon: AcademicCapIcon, color: "#10b981" },
    { name: "Skills", icon: BoltIcon, color: "#f59e0b" },
    { name: "Experience", icon: BriefcaseIcon, color: "#ef4444" },
    { name: "Achievements", icon: TrophyIcon, color: "#8b5cf6" },
  ];

  const handleNextSection = () => {
    setActiveSection((prev) => (prev + 1) % tabs.length);
  };

  const handlePrevSection = () => {
    setActiveSection((prev) => (prev - 1 + tabs.length) % tabs.length);
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (isFullscreen) {
      if (e.key === "Escape") {
        setIsFullscreen(false);
      } else if (e.key === "ArrowRight") {
        handleNextSection();
      } else if (e.key === "ArrowLeft") {
        handlePrevSection();
      }
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [isFullscreen]);

  if (isFullscreen) {
    return (
      <FullscreenView
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        tabs={tabs}
        onClose={() => setIsFullscreen(false)}
        onNext={handleNextSection}
        onPrev={handlePrevSection}
      />
    );
  }

  return (
    <div className="w-full h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 font-system">
      {/* Tab Navigation */}
      <div className="absolute top-0 left-0 right-0 z-10 bg-black bg-opacity-20 backdrop-blur-sm">
        <div className="flex justify-center items-center p-4">
          <div className="flex bg-white bg-opacity-10 rounded-full p-2 gap-2">
            {tabs.map((tab, index) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={index}
                  onClick={() => setActiveSection(index)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                    activeSection === index
                      ? "bg-white text-gray-800 shadow-lg transform scale-105"
                      : "text-white hover:bg-white hover:bg-opacity-20"
                  }`}
                  style={{
                    backgroundColor:
                      activeSection === index ? "white" : "transparent",
                  }}
                >
                  <IconComponent className="w-5 h-5" />
                  <span className="text-sm">{tab.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Fullscreen Button */}
      <div className="absolute top-4 right-4 z-10">
        <button
          onClick={() => setIsFullscreen(true)}
          className="bg-white bg-opacity-20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-opacity-30 transition-all duration-300 group"
          title="View in fullscreen"
        >
          <ArrowsPointingOutIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* Section Title */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div
          className="px-6 py-3 rounded-full backdrop-blur-sm text-white font-semibold flex items-center gap-2"
          style={{ backgroundColor: `${tabs[activeSection].color}80` }}
        >
          {React.createElement(tabs[activeSection].icon, {
            className: "w-5 h-5",
          })}
          {tabs[activeSection].name}
        </div>
      </div>

      <Canvas camera={{ position: [0, 0, 15], fov: 60 }} shadows>
        <Suspense fallback={null}>
          <Environment preset="city" />
          <Scene activeSection={activeSection} />
        </Suspense>
      </Canvas>
    </div>
  );
}
