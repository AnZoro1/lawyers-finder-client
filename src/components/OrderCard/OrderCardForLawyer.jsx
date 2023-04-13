import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './OrderCardForClient.module.scss'
import { addOrderForLawyerAxios } from '../../features/slice/authLawyerSlice'

const OrderCardForClient = ({ topic, text, price, id }) => {
  const lawyer = useSelector((state) => state.authLawyerSlice.lawyerFullData)
  const dispatch = useDispatch()
  const lawyerId = localStorage.getItem('lawyerId')

  const handleChooseOrder = () => {
    console.log(id)
    console.log(localStorage.getItem('lawyerId'))
    dispatch(
      addOrderForLawyerAxios({
        id,
        lawyerId,
      })
    )
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
