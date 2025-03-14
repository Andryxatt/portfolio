import React, { FC } from "react";



const Modal = ( isOpen, onClose, title, children) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full md:w-1/3">
        {/* Заголовок */}
        <div className="border-b px-4 py-2 flex justify-between items-center">
          <h2 className="text-lg font-semibold">{title || "Modal Title"}</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800"
          >
            ✖
          </button>
        </div>

        {/* Содержимое */}
        <div className="p-4">{children}</div>

        {/* Кнопки */}
    
      </div>
    </div>
  );
};

export default Modal;
