import React from 'react'
import Topbar from '../../Component/Common/Topbar'
import Navbar from '../../Component/Common/Navbar'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <main className='w-full'>
      <Topbar />
      <Navbar />
      <div className='w-full col-center p-2vw max-w-[90vw] m-auto'>
        <form className="w-full max-w-[35vw] boredr-[1px] bg-[#F8F8F8] rounded-xl col-center">
        <h1 className='text-[2vw] capitalize text-black mt-vw font-bold'>Log in to SpaceMaster</h1>
        <section className="mt-vw w-full col-center p-vw">
          <div className="flex items-center w-full max-w-[30vw] bg-white rounded-2xl border-[2px] border-[#E4EBE4] focus:outline-none">
          <Icon icon="line-md:account-small" className='text-[1.5vw] bg-inherit' />
            <input type="text" placeholder="Username or Email" className="p-[0.7vw] rounded-2xl text-[1vw] focus:outline-none border-none w-full" />
          </div>
          <button className="w-full max-w-[30vw] rounded-full text-white text-center p-[0.8vw] mt-vw font-bold text-vw bg-[#092370] hover:bg-[#092370ee]">Continue with Email</button>
        </section>
        <section className="flex items-center mt-vw">
          <div className="border-b-[2px] border-gray-300 w-[12vw]"></div>
          <span className="text-vw mx-vw bg-white px-vw">or</span>
          <div className="border-b-[2px] border-gray-300 w-[12vw]"></div>
        </section>
        <section className="mt-vw w-full  col-center p-vw">
          <button className="w-full relative max-w-[30vw] row-center rounded-full p-[0.7vw] text-white text-center mt-vw font-bold text-vw bg-[#092370] hover:bg-[#092370]">
          <span className='bg-white absolute top-0 left-0 rounded-full text-[2vw] p-0.5vw'><Icon icon="flat-color-icons:google" className='text-[2vw]' /></span>
             Continue with Google
          </button>
          <div className="flex mt-vw row-center p-[0.7vw] w-full max-w-[30vw] hover:bg-gray-100 bg-white rounded-full border-[2px] border-black focus:outline-none">
          <Icon icon="logos:apple" />
          <button className='text-black ml-[0.4vw] text-vw font-bold '>Continue with Apple</button>
          </div>
        </section>
        <div className="mt-3vw w-full col-center p-vw">
        <section className="flex items-center mt-vw">
          <div className="border-b-[2px] border-gray-400 w-[8vw]"></div>
          <Link to="/signup" className="text-vw mx-vw text-gray-600">Don't have an account?</Link>
          <div className="border-b-[2px] border-gray-400 w-[8vw]"></div>
        </section>
        <button className='text-[1vw] text-white font-bold bg-[#092370] p-[0.7vw] mt-vw rounded-full w-full max-w-[15vw]'>Sign Up</button>
        </div>
        </form>
      </div>
    </main>
  )
}

export default Login