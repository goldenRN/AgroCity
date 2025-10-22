// "use client";
// import * as THREE from "three";
// import { useEffect, useRef } from "react";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

// export default function LoadFBXModel() {
//   const mountRef = useRef(null); // ❗ Type заах хэрэггүй (.jsx дээр)

//   useEffect(() => {
//     if (!mountRef.current) return;

//     // === Scene, Camera, Renderer ===
//     const scene = new THREE.Scene();
//     scene.background = new THREE.Color(0xe4f4fb);

//     const camera = new THREE.PerspectiveCamera(
//       60,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000
//     );
//     camera.position.set(0, 50, 100);

//     const renderer = new THREE.WebGLRenderer({ antialias: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     mountRef.current.appendChild(renderer.domElement);

//     // === Lights ===
//     const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
//     scene.add(ambientLight);
//     const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
//     directionalLight.position.set(50, 50, 100);
//     scene.add(directionalLight);

//     // === Controls ===
//     const controls = new OrbitControls(camera, renderer.domElement);
//     controls.enableDamping = true;
//     controls.dampingFactor = 0.05;
//     controls.autoRotate = false;
//     controls.autoRotateSpeed = 1.5;

//     // === Load model ===
//     const loader = new FBXLoader();
//     loader.load(
//       "/models/test10.fbx",
//       (object) => {
//         object.scale.set(0.1, 0.1, 0.1);
//         scene.add(object);
//       },
//       (xhr) => console.log((xhr.loaded / xhr.total) * 100 + "% ачаалсан"),
//       (err) => console.error("FBX ачаалж чадсангүй:", err)
//     );

//     // === Animate ===
//     const animate = () => {
//       requestAnimationFrame(animate);
//       controls.update();
//       renderer.render(scene, camera);
//     };
//     animate();

//     // === Resize ===
//     const handleResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     };
//     window.addEventListener("resize", handleResize);

//     // === Cleanup ===
//     return () => {
//       window.removeEventListener("resize", handleResize);
//       mountRef.current?.removeChild(renderer.domElement);
//       renderer.dispose();
//     };
//   }, []);

//   return <div ref={mountRef} className="w-full h-full" />;
// }

"use client";
import * as THREE from "three";
import { useEffect, useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

export default function LoadFBXModel() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // === Scene, Camera, Renderer ===
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xe4f4fb);

    const { clientWidth, clientHeight } = mountRef.current;
    const camera = new THREE.PerspectiveCamera(
      60,
      clientWidth / clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 50, 100);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(clientWidth, clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // === Lights ===
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(50, 50, 100);
    scene.add(directionalLight);

    // === Controls ===
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotate = false;
    controls.autoRotateSpeed = 1.5;

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

    // === Animation loop ===
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // === Responsive resize ===
    const handleResize = () => {
      if (!mountRef.current) return;
      const { clientWidth, clientHeight } = mountRef.current;
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(clientWidth, clientHeight);
    };
    window.addEventListener("resize", handleResize);

    // === Cleanup ===
    return () => {
      window.removeEventListener("resize", handleResize);
      mountRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="max-w-7xl w-full h-[250px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden  py-10 px-4 sm:px-6 lg:px-10"
    />
  );
}
