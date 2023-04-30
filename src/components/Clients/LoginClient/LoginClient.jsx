import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { authClientSignInAxios } from '../../../features/slice/authClientSlice'
import styles from './LoginClient.module.scss'

const LoginClient = () => {
  const [clientName, setClientName] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const tokenClient = useSelector((state) => state.authClientSlice.token)
  const clientNameFromState = useSelector(
    (state) => state.authClientSlice.client
  )


  useEffect(() => {
    if (tokenClient) {
      navigate('/')
    }
  }, [tokenClient])

  const sendAuthData = (e) => {
    e.preventDefault()
    dispatch(
      authClientSignInAxios({
        clientName,
        password,
      })
    )
    setClientName('')
    setPassword('')
  }

  return (
    <div>
      <form action="" onSubmit={sendAuthData}>
        <input
          type="text"
          value={clientName}
          placeholder="Введите логин..."
          onChange={(e) => setClientName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Введите пароль..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>авторизоваться</button>
      </form>
    </div>
  )
}

export default LoginClient
