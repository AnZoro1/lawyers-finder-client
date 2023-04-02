import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { registerLawyerSignUpAxios } from '../../../features/slice/authLawyerSlice'

const RegisterLawyer = () => {
  const [lawyerName, setLawyerName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const sendRegisterData = (e) => {
    e.preventDefault()
    dispatch(
      registerLawyerSignUpAxios({
        lawyerName,
        email,
        phoneNumber,
        password,
      })
    )
    setLawyerName('')
    setEmail('')
    setPhoneNumber('')
    setPassword('')
  }
  return (
    <div>
      <form action="" onSubmit={sendRegisterData}>
        <input
          type="text"
          placeholder="Введите логин..."
          value={lawyerName}
          onChange={(e) => setLawyerName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Введите email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Введите номер телефона"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <input
          type="password"
          placeholder="Введите пароль..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>зарегистрироваться юристом</button>
      </form>
    </div>
  )
}

export default RegisterLawyer
