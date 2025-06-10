import React, { useState } from "react";

export default function Modal({ title, images = [], onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-10 rounded-xl max-w-3xl w-full shadow-2xl relative">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">{title}</h2>

        {/* ✅ แสดงภาพจาก array */}
        {images.length > 0 && (
          <div className="mb-6 flex flex-col items-center">
            <img
              src={images[currentIndex]}
              alt={`certificate-${currentIndex}`}
              className="max-h-[400px] w-auto rounded-lg shadow-md mb-4"
            />
            <div className="flex gap-4">
              <button
                onClick={prevImage}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition"
              >
                ◀ ก่อนหน้า
              </button>
              <button
                onClick={nextImage}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition"
              >
                ถัดไป ▶
              </button>
            </div>
          </div>
        )}

        

        <div className="flex justify-center">
          <button
            onClick={onClose}
            className="px-6 py-3 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 transition-colors"
          >
            ปิด
          </button>
        </div>
      </div>
    </div>
  );
}
