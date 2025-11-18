import React from 'react'
import styles from './Section1.module.css'
import logo1 from '../../../../public/7 2 (1).png'
import photo1 from '../../../../public/Mask group (35).png'
import photo2 from '../../../../public/фото студии.png'
import photo3 from '../../../../public/студия.png'
const Section1 = () => {
  return (
    <div className={styles.sec_one_all}>
      <div className={styles.sec_one}>
        <div className={styles.fortext}>
            <div  className={styles.phot}><img draggable="false" src={logo1} alt="" /></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className={styles.forphotos}>
            <div>
                <img draggable="false" src={photo1} alt="" />
            </div>
            <div className={styles.forcol} >
                <div><img draggable="false"  src={photo2} alt="" /></div>
                <div><img draggable="false" src={photo3} alt="" /></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Section1
