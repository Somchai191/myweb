export default function WorkCardItem({
  imageSrc,
  title,
  detal,
  bounce = false,
  link,
  onClick,
}) {
  const cardContent = (
    <div
      className="w-[400px] h-[500px] bg-white rounded-[10px] shadow-md transition-all duration-50 transform hover:scale-105 p-4 flex flex-col items-center cursor-pointer"
      onClick={onClick}
    >
      <img
        src={imageSrc}
        alt={title}
        className={`w-full h-[320px] object-cover rounded-md mb-4 ${bounce ? "animate-soft-bounce" : ""}`}
      />
      <p className="text-center text-gray-800 font-bold text-xl">{title}</p>
      {detal && (
        <p className="text-center text-gray-600 text-sm mt-2">{detal}</p>
      )}
    </div>
  );

  // ✅ ถ้ามี link และไม่มี onClick → ใช้ <a>
  if (link && !onClick) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {cardContent}
      </a>
    );
  }

  // ✅ ถ้าไม่มี link หรือต้องใช้ onClick → ใช้ div ปกติ
  return cardContent;
}

