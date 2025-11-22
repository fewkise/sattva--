import React from 'react'
import styles from './Section3D.module.css' // Стили теперь привязаны к Section3D
import img1 from '../../../../public/Знімок екрана 2023-05-01 о 13.41 1.png'
import img2 from '../../../../public/Знімок екрана 2023-05-01 о 13.41 1 (1).png' // Импорт оставлен, если он вдруг понадобится
const Section3D = () => { // Название компонента изменено на Section3D
  return (
    <div className={styles.sec_seven_all}>
      <div className={styles.sec_seven}>
        <div className={styles.daycontainer}>
            <div className={styles.day}>
                <p>Мероприятия направления</p>
            </div>
            <div className={styles.forbtns}>
                <button>
                    <p>Все мероприятия</p>
                </button>
            </div>
        </div>
        <div className={styles.events}>
            {/* Оставляем только первый блок мероприятия */}
            <div className={styles.event}>
                <div className={styles.fortext}>
                    <p>Танцевальная <br /> медитация Freedom Dance с Анной Кретовой</p>
                    <p>Четверг 4 мая    10:00</p>
                    <p>На занятии #freedomDANCE мы создаем и переживаем собственный танец как уникальный опыт. Мы двигаемся, следуя интуитивной логике, проходя танцевальный цикл как метафору жизни</p>
                    <div className={styles.forbtns}>
                        <button>Больше о мероприятии</button>
                        <button>Записаться</button>
                    </div>
                </div>
                <div>
                    <img src={img1} alt="" />
                </div>
            </div>
            {/* Второй блок мероприятия был удален */}
        </div>
      </div>
    </div>
  )
}

export default Section3D