import { Icon } from '@iconify/react'
import React from 'react'

const PriceCard = ({title, popular, price, billed, info, bgColor, headingColor, textColor, blueBg}) => {
  return (
    <article className={`w-full max-w-[23vw] ${bgColor} shadow-md p-2vw rounded-2xl`}>
      <div className="flex m-0.5vw p-vw border-b-[1px] border-gray-400 w-full justify-between items-center">
        <h1 className={`${headingColor} text-[1.5vw] font-bold`}>{title}</h1>
        {popular && <p className={`bg-white p-[0.5vw] rounded-2xl w-full max-w-[6vw] text-center text-black font-semibold text-[1vw]`}>{popular}</p>}
      </div>
      <section className='m-0.5vw p-vw col-center border-b-[1px] border-gray-400'>
        <p className={`${textColor} text-[1.5vw] flex items-center font-bold`}><Icon icon="flowbite:dollar-solid" className={`${textColor} text-[1.5vw] font-bold`} />{price}/month</p>
        <p className={`${blueBg} w-full p-[0.5vw] rounded-full ${title === 'Premium' ? 'text-black' : 'text-white'} text-[1vw] text-center font-medium`}>Billed as {billed} per month</p>
      </section>
      <div className="col-center">
        {info && info?.map((item, index)=> <p key={index} className={`${textColor} p-0.5vw text-[1vw]`}>{item}</p>)}
      <button className={`${blueBg} w-full max-w-[8vw] p-[1vw] rounded-full ${title === 'Premium' ? 'text-black hover:bg-gray-200' : 'text-white hover:bg-[#092370e7]'}  text-[1vw] font-medium`}>Get Started</button>
      </div>
    </article>
  )
}

export default PriceCard