

'use client'

import { useState } from "react";
import { ChevronDown, Send } from "lucide-react";

const defaultFaqs = [
  {
    q: "Энэ вэб сайт ямар зорилготой вэ?",
    a: "Агро-Сити вэб нь төслийн мэдээлэл, дижитал ихэр (3D), үйлчилгээнүүд болон холбогдох түншүүдийг танилцуулах зорилготой.",
  },
  {
    q: "Төслийн 3D загвар вэб дээр хэрхэн харуулах вэ?",
    a: "3D загварыг тусдаа компонентээр (WebGL / three.js) ачаалж, тухайн хэсэгт зураг/холболт/йүрчилгээгээр холбосноор үзүүлнэ.",
  },
  {
    q: "Хэрэглэгчид төслийн мэдээллийг хэрхэн авахаар вэ?",
    a: "Хэрэглэгчид холбогдох хуудас (About, Services, Contact) болон FAQ-с шууд мэдээлэл авч, холбоо барих форм-ыг ашиглан асууж болно.",
  },
  {
    q: "Контентыг хэрхэн шинэчлэх вэ?",
    a: "Контентыг CMS (жишээ: Sanity, Strapi) эсвэл markdown/MDX ашиглан удирдана — админ хуудаснаас текст, зураг, 3D asset-уудыг солих боломжтой.",
  },
  {
    q: "Вэб сайтын хостинг, перформансын зөвлөмж?",
    a: "Статик хэсгүүдийг CDN дээр тавьж, 3D assets-ийг lazy load, зурагнуудыг optimized формат (WebP) ашиглахыг зөвлөнө.",
  },
];

export default function FAQSectionAgroCity({
  faqs = defaultFaqs,
  imageSrc = "/poster.jpg",
  imageAlt = "Агро-Сити төсөөлөл",
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Feedback sent:", formData);
  };

  return (
    <section className="bg-gradient-to-b from-white to-green-50 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl text-slate-800 mb-8 text-center uppercase">
        Түгээмэл асуулт хариулт
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start max-w-7xl mx-auto">
        {/* LEFT: FAQ list */}
        <div className="space-y-2 mt-2 sm:mt-4 md:mt-5">
          {faqs.map((f, i) => {
            const open = openIndex === i;
            return (
              <div
                key={i}
                className="rounded-md border border-transparent hover:border-lime-700 transition"
              >
                <button
                  type="button"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="w-full flex items-center justify-between px-4 py-3 sm:py-4 text-left"
                >
                  <span className="text-green-950 font-medium text-base sm:text-lg">
                    {f.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-green-950 transform transition-transform duration-200 ${open ? "rotate-180" : ""
                      }`}
                  />
                </button>

                <div
                  className={`px-4 overflow-hidden transition-[max-height,opacity] duration-200 ${open ? "max-h-40 opacity-100 py-2" : "max-h-0 opacity-0"
                    }`}
                >
                  <p className="text-green-950 text-sm sm:text-base leading-relaxed">
                    {f.a}
                  </p>
                </div>

                <div className="border-t border-slate-100" />
              </div>
            );
          })}
        </div>

        {/* RIGHT: Image / Illustration */}
        <div className="w-full max-w-lg mx-auto md:mx-0 bg-slate-50 rounded-lg overflow-hidden shadow-sm mt-6 md:mt-0">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-56 sm:h-72 md:h-80 object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}