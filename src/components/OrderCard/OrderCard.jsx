import React from 'react'
import styles from './OrderCard.module.scss'

const OrderCard = ({ topic, text, price }) => {
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
    </div>
  )
}

export default OrderCard
