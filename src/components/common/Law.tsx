

// 'use client';
// import React, { useState } from 'react';

// type Card = {
//   id: string;
//   title: string;
//   short: string;
//   detail: string;
//   icon?: React.ReactNode;
// };

// const ICON_LOCK = (
//   <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden>
//     <rect x="3" y="11" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
//     <path d="M7 11V8a5 5 0 0110 0v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//   </svg>
// );

// const ICON_GAVEL = (
//   <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden>
//     <path d="M14 9l7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//     <path d="M3 21l7-7 4 4-7 7-4-4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//   </svg>
// );

// const ICON_GROUPS = (
//   <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden>
//     <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.5"/>
//     <path d="M17 11c0-1.657-1.343-3-3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
//     <path d="M2 20c2-3 6-3 8-3s6 0 8 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//   </svg>
// );

// const ICON_DOC = (
//   <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden>
//     <path d="M7 3h8l4 4v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="1.5"/>
//     <path d="M12 3v5h5" stroke="currentColor" strokeWidth="1.5"/>
//   </svg>
// );

// export default function Law() {
//   const [openId, setOpenId] = useState<string | null>(null);

//   const cards: Card[] = [
//     {
//       id: 'privacy',
//       title: 'Мэдээллийн аюулгүй байдал',
//       short: 'Хэрэглэгчийн өгөгдлийг хэрхэн цуглуулж, хадгалж, хамгаалж байгааг товч.',
//       detail:
//         'AgroCity хэрэглэгчийн хувийн болон талбарын өгөгдлийг өндөр түвшний аюулгүй байдлаар хамгаалж байна. Бид өгөгдлийг шифрлэдэг, хандалтын логыг хадгалдаг ба зөвхөн заасан зорилгоор ашиглана. Дэлгэрэнгүй: серверийн хамгаалалт, бэкап бодлого, GDPR төст зарчимууд болон хэрэглэгчийн эрхүүд.',
//       icon: ICON_LOCK,
//     },
//     {
//       id: 'agri-law',
//       title: 'Хөдөө аж ахуйн хууль',
//       short: 'Газрын ашиглалтыг зохицуулсан хууль эрх зүйн үндэс.',
//       detail:
//         'Систем нь Монгол Улсын Газрын болон Хөдөө аж ахуйн холбогдох хууль, дүрэм журмыг баримтлан боловсруулагдсан. Талбарын зураглал, газрын бүртгэл, газар эзэмшлийн мэдээллийг зөвшөөрөлтэй эх сурвалжаас хүлээн авна. Дэлгэрэнгүй: кадастрын дата, зөвшөөрлийн процесс, хэрэглэгчийн үүрэг, хөрөнгийн маргааны гаргалгаа.',
//       icon: ICON_GAVEL,
//     },
//     {
//       id: 'partners',
//       title: 'Түнш байгууллагууд',
//       short: 'Төрийн болон олон улсын байгууллагуудтай хамтын ажиллагаа.',
//       detail:
//         'AgroCity нь салбарын яам, кадастрын алба болон судалгаа хийх байгууллагуудтай хамтран ажиллана. Түнш байгууллагуудтай байгуулсан меморандум, дата хуваалцах протоколын зарчимтайгаар ажиллана.',
//       icon: ICON_GROUPS,
//     },
//     {
//       id: 'terms',
//       title: 'Лиценз ба ашиглах нөхцөл',
//       short: 'Системийн оюуны өмч, хэрэглэгчийн эрх, хариуцлагын талаар.',
//       detail:
//         'AgroCity системийн код ба UI нь тус компанийн өмч. Хэрэглэгч үйлчилгээний нөхцөл, өгөгдөл ашиглах зөвшөөрлийг хүлээн зөвшөөрснөөр үйлчилгээг ашиглана. Дэлгэрэнгүй: IP, зөвшөөрөл, disclaimer болон холбоо барих мэдээлэл.',
//       icon: ICON_DOC,
//     },
//   ];

//   return (
//     <section id="law" className="py-16 px-6 md:px-12 bg-gradient-to-b from-white to-[#F3FFF0]">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-10">
//           <h2 className="text-3xl md:text-4xl  text-[#0F5132]">Хууль эрх зүй</h2>
//           <p className="mt-3 text-gray-700 max-w-2xl mx-auto" >
//             AgroCity төслийн эрх зүйн үндэс, хэрэглэгчийн мэдээллийн аюулгүй байдал, түншлэл, лицензийн
//             талаарх товч мэдээлэл.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {cards.map((c) => (
//             <article
//               key={c.id}
//               className="relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-transform transform hover:-translate-y-1"
//             >
//               <div className="flex items-start gap-4">
//                 <div className="text-lime-800">{c.icon}</div>
//                 <div className="flex-1">
//                   <h3 className="text-xl font-semibold text-[#0F5132]">{c.title}</h3>
//                   <p className="mt-2 text-gray-700">{c.short}</p>
//                 </div>
//               </div>

//               <div className="mt-6 flex items-center justify-between">
//                 <button
//                   onClick={() => setOpenId(c.id)}
//                   className="text-lime-700 font-semibold hover:underline"
//                 >
//                   Дэлгэрэнгүй →
//                 </button>

//                 <a
//                   href="#"
//                   className="text-sm text-gray-500"
//                   onClick={(e) => {
//                     e.preventDefault();
//                     // жишээ: PDF татах, эсвэл дотоод policy хуудас руу
//                     alert('Бодит системд эндээс PDF эсвэл policy хуудас руу дамжина.');
//                   }}
//                 >
//                   Бодлого үзэх
//                 </a>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>

//       {/* Modal */}
//       {openId && (
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
//           role="dialog"
//           aria-modal="true"
//         >
//           <div className="bg-white rounded-2xl max-w-3xl w-full p-6 shadow-xl">
//             <div className="flex items-start justify-between gap-4">
//               <h3 className="text-2xl font-semibold text-[#0F5132]">
//                 {cards.find((c) => c.id === openId)?.title}
//               </h3>
//               <button
//                 onClick={() => setOpenId(null)}
//                 className="text-gray-500 hover:text-gray-700"
//                 aria-label="Close"
//               >
//                 ✕
//               </button>
//             </div>

//             <div className="mt-4 text-gray-700">
//               <p>{cards.find((c) => c.id === openId)?.detail}</p>

//               <div className="mt-6 flex gap-3">
//                 <a
//                   className="inline-block px-4 py-2 rounded-md border border-lime-700 text-lime-700 font-semibold hover:bg-lime-50"
//                   href="/policies/privacy.pdf"
//                 >
//                   Privacy PDF
//                 </a>
//                 <a
//                   className="inline-block px-4 py-2 rounded-md bg-lime-700 text-white font-semibold hover:opacity-90"
//                   href="/contact"
//                 >
//                   Холбоо барих
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }



// 'use client';
// import React, { useState } from 'react';

// type Card = {
//   id: string;
//   title: string;
//   short: string;
//   detail: string;
//   icon?: React.ReactNode;
// };

// const ICON_STYLE = "w-10 h-10 text-lime-800";

// const ICON_LOCK = (
//   <div className="p-3 bg-lime-100 rounded-full">
//     <svg className={ICON_STYLE} viewBox="0 0 24 24" fill="none" aria-hidden>
//       <rect x="3" y="11" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
//       <path d="M7 11V8a5 5 0 0110 0v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//     </svg>
//   </div>
// );

// const ICON_GAVEL = (
//   <div className="p-3 bg-lime-100 rounded-full">
//     <svg className={ICON_STYLE} viewBox="0 0 24 24" fill="none" aria-hidden>
//       <path d="M14 9l7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//       <path d="M3 21l7-7 4 4-7 7-4-4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//     </svg>
//   </div>
// );

// const ICON_GROUPS = (
//   <div className="p-3 bg-lime-100 rounded-full">
//     <svg className={ICON_STYLE} viewBox="0 0 24 24" fill="none" aria-hidden>
//       <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.5"/>
//       <path d="M17 11c0-1.657-1.343-3-3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
//       <path d="M2 20c2-3 6-3 8-3s6 0 8 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//     </svg>
//   </div>
// );

// const ICON_DOC = (
//   <div className="p-3 bg-lime-100 rounded-full">
//     <svg className={ICON_STYLE} viewBox="0 0 24 24" fill="none" aria-hidden>
//       <path d="M7 3h8l4 4v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="1.5"/>
//       <path d="M12 3v5h5" stroke="currentColor" strokeWidth="1.5"/>
//     </svg>
//   </div>
// );

// export default function Law() {
//   const [openId, setOpenId] = useState<string | null>(null);

//   const cards: Card[] = [
//     {
//       id: 'privacy',
//       title: 'Мэдээллийн аюулгүй байдал',
//       short: 'Хэрэглэгчийн өгөгдөл хамгаалах бодлого, шифрлэлтийн арга.',
//       detail:
//         'AgroCity хэрэглэгчийн өгөгдлийг өндөр түвшинд хамгаалдаг. Шифрлэлтийн технологи, эрхийн хандалт, бэкап, GDPR төст хамгаалалт хэрэглэгддэг.',
//       icon: ICON_LOCK,
//     },
//     {
//       id: 'agri-law',
//       title: 'Хөдөө аж ахуйн хууль',
//       short: 'Газрын ашиглалт ба бүртгэлийн эрх зүйн үндэс.',
//       detail:
//         'AgroCity систем нь Монгол Улсын Газрын болон Хөдөө аж ахуйн холбогдох хуулиудыг баримталдаг. Хэрэглэгч зөвшөөрөлтэй эх сурвалжийн дата ашиглана.',
//       icon: ICON_GAVEL,
//     },
//     {
//       id: 'partners',
//       title: 'Түнш байгууллагууд',
//       short: 'Төрийн болон олон улсын байгууллагуудтай хамтын ажиллагаа.',
//       detail:
//         'AgroCity нь төр, хувийн хэвшил, судалгааны байгууллагуудтай дата хуваалцах, систем интеграцийн хүрээнд хамтран ажилладаг.',
//       icon: ICON_GROUPS,
//     },
//     {
//       id: 'terms',
//       title: 'Лиценз ба ашиглах нөхцөл',
//       short: 'Оюуны өмч, хэрэглэгчийн эрх ба хариуцлагын талаар.',
//       detail:
//         'Системийн код ба UI нь компанийн өмч. Хэрэглэгч үйлчилгээний нөхцөлийг хүлээн зөвшөөрснөөр ашиглана.',
//       icon: ICON_DOC,
//     },
//   ];

//   return (
//     <section id="law" className="py-20 px-6 md:px-12 bg-gradient-to-b from-[#f9fff9] via-[#f3fdf5] to-[#ebfaef]">
//       <div className="max-w-6xl mx-auto text-center">
//         <h2 className="text-4xl md:text-5xl  text-[#0F5132]">
//           Хууль эрх зүйн үндэс
//         </h2>
//         <p className="mt-4 text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed">
//           AgroCity төслийн эрх зүйн хүрээ, мэдээллийн аюулгүй байдал, хамтын ажиллагаа, лицензийн талаарх мэдээлэл.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14 max-w-6xl mx-auto">
//         {cards.map((c) => (
//           <article
//             key={c.id}
//             className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-lime-100 
//                        shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
//           >
//             <div className="flex flex-col items-start gap-4">
//               {c.icon}
//               <h3 className="text-2xl font-semibold text-[#0F5132]">{c.title}</h3>
//               <p className="text-gray-700">{c.short}</p>
//             </div>

//             <div className="mt-6 flex items-center justify-between">
//               <button
//                 onClick={() => setOpenId(c.id)}
//                 className="text-lime-800 font-semibold hover:underline"
//               >
//                 Дэлгэрэнгүй →
//               </button>

//               <button
//                 onClick={() => alert('PDF татах линк энд байна')}
//                 className="text-sm text-gray-500 hover:text-lime-700"
//               >
//                 Бодлого үзэх
//               </button>
//             </div>
//           </article>
//         ))}
//       </div>

//       {/* Modal */}
//       {openId && (
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
//           role="dialog"
//           aria-modal="true"
//         >
//           <div
//             className="bg-white rounded-2xl max-w-2xl w-full p-8 shadow-2xl transform transition-transform duration-200 ease-out"
//             // small entrance visual using CSS (scale up)
//             style={{ transform: 'scale(1)' }}
//           >
//             <div className="flex items-start justify-between">
//               <h3 className="text-2xl font-semibold text-[#0F5132]">
//                 {cards.find((c) => c.id === openId)?.title}
//               </h3>
//               <button
//                 onClick={() => setOpenId(null)}
//                 className="text-gray-500 hover:text-gray-700 text-2xl"
//                 aria-label="Close"
//               >
//                 ✕
//               </button>
//             </div>

//             <p className="mt-4 text-gray-700 leading-relaxed">
//               {cards.find((c) => c.id === openId)?.detail}
//             </p>

//             <div className="mt-8 flex gap-3 justify-end">
//               <a
//                 href="/policies/privacy.pdf"
//                 className="px-5 py-2 rounded-md bg-white border border-lime-700 text-lime-700 font-semibold hover:bg-lime-50"
//               >
//                 PDF үзэх
//               </a>
//               <a
//                 href="/contact"
//                 className="px-5 py-2 rounded-md bg-lime-700 text-white font-semibold hover:bg-lime-800"
//               >
//                 Холбоо барих
//               </a>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }


"use client";

import { Check, X } from "lucide-react";

const PROGRAMS = [
  { name: "Photoshop", vendor: "Adobe", licenseKey: "XXXX-XXXX-AAAA", activated: true, expiresAt: "2026-03-01" },
  { name: "Office 365", vendor: "Microsoft", licenseKey: "MS-1234-5678", activated: false, expiresAt: "2025-11-20" },
  { name: "JetBrains Rider", vendor: "JetBrains", licenseKey: "JB-2025-9999", activated: true, expiresAt: "2027-01-10" },
  { name: "Figma", vendor: "Figma", licenseKey: "FG-TRIAL-01", activated: false, expiresAt: "2024-12-31" },
];

export default function Law() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Лицензийн статусын жагсаалт</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROGRAMS.map((p) => (
          <div key={p.licenseKey} className="border rounded-lg shadow p-4 hover:shadow-lg transition">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-semibold">{p.name}</h2>
              {p.activated ? (
                <span className="flex items-center gap-1 text-green-700 font-medium">
                  <Check className="w-4 h-4" /> Идэвхжсэн
                </span>
              ) : (
                <span className="flex items-center gap-1 text-red-600 font-medium">
                  <X className="w-4 h-4" /> Идэвхжээгүй
                </span>
              )}
            </div>
            <div className="text-sm text-slate-600">Vendor: {p.vendor}</div>
            <div className="text-sm text-slate-600 truncate">License: {p.licenseKey}</div>
            <div className="text-sm text-slate-600">Хугацаа дуусах: {p.expiresAt}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
