import React from "react";
import number1 from "../../assets/number1.svg";
import number2 from "../../assets/number2.svg";
import number3 from "../../assets/number3.svg";
import number4 from "../../assets/number4.svg";
import cardHome from "../../assets/cardHome.svg";
import blacknot from "../../assets/blacknot.svg";
import homeFrame from "../../assets/homeFrame.svg";
import montaj from "../../assets/montaj.svg";

export const cards = [
  {
    title: "Создание 3D-макета",
    description:
      "Это визуализация строения через экран гаджета. Макет создается индивидуально для клиента. Главная задача 3D-визуализации: учесть все детали в разработке и показать конечный вид проекта в оригинальном цвете и размере, используя актуальные материалы и наполнение внутри.",
    image: cardHome,
    numberImage: number1,
  },
  {
    title: "Взятие замеров и создание фундамента.",
    description:
      "Это визуализация строения через экран гаджета. Макет создается индивидуально для клиента. Главная задача 3D-визуализации: учесть все детали в разработке и показать конечный вид проекта в оригинальном цвете и размере, используя актуальные материалы и наполнение внутри.",
    image: blacknot,
    numberImage: number2,
  },
  {
    title: "Производство конструкции",
    description:
      "Это визуализация строения через экран гаджета. Макет создается индивидуально для клиента. Главная задача 3D-визуализации: учесть все детали в разработке и показать конечный вид проекта в оригинальном цвете и размере, используя актуальные материалы и наполнение внутри.",
    image: homeFrame,
    numberImage: number3,
  },
  {
    title: "Монтажные работы",
    description:
      "Это визуализация строения через экран гаджета. Макет создается индивидуально для клиента. Главная задача 3D-визуализации: учесть все детали в разработке и показать конечный вид проекта в оригинальном цвете и размере, используя актуальные материалы и наполнение внутри.",
    image: montaj,
    numberImage: number4,
  },
];

export const Block5 = () => {
  return (
    <div className="container m-auto px-4 py-12">
      {/* Заголовок */}
      <h1 className="text-3xl font-bold text-center ">
  Из чего состоят наши строения?
</h1>

      {/* Карточки */}
      <div className="grid top-16 grid-cols-1 md:grid-cols-2 gap-8 relative">
        {cards.map((card, index) => {
          // Задаем размеры заголовка и описания
          const titleWidth =
            index === 0 || index === 1 || index === 2 || index === 3
              ? "w-[254px]"
              : "";
          const descriptionWidth =
            index === 0
              ? "w-[485px]"
              : index === 1
              ? "w-[372px]"
              : index === 2
              ? "w-[485px]"
              : index === 3
              ? "w-[485px]"
              : " ";

          return (
            <div
              key={index}
              className="bg-white w-[570px] h-[324px] shadow-lg rounded-lg p-6 flex items-start gap-6 relative"
            >
              <div className="flex-1">
                {/* Заголовок с динамической шириной */}
                <h3 className={`text-2xl font-semibold mb-4 ${titleWidth}`}>
                  {card.title}
                </h3>
                {/* Описание с динамической шириной */}
                <p className={`text-gray-600 ${descriptionWidth}`}>
                  {card.description}
                </p>
              </div>
              {/* Изображение в правом верхнем углу */}
              <img
                src={card.image}
                alt={card.title}
                className="absolute top-[-0px] right-[-10px] w-[180px] h-auto object-cover"
              />
              {/* Номерное изображение */}
              <img
                src={card.numberImage}
                alt="Number"
                className="absolute bottom-[50px] right-[20px]"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
