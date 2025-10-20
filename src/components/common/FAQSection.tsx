import { useState } from "react";
import { ChevronDown } from "lucide-react";

/**
 * FAQSectionAgroCity
 * - left: FAQ list (minimal accordion)
 * - right: image / illustration for the AgroCity project
 *
 * Usage:
 * <FAQSectionAgroCity imageSrc="/images/agrocity-hero.jpg" imageAlt="AgroCity 3D загвар" />
 */

const defaultFaqs = [
  {
    q: "Энэ вэб сайт ямар зорилготой вэ?",
    a: "AgroCity вэб нь төслийн мэдээлэл, дижитал ихэр (3D), үйлчилгээнүүд болон холбогдох түншүүдийг танилцуулах зорилготой.",
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
  imageSrc = "/map.png",
  imageAlt = "AgroCity төсөөлөл",
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // эхлээд 1-р нээлттэй байлгах бол 0 эсвэл null
  return (
    // <section className="max-w-6xl mx-auto px-4 py-12">
     <section className="bg-gradient-to-b from-white to-green-50 py-16 px-50 md:px-50">
      <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-6 text-center upercase">
        Түгээмэл асуулт хариулт
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mt-10">
        {/* LEFT: FAQ list */}
        <div className="space-y-2">
          {faqs.map((f, i) => {
            const open = openIndex === i;
            return (
              <div
                key={i}
                className="bg-white rounded-md border border-transparent hover:border-slate-100 transition"
              >
                <button
                  type="button"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="w-full flex items-center justify-between px-4 py-4 text-left"
                >
                  <span className="text-slate-800 font-medium">{f.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 transform transition-transform duration-200 ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`px-4 overflow-hidden transition-[max-height,opacity] duration-200 ${
                    open ? "max-h-40 opacity-100 py-2" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-slate-600 text-sm leading-relaxed">{f.a}</p>
                </div>

                {/* bottom divider */}
                <div className="border-t border-slate-100" />
              </div>
            );
          })}
        </div>

        {/* RIGHT: Illustration / image */}
        <div className="flex items-center justify-center">
          <div className="w-full max-w-md bg-slate-50 rounded-lg overflow-hidden shadow-sm">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="h-100 object-fix"
              loading="lazy"
            />
            <div className="px-4 py-3">
              <p className="text-sm text-slate-600">
                АгроСити төсөл — танилцуулгын зураг. (3D загвар, үйлчилгээ, газрын зураг ба холбогдох мэдээлэл энд байрлана.)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
