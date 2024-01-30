import React from 'react'

const ProfileCard = ({img, title, info}) => {
  return (
    <main className='w-full max-w-[35vw]  bg-gray-200 p-2vw rounded-2xl'>
      <div className="w-full -mt-[5vw] ml-vw max-w-[8vw] rounded-full border-[2px] border-[#092370]">
        <img src={img} alt={title} className='w-full rounded-full' />
      </div>
      <h1 className='text-[1.3vw] font-bold text-black mt-vw'>{title}</h1>
      <p className='text-vw pb-[2vw] text-black font-medium w-full max-w-[30vw]'>{info}</p>
    </main>
  )
}

export default ProfileCard