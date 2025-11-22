import React from 'react'
import styles from './Section4L.module.css'
const Section4L = () => {
  return (
    <div className={styles.sec_four_all}>
      <div className={styles.sec_four}>
        <div className={styles.zapis}><p style={{fontSize:"55px"}}>Записаться <br />
на урок</p></div>
        <p  style={{fontSize:"23px"}}>Запись на занятия при полной предоплате, <br />
<span>Стоимость — 1800₽. Количество мест ограничено.</span></p>

      <button>Забронировать урок</button>
        </div>
    </div>
  )
}

export default Section4L
