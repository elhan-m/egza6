import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const categories = {
  "Жилое": [
    { name: "Дома из профилированного бруса", path: "/residential" },
    { name: "Дома из оцилиндрованного бруса", path: "/residential" },
    { name: "Каркасные дома", path: "/residential" },
    { name: "Дома из блока", path: "/residential" },
  ],
  "Коммерческое": [
    { name: "Гостиницы", path: "/commercial" },
    { name: "Рестораны", path: "/commercial" },
    { name: "Кафе", path: "/commercial" },
    { name: "Магазины", path: "/commercial" },
  ],
  "Садовое": [
    { name: "Бани", path: "/garden" },
    { name: "Беседки", path: "/garden" },
    { name: "Гаражи", path: "/garden" },
    { name: "Мангальные зоны", path: "/garden" },
  ],
};

export const Block1 = () => {
  const [hovered, setHovered] = useState(null);
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const handleMouseEnter = (category) => {
    setHoveredCategory(category);
  };

  const handleMouseLeave = () => {
    setHoveredCategory(null);
  };

  return (
    <div className="flex  container mx-auto flex-col md:flex-row top-3 items-center justify-around   md:space-y-0 md:space-x-8 relative">
      {/* Блок с категориями */}
      <div className="flex space-x-8">
        {Object.keys(categories).map((category) => (
          <div
            key={category}
            className="group relative"
            onMouseEnter={() => handleMouseEnter(category)}
            onMouseLeave={handleMouseLeave}
          >
            <Link to={categories[category][0].path}>
              <button className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition">
                {category}
              </button>
            </Link>

            <div
              className={`absolute left-0 bg-white border rounded shadow-lg w-64 z-10 transform transition-opacity duration-300 ease-in-out ${
                hoveredCategory === category
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              <ul className="space-y-2 p-4">
                {categories[category].map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.path}
                      className="text-gray-800 hover:text-blue-500"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Кнопки "О компании", "Наши работы", "Контакты" */}
      <div className="flex space-x-4">
       <Link to='/about'>
       <button className="bg-green-500 text-white py-2 px-6 rounded hover:bg-green-600 transition">
            О компании
          </button>
       </Link>
        <Link to="/projects">
          <button className="bg-green-500 text-white py-2 px-6 rounded hover:bg-green-600 transition">
            Наши работы
          </button>
        </Link>
        <Link to="/contacts">
          <button className="bg-green-500 text-white py-2 px-6 rounded hover:bg-green-600 transition">
            Контакты
          </button>
        </Link>
      </div>
    </div>
  );
};
