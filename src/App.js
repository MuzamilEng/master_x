import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './app/pages'
import About from './app/pages/About'
import Contact from './app/pages/Contact'
import JoinAsTeam from './app/pages/JoinAsTeam'
import HowItWorks from './app/pages/HowItWorks'
import Subscription from './app/pages/Subscription/Subscription'
import Login from './app/pages/Auth/Login'
import Signup from './app/pages/Auth/Signup'
import Success from './app/pages/Subscription/Success'
import PaymentCheckout from './app/pages/Subscription/PaymentCheckout'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/join' element={<JoinAsTeam />} />
        <Route path='/howitworks' element={<HowItWorks />} />
        <Route path='/subscription' element={<Subscription />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/success' element={<Success />} />
        <Route path='/payment' element={<PaymentCheckout />} />

      </Routes>
    </>
  )
}


export default App