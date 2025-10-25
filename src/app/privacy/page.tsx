'use client';

import React from 'react';
import { Shield, Lock, Mail, Info } from 'lucide-react';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-800 py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-8 md:p-12">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <Shield className="w-8 h-8 text-green-950" />
          <h1 className="text-3xl font-bold text-green-950">Нууцлалын бодлого</h1>
        </div>

        <p className="text-gray-600 mb-8">
          Энэхүү нууцлалын бодлого нь <strong>Ихэр виртуал хотын платформ</strong> 
          өгөгдлийг хэрхэн цуглуулах, ашиглах, хадгалах, хамгаалдаг талаар 
          тодорхойлно. Бид таны мэдээллийн аюулгүй байдал, хувийн нууцлалыг хамгаалахыг чухалчилдаг.
        </p>
        {/* Section 1 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2 mb-2">
            <Info className="w-5 h-5 text-[#1d3b86]" /> 1. Цуглуулж болох мэдээлэл
          </h2>
          <p className="text-gray-600">
            Бид дараах төрлийн мэдээллийг цуглуулж болно:
          </p>
          <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
            <li>Нэр, имэйл хаяг, утасны дугаар</li>
            <li>Байгууллагын нэр болон салбарын мэдээлэл</li>
            <li>AgroCity платформыг ашиглах үеийн хэрэглээний өгөгдөл</li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2 mb-2">
            <Lock className="w-5 h-5 text-[#1d3b86]" /> 2. Мэдээллийг ашиглах зорилго
          </h2>
          <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
            <li>Үйлчилгээ сайжруулах, хэрэглэгчийн туршлагыг нэмэгдүүлэх</li>
            <li>Шинэ мэдээ, мэдээлэл, санал болгох зорилгоор холбогдох</li>
            <li>Хууль эрх зүйн шаардлагын хүрээнд мэдээлэл ашиглах</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2 mb-2">
            <Shield className="w-5 h-5 text-[#1d3b86]" /> 3. Мэдээллийн аюулгүй байдал
          </h2>
          <p className="text-gray-600">
            Бид хэрэглэгчдийн хувийн мэдээллийг алдагдах, зөрчигдөх, зөвшөөрөлгүй нэвтрэхээс хамгаалахын тулд зохих хамгаалалтын арга хэмжээ авдаг.
          </p>
        </section>

        
       
      </div>
    </div>
  );
};

export default PrivacyPage;
