import React, { useEffect } from 'react';

const WhyChooseUs = () => {
  const items = [
    {
      icon: '🎨',
      title: 'Эксклюзивный дизайн',
      description: 'Не имеющий аналогов в Украине',
    },
    {
      icon: '📦',
      title: 'Разработка модели',
      description: 'Индивидуально с помощью 3D-визуализации в нашем приложении',
    },
    {
      icon: '📜',
      title: 'Сертификаты качества',
      description: 'Подтверждают наши материалы и комплектующие',
    },
    {
      icon: '🤝',
      title: 'Работа под ключ',
      description: 'В среднем за X дней от установки фундамента до сдачи объекта в эксплуатацию',
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.opacity-0');
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          element.classList.add('opacity-100', 'translate-y-0');
          element.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className=" relative   py-12">
      <div className="container mx-auto z-index-50 px-4">
        <h2 className="text-center text-3xl font-bold mb-8">Почему выбирают нас:</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg opacity-0 transform translate-y-8 transition duration-500 hover:scale-105 hover:shadow-2xl hover:bg-neutral-50"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
