

'use client'

import { useState } from "react";
import { ChevronDown, Send } from "lucide-react";

const defaultFaqs = [
  {
    q: "1. Агро-Сити Эдийн засгийн тусгай бүсийн платформ гэж юу вэ?",
    a: "“Агро-Сити” тусгай бүсийн орон зайн мэдээлэлд суурилсан төлөвлөлт, удирдлагын ухаалаг платформ тусгай бүсийн бүтээн байгуулалт, төлөвлөлт, хүн ам зүйн мэдээллийг нэгтгэсэн цогц виртуал систем юм.",
  },
  {
    q: "2.Энэ программ руу яаж нэвтрэх вэ?",
    a: "Программын веб хаяг эсвэл гар утасны аппликейшнийг ашиглан хэрэглэгч бүр өөрийн эрх үүсгэн нэвтэрч орно. Зарим мэдээлэлд нэвтрэхэд зөвшөөрөл шаардлагатай байж болно.",
  },
  {
    q: "3. Программыг ашиглахад ямар нэгэн төлбөртэй юу?",
    a: "Иргэдэд зориулсан үндсэн мэдээллүүдийг төлбөргүй ашиглах боломжтой.",
  },
  {
    q: "4. Системийг ашигласнаар ямар үр ашигтай вэ?",
    a: "Тариаланч ургац, усалгааг оновчтой болгоно. Хөрөнгө оруулагчид эрсдэлээ бууруулж, шийдвэрээ өгөгдөлд тулгуурлан гаргана.",
  },
  {
    q: "5. Манай хороолол / гудамж / байр газрын зураг дээр харагдах уу?",
    a: "Агро-сити эдийн засгийн тусгай бүсийн гудамж, байр, хорооллын мэдээлэл 2D болон 3D хэлбэрээр зураглалд багтсан.",
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
                  <span className="text-green-950 font-medium text-base sm:text-md">
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
        <div className="w-full max-w-lg mx-auto md:mx-0 my-5 bg-slate-50 rounded-lg overflow-hidden shadow-sm ">
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