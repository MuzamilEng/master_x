import React from 'react'

const ApproachCard = ({bg, title, titleColor, infoColor, info,icon1Text, icon1, icon2Text, icon2 }) => {
  return (
    <main className={`w-full m-vw flex justify-between items-center max-w-[50vw] ${bg} p-vw rounded-lg`}>
      <section className="w-full max-w-[45vw]">
        <h1 className={`text-[1.5vw] ${titleColor} font-bold`}>{title}</h1>
        <p className={`text-[1vw] mt-[0.5vw] w-full max-w-[25vw] ${infoColor}`}>{info}</p>
      </section>
      <section className="w-full col-center max-w-[7vw]">
      <img src={icon1} alt={icon1Text} className='w-full max-w-[4vw]' />
      <img src={icon2} alt={icon2Text} className='w-full max-w-[4vw] mt-[1vw]' />
      </section>

    </main>
  )
}

export default ApproachCard