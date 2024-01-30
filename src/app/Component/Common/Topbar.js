import React from 'react'
import { topbar } from '../../Data'
import { Link } from 'react-router-dom'

const Topbar = () => {
  return (
    <main style={{ background: 'rgba(0, 0, 0, 0.20)' }} className='w-full p-[0.5vw]'>
      <section className="flex items-center justify-evenly w-full max-w-[40vw] mr-[5vw] ml-auto">
        {topbar?.map((item, index) => (
          <Link key={index} to={item?.link} className="flex items-center">
            {item?.title === 'support@revelio.com' && <div style={{color: 'rgba(0, 0, 0, 0.20)'}} className="w-[0.1vw] mr-[1.5vw] -mt-[1.5vw] h-[1.7vw] bg-[#50575E] translate-y-[50%]"></div>}
            <p className={`text-[1.2vw] ${item?.title ? 'text-[1.5vw]' : 'text-white bg-[#1B1B1B] p-[0.4vw]'} rounded-full`}>{item?.icon}</p>
            <p className="text-[1vw] ml-[0.5vw] font-medium text-[#50575E]">{item?.title}</p>
            </Link>
        ))}
      </section>
    </main>
  )
}

export default Topbar