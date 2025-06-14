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
      className="w-full max-w-[400px] sm:w-[400px] h-[420px] sm:h-[500px] bg-white rounded-[10px] shadow-md transition-all duration-50 transform hover:scale-105 p-4 flex flex-col items-center cursor-pointer"
      onClick={onClick}
    >
      <img
        src={imageSrc}
        alt={title}
        className={`w-full h-[260px] sm:h-[320px] object-cover rounded-md mb-4 ${bounce ? "animate-soft-bounce" : ""}`}
      />
      <p className="text-center text-gray-800 font-bold text-lg sm:text-xl">{title}</p>
      {detal && (
        <p className="text-center text-gray-600 text-xs sm:text-sm mt-2">{detal}</p>
      )}
    </div>
  );

  if (link && !onClick) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {cardContent}
      </a>
    );
  }

  return cardContent;
}
