import React from 'react'
import { Icon } from '@iconify/react'
import { approach, expertise, helpCards, howitworks, partners, profiles, subscription, toggleInfo, whyChoose } from '../../Data'
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
       <Hero title={'Subscribe to Your Dedicated Team'}
          info={'Elevate your business with a subscription to top-tier IT talent. Secure access to a dedicated team ready to transform your projects into digital triumphs. Subscribe now and experience seamless collaboration, innovation, and success, all at your fingertips.'}
          btn={'Join Our Team'}
          />  
      <Layout>
      <main className="row-center relative mt-2vw m-auto w-full max-w-[85vw]">
          <article className="w-full z-20">
          <h1 className='text-[2vw] text-black font-bold'>Subscription plan</h1>
          <div className="grid grid-cols-3 gap-3 w-full p-2vw">
            {subscription?.map((card, index) => <PriceCard key={index} {...card} />)}
          </div>
          </article>
        </main>
        <article className="row-center mt-2vw m-auto w-full max-w-[85vw]">
          <div className="grid grid-cols-3 w-full gap-3">
            {helpCards?.map((card, index) => <HelpCard key={index} {...card} />)}
          </div>
        </article>
      
      </Layout>
    </main>
  )
}

export default Subscription