import Image from "next/image";

export default function About({ isScrolled }) {
  return (
    <div className="flex flex-col sm:flex-row bg-white p-6 rounded-lg shadow-lg h-full w-full">
      {/* รูปภาพตรงกลางแนวนอนในมือถือ */}
      <div
        className={`w-[240px] h-[240px] sm:w-[500px] sm:h-[500px] 
                    flex-shrink-0 overflow-hidden shadow-md border-2 border-gray-300 
                    transform transition-transform duration-[700ms] ease-out 
                    mx-auto sm:mx-0
                    ${isScrolled ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}
      >
        <Image
          src="/56924.jpg"
          alt="Profile Image"
          width={500}
          height={500}
          className="object-cover w-full h-full"
        />
      </div>

      {/* ข้อความ */}
      <div className="sm:ml-6 mt-4 sm:mt-20 text-center sm:text-left flex-1">
        <h1 className="text-4xl font-bold font-mali">ประวัติส่วนตัว</h1>
        <br />
        <h1 className="text-2xl font-mali">ชื่อ-นามสกุล: นายสมชาย หมั่นเฮิง อายุ 22</h1>
        <br />
        <h2 className="text-2xl font-mali">งานอดิเรก: เล่นกีตาร์ ร้องเพลง เล่นฟุตบอล</h2>
        <br />
        <h2 className="text-2xl font-mali">คติประจำใจ: ความพยายามอยู่ที่ไหน ความสำเร็จอยู่ที่นั้น</h2>
        <p className="text-gray-600 mt-2 font-mali">
          ผมชอบดูหนังแนว Sci-Fi, Comedy และแนว Adventure ชอบฟังเพลงสบายๆ บางทีก็เพลงเก่าๆ เลย
          ชอบเที่ยวแบบธรรมชาติมากกว่าการเที่ยวในเมือง ชอบสีเขียวของต้นไม้ทำให้รู้สึกผ่อนคลายมาก
          ชอบการขับรถเล่น ร้องเพลงชิวๆ
        </p>
      </div>
    </div>
  );
}
