import { Route, Routes } from 'react-router-dom'
import AddOrder from './components/Clients/addOrder/AddOrder'
import LoginClient from './components/Clients/LoginClient/LoginClient'
import RegisterClient from './components/Clients/RegisterClient/RegisterClient'
import Home from './pages/Home/Home'
import LoginLawyer from './components/Lawyers/LoginLawyer/LoginLawyer'
import RegisterLawyer from './components/Lawyers/RegisterLawyer/RegisterLawyer'
import styles from './App.module.scss'

function App() {
  return (
    <div className={styles.App}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/addOrder" element={<AddOrder />} />
        <Route path="/registerClient" element={<RegisterClient />} />
        <Route path="/loginClient" element={<LoginClient />} />
        <Route path="/RegisterLawyer/" element={<RegisterLawyer />} />
        <Route path="/LoginLawyer" element={<LoginLawyer />} />
      </Routes>
    </div>
  )
}

export default App
