import Image from "next/image";

export default function ProfileImage({ isVisible }) {
  return (
    <div
      className={`w-[400px] h-[400px] rounded-full overflow-hidden flex items-center justify-center bg-gray-200 transition-transform duration-1500 ease-out ${
        isVisible ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <Image
        src="/my.jpg"
        alt="my logo"
        width={400}
        height={400}
        priority
        className="object-cover"
      />
    </div>
  );
}
