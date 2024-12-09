import { Link } from "react-router-dom";
import TelegramIcon from '../../assets/Telegram.svg';
import WhatsAppIcon from '../../assets/WhatsApp.svg';
import ViberIcon from '../../assets/Viber.svg';
const Footer = () => {
  return (
    <footer className="bg-[#FAF8F4] text-[#4A4A4A] text-sm py-8">
      <div className="container mx-auto px-6">
        {/* Основной контент футера */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
          {/* Левый блок с разделами */}
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Жилое */}
            <div>
              <h3 className="font-semibold mb-4">Жилое</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:text-orange-600">Дома из профилированного бруса</Link></li>
                <li><Link to="/" className="hover:text-orange-600">Дома из оцилиндрованного бруса</Link></li>
                <li><Link to="/" className="hover:text-orange-600">Каркасные дома</Link></li>
                <li><Link to="/" className="hover:text-orange-600">Дома из блока</Link></li>
              </ul>
            </div>

            {/* Коммерческое */}
            <div>
              <h3 className="font-semibold mb-4">Коммерческое</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:text-orange-600">Базы отдыха</Link></li>
                <li><Link to="/" className="hover:text-orange-600">Гостиницы</Link></li>
                <li><Link to="/" className="hover:text-orange-600">Рестораны</Link></li>
                <li><Link to="/" className="hover:text-orange-600">Кафе</Link></li>
                <li><Link to="/" className="hover:text-orange-600">Магазины</Link></li>
              </ul>
            </div>

            {/* Садовое */}
            <div>
              <h3 className="font-semibold mb-4">Садовое</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:text-orange-600">Деревянные бани</Link></li>
                <li><Link to="/" className="hover:text-orange-600">Беседки</Link></li>
                <li><Link to="/" className="hover:text-orange-600">Альтанки</Link></li>
                <li><Link to="/" className="hover:text-orange-600">Детские игровые площадки</Link></li>
                <li><Link to="/" className="hover:text-orange-600">Гаражи</Link></li>
                <li><Link to="/" className="hover:text-orange-600">Деревянные детские домики</Link></li>
                <li><Link to="/" className="hover:text-orange-600">Мангальные зоны и барбекю</Link></li>
                <li><Link to="/" className="hover:text-orange-600">Кухни</Link></li>
              </ul>
            </div>
          </div>

          {/* Правая часть */}
          <div className="flex flex-col gap-8">
            {/* Верхний блок */}
            <div className="flex gap-6">
              <Link to="/about" className="hover:text-orange-600">О компании</Link>
              <Link to="/works" className="hover:text-orange-600">Наши работы</Link>
              <Link to="/order" className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600">
                Заказать звонок
              </Link>
            </div>

            {/* Центральный блок */}
            <div className="flex items-center gap-4">
              <h2 className="text-xl font-bold">TokarCompany</h2>
              <p className="text-gray-500">Производственно-строительная компания</p>
            </div>

            {/* Нижний блок */}
            <div className="flex flex-col items-start gap-2">
              {/* Иконки */}
              <span className="text-gray-700 text-sm">Связаться напрямую:</span>
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
              {/* Номер телефона */}
              <a href="tel:+380671755630" className="text-[#4A4A4A] hover:underline">
                +3 80 (67) 175 56 30
              </a>
            </div>
          </div>
        </div>

        {/* Нижняя полоса с текстом */}
        <div className="border-t border-gray-300 mt-6 pt-4 text-center text-xs text-gray-500">
          © 2020. Все права защищены. TokarCompany – Производственно-строительная компания. Информация, представленная на сайте, не является публичной офертой.
        </div>
      </div>
    </footer>
  );
};

export default Footer;