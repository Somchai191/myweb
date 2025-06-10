import {  SiTailwindcss,SiPostman,SiPhp, SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs, SiJquery, SiCplusplus, SiBootstrap, SiPython, SiDjango, SiFlutter, SiFigma, SiMysql, SiGithub, SiFirebase, SiAdobe, SiRedis, SiMongodb, SiDart } from "react-icons/si";
import { FaCode,FaReact } from "react-icons/fa";  // ใช้ไอคอน Code แทน Visual Studio Code

export default function Skills() {
  return (
    <div className="flex flex-col mt-4 items-center h-full w-full bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 font-mali">Skills</h2>
      
      <div className="bg-white w-250 rounded-xl flex items-center justify-center flex-wrap gap-6 px-6 py-4 text-xl font-semibold">
        <div className="flex items-center text-gray-700">
          <SiPhp className="mr-4 text-3xl text-purple-600" />
          <span>PHP</span>
        </div>
        <div className="flex items-center text-gray-700">
          <SiHtml5 className="mr-4 text-3xl text-orange-500" />
          <span>HTML5</span>
        </div>
        <div className="flex items-center text-gray-700">
          <SiCss3 className="mr-4 text-3xl text-blue-500" />
          <span>CSS3</span>
        </div>
        <div className="flex items-center text-gray-700">
          <SiReact className="mr-4 text-3xl text-cyan-500" />
          <span>React</span>
        </div>
        <div className="flex items-center text-gray-700">
          <SiNodedotjs className="mr-4 text-3xl text-green-600" />
          <span>Node.js</span>
        </div>
        <div className="flex items-center text-gray-700">
          <SiNodedotjs className="mr-4 text-3xl text-green-600" />
          <span>Next.js</span>
        </div>
        <div className="flex items-center text-gray-700">
          <SiJquery className="mr-4 text-3xl text-blue-500" />
          <span>jQuery</span>
        </div>
        <div className="flex items-center text-gray-700">
          <SiCplusplus className="mr-4 text-3xl text-blue-600" />
          <span>C++</span>
        </div>
        <div className="flex items-center text-gray-700">
          <SiBootstrap className="mr-4 text-3xl text-purple-600" />
          <span>Bootstrap</span>
        </div>
        <div className="flex items-center text-gray-700">
          <SiPython className="mr-4 text-3xl text-blue-400" />
          <span>Python</span>
        </div>
        <div className="flex items-center text-gray-700">
          <SiDjango className="mr-4 text-3xl text-green-500" />
          <span>Django</span>
        </div>
        
        <div className="flex items-center text-gray-700">
          <SiFlutter className="mr-4 text-3xl text-blue-400" />
          <span>Flutter</span>
        </div>
        <div className="flex items-center text-gray-700">
          <SiFigma className="mr-4 text-3xl text-pink-500" />
          <span>Figma</span>
        </div>
        <div className="flex items-center text-gray-700">
          <SiMysql className="mr-4 text-3xl text-blue-600" />
          <span>MySQL</span>
        </div>
        <div className="flex items-center text-gray-700">
          <SiGithub className="mr-4 text-3xl text-black" />
          <span>GitHub</span>
        </div>
        <div className="flex items-center text-gray-700">
          <SiFirebase className="mr-4 text-3xl text-yellow-500" />
          <span>Firebase</span>
        </div>
        <div className="flex items-center text-gray-700">
          <SiAdobe className="mr-4 text-3xl text-red-500" />
          <span>Adobe Photoshop</span>
        </div>
        <div className="flex items-center text-gray-700">
          <SiAdobe className="mr-4 text-3xl text-red-600" />
          <span>Premiere Pro</span>
        </div>
        <div className="flex items-center text-gray-700">
          <SiRedis className="mr-4 text-3xl text-red-700" />
          <span>Redis</span>
        </div>
        <div className="flex items-center text-gray-700">
          <SiMongodb className="mr-4 text-3xl text-green-700" />
          <span>MongoDB</span>
        </div>
        <div className="flex items-center text-gray-700">
          <SiDart className="mr-4 text-3xl text-blue-700" />
          <span>Dart</span>
        </div>
        <div className="flex items-center text-gray-700">
          <SiJavascript className="mr-4 text-3xl text-yellow-400" />
          <span>JavaScript</span>
        </div>
        <div className="flex items-center text-gray-700">
          <FaCode className="mr-4 text-3xl text-blue-800" />
          <span>VS Code</span>
        </div>
        <div className="flex items-center text-gray-700">
          <SiPostman className="mr-4 text-3xl text-orange-500" />
          <span>Postman</span>
        </div>
        <div className="flex items-center text-gray-700">
          <SiTailwindcss className="mr-4 text-3xl text-teal-500" />
          <span>TailwindCSS</span>
        </div>
        
      </div>
    </div>
  );
}
