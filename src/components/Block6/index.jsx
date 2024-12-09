import React from 'react';
import fon from '../../assets/fon.svg';
import buttonVideo from '../../assets/buttonVideo.svg';
import foto from '../../assets/foto.svg';

export const Block6 = () => {
  return (
    <div className="bg-gray-50 py-20 relative">
      {/* Заголовок блока */}
      <h2 className="text-4xl font-bold text-center mb-12">О компании TokarMebel</h2>

      {/* Основной контент */}
      <div className="container mx-auto flex flex-col items-center gap-10 relative">
        {/* Блок с изображением фабрики */}
        <div className="relative w-full max-w-6xl h-[500px]">
          {/* Фон фабрики */}
          <img
            src={fon}
            alt="Фабрика"
            className="rounded-2xl w-full h-full object-cover"
          />

          {/* Фото (foto) на фоне */}
          <img
            src={foto}
            alt="Дополнительное фото"
            className="absolute top-0 left-0 w-full h-full object-contain z-10"
          />

          {/* Кнопка (buttonVideo) справа */}
          <img
            src={buttonVideo}
            alt="Кнопка видео"
            className="absolute top-1/2 right-[15%] transform -translate-y-1/2 w-[100px] h-[100px] cursor-pointer z-20"
          />

          {/* Карточка поверх изображения */}
          <div className="absolute top-[75%] left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-lg p-6 w-[400px] z-30">
            <h3 className="text-lg font-semibold text-center">
              Точилов Александр Николаевич
            </h3>
            <p className="text-sm text-gray-600 text-center mt-2">
              Цитата о компании, пару слов от самого лица компании. Цитата о компании,
              пару слов от самого лица компании.
            </p>
          </div>
        </div>

        {/* Информационные карточки */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center mt-20">
          {/* Карточка 1 */}
          <div>
            <h3 className="text-3xl font-bold text-orange-600">21 год</h3>
            <p className="text-sm text-gray-600 mt-2">
              Работаем на рынке Украины с 1998 года
            </p>
          </div>
          {/* Карточка 2 */}
          <div>
            <h3 className="text-3xl font-bold text-orange-600">300+</h3>
            <p className="text-sm text-gray-600 mt-2">
              Позиции различных строений
            </p>
          </div>
          {/* Карточка 3 */}
          <div>
            <h3 className="text-3xl font-bold text-orange-600">до 7%</h3>
            <p className="text-sm text-gray-600 mt-2">
              Влажность просушенного дерева, что соответствует нормативам ГОСТ
            </p>
          </div>
          {/* Карточка 4 */}
          <div>
            <h3 className="text-3xl font-bold text-orange-600">в 1,5 раза</h3>
            <p className="text-sm text-gray-600 mt-2">
              Стоимость доставки ниже рыночной
            </p>
          </div>
        </div>

        {/* Кнопка "Подробнее о компании" */}
        <div className="text-center mt-12">
          <button className="bg-orange-500 text-white text-lg font-semibold px-8 py-3 rounded-lg hover:bg-orange-600 transition">
            Подробнее о компании
          </button>
        </div>
      </div>
    </div>
  );
};
