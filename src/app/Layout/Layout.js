import React from 'react'
import Topbar from '../Component/Common/Topbar'
import Navbar from '../Component/Common/Navbar'
import Footer from '../Component/Common/Footer'

const Layout = ({ children }) => {
  return (
    <main className='w-full bg-white'>
      <Topbar />
      <Navbar />
      <section className='w-full h-full'>{children}</section>
      <Footer />
    </main>
  )
}

export default Layout
