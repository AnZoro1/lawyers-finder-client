import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addOrderAxios } from '../../../features/slice/orderSlice'
import styles from './AddOrder.module.scss'

const AddOrder = () => {
  const dispatch = useDispatch()

  const [topic, setTopic] = useState('')
  const [text, setText] = useState('')
  const [price, setPrice] = useState('')
  const [author, setAuthor] = useState()
  const orders = useSelector((state) => state.orders)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(orders, 'orda')
    dispatch(
      addOrderAxios({
        topic,
        text,
        price,
      })
    )
    setTopic('')
    setText('')
    setPrice('')
  }

  return (
    <div className={styles.formContainer}>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Введите тему вопроса..."
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        <input
          type="text"
          placeholder="Введите текст вопроса..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="number"
          placeholder="Укажите цену в рублях..."
          value={price}
          onChange={(e) => setPrice(parseFloat(e.target.value))}
        />
        <button>отправить</button>
      </form>
    </div>
  )
}

export default AddOrder
