import React from 'react';
// import bigCard from "../../assets/bigCard.svg";
// import card3 from "../../assets/card-3.svg";
// import card1 from "../../assets/card1.svg";
import  bigCard from "../../assets/bigCard.svg";
import card3 from "../../assets/card3.svg"
import card1 from "../../assets/card1.svg"	
import besed2 from "../../assets/besed2.svg"
import { Link } from 'react-router-dom'
export const Block4 = () => {
  return (
    <div className="relative  mt-[20px] mb-[80px] ">
      {/* Фоновое изображение */}
      <img
        src={besed2}
        alt="Background"
        className="absolute inset-0 w-full h-full   pl-[273px] pr-[50px]object-cover "
						
      />

      <div className="relative container mx-auto px-4 flex flex-col gap-8 z-10">
        {/* Блок с двумя маленькими карточками */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Маленькая карточка 1 */}
          <div className="w-[370px] h-[460px] bg-white shadow-lg rounded-lg overflow-hidden z-10">
            <img
              src={card3}
              alt="Жилое"
              className="w-full h-[200px] object-cover  shadow-current"
            />
            <div className="p-4 flex flex-col justify-between h-[260px]">
              <div>
                <h3 className="text-xl font-semibold mb-2">Жилое</h3>
                <p className="text-gray-600">
                  Раздел с домами, дачами, коттеджами, виллами, усадьбами и особняками.
                </p>
              </div>
              <Link to="/"
                href="#"
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-400 transition"
              >
                Ознакомиться с проектами
              </Link>
            </div>
          </div>

          {/* Маленькая карточка 2 */}
          <div className="w-[370px] h-[460px] bg-white shadow-lg rounded-lg overflow-hidden z-10">
            <img
              src={card1}
              alt="Коммерческое"
              className="w-full h-[200px] object-cover"
            />
            <div className="p-4 flex flex-col justify-between h-[260px]">
              <div>
                <h3 className="text-xl font-semibold mb-2">Коммерческое</h3>
                <p className="text-gray-600">
                  Раздел с базами отдыха, гостиницами, ресторанами, кафе и магазинами.
                </p>
              </div>
														<Link to="/"
                href="#"
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-400 transition"
              >
                Ознакомиться с проектами
              </Link>
            </div>
          </div>
        </div>

        {/* Большая карточка снизу */}
        <div className="w-full md:w-[770px] h-[320px] bg-white shadow-lg rounded-lg flex overflow-hidden z-10">
          <div className="p-6 flex flex-col justify-between w-1/2">
            <div>
              <h3 className="text-2xl font-semibold mb-2">Садовое</h3>
              <p className="text-gray-600">
                Раздел с банями, беседками, альтанками, гаражами, кухнями, площадками, мангальными зонами и барбекю.
              </p>
            </div>
							<Link to="/"
                href="#"
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-400 transition"
              >
                Ознакомиться с проектами
              </Link>
          </div>
          <img
            src={bigCard}
            alt="Садовое"
            className="w-1/2 rounded-t-lg rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};
