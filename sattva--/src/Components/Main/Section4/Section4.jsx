
import React, { useState, useRef, useEffect } from 'react'
import styles from './Section4.module.css'
import plus from '../../../../public/Polygon 1.png'
import imgsit from '../../../../public/V6FX_qHD3-U.png'
const faqs = [
  {
    question: 'Что нужно для занятий?',
    answer:
      'В зале есть все необходимые материалы. Приходите в удобной комфортной одежде для занятий. В раздевалках есть душ и полотенца. Вы можете принять душ после занятий, отдохнуть и выпить чашечку чая.',
  },
  {
    question: 'Какое занятие лучше выбрать новичку для первого раза?',
    answer:
      'Наши сервисные центры находятся в Москве, Санкт-Петербурге и Краснодаре. В случае поломки вы можете обратиться туда.',
  },
  {
    question: 'Нужно ли говорить преподавателю что я первый раз на йоге?',
    answer:
      'Если вы живете в городе, где нет нашего сервисного центра, то наш специалист поможет решить вопрос удаленно. Он сможет понять какая запчасть вышла из строя и отправит ее вам, если вы сможете сами заменить ее. Если удаленно решить вопрос не удастся, специалист создаст трек номер и попросит вас отправить самокат транспортной компанией CDEK. Транспортировку Товара (с ремонта/на ремонт) Покупатель оплачивает самостоятельно или осуществляет доставку Товара до СЦ своими силами и за свой счет.',
  },
  {
    question: 'Нужно ли предупреждать преподавателя, если у меня есть хронические заболевания или я плохо себя сейчас чувствую?',
    answer:
      'Если вы живете в городе, где нет нашего сервисного центра, то наш специалист поможет решить вопрос удаленно. Он сможет понять какая запчасть вышла из строя и отправит ее вам, если вы сможете сами заменить ее. Если удаленно решить вопрос не удастся, специалист создаст трек номер и попросит вас отправить самокат транспортной компанией CDEK. Транспортировку Товара (с ремонта/на ремонт) Покупатель оплачивает самостоятельно или осуществляет доставку Товара до СЦ своими силами и за свой счет.',
  },
]
const Section4 = () => {
    const [openIndexes, setOpenIndexes] = useState([])

  const contentRefs = useRef([])

  const toggleAnswer = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index))
    } else {
      setOpenIndexes([...openIndexes, index])
    }
  }
  return (
    <div className={styles.four_sec_all}>
      <div className={styles.four_sec}>
        <div className={styles.sleva}>
            <p style={{fontSize:"80px", color:"#6B7276", fontWeight:"300"}}>Новичкам</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <div><img src={imgsit} alt="" /></div>
        </div>
        <div className={styles.qacontainer}>
          {faqs.map(({ question, answer }, idx) => {
            const isOpen = openIndexes.includes(idx)
            return (
              <div key={idx} className={styles.qa}>
                <div
                  className={styles.forQuestion}
                  onClick={() => toggleAnswer(idx)}
                  style={{ cursor: 'pointer' }}
                >
                  <div style={{display:"flex", alignItems:"center", columnGap:"3rem", fontWeight:"600", color:"#6B7276"}}>
                    <p>0{idx+1}.</p>
                    <p >{question}</p>
                  </div>
                  <div>
                    <img
                      src={plus}
                      alt="toggle"
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease',
                      }}
                    />
                  </div>
                </div>
                <div
                  ref={(el) => (contentRefs.current[idx] = el)}
                  className={styles.forAnswer}
                  style={{
                    maxHeight: isOpen
                      ? contentRefs.current[idx]?.scrollHeight + 'px'
                      : '0px',
                    opacity: isOpen ? 1 : 0,
                    padding: isOpen ? '1rem' : '0 1rem',
                    overflow: 'hidden',
                    transition: 'max-height 0.4s ease, opacity 0.4s ease, padding 0.3s ease',
                    fontWeight:"400",
                    color:"#6B7276"
                  }}
                >
                  <p>{answer}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Section4
