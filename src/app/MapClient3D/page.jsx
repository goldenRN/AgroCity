"use client";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { Loader2 } from "lucide-react";

const LoadFBXModel = dynamic(() => import("./LoadFBXModel"), { ssr: false });

export default function ThreeViewerPage() {
  return (
    <div className="relative w-screen h-screen flex items-center justify-center bg-gradient-to-br from-[#e4f4fb] via-[#c2e1f3] to-[#7db9e8]">
      {/* 🌗 Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#b3e5fc] via-[#e1f5fe] to-[#bbdefb] -z-10" />

      {/* ⚡ Spinner while loading */}
      <Suspense
        fallback={
          <div className="flex flex-col items-center justify-center">
            <Loader2 className="animate-spin text-blue-600 w-10 h-10 mb-2" />
            <p className="text-blue-700 font-medium">3D загвар ачаалж байна...</p>
          </div>
        }
      >
        {/* 🎥 FBX Model viewer */}
        <LoadFBXModel />
      </Suspense>
    </div>
  );
}
