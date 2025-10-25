"use client";

import React, { useEffect, useState, Suspense } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import * as THREE from "three";

export default function LoadFBXModel({ filePath }) {
  return (
    <div className="w-full h-[600px] border border-gray-300 rounded-lg">
      <Canvas
        shadows
        camera={{ position: [0, 10, 10], fov: 55 }} // 🎯 Камерыг 45° орчим өнцгөөр байрлуулсан
        style={{ width: "100%", height: "100%" }}
      >
        <ambientLight intensity={0.1} />
        <directionalLight position={[5, 10, 5]} intensity={1} />
        <Suspense fallback={null}>
          <Model filePath={filePath} />
        </Suspense>

        {/* 👇 OrbitControls — хэрэглэгч zoom/pan хийхэд туслана */}
        <OrbitControls
          enableZoom
          enablePan
          minDistance={80}
          maxDistance={200}
          minPolarAngle={Math.PI / 6}   // доош харуулах доод хязгаар (~30°)
          maxPolarAngle={Math.PI / 2.2} // дээш харуулах дээд хязгаар (~81°)
          target={[0, 0, 0]}
        />
      </Canvas>
    </div>
  );
}

function Model({ filePath }) {
  const [object, setObject] = useState(null)
  const { camera, controls } = useThree()

  useEffect(() => {
    const loader = new FBXLoader()

    loader.load(
      filePath,
      (obj) => {
        obj.position.set(0, 50, 50)
        obj.scale.set(0.003, 0.003, 0.003)

        // 🔍 1️⃣ FBX coordinate system шалгах
        // Зарим FBX нь Z up (Blender), зарим нь Y up (Unity, 3dsMax)
        const upAxis = obj.up.clone()

        // 🔄 2️⃣ Coordinate системд тулгуурлан автоматаар rotation засах
        if (Math.abs(upAxis.y) > Math.abs(upAxis.z)) {
          // Y up → Blender гэх мэт, доош харсан байх магадлалтай
          obj.rotation.x = -Math.PI / 2
        } else if (Math.abs(upAxis.z) > Math.abs(upAxis.y)) {
          // Z up → OK, хэвийн
          obj.rotation.x = 0
        }

        // 💡 Хэрвээ буруу чиглэлтэй хэвээр байвал доорх мөрийг тайлж шалгаарай:
        // obj.rotation.y = Math.PI

        // 🧱 Mesh бүрт shadow тохируулах
        // obj.traverse((child) => {
        //   if (child.isMesh) {
        //     child.castShadow = true
        //     child.receiveShadow = true
        //   }
        // })

        // 📦 Bounding box төвийг олно
        const box = new THREE.Box3().setFromObject(obj)
        const center = box.getCenter(new THREE.Vector3())

        // 🎥 Камераа 45° өнцгөөр байрлуулах
        const distance = 60
        camera.position.set(center.x + distance, center.y + distance, center.z + distance)
        camera.lookAt(center)

        // if (controls) {
        //   controls.target.copy(center)
        //   controls.update()
        // }

        setObject(obj)
      },
      undefined,
      (err) => console.error('FBX ачаалж чадсангүй:', err)
    )
  }, [filePath, camera, controls])

  return object ? <primitive object={object} /> : null
}


