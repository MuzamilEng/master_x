import React from 'react'
import Topbar from '../../Component/Common/Topbar';
import Navbar from '../../Component/Common/Navbar';
import { Icon } from '@iconify/react';
import { priceDetails } from '../../Data';

const PaymentCheckout = () => {
  return (
    <main className='w-full'>
      <Topbar />
      <Navbar />
      <article className='w-full flex justify-center items-start border-2 p-2vw'>
        <section className='bg-[#F3F4F6] border-[1px] w-full max-w-[40vw] rounded-xl p-3vw'>
          <div className="w-full max-w-[40vw]">
          <h1 className='text-[1.7vw] font-bold'>Payment</h1>
          <p className='text-gray-500 text-[1.1vw]'>All transactions are secure and encrypted.</p>
          <div className="w-full mt-vw">
           <main className='rounded-t-lg border-[1px]'>
           <section className="flex items-center bg-white rounded-t-lg border-b-[1px] p-0.5vw justify-between w-full">
              <div className="flex items-center">
                <img src="/img/On.png" alt="card" className='w-[1vw]' />
                <p className='text-[1.1vw] font-medium ml-[1vw]'>Card</p>
              </div>
              <img src="/img/cards.png" alt="cards" className='w-full max-w-[9vw]' />
            </section>
            <div className="mt-vw border-b-[1px] border-gray-400 pb-vw col-center">
            <input type="text" placeholder="Card Number" className="p-[0.7vw] w-full max-w-[32vw] rounded-lg border-[1px] border-gray-300 text-[1vw] focus:outline-none" />
            <input type="text" placeholder="Name on Card" className="p-[0.7vw] mt-vw w-full max-w-[32vw] rounded-lg border-[1px] border-gray-300 text-[1vw] focus:outline-none" />
            <div className="w-full max-w-[32vw] flex justify-between items-center">
            <input type="text" placeholder="Expiration date (MM/YY)" className="p-[0.7vw] mt-vw w-full max-w-[15vw] rounded-lg border-[1px] border-gray-300 text-[1vw] focus:outline-none" />
            <input type="text" placeholder="Secure Card" className="p-[0.7vw] mt-vw w-full max-w-[15vw] rounded-lg border-[1px] border-gray-300 text-[1vw] focus:outline-none" />
            </div>
            </div>
            <section className='w-full bg-white'>
              <div className="flex w-full p-vw border-b-[1px] border-gray-500">
                <input type="radio" className="w-[1vw] h-[1vw] mr-vw" />
                <img src="/img/Paypal.png" alt="paypal" className='w-[3vw]' />
              </div>
              <div className="flex w-full p-vw border-b-[1px] border-gray-500">
                <input type="radio" className="w-[1vw] h-[1vw] mr-vw" />
                <img src="/img/afterpay.png" alt="paypal" className='w-[3vw]' />
              </div>
            </section>
           </main>
            <p className="flex p-[1.6vw] mt-[2vw] border-t-[1px] border-gray-400 border-b-[1px] justify-between items-center">
              <h1 className='text-[1.1vw] font-bold'>Total</h1>
              <p className='text-[1.5vw] font-bold '> <span className='text-gray-500 text-vw'>USD</span>$30.99</p>
            </p>
            <div className="flex p-0.5vw mt-0.5vw items-center w-full">
              <input type="checkbox" className="w-[1vw] h-[1vw] mr-vw text-blue-900" />
              <p className='text-[1vw]'>Please check to acknowledge  <span className='text-[#092370] font-medium'>Privacy/terms policy</span></p>
            </div>
            <button className='w-full p-[1vw] row-center text-center mt-2vw rounded-md hover:bg-[#092370fd] bg-[#092370] text-white text-[1.2vw] font-medium'><Icon icon="ion:card-outline" className='text-white' /> Pay $49.00</button>
          </div>
          </div>
        </section>
        <section className='bg-[#F3F4F6] w-full max-w-[30vw] ml-2vw border-[1px] rounded-xl p-3vw'>
        <h1 className='text-[1.7vw] font-bold'>details of the subscriptions</h1>
        <div className="mt-vw col-center">
          {priceDetails?.map((item, index)=> (
            <main className={`w-full max-w-[33vw] mt-vw p-[0.8vw] border-[1px] ${item?.title === 'Premium' ? 'bg-[#092370]' : 'bg-[#ffff]'} border-gray-900 rounded-2xl`} key={index}>
              <h1 className={`text-[1.2vw] ${item?.title === 'Premium' ? 'text-white' : 'text-black'} font-bold`}>{item?.title}</h1>
              <div className="flex items-center">
                <input type="radio" className="w-[1vw] border-black h-[1vw] mr-0.5vw" />
                <p className={`text-[1.5vw] ${item?.title === 'Premium' ? 'text-white' : 'text-black'} font-medium`}>{item?.info}</p>
              </div>
              <p className={`text-[1.2vw] ${item?.title === 'Premium' ? 'text-white' : 'text-black'} font-semibold`}>{item?.members}</p>
            </main>
          ))}
        </div>  
        </section>
      </article>
    </main>
  )
}

export default PaymentCheckout