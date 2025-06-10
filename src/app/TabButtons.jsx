export default function TabButtons({ activeTab, setActiveTab }) {
  const sections = [
    { title: "About", desc: "ประวัติส่วนตัว" },
    { title: "Educational", desc: "ประวัติการศึกษา" },
    { title: "Skills", desc: "ทักษะ" },
    { title: "Contact", desc: "ช่องทางติดต่อ" },
  ];

  return (
    <div className="flex gap-4 mt-8 transition-transform duration-1500 ease-out translate-x-0">
      {sections.map((item, index) => (
        <button
          key={index}
          className={`w-60 h-20 rounded-[10px] shadow-md transition-all duration-300 transform hover:scale-105 ${
            activeTab === item.title ? "bg-[#ff5e62] text-white" : "bg-white"
          }`}
          onClick={() => setActiveTab(item.title)}
        >
          <h1 className="text-2xl font-bold text-center mt-3 font-mali">{item.title}</h1>
          <p className="mt-1 text-center font-mali">{item.desc}</p>
        </button>
      ))}
    </div>
  );
}
