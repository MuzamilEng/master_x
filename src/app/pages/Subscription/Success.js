import React from 'react'
import Layout from '../../Layout/Layout'
import { Icon } from '@iconify/react'

const Success = () => {
  return (
    <main className='w-full'>
      <Layout>
        <article className="w-full col-center p-3vw">
        <Icon icon="teenyicons:tick-circle-outline" className="text-green-400 font-thin text-12vw" />
          <h1 className='text-3vw text-[#092370] text-center font-bold'>You Successfully Subscribe</h1>
          <p className='w-full text-center text-[1.1vw] font-medium text-[#092370] max-w-[60vw]'>You've just subscribed to our elite tier for orchestrating business software ideas with a powerhouse team. Get ready to lead the way in innovation and efficiency</p>
          <button className="w-full flex items-center text-vw justify-center max-w-[9vw] hover:bg-white hover:text-[#092370] border-[2px] mt-[2vw] bg-[#092370] text-white p-[0.5vw] rounded-md font-medium">Continue</button>
        </article>
      </Layout>
    </main>
  )
}

export default Success