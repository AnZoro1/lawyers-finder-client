import React from 'react'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.categories}>Категории споров</div>
      <div className={styles.contacts}>Контакты</div>
      <div className={styles.aboutUs}>О нас</div>
      <div className={styles.comeIn}>Войти</div>
    </div>
  )
}

export default Header
