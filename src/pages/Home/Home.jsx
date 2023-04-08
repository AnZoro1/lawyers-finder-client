import React from 'react'
import { useSelector } from 'react-redux'
import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'
import styles from './Home.module.scss'
import HomeForNoAuth from './HomeForNoAuth'

const Home = () => {
  const tokenFromLawyer = useSelector((state) => state.authLawyerSlice.token)
  const tokenFromClient = useSelector((state) => state.authClientSlice.token)
  
  return (
    <div>
      {tokenFromLawyer || tokenFromClient ? (
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
