import React, { useState, useRef, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import styles from './Section5.module.css'
import teach1 from '../../../../public/Rectangle 5 (1).png'
import teach2 from '../../../../public/Rectangle 6.png'
import teach3 from '../../../../public/Rectangle 7.png'
import teach4 from '../../../../public/Rectangle 8.png'
import arrow1 from '../../../../public/Polygon 5.png'
import arrow2 from '../../../../public/Polygon 5 (1).png'
import btnstrelka from '../../../../public/Polygon 1.png'

const Section5 = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const swiperRef = useRef(null)
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const totalSlides = 8
  const slidesPerView = 4
  const progressPercentage = ((activeIndex) / (totalSlides - slidesPerView)) * 100

  useEffect(() => {
    if (
      swiperRef.current &&
      prevRef.current &&
      nextRef.current &&
      !swiperRef.current.destroyed
    ) {
      swiperRef.current.params.navigation.prevEl = prevRef.current
      swiperRef.current.params.navigation.nextEl = nextRef.current
      swiperRef.current.navigation.destroy()
      swiperRef.current.navigation.init()
      swiperRef.current.navigation.update()
    }
  }, [swiperRef, prevRef, nextRef])

  return (
    <div className={styles.sec_five_all}>
      <div className={styles.sec_five}>
        <div className={styles.daycontainer}>
          <div className={styles.day}>
            <p>Учителя</p>
            <div></div>
          </div>
          <div className={styles.forbtns}>
            <button>
              <p>Тип практики</p>
              <div>
                <img src={btnstrelka} alt="" />
              </div>
            </button>
            <button>
              <p>Все учителя</p>
              <div>
                <img src={btnstrelka} alt="" />
              </div>
            </button>
          </div>
        </div>

        <div className={styles.slider}>
          <Swiper
            modules={[Navigation]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper
            }}
            slidesPerView={slidesPerView}
            spaceBetween={30}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            style={{ paddingBottom: '40px' }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
          >
            {[teach1, teach2, teach3, teach4, teach1, teach2, teach3, teach4].map(
              (img, idx) => (
                <SwiperSlide key={idx}>
                  <div className={styles.slide}>
                    <div>
                      <img src={img} alt={`Учитель ${idx + 1}`} />
                    </div>
                    <p style={{ fontSize: '32px' }}>Анастасия Нечипоренко</p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>

        <div className={styles.navigation}>
          <div className={styles.navbtns}>
            <button ref={prevRef} className={styles.prev}>
              <div>
                <img src={arrow1} alt="prev" />
              </div>
            </button>
            <button ref={nextRef} className={styles.next}>
              <div>
                <img src={arrow2} alt="next" />
              </div>
            </button>
          </div>
          <div style={{ backgroundColor: '#B0BFD0' }} className={styles.forline}>
            <div
              style={{
                height: '4px',
                backgroundColor: '#36B9EB',
                width: `${progressPercentage}%`,
                transition: 'width 0.3s ease',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section5