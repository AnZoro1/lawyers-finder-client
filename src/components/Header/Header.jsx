import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Header.module.scss'

const Header = () => {
  const navigate = useNavigate()

  const handleAuth = () => {
    navigate('/registerClient')
  }

  return (
    <div className={styles.mainDiv}>
      <div className={styles.categories}>Категории споров</div>
      <div className={styles.contacts}>Контакты</div>
      <div className={styles.aboutUs}>О нас</div>
      <div className={styles.comeIn} onClick={handleAuth}>
        Войти, как клиент
      </div>
    </div>
  )
}

export default Header
