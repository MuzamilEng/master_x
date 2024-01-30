import React from 'react'
import { navbar } from '../../Data'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='w-full max-w-[90vw] m-auto bg-white p-[1.5vw] row-center'>
      <section className="w-full cursor-pointer max-w-[10vw]">
      <img src="/img/logo.png" alt="spaceMaster" className='w-full' />
      </section>
      <section className="w-full flex items-center justify-evenly">
        {navbar?.map((item, index) => (
          <Link key={index} to={item?.link} style={{color: 'rgba(0, 0, 0, 0.50)'}} className="">
            <span className='text-[1vw] hover:font-semibold hover:text-[#092370] font-medium'>{item?.title}</span>
          </Link>
        ))}
      </section>
      <section className="w-full row-center max-w-[20vw]">
        <Link to='/login'>
          <button className='text-[1vw] hover:font-semibold text-black font-medium'>Login</button>
        </Link>
        <Link to='/login'>
          <button className='text-[1vw] ml-[2vw] hover:font-semibold bg-[#092370] text-white p-[0.5vw] w-full max-w-[10vw] rounded-2xl font-medium'>Signup</button>
        </Link>
        </section>
    </nav>
  )
}

export default Navbar