export default function TabButtons({ activeTab, setActiveTab }) {
  const sections = [
    { title: "About", desc: "ประวัติส่วนตัว" },
    { title: "Educational", desc: "ประวัติการศึกษา" },
    { title: "Skills", desc: "ทักษะ" },
    { title: "Contact", desc: "ช่องทางติดต่อ" },
  ];

  return (
    <div
      className="
        mt-8 transition-transform duration-1500 ease-out translate-x-0
        grid grid-cols-2 gap-4
        sm:grid-cols-4 sm:flex sm:flex-row sm:gap-4
      "
    >
      {sections.map((item, index) => (
        <button
          key={index}
          className={`w-full sm:w-60 h-20 rounded-[10px] shadow-md transition-all duration-300 transform hover:scale-105
                      ${activeTab === item.title ? "bg-[#ff5e62] text-white" : "bg-white"}`}
          onClick={() => setActiveTab(item.title)}
        >
          <h1 className="text-lg sm:text-2xl font-bold text-center mt-2 font-mali">
            {item.title}
          </h1>
          <p className="text-sm sm:text-base mt-1 text-center font-mali">
            {item.desc}
          </p>
        </button>
      ))}
    </div>
  );
}
