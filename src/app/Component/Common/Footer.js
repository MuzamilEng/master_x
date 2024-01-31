import React from 'react'
import { Link } from 'react-router-dom'
import { space_footer } from '../../Data'

const Footer = () => {
  return (
    <> 
    <footer className='bg-[#1B1B1B] p-4vw w-full'>
        <main className="grid grid-cols-6 gap-[2vw]">
            {space_footer?.map((item, index)=> {
                return <div className='w-full max-w-[20vw] p-vw' key={index}>
                  { item?.img &&<div className="w-full h-[7vw]">
                  <img src={item?.img} alt="spacemaster" className='w-full max-w-[10vw]'/>
                  </div>}
                    <h1 className='text-[1.2vw] text-white'>{item?.title}</h1>
                    <p className='text-[1vw] mt-[1vw] text-gray-300 w-full max-w-[18vw]'>{item?.info}</p>
                    <section className='-ml-[1.3vw]'>{item?.lists?.map((list, idnex)=> (
                        <div className="w-full flex items-center p-0.5vw" key={idnex}>
                            <Link className='flex items-center hover:underline text-white'>
                               <span className='text-white text-vw'>{list?.icon}</span>
                                <span className='ml-[1vw] text-white text-vw'>{list?.title}</span>
                            </Link>
                        </div>
                    ))}</section>
                </div>
            })}
        </main>
            <div className='w-full border-t-[1px] border-gray-300 p-vw flex justify-between text-center'>
              <p className='text-white text-vw'>© 2024 | All rights reserved.</p>
              <ul className="flex items-center w-full max-w-[35vw] justify-evenly">
                <li className="text-vw list-disc text-white">Testimonials</li>
                <li className="text-vw list-disc text-white">Startups</li>
                <li className="text-vw list-disc text-white">Press Kit</li>
                <li className="text-vw list-disc text-white">Privacy Policy</li>
                <li className="text-vw list-disc text-white">Terms of Use</li>
              </ul>
            </div>
    </footer>
    </>
  )
}

export default Footer