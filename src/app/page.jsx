"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import ProfileImage from "./ProfileImage";
import TabButtons from "./TabButtons";
import ContentBox from "./ContentBox";
import WorkCards from "./WorkCards"; 
import Footer from "./footer";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("About"); // ค่าเริ่มต้นเป็น About

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="relative flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col sm:flex-row items-center gap-8">
          {/* รูปโปรไฟล์ */}
          <ProfileImage isVisible={isVisible} />

          {/* ข้อความโปรไฟล์ */}
          <div
            className={`flex-1 p-6 bg-white rounded-[10px] shadow-lg transition-transform duration-1500 ease-out ${
              isVisible ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <h1 className="text-4xl font-bold font-mali">
              MR.Somchai Manhoeng
            </h1>
            <p className="text-gray-600 mt-2 font-mali">
              สวัสดีครับ กระผมนายสมชาย หมั่นเฮิง
            </p>
          </div>
        </main>

        {/* ปุ่ม 4 ปุ่ม */}
        <TabButtons activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* กล่องเนื้อหาที่เปลี่ยนตามปุ่ม */}
        <ContentBox activeTab={activeTab} isScrolled={isScrolled} />

        <h1 className="text-5xl font-bold mt-3 font-mali">Workmanship</h1>

        {/* ใช้ WorkCards component */}
        <WorkCards isScrolled={isScrolled} />

        {/* ตัวการ์ตูนขยับไปมาที่มุมขวาล่าง */}
        <div className="fixed bottom-0 right-0 w-30 h-30 bg-transparent animate-bounce">
          <Image
            src="/ani.png" // เปลี่ยนเป็น path ของตัวการ์ตูนจริง
            alt="Cartoon Character"
            width={96}
            height={96}
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Footer แยกออกมานอก container หลัก */}
      <footer className="w-full bg-gray-100">
        <Footer />
      </footer>
    </>
  );
}

