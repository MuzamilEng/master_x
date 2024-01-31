import React from 'react'

const HelpCard = ({icon, img, title, info, bg_gray}) => {
  return (
    <main className={`w-full relative max-w-[30vw] ${bg_gray ? 'bg-[#E6E6E6]' : 'bg-[#1B1B1B]'} rounded-md p-[1vw]`}>
      <div className="w-full max-w-[4vw]">
        <img src={icon} alt={title} className='w-full' />
      </div>
      {img && <img src={img} alt={' '} className='w-full absolute max-w-[5vw] rounded-tr-md top-0 right-0' />}
      <h1 className={`${bg_gray ? 'text-black max-w-[15vw]' : "text-white max-w-[10vw]"} font-bold text-[1.3vw] w-full mt-[1vw] `}>{title}</h1>
      <p className={`${bg_gray? 'text-black': "text-gray-400"} font-medium text-[1vw] w-full mt-[0.5vw] max-w-[25vw]`}>{info}</p>
    </main>
  )
}

export default HelpCard