import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { authLawyerSignInAxios } from '../../../features/slice/authLawyerSlice'

const LoginLawyer = () => {
  const [password, setPassword] = useState('')
  const [lawyerName, setLawyerName] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const tokenLawyer = useSelector((state) => state.authLawyerSlice.token)

  const lawyer = useSelector((state) => state.authLawyerSlice.lawyer)

  const localStor = localStorage.getItem('lawyer')


  useEffect(() => {
    if (tokenLawyer) {
      navigate('/')
    }
  }, [tokenLawyer])

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
