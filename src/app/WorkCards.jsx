// WorkCards.js
import React, { useState } from "react";
import WorkCardItem from "./card/card1";
import Modal from "./card/modal"; // ปรับ path ถ้าอยู่ในโฟลเดอร์อื่น

export default function WorkCards({ isScrolled }) {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex flex-col gap-8 mt-8">
      {/* แถวแรก */}
      <div
        className={`flex gap-8 transition-transform duration-[2000ms] ease-out ${
          isScrolled ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <WorkCardItem
          imageSrc="/bua.png"
          title="Baanbuadoi ระบบซื้อของและจองห้องพักบ้านบัวดอยโฮมสเตย์ "
          detal="ที่พัฒนาให้กับกิจการบัวดอยสมุนไพร โดยใช้ภาษา php, javaScrip, jquery, bootstrap, css, mysql"
          link="https://baanbuadoi.com/index.php"
        />
        <WorkCardItem
          imageSrc="/png2.png"
          title="Gacha ระบบสุ่มตุ๊กตาลาบูบู๊"
          detal="เป็นระบบสุ่มตุ๊กตาและเติมเหรียญ พัฒนาโดยใช้ react, node.js, tailwindcss"
          bounce
          link="https://javascrip101.vercel.app/"
        />
        <WorkCardItem
          imageSrc="/png3.png"
          title="3D Game เกมส์การเรียนรู้"
          detal="พัฒนาขึ้นช่วงฝึกงานสหกิจศึกษาพัฒนาโดยใช้ unity, c#, node.js, mongodb"
          link="https://baanbuadoi.com/Game101/"
        />
      </div>

      {/* แถวที่สอง */}
      <div
        className={`flex gap-8 transition-transform duration-[1500ms] ease-out ${
          isScrolled ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <WorkCardItem
          imageSrc="/png4.png"
          title="My Web เว็บส่วนตัวสำหรับแสดงคุณสมบัติความสามารถที่มี"
          detal="เป็นเว็บไซต์ที่พัฒนาขึ้นเพื่อ เป็นพื้นที่แสดงผลงานพัฒนาโดยใช้ next.js, tailwindcss"
          bounce
          link="#"
        />
        <WorkCardItem
          imageSrc="/logo.png"
          title="BNS บ้านในสวน"
          detal="เป็นเว็บไซต์ข่าวสารทั่วไปเกี่ยวกับวัฒนธรรมและผลไม้เมืองหนาว พัฒนาโดยใช้ html, css, bootstrap"
          link="https://new-buadoi.firebaseapp.com/index.html"
        />
        <WorkCardItem
          imageSrc="/png5.png"
          title="Certificate เกียรติบัตร"
          detal="เกียรติบัตรที่เคยได้รับ"
          bounce
          onClick={() => setModalOpen(true)}
        />
      </div>

      {isModalOpen && (
        <Modal
          title="Certificate เกียรติบัตร"
          images={["/c1.png", "/c2.png", "/c3.png"]} 
          onClose={() => setModalOpen(false)}
        />
      )}

    </div>
  );
}
