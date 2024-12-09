import React from "react";
import bany from "../../assets/bany.svg"; // Замените на путь к вашему изображению

export const Block2 = () => {
  return (
    <div className="flex container mx-auto flex-col md:flex-row items-center py-8 px-4 md:px-8">
      {/* Левый блок */}
      <div className="md:w-1/2 space-y-3 text-center md:text-left">
        <h1 className="text-xl md:text-3xl font-bold text-gray-800 leading-tight">
          Производим и устанавливаем <br /> строения разных видов <br /> в Украине
        </h1>
        <p className="text-gray-600 text-sm md:text-base">
          Индивидуально под ваш запрос построим дом, ресторан, баню, беседку, мангал или любую другую постройку
        </p>
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-3 md:space-y-0 md:space-x-3 mt-3">
          <button className="bg-orange-500 text-white py-2 px-4 rounded shadow hover:bg-orange-600 transition">
            Перейти в каталог домов
          </button>
          <button className="flex items-center text-orange-500 border border-orange-500 py-2 px-4 rounded hover:bg-orange-100 transition">
            <span>Каталог бань</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Правый блок */}
      <div className="md:w-1/2 mt-6 md:mt-0">
        <div className="relative">
          <img
            src={bany}
            alt="Дом"
            className="rounded-lg w-full max-w-md mx-auto"
          />
      
        
       
        </div>
      </div>
    </div>
  );
};
