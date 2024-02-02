import React from 'react'
import { Icon } from '@iconify/react'
import { approach, expertise, helpCards, howitworks, partners, profiles, subscription, toggleInfo, whyChoose, willGet } from '../../Data'
import HelpCard from '../../Component/Cards/HelpCard'
import ApproachCard from '../../Component/Cards/ApproachCard'
import PriceCard from '../../Component/Cards/PriceCard'
import ProfileCard from '../../Component/Cards/ProfileCard'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Questions from '../../Component/Queries/Questions'
import Hero from '../../Component/Common/Hero'
import Layout from '../../Layout/Layout'

const Subscription = () => {
  const settings = { dots: true, arrows: false, infinite: false, speed: 500, slidesToShow: 3, slidesToScroll: 3, autoplay: true, autoplaySpeed: 3000 };

  return (
    <main className='w-full'>
      <Layout>
       <Hero title={'Subscribe to Your Dedicated Team'}
          info={'Elevate your business with a subscription to top-tier IT talent. Secure access to a dedicated team ready to transform your projects into digital triumphs. Subscribe now and experience seamless collaboration, innovation, and success, all at your fingertips.'}
          btn={'Join Our Team'}
          />  
      <main className="row-center relative mt-2vw m-auto w-full max-w-[85vw]">
          <article className="w-full z-20">
          <h1 className='text-[2vw] text-black font-bold'>Subscription plan</h1>
          <div className="grid grid-cols-3 gap-3 w-full p-2vw">
            {subscription?.map((card, index) => <PriceCard key={index} {...card} />)}
          </div>
          </article>
        </main>
        <article className="col-center mt-2vw m-auto w-full max-w-[85vw]">
          <div className="grid grid-cols-3 w-full place-content-center place-items-center gap-3">
            {willGet?.slice(0,3).map((card, index) => (
               <main className={`w-full h-[15vw] max-w-[25vw] p-[1vw] rounded-md border-[1px] `} key={index}>
               <img src={card?.icon } alt={card?.title} className='w-full max-w-[3vw]' />
               <h1 className="text-[#092370] mt-[0.5vw] text-[1.5vw] font-bold">{card?.title}</h1>
               <p className="text-gray-600 w-full max-w-[20vw] text-[1vw] font-medium">{card?.info}</p>
             </main>
            ))}
          </div>
        </article>
        <article className="col-center mx-auto mt-2vw mb-3vw w-full max-w-[55vw]">
          <div className="grid grid-cols-2 w-full place-content-center place-items-center gap-3">
            {willGet?.slice(3, 5).map((card, index) => (
               <main className={`w-full h-[15vw] max-w-[25vw] p-[1vw] rounded-md border-[1px] `} key={index}>
               <img src={card?.icon } alt={card?.title} className='w-full max-w-[3vw]' />
               <h1 className="text-[#092370] mt-[0.5vw] text-[1.5vw] font-bold">{card?.title}</h1>
               <p className="text-gray-600 w-full max-w-[20vw] text-[1vw] font-medium">{card?.info}</p>
             </main>
            ))}
          </div>
        </article>
      
      </Layout>
    </main>
  )
}

export default Subscription