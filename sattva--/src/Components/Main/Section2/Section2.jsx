import React, { useState, useRef } from 'react'
import styles from './Section2.module.css'
import calendar from '../../../../public/ph_calendar-check.png'
import btnstrelka from '../../../../public/Polygon 1.png'
const menuItems = [
  'День недели',
  'Тип занятий',
  'Учитель',
  'Студия',
  'Тип практики',
  'Сложность',
];

const scheduleData = {
  среда: {
    date: '3 мая',
    classes: [
      { time: '11:30', title: 'Хатха йога для начинающих с Константином Масловым', practice: 'Хатха йога', studio: 'Москва' },
      { time: '14:00', title: 'Йога для беременных с Анной Ивановой', practice: 'Хатха йога', studio: 'Москва' },
      { time: '18:00', title: 'Хатха йога+шавасана под гонг с Юлией Шешеневой', practice: 'Хатха йога', studio: 'Москва' },
      { time: '19:30', title: 'Хатха йога+шавасана под гонг с Юлией Шешеневой', practice: 'Хатха йога', studio: 'Москва' },
    ],
  },
  четверг: {
    date: '4 мая',
    classes: [
      { time: '10:00', title: 'Виньяса йога с Александрой Петровой', practice: 'Виньяса', studio: 'Студия на Арбате' },
      { time: '12:30', title: 'Аштанга йога с Иваном Смирновым', practice: 'Аштанга', studio: 'Центр Йоги' },
      { time: '16:00', title: 'Йога для спины с Марией Кузнецовой', practice: 'Ресторативная', studio: 'Зал 3' },
    ],
  },
  пятница: {
    date: '5 мая',
    classes: [
      { time: '09:00', title: 'Пауэр йога с Еленой Дмитриевой', practice: 'Пауэр', studio: 'Фитнес клуб' },
      { time: '18:30', title: 'Инь йога с Сергеем Ивановым', practice: 'Инь', studio: 'Студия йоги' },
    ],
  },
  суббота: {
    date: '6 мая',
    classes: [
      { time: '08:00', title: 'Сурья Намаскар с Натальей Орловой', practice: 'Виньяса', studio: 'Зал 1' },
      { time: '10:00', title: 'Хатха йога для всех с Антоном Романовым', practice: 'Хатха', studio: 'Основной зал' },
      { time: '12:00', title: 'Йога-нидра с Ольгой Смирновой', practice: 'Медитация', studio: 'Комната релакса' },
      { time: '14:30', title: 'Йога-терапия с Марином Власовым', practice: 'Терапия', studio: 'Медицинский центр' },
      { time: '17:00', title: 'Йога с мантрами с Екатериной Лазаревой', practice: 'Мантры', studio: 'Студия на втором этаже' },
    ],
  },
}

const ScheduleDay = ({ dayName, dayData, isOpen }) => {
  const contentRef = useRef(null)

  return (
    <div className={styles.rasp_day}>
      <div className={styles.day}>
        <p>{dayName[0].toUpperCase() + dayName.slice(1)} {dayData.date}</p>
        <div></div>
      </div>
      <div
        ref={contentRef}
        className={styles.rasp}
        style={{
          maxHeight: isOpen ? contentRef.current?.scrollHeight + 'px' : '0px',
          opacity: isOpen ? 1 : 0,
          padding: isOpen ? '1rem' : '0 1rem',
          overflow: 'hidden',
          transition: 'max-height 1s ease, opacity 1s ease, padding 0.6s ease',
        }}
      >
        <div className={styles.headers}>
          <div>Время</div>
          <div>Название</div>
          <div>Тип практики</div>
          <div>Студия</div>
          <div></div>
        </div>
        {dayData.classes.map((cls, i) => (
          <div key={i} className={styles.classItem}>
            <div>{cls.time}</div>
            <div>{cls.title}</div>
            <div>{cls.practice}</div>
            <div>{cls.studio}</div>
            <div><button>Записаться</button></div>
          </div>
        ))}
      </div>
    </div>
  )
}

const Section2 = () => {
  const [showFullWeek, setShowFullWeek] = useState(false)
  const [openMenus, setOpenMenus] = useState({});
  const [openDays, setOpenDays] = useState({
    четверг: false,
    пятница: false,
    суббота: false,
  })
   const toggleMenu = (index) => {
    setOpenMenus(prev => ({
      ...prev,
      [index]: !prev[index], // Переключаем состояние для конкретного индекса
    }));
  };
  const handleShowFullWeek = () => {
    setShowFullWeek(true)

    setTimeout(() => setOpenDays({ четверг: true, пятница: false, суббота: false }), 0)
    setTimeout(() => setOpenDays(prev => ({ ...prev, пятница: true })), 300)
    setTimeout(() => setOpenDays(prev => ({ ...prev, суббота: true })), 600)
  }


  const handleShowToday = () => {

    setOpenDays({ четверг: false, пятница: false, суббота: false })
    setTimeout(() => setShowFullWeek(false), 500)
  }
  const options = ['Вся неделя', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
  return (
    <div className={styles.sec_two_all}>
        <div className={styles.sec_two}>
             <div className={styles.nazv}>
        <p style={{fontSize:"80px", color:"#6B7276"}}>Расписание занятий</p>
        <div className={styles.may}>
          <div><img src={calendar} alt="" /></div>
          <p>1 мая - 7 мая</p>
          <p>2023</p>
        </div>
      </div>

      <div className={styles.menuContainer}>
      {menuItems.map((item, index) => (
        <div key={index} className={styles.menuWrapper}>
          <button 
            className={styles.menuButton} 
            onClick={() => toggleMenu(index)}
            // Добавляем класс, если меню открыто, для поворота стрелки
            aria-expanded={!!openMenus[index]}
          >
            <p>{item}</p>
            <div>
              {/* Используйте ваш импорт картинки здесь */}
              {/* <img src={btnstrelka} alt="toggle arrow" className={openMenus[index] ? styles.arrowOpen : styles.arrowClosed} /> */}
              {/* Временная замена стрелки текстом для примера */}
        
              <div className={openMenus[index] ? styles.arrowOpen : styles.arrowClosed}><img src={btnstrelka} alt="" /></div>
            </div>
          </button>
          
          {/* Контейнер с опциями, который плавно разворачивается */}
          <div className={`${styles.optionsContainer} ${openMenus[index] ? styles.optionsOpen : ''}`}>
            {/* Опции появляются только если меню открыто, чтобы анимация была плавной */}
            {openMenus[index] && options.map((option, optIndex) => (
                <div key={optIndex} className={styles.menuOption}>
                    {option}
                </div>
            ))}
          </div>
        </div>
      ))}
    </div>

      <div className={styles.rasp_all}>
        <ScheduleDay dayName="среда" dayData={scheduleData['среда']} isOpen={true} />
        {showFullWeek && (
          <>
            <ScheduleDay dayName="четверг" dayData={scheduleData['четверг']} isOpen={openDays.четверг} />
            <ScheduleDay dayName="пятница" dayData={scheduleData['пятница']} isOpen={openDays.пятница} />
            <ScheduleDay dayName="суббота" dayData={scheduleData['суббота']} isOpen={openDays.суббота} />
          </>
        )}    <div className={styles.forbtn}>
          {!showFullWeek ? (
            <button onClick={handleShowFullWeek}>Показать всю неделю</button>
          ) : (
            <button onClick={handleShowToday}>Показать только сегодня</button>
          )}
        </div>
      </div>
        </div>
     
    </div>
  )
}

export default Section2