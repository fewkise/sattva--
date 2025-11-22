import React from 'react';
import styles from './Footer.module.css';
import telegramIcon from '../../../public/ph_telegram-logo-light.png';
import vkIcon from '../../../public/ph_facebook-logo.png';
import instIcon from '../../../public/ph_instagram-logo-light.png';
import logo from '../../../public/Group 26.png'
const Footer = () => {
  return (
    <footer className={styles.footer_wrapper}>

      <div className={styles.logo_header_area}>

        <div className={styles.logo_placeholder}>
          <img src={logo}  className={styles.main_logo_img} />
        </div>
      </div>

      <div className={styles.footer_content_container}>
        <div className={styles.footer_content}>
          

          <div className={styles.footer_column}>
            <a href="#">Расписание</a>
            <a href="#">Направления</a>
            <a href="#">Преподаватели</a>
          </div>

          <div className={styles.footer_column}>
            <a href="#">Прайслист</a>
            <a href="#">Абонементы</a>
            <a href="#">Бронирование залов</a>
          </div>
          <div className={styles.forthree}>
            <div className={styles.footer_column}>
            <a href="#">Новичкам</a>
            <a href="#">Наши студии</a>
            <a href="#">Мероприятия</a>
          </div>


          <div className={styles.footer_column}>
            <a href="#">Контакты</a>
            <a href="#">Политика</a>
            <a href="#">Лицензия</a>
          </div>


          <div className={styles.socials_column}>
            <a href="#" aria-label="Telegram">

                <img src={telegramIcon} alt="Telegram" className={styles.social_icon} />
            </a>
             <a href="#" aria-label="VKontakte">
                <img src={vkIcon} alt="VKontakte" className={styles.social_icon} />
            </a>
             <a href="#" aria-label="Instagram">
                <img src={instIcon} alt="Instagram" className={styles.social_icon} />
            </a>
          </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;