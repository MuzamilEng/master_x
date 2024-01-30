import React from 'react'
import Topbar from '../Component/Common/Topbar'
import Navbar from '../Component/Common/Navbar'

const Layout = ({ children }) => {
  return (
    <main className='w-full bg-white'>
      <Topbar />
      <Navbar />
      <section className='w-full h-full'>{children}</section>
    </main>
  )
}

export default Layout
