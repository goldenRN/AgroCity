"use client";
import * as THREE from "three";
import { useEffect, useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

export default function LoadFBXModel() {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // === Scene, Camera, Renderer ===
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xe4f4fb);

    const { clientWidth, clientHeight } = mountRef.current;
    const camera = new THREE.PerspectiveCamera(60, clientWidth / clientHeight, 0.1, 1000);
    camera.position.set(0, 50, 100);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(clientWidth, clientHeight);
    mountRef.current.appendChild(renderer.domElement);

    // === Lights ===
    scene.add(new THREE.AmbientLight(0xffffff, 0.8));
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.5);
    dirLight.position.set(50, 50, 100);
    scene.add(dirLight);

    // === Controls ===
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    // === Load FBX model ===
    const loader = new FBXLoader();
    loader.load(
      "/models/test10.fbx",
      (object) => {
        object.scale.set(0.1, 0.1, 0.1);
        scene.add(object);
      },
      (xhr) => console.log((xhr.loaded / xhr.total) * 100 + "% ачаалсан"),
      (err) => console.error("FBX ачаалж чадсангүй:", err)
    );

    // === Animate ===
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // === Resize handler ===
    const handleResize = () => {
      if (!mountRef.current) return;
      const { clientWidth, clientHeight } = mountRef.current;
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(clientWidth, clientHeight);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      mountRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div className="w-full h-[700px] border border-gray-300 rounded-lg overflow-hidden" ref={mountRef} />
  );
}
