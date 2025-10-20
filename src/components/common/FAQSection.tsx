import { useState } from "react";
import { ChevronDown, Send } from "lucide-react";

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
  imageSrc = "/poster.jpg",
  imageAlt = "AgroCity төсөөлөл",
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [openIndex, setOpenIndex] = useState<number | null>(0); // эхлээд 1-р нээлттэй байлгах бол 0 эсвэл null
  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Feedback sent:", formData);
    // энд backend API руу илгээж болно
  };
  return (
    // <section className="max-w-6xl mx-auto px-4 py-12">
    <section className="bg-gradient-to-b from-white to-green-50 py-16 px-50 md:px-50">
      <h2 className="text-2xl md:text-3xl  text-slate-800 mb-6 text-center upercase">
        Санал хүсэлт
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mt-10">
        {/* LEFT: FAQ list */}
        <div>
          <span > Түгээмэл асуулт хариулт</span>
          <div className="space-y-2 mt-8">
            {faqs.map((f, i) => {
              const open = openIndex === i;
              return (
                <div
                  key={i}
                  className=" rounded-md border border-transparent hover:border-lime-700 transition"
                >
                  <button
                    type="button"
                    aria-expanded={open}
                    onClick={() => setOpenIndex(open ? null : i)}
                    className="w-full flex items-center justify-between px-4 py-4 text-left"
                  >
                    <span className="text-green-950 font-medium">{f.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-green-950 transform transition-transform duration-200 ${open ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  <div
                    className={`px-4 overflow-hidden transition-[max-height,opacity] duration-200 ${open ? "max-h-40 opacity-100 py-2" : "max-h-0 opacity-0"
                      }`}
                  >
                    <p className="text-green-950 text-sm leading-relaxed">{f.a}</p>
                  </div>

                  {/* bottom divider */}
                  <div className="border-t border-slate-100" />
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT: Illustration / image */}
        <div className="w-full ml-10">
          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            <div className="w-full">
              <label className="block text-green-950 mb-2 ">Нэр</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-lime-950 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-700"
                placeholder="Таны нэр"
              />
            </div>

            <div className="w-full">
              <label className="block text-green-950 mb-2 ">Имэйл</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-lime-950 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-700"
                placeholder="name@email.com"
              />
            </div>

            <div className="w-full">
              <label className="block text-green-950 mb-2 ">Санал</label>
              <textarea
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-lime-950 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-700"
                placeholder="Санал хүсэлтээ энд бичнэ үү..."
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="flex items-center gap-2 bg-lime-700 text-white px-6 py-3 rounded-lg hover:bg-lime-800 transition-colors px-10"

              >
                <Send size={18} />
                Илгээх
              </button>
            </div>
          </form>
          {/* <div className="w-full max-w-lg bg-slate-50 rounded-lg overflow-hidden shadow-sm"> */}
          {/* <img
              src={imageSrc}
              alt={imageAlt}
              className=" object-cover"
              loading="lazy"
            /> */}
          {/* <div className="px-4 py-3">
              <p className="text-sm text-slate-600">
                АгроСити төсөл — танилцуулгын зураг. (3D загвар, үйлчилгээ, газрын зураг ба холбогдох мэдээлэл энд байрлана.)
              </p>
            </div> */}
          {/* </div> */}
        </div>
      </div>
    </section>
  );
}
