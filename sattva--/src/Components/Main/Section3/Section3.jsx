import React from 'react'
import styles from './Section3.module.css'

const cardsData = [
  { id: 1, title: "Хатха йога" },
  { id: 2, title: "Медитация" },
  { id: 3, title: "Звуковая медитация" },
  { id: 4, title: "Кундалини" },
  { id: 5, title: "Танцевальные классы Фридо Дэнс" },
  { id: 6, title: "Йога-терапия" },
  { id: 7, title: "Аштанга йога" },
  { id: 8, title: "Ретриты и туры" },
  { id: 9, title: "Прана терапия" },
  { id: 10, title: "Мантра йога" },
  { id: 11, title: "Йога для детей" },
  { id: 12, title: "Техники дыхания" },
]

const Section3 = () => {
  return (
    <div className={styles.sec_three_all}>
      <div className={styles.sec_three}>
        <div className={styles.day}>
          <p>Направления</p>
          <div></div>
        </div>
        <div className={styles.container}>
          {cardsData.map(({ id, title }, index) => (
            <div
              key={id}
              className={styles.card}
            >
              <p>{String(id).padStart(2, '0')}</p>
              <p>{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Section3