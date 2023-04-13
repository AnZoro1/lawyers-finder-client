import React from 'react'
import { useSelector } from 'react-redux'
import styles from './OrderCardForClient.module.scss'

const OrderCardForClient = ({ topic, text, price, id }) => {
  const lawyer = useSelector((state) => state.authLawyerSlice.lawyerFullData)

  const handleChooseOrder = () => {
    console.log(id)
    console.log(localStorage.getItem('lawyerId'))
  }

  return (
    <div className={styles.mainDiv}>
      <div className={styles.orderCard}>
        {' '}
        <div className={styles.topic}>{topic}</div>{' '}
      </div>
      <div className={styles.orderCard2}>
        <p>{text}</p>
      </div>
      <div className={styles.orderCard3}>
        <div> Предлагаемая цена:</div>{' '}
        <div className={styles.price}>{price}</div> <div>рублей</div>
      </div>
      <button onClick={handleChooseOrder}>Откликнуться</button>
    </div>
  )
}

export default OrderCardForClient
