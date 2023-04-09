import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { authClientSignUpAxios } from '../../../features/slice/authClientSlice'
import styles from './RegisterClient.module.scss'

const RegisterClient = () => {
  const [clientName, setClientName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const client = localStorage.getItem('client')

  useEffect(() => {
    if (client) {
      navigate('/')
    }
  }, [client])

  const sendRegisterData = (e) => {
    e.preventDefault()
    dispatch(
      authClientSignUpAxios({
        clientName,
        email,
        phoneNumber,
        password,
      })
    )

    setClientName('')
    setEmail('')
    setPhoneNumber('')
    setPassword('')
  }

  return (
    <div>
      <form action="" onSubmit={sendRegisterData}>
        <input
          type="text"
          placeholder="Введите имя..."
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Введите email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Введите номер телефона..."
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <input
          type="password"
          placeholder="Введите номер пароль..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>зарегистрироваться</button>
      </form>
    </div>
  )
}

export default RegisterClient
