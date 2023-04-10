import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrdersAxios } from '../../features/slice/orderSlice'
import OrderCard from '../OrderCard/OrderCard'
import OrderCardForClient from '../OrderCard/OrderCardForClient'
import styles from './Main.module.scss'

const Main = () => {
  const [role, setRole] = useState('')
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getOrdersAxios())
  }, [])

  useEffect(() => {
    const localStorageKeys = Object.keys(localStorage) // вытаскиваем в массив ключи из localStorage
    if (localStorageKeys.includes('client')) {
      // если среди ключей есть ключ под названием <client className=""></client>
      setRole('client') // обновляем локальное состояние и добавляем туда этот ключ
    } else if (localStorageKeys.includes('lawyer')) {
      // тоже самое
      setRole('lawyer')
    }
  })
  const orders = useSelector((state) => state.orderSlice.orders)

  return (
    <div className={styles.mainDiv}>
      {orders.map((item, index) => {
        return (
          <div key={index}>
            {role === 'client' && ( // если в приложении авторизуется или зар-ся клиент, ему отобразится компонент OrderCard, так как в role из localStorage будет положено 'client'
              <OrderCard
                topic={item.topic}
                text={item.text}
                price={item.price}
              />
            )}
            {role === 'lawyer' && ( //  если в приложении авторизуется или зар-ся юрист, ему отобразится компонент OrderCardForClient, так как в role из localStorage будет положено 'lawyer'
              <OrderCardForClient
                topic={item.topic}
                text={item.text}
                price={item.price}
                id={item._id}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}
export default Main
