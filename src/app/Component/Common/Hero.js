import React from 'react'

const Hero = ({title, info, btn}) => {
  return (
    <article className='w-full relative h-[30vw] p-2vw bg-[#021B9C] col-center'>
      <div className="w-full max-w-[30vw] absolute bottom-0 right-0">
        <img src="/img/hero_com.png" alt="hero image" className='w-full' />
      </div>
      <h1 className='text-[3.5vw] font-bold capitalize text-white w-full max-w-[40vw] leading-[3.5vw] text-center'>{title}</h1>
      <p className='text-[1.3vw] mt-vw text-white w-full max-w-[50vw] text-center'>{info}</p>
      {btn && <button className="w-full text-vw flex items-center justify-center max-w-[9vw] bg-white text-[#092370] border-[2px] mt-[2vw] hover:bg-[#092370] hover:text-white p-[0.5vw] rounded-md font-medium">{btn}</button>}
    </article>
  )
}

export default Hero