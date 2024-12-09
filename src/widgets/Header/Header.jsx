import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.svg';
import TelegramIcon from '../../assets/Telegram.svg';
import WhatsAppIcon from '../../assets/WhatsApp.svg';
import ViberIcon from '../../assets/Viber.svg';

export function Header() {
  return (
    <header className="bg-[#F8F8F8] border-b border-dashed border-gray-300">
      <div className="container mx-auto flex flex-wrap items-center justify-between py-4 px-8">
        {/* Логотип */}
        <Link to="/" className="flex items-center space-x-3">
          <img src={Logo} alt="TokarCompany Logo" className="h-12 w-auto" />
          <div className="hidden md:block">
            <h1 className="text-lg font-bold text-gray-800">TokarCompany</h1>
            <p className="text-sm text-gray-600">
              производственно-строительная компания
            </p>
          </div>
        </Link>

        {/* Связаться напрямую */}
        <div className="w-full md:w-auto flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8 mt-4 md:mt-0">
          <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
            <div className="flex space-x-2">
              <a
                href="https://t.me/elhawerty"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={TelegramIcon} alt="Telegram" className="h-6" />
              </a>
              <a
                href="https://wa.me/qr/2GDPYLAPZTUJN1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={WhatsAppIcon} alt="WhatsApp" className="h-6" />
              </a>
              <a href="/viber">
                <img src={ViberIcon} alt="Viber" className="h-6" />
              </a>
            </div>
          </div>
          <div>
            <p className="text-gray-800 font-semibold text-sm">
              +3 80 (67) 175 56 30
            </p>
            <p className="text-xs text-gray-500">с 09:00 до 18:00 (пн-вс)</p>
          </div>
        </div>

        {/* Кнопка */}
        <button className="bg-orange-500 text-white py-2 px-6 rounded-md hover:bg-orange-600 mt-4 md:mt-0">
          Заказать звонок
        </button>

        {/* Языковой переключатель */}
        <div className="flex items-center space-x-1 mt-4 md:mt-0">
          <span className="text-sm text-gray-700">Ru</span>
          <span className="text-sm text-gray-700">En</span>
        </div>
      </div>
    </header>
  );
}
