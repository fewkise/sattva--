import React from 'react'
import styles from './Section8.module.css'
import flag from '../../../../public/Vector (42).png'
const Section8 = () => {
  return (
    <div className={styles.sec_eight_all}>
        <div className={styles.eight_sec}>
            <div className={styles.left}>
                <div className={styles.txt}>
                    <p>Аренда Студии Москва</p>
                    <p>Дорогие друзья! Мы рады приветствовать Вас в нашем уютном, светлом пространстве!</p>
                    <div className={styles.forglag}><div><img src={flag} alt="" /></div><p>Большой Каретный переулок дом 8/2 (метро Цветной Бульвар)</p></div>
                    <div className={styles.forbtns}><button>Больше о студии</button><button>Арендовать</button></div>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.blur_back}>

                </div>
                <div className={styles.txt}>
                    <p>Аренда Студии Бронницы</p>
                    <p>Это место, где можно найти занятия для укрепления здоровья. Физического. Психического. Духовного.
Вы можете быть здесь самим собой</p>
                    <div  className={styles.forglag}><div><img src={flag} alt="" /></div><p>Каширский пер., д.46, офис.1  (метро Цветной Бульвар)</p></div>
                    <div className={styles.forbtns}><button>Больше о студии</button><button>Арендовать</button></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section8
