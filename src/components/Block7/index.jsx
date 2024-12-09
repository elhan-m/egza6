import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import vibeHome from '../../assets/vibeHome.svg'; // Первое изображение
import home77 from '../../assets/home77.svg'; // Второе изображение
import bigCard from '../../assets/bigCard.svg'; // Третье изображение

export const Block7 = () => {
  // Данные для каждого раздела
  const sections = [
    {
      title: 'Жилые строения',
      image: vibeHome,
      items: [
        {
          title: 'Дома из профилированного бруса',
          description: 'Экологичные дома с уникальной текстурой и высокой прочностью.',
        },
        {
          title: 'Дома из оцилиндрованного бруса',
          description: 'Стильные и долговечные дома, идеально подходящие для комфортного проживания.',
        },
        {
          title: 'Каркасные дома',
          description: 'Экономичные и быстро возводимые дома с отличной теплоизоляцией.',
        },
        {
          title: 'Дома из блока',
          description: 'Надёжные и современные дома, выполненные из качественных блоков.',
        },
      ],
    },
    {
      title: 'Коммерческие строения',
      image: home77,
      items: [
        {
          title: 'Базы отдыха',
          description: 'Уютные базы отдыха для комфортного времяпрепровождения гостей.',
        },
        {
          title: 'Гостиницы',
          description: 'Эстетичные гостиницы с современным дизайном и удобствами.',
        },
        {
          title: 'Рестораны',
          description: 'Рестораны с уникальным стилем для привлечения клиентов.',
        },
        {
          title: 'Кафе',
          description: 'Уютные кафе с прекрасной атмосферой для отдыха и встреч.',
        },
        {
          title: 'Магазины',
          description: 'Функциональные и эстетичные магазины, идеально подходящие для бизнеса.',
        },
      ],
    },
    {
      title: 'Садовые и хозпостройки',
      image: bigCard,
      items: [
        {
          title: 'Деревянные бани',
          description: 'Наши деревянные бани отличаются экологичностью и долговечностью. Они создают комфортный микроклимат для отдыха и расслабления.',
        },
        {
          title: 'Беседки',
          description: 'Стильные беседки для вашего сада или двора. Идеальное место для отдыха с семьей или друзьями.',
        },
        {
          title: 'Альтанки',
          description: 'Эстетичные альтанки, которые подчеркнут ландшафтный дизайн вашего участка.',
        },
        {
          title: 'Детские игровые площадки',
          description: 'Безопасные и креативные площадки для детей. Отличный способ подарить радость вашему ребенку.',
        },
        {
          title: 'Гаражи',
          description: 'Надёжные и прочные гаражи, выполненные из качественного дерева. Защита вашего автомобиля от любых погодных условий.',
        },
        {
          title: 'Деревянные детские домики',
          description: 'Очаровательные мини-домики, которые станут любимым местом для игр и фантазий вашего ребенка.',
        },
        {
          title: 'Мангальные зоны и барбекю',
          description: 'Функциональные зоны для приготовления еды на открытом воздухе. Идеальны для семейных праздников и пикников.',
        },
        {
          title: 'Кухни',
          description: 'Летние кухни для приготовления блюд на свежем воздухе. Комфортное и стильное решение для вашего участка.',
        },
      ],
    },
  ];

  return (
    <div className="bg-gray-50 py-16">
      {/* Заголовок блока */}
      <h2 className="text-4xl font-bold text-center mb-12">Мы разделяем 3 вида строений</h2>

      {/* Контент */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {sections.map((section, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6">
            <img
              src={section.image}
              alt={section.title}
              className="rounded-t-lg mb-4 w-full h-[200px] object-cover"
            />
            <h3 className="text-xl font-bold mb-4">{section.title}</h3>
            {section.items.map((item, idx) => (
              <Accordion key={idx} className="mb-2">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon className="text-orange-600" />}
                  aria-controls={`panel${index}-${idx}-content`}
                  id={`panel${index}-${idx}-header`}
                >
                  <p className="text-lg font-medium">{item.title}</p>
                </AccordionSummary>
                <AccordionDetails>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
