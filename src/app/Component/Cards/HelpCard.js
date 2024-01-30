import React from 'react'

const HelpCard = ({icon, img, title, info}) => {
  return (
    <main className='w-full relative max-w-[30vw] bg-[#1B1B1B] rounded-md p-[1vw]'>
      <div className="w-full max-w-[4vw]">
        <img src={icon} alt={title} className='w-full' />
      </div>
      {img && <img src={img} alt={'def'} className='w-full absolute max-w-[5vw] rounded-tr-md top-0 right-0' />}
      <h1 className='text-white font-bold text-[1.3vw] w-full mt-[1vw] max-w-[10vw]'>{title}</h1>
      <p className='text-gray-400 font-medium text-[1vw] w-full mt-[0.5vw] max-w-[25vw]'>{info}</p>
    </main>
  )
}

export default HelpCard