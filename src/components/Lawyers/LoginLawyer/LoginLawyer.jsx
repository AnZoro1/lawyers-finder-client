import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { authLawyerSignInAxios } from '../../../features/slice/authLawyerSlice'

const LoginLawyer = () => {
  const [password, setPassword] = useState('')
  const [lawyerName, setLawyerName] = useState('')
  const dispatch = useDispatch()

  const sendLawyerData = (e) => {
    e.preventDefault()
    dispatch(
      authLawyerSignInAxios({
        lawyerName,
        password,
      })
    )
  }

  return (
    <div>
      <form action="" onSubmit={sendLawyerData}>
        <input
          type="text"
          placeholder="Введите логин..."
          value={lawyerName}
          onChange={(e) => setLawyerName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Введите пароль..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>авторизоваться юристом</button>
      </form>
    </div>
  )
}

export default LoginLawyer
