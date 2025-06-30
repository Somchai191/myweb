import { BuildingLibraryIcon } from '@heroicons/react/24/solid'
import { AcademicCapIcon } from '@heroicons/react/24/solid'
import { BuildingOffice2Icon } from '@heroicons/react/24/solid'

export default function Educational() {
  return (
    <div className="flex flex-col sm:flex-row bg-white p-6 rounded-lg shadow-lg h-full w-full">
      {/* Left Side */}
      <div className="flex-1 bg-[#FFCCCC] p-4 m-2 rounded-lg flex flex-col items-center justify-center">
      
        <BuildingLibraryIcon className="h-16 w-16 text-white mb-4" />
        <div className="text-center">
          <h2 className="text-xl font-bold font-mali">มัธยมต้น</h2>
            <p>ชั้นมัธยมศึกษา ม.1-3</p>
            <p>สาย ศิลป์-คำนวน</p>
          <h2 className="text-xl font-bold mt-4 font-mali">โรงเรียนพระปริยัติธรรมวัดพระบ้านอุดม</h2>
        </div>
      </div>
      {/* Right Side */}
      <div className="flex-1 bg-[#FFCC99] p-4 m-2 rounded-lg flex flex-col items-center justify-center">
      
        <BuildingOffice2Icon className="h-16 w-16 text-white mb-4" />
        <div className="text-center">
          <h2 className="text-xl font-bold font-mali">มัธยมปลาย</h2>
            <p>ชั้นมัธยมศึกษา ม.4-6</p>
            <p>สาย ศิลป์-คำนวน</p>
          <h2 className="text-xl font-bold mt-4 font-mali">โรงเรียนพระปริยัติธรรมวัดป่าไม้แดง</h2>
        </div>
      </div>
      {/* Right Side */}
      <div className="flex-1 bg-[#FFCC66] p-4 m-2 rounded-lg flex flex-col items-center justify-center">
      
        <AcademicCapIcon className="h-16 w-16 text-white mb-4" />
        <div className="text-center">
          <h2 className="text-xl font-bold font-mali">มหาวิทยาลัย</h2>
            <p>ระดับชั้น ปี 1-4</p>
            <p>บริหารธุรกิจและศิลปศาสตร์ สาขา ระบบสารสนเทศทางธุรกิจ - การพัฒนาซอฟต์แวร์ทางธุรกิจ</p>
          <h2 className="text-xl font-bold mt-4 font-mali">มหาวิทยาลัยเทคโนโลยีราชมงคลล้านนา เชียงใหม่</h2>
        </div>
      </div>
    </div>
  );
}
