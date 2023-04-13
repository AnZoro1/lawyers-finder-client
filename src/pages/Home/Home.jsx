import React from 'react'
import { useSelector } from 'react-redux'
import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'
import styles from './Home.module.scss'
import HomeForNoAuth from './HomeForNoAuth'

const Home = () => {
  const tokenFromLawyer = useSelector((state) => state.authLawyerSlice.token)
  const tokenFromClient = useSelector((state) => state.authClientSlice.token)
  const lawyer = useSelector((state) => state.authLawyerSlice.lawyer)
  const client = useSelector((state) => state.authClientSlice.client)

  return (
    <div>
      {tokenFromLawyer || tokenFromClient || lawyer || client ? (
        <>
          <Header />
          <Main />
        </>
      ) : (
        <HomeForNoAuth />
      )}
    </div>
  )
}

export default Home
