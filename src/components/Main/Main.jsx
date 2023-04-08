import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrdersAxios } from '../../features/slice/orderSlice'
import OrderCard from '../OrderCard/OrderCard'
import styles from './Main.module.scss'

const Main = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getOrdersAxios())
  }, [])
  const orders = useSelector((state) => state.orderSlice.orders)
  return (
    <div className={styles.mainDiv}>
      {orders.map((item, index) => {
        return (
          <div key={index}>
            <OrderCard topic={item.topic} text={item.text} price={item.price} />
          </div>
        )
      })}
    </div>
  )
}
export default Main
