import { useState } from "react";
import { Send } from "lucide-react";

export default function FeedbackSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Feedback sent:", formData);
    // энд backend API руу илгээж болно
  };

  return (
    <section className="bg-green-50 py-16 px-6 md:px-20">
      <div className="max-w-3xl mx-auto text-center">
        <h2
          className="text-3xl md:text-4xl font-bold text-lime-700 mb-4"
          style={{ fontFamily: "RobotoBold" }}
        >
          Санал хүсэлт илгээх
        </h2>
        <p className="text-gray-700 mb-10" style={{ fontFamily: "RobotoRegular" }}>
          Таны санал AgroCity-ийн хөгжлийг илүү төгөлдөр болгоход чухал ач холбогдолтой.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          <div>
            <label className="block text-lime-700 mb-2 font-semibold">Нэр</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-lime-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-700"
              placeholder="Таны нэр"
            />
          </div>

          <div>
            <label className="block text-lime-700 mb-2 font-semibold">Имэйл</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-lime-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-700"
              placeholder="name@email.com"
            />
          </div>

          <div>
            <label className="block text-lime-700 mb-2 font-semibold">Санал</label>
            <textarea
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-lime-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-700"
              placeholder="Санал хүсэлтээ энд бичнэ үү..."
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="flex items-center gap-2 bg-lime-700 text-white px-6 py-3 rounded-lg hover:bg-lime-800 transition-colors"
              style={{ fontFamily: "RobotoBold" }}
            >
              <Send size={18} />
              Илгээх
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
