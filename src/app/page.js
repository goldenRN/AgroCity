

'use client';
import HeaderVideo from '@/components/common/HeaderVideo';
import MapWithSidebar from '@/components/common/TwoDVideo';
import ThreeDVideo from '@/components/common/ThreeDVideo';
import AboutUs from '@/components/common/AboutUs';
import Services from '@/components/common/Services';
import FAQSection from '@/components/common/FAQSection';
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

// const MapLeafletArcGIS = dynamic(() => import("./MapLeafletArcGIS"), {
//   ssr: false, // ⛔ SSR унтраана
// });

export default function Home() {
  const [geojson, setGeojson] = useState(null);
    const [selectedName, setSelectedName] = useState(null);

    // public доторх geojson файлыг унших
    useEffect(() => {
        fetch("/data/zone.geojson")
            .then((res) => res.json())
            .then((data) => setGeojson(data))
            .catch((err) => console.error("GeoJSON уншихад алдаа:", err));
    }, []);
    // Давхардсан name-үүдийг unique болгож жагсаах
    const getUniqueNames = (features) => {
        if (!features) return [];
        const names = features.map(f => f.properties.name);
        return [...new Set(names)];
    };
  return (
    <main className="min-h-screen bg-slate-50">
     
      <HeaderVideo/>
      <AboutUs />
      <div className="flex items-center justify-center w-full pt-5 pb-5">
        <img
          src="https://www.vu.city/hubfs/Group%20503.svg"
          alt="Group 503"
          loading="lazy"
          width="111"
          height="113"
          className="max-w-full h-auto"
        />
      </div>
       <ThreeDVideo />
      <Services />
      <MapWithSidebar geojson={geojson} />
      <FAQSection/>
      <section className=" bg-green-50 rounded-2xl p-10 text-center">
        <h2 className="text-3xl font-roboto-bold text-gray-900 mb-4" style={{ fontFamily: 'RobotoBold' }}>
          Хөдөө аж ахуйг дижитал эринд хүргэе!
        </h2>
        <p className="text-gray-700 font-roboto-regular max-w-2xl mx-auto mb-6" style={{ fontFamily: 'RobotoRegular' }}>
          AgroCity системийн тусламжтайгаар та газрын төлөвлөлт, усалгааны менежмент,
          ургацын таамаглалыг бүрэн автомат хэлбэрээр удирдах боломжтой.
        </p>
      </section>
    </main>
  );
}





