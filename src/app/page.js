

'use client';

import TwoDVideo from '@/components/common/TwoDVideo';
// import CategoriesGrid from '@/components/CategoriesGrid';
import ThreeDVideo from '@/components/common/ThreeDVideo';
import AboutUs from '@/components/common/AboutUs';
import Services from '@/components/common/Services';
import FeedbackSection from '@/components/common/Feedback';

export default function Home() {
  return (
    <main className="min-h-screen ">
      <ThreeDVideo />
      {/* <TwoDVideo /> */}
      <AboutUs />
      <Services />
      <FeedbackSection />
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





