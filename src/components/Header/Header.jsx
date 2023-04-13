import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styles from './Header.module.scss'

const Header = () => {
  const navigate = useNavigate()

  const lawyer = useSelector((state) => state.authLawyerSlice.lawyer)

  const lawyerClick = () => {
    console.log(lawyer)
  }

  const handleAuthClient = () => {
    navigate('/registerClient')
  }
  const handleAuthLawyer = () => {
    navigate('/registerLawyer')
  }

  return (
    <div className={styles.mainDiv}>
      <div className={styles.categories}>Категории споров</div>
      <div className={styles.contacts}>Контакты</div>
      <div className={styles.aboutUs} onClick={lawyerClick}>
        О нас
      </div>
      <div className={styles.comeInClient} onClick={handleAuthClient}>
        Войти, как клиент
      </div>
      <div className={styles.comeInLawyer} onClick={handleAuthLawyer}>
        Войти, как юрист haha
      </div>
    </div>
  )
}

export default Header
