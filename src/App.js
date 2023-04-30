import { Route, Routes } from 'react-router-dom'
import AddOrder from './components/Clients/addOrder/AddOrder'
import LoginClient from './components/Clients/LoginClient/LoginClient'
import RegisterClient from './components/Clients/RegisterClient/RegisterClient'
import Home from './pages/Home/Home'
import LoginLawyer from './components/Lawyers/LoginLawyer/LoginLawyer'
import RegisterLawyer from './components/Lawyers/RegisterLawyer/RegisterLawyer'
import styles from './App.module.scss'
import PersonalAccount from './components/PersonAccount/PersonalAccount'

function App() {
  return (
    <div className={styles.App}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/addOrder" element={<AddOrder />} />
        <Route path="/registerClient" element={<RegisterClient />} />
        <Route path="/loginClient" element={<LoginClient />} />
        <Route path="/registerLawyer" element={<RegisterLawyer />} />
        <Route path="/loginLawyer" element={<LoginLawyer />} />
        <Route path="/personalAccount" element={<PersonalAccount />} />
      </Routes>
    </div>
  )
}

export default App
