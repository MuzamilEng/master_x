import React, { useState } from 'react'
import Topbar from '../../Component/Common/Topbar'
import Navbar from '../../Component/Common/Navbar'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'

const Signup = () => {
  const [show, setShow] = useState(false)
  return (
    <main className='w-full'>
    <Topbar />
    <Navbar />
    <div className='w-full col-center p-2vw max-w-[90vw] m-auto'>
      <form className="w-full max-w-[50vw] boredr-[1px] bg-[#F8F8F8] rounded-xl col-center">
      <h1 className='text-[3vw] capitalize text-center leading-[3.5vw] text-black mt-vw font-bold'>Sign up to Build your own <span className="text-[#092370]">software team</span></h1>
      <section className="mt-vw w-full  col-center p-vw">
        <div className="flex mt-vw row-center p-[0.7vw] w-full max-w-[45vw] hover:bg-gray-100 bg-white rounded-full border-[2px] border-black focus:outline-none">
        <Icon icon="logos:apple" />
        <button className='text-black ml-[0.4vw] text-vw font-bold '>Continue with Apple</button>
        </div>
        <button className="w-full relative max-w-[45vw] row-center rounded-full p-[0.7vw] text-white text-center mt-vw font-bold text-vw bg-[#092370] hover:bg-[#092370]">
        <span className='bg-white absolute top-0 left-0 rounded-full text-[2vw] p-0.5vw'><Icon icon="flat-color-icons:google" className='text-[2vw]' /></span>
           Continue with Google
        </button>
      </section>
      <section className="flex items-center mt-vw">
        <div className="border-b-[2px] border-gray-300 w-[17vw]"></div>
        <span className="text-vw mx-vw bg-white px-vw">or</span>
        <div className="border-b-[2px] border-gray-300 w-[17vw]"></div>
      </section>
      <section className="mt-vw w-full col-center max-w-[47vw] p-vw">
        <div className="flex items-center justify-between w-full">
          <input type="text" placeholder="First name" className="w-full max-w-[20vw] bg-white p-[0.7vw] rounded-2xl border-[2px] border-[#E4EBE4] focus:outline-none" />
          <input type="text" placeholder="Last name" className="w-full max-w-[20vw] bg-white p-[0.7vw] rounded-2xl border-[2px] border-[#E4EBE4] focus:outline-none" />
        </div>
        <input type="email" placeholder="email" className="w-full max-w-[45vw] mt-vw bg-white p-[0.7vw] rounded-2xl border-[2px] border-[#E4EBE4] focus:outline-none" />
        <div className="flex items-center w-full max-w-[45vw] bg-white rounded-2xl mt-vw border-[2px] border-[#E4EBE4] focus:outline-none">
            <input type={`${show ? 'text': 'password'}`} placeholder="Password (8 or more characters)" className={`p-[0.7vw] rounded-2xl text-[1vw] focus:outline-none border-none w-full`} />
          <Icon icon={`${show ? 'iconamoon:eye-thin' : 'mdi:eye-off'}`} className='text-[1.5vw] -ml-[3vw] bg-inherit' onClick={()=> setShow(!show)} />
          </div>
          <select className='w-full max-w-[45vw] mt-vw bg-white p-[0.7vw] rounded-2xl border-[2px] border-[#E4EBE4] focus:outline-none'>
            <option className='text-vw text-gray-800' value="0">Choose</option>
            <option className='text-vw text-gray-800' value="1">United State</option>
            <option className='text-vw text-gray-800' value="2">Pakistan</option>
          </select>
          <div className="flex w-full mt-vw items-center">
            <input type="checkbox" className='text-[1.5vw] text-[#092370]' />
            <p className='text-vw text-gray-900 ml-vw font-medium'>Send me emails with tips on how to find the telant that fits my need</p>
          </div>
          <div className="flex w-full mt-vw items-start">
            <input type="checkbox" className='text-[1.5vw] mt-0.5vw text-[#092370]' />
            <p className='text-vw text-gray-900 ml-vw font-medium'>Yes i understand and agree to the <Link className='text-[#092370]'>Upwork Terms of Service</Link>, including the <Link className='text-[#092370]'>User Agreement</Link> and <Link className='text-[#092370]'>Privacy Policy</Link></p>
          </div>
        <button className="w-full max-w-[45vw] rounded-full text-white text-center p-[0.8vw] mt-vw font-bold text-vw bg-[#092370] hover:bg-[#092370ee]">Create my account</button>
      </section>
      <p className="text-vw w-full text-center mx-vw font-medium text-gray-600">Already have an account? <Link to="/login" className="text-blue-900 font-medium text-vw">Login</Link></p>
      </form>
    </div>
  </main>  )
}

export default Signup