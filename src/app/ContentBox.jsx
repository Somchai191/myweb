import About from "./contentMain/about";
import Educational from "./contentMain/Educational";
import Skills from "./contentMain/Skills";
import Contact from "./contentMain/Contact";

export default function ContentBox({ activeTab, isScrolled }) {
  return (
    <div className="w-full h-150 bg-white rounded-[10px] shadow-lg mt-5 p-5 transition-opacity duration-500">
      {activeTab === "About" && <About isScrolled={isScrolled} />}
      {activeTab === "Educational" && <Educational />}
      {activeTab === "Skills" && <Skills />}
      {activeTab === "Contact" && <Contact />}
    </div>
  );
}
