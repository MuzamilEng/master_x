import React from 'react'
import Layout from '../Layout/Layout'
import { Icon } from '@iconify/react'
import { approach, expertise, helpCards, howitworks, partners, profiles, subscription, toggleInfo, whyChoose } from '../Data'
import HelpCard from '../Component/Cards/HelpCard'
import ApproachCard from '../Component/Cards/ApproachCard'
import PriceCard from '../Component/Cards/PriceCard'
import ProfileCard from '../Component/Cards/ProfileCard'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Questions from '../Component/Queries/Questions'

const Home = () => {
  const settings = { dots: true, arrows: false, infinite: false, speed: 500, slidesToShow: 3, slidesToScroll: 3, autoplay: true, autoplaySpeed: 3000 };

  return (
    <main className='w-full'>
      <Layout>
        <main className="row-center m-auto w-full max-w-[90vw]">
        <article className="w-full flex justify-between items-start p-[2vw] bg-white">
          <section className="w-full max-w-[45vw] p-[1vw]">
            <h1 className="text-[1.2vw] text-[#1B1B1B] font-medium capitalize">Dedicated teams</h1>
            <div className="border-b-[4px] rounded-lg w-[3vw] border-[#092370]"></div>
            <p className="w-full max-w-[40vw] mt-[2vw] capitalize text-[#1B1B1B] leading-[4vw] text-[4vw] font-extrabold">
            Build your <br /><span className="text-[#092370]"> business app </span>
            with <br /> your own <br /><span className='text-[#092370]'>software team</span>
            </p>
            <button className="w-full flex items-center text-vw justify-center max-w-[9vw] hover:bg-white hover:text-[#092370] border-[2px] mt-[2vw] bg-[#092370] text-white p-[0.5vw] rounded-md font-medium">Get started <Icon icon="formkit:arrowright" /></button>
          </section>
          <section className="w-full -ml-[3vw] relative max-w-[40vw]">
              <img src="/img/hero_img.png" alt="home" className="w-full" />
          </section>
        </article>
        </main>
        <article className="row-center m-auto w-full max-w-[85vw]">
          <section className="flex w-full justify-between">
            <div className="w-full">
              <h1 className='text-[2vw] font-bold text-[#1B1B1B]'>We will help you!</h1>
              <p className="text-[1vw] text-[#1B1B1B]">Hard-to-fill tech positions are no longer an issue!</p>
            </div>
            <div className="w-full max-w-[12vw] flex items-center">
            <button className='text-[1vw] bg-white border-[1.5px] text-gray-500 p-[0.5vw] rounded-md font-medium'>prev</button>
            <button className='text-[1vw] ml-[2vw] bg-[#092370] text-white p-[0.5vw] rounded-md font-medium'>next</button>
            </div>
          </section>
        </article>
        <article className="row-center mt-2vw m-auto w-full max-w-[85vw]">
          <div className="grid grid-cols-3 w-full gap-3">
            {helpCards?.map((card, index) => <HelpCard key={index} {...card} />)}
          </div>
        </article>
        <section className="row-center mt-2vw p-[2vw] rounded-lg bg-[#092370] m-auto w-full max-w-[85vw]">
          <div className="w-full">
            <h1 className='text-[2vw] font-bold text-white'>Build A Dedicated Team Now</h1>
            <p className="text-[1vw] text-white w-full max-w-[25vw]">Transform your software development process with our dedicated teams. More efficiency, more success.</p>
          </div>
          <button className="w-full flex items-center text-vw justify-center max-w-[9vw] mt-[2vw] bg-white border-[2px] text-[#092370] hover:bg-[#092370] hover:text-white p-[0.5vw] rounded-md font-semibold">Get started <Icon icon="formkit:arrowright" /></button>
        </section>
        <figure className="flex items-start justify-center w-full mt-2vw p-[4vw] bg-[#1B1B1B]">
          <div className="w-full max-w-[30vw]">
            <h1 className='text-[2vw] w-full max-w-[20vw] leading-[2.5vw] font-bold text-white'>How SpaceMaster Dedicated Team works?</h1>
            <p className="text-[1vw] text-white w-full mt-[0.7vw] max-w-[15vw]">We'll seamlessly integrate software experts, enabling you to quickly increase your development capabilities.</p>
            <button className="w-full flex text-vw border-[2px] border-[#092370] items-center justify-center max-w-[12vw] mt-[2vw] hover:bg-white hover:text-[#092370] bg-[#092370] text-white p-[0.5vw] rounded-md capitalize font-semibold">Build your team <Icon icon="formkit:arrowright" /></button>
          </div>
          <div className="grid grid-cols-2 gap-4 w-full max-w-[50vw]">
            {howitworks?.map((card, index) => (
              <main className={`w-full ${card?.no ? 'bg-[#1B1B1B]' : card?.title === 'Full Transperency' ? 'bg-[#092370]' : ''} h-[15vw] max-w-[25vw] p-[1vw] rounded-md ${card?.title !== '' && 'border-[1px]'}`} key={index}>
                <span className="text-white text-[1.5vw] ml-[1vw] font-bold">{card?.no}</span>
                <img src={card?.icon } alt={card?.title} className='w-full max-w-[3vw]' />
                <h1 className="text-white mt-[0.5vw] text-[1.5vw] font-bold">{card?.title}</h1>
                <p className="text-white w-full max-w-[20vw] text-[1vw] font-medium">{card?.info}</p>
              </main>
            ))}
          </div>
        </figure>
        <main className="row-center relative mt-2vw m-auto w-full max-w-[85vw]">
          <div className="border-[1px] border-gray-400 z-10 absolute top-[10vw] w-full max-w-[65vw] border-dashed rounded-2xl p-vw h-[27vw]"></div>
          <section className="w-full col-center absolute top-[20vw] left-[8vw] bg-white z-20 max-w-[4vw]">
            <img src="/img/star.png" alt="stars" className='w-full' />
            <h1 className='text-vw mt-vw font-bold'>CLIENT</h1>
          </section>
          <section className="w-full col-center absolute top-[20vw] right-[8vw] bg-white z-20 max-w-[4vw]">
            <img src="/img/team2.png" alt="stars" className='w-full' />
            <h1 className='text-vw mt-vw font-bold'>TEAM</h1>
          </section>
          <article className="w-full z-20">
          <h1 className='text-[2vw] text-black font-bold'>Our Customer <span className='text-[#092370]'>Centric Approach</span></h1>
          <div className="col-center p-2vw">
            {approach?.map((card, index) => <ApproachCard key={index} {...card} />)}
          </div>
          </article>
        </main>
        <main className="row-center relative mt-2vw m-auto w-full max-w-[85vw]">
          <article className="w-full z-20">
          <h1 className='text-[2vw] text-black font-bold'>Our <span className='text-[#092370]'>Customer</span></h1>
          <div className="grid grid-cols-3 gap-3 w-full p-2vw">
            {subscription?.map((card, index) => <PriceCard key={index} {...card} />)}
          </div>
          </article>
        </main>
        <main className="row-center relative mt-2vw m-auto w-full max-w-[85vw]">
          <article className="w-full z-20">
          <h1 className='text-[1vw] text-center uppercase text-[#092370] font-medium'>Testimonials</h1>
          <h1 className='text-[2vw] text-center text-black font-bold'>What Clients Express?</h1>
          <div className="grid grid-cols-1 w-full mt-[4vw]">
            <Slider {...settings}>
            {profiles?.map((card, index) => <ProfileCard key={index} {...card} />)}
            </Slider>
          </div>
          </article>
        </main>
        <main className="row-center relative mt-2vw m-auto w-full max-w-[85vw]">
          <article className="w-full z-20">
          <h1 className='text-[2vw] text-black font-bold'>Which expertise will drive <span className='text-[#092370]'>your vision?</span></h1>
           <div style={{color: 'rgba(0, 0, 0, 0.20)'}} className="w-[0.1vw] z-10 -top-[4vw] left-[1.5vw] absolute h-[19vw] bg-[#50575E] translate-y-[50%]"></div>
           <div style={{color: 'rgba(0, 0, 0, 0.20)'}} className="w-[0.1vw] z-10 -top-[4vw] left-[22.9vw] absolute h-[19vw] bg-[#50575E] translate-y-[50%]"></div>
           <div style={{color: 'rgba(0, 0, 0, 0.20)'}} className="w-[0.1vw] z-10 -top-[4vw] left-[44.25vw] absolute h-[19vw] bg-[#50575E] translate-y-[50%]"></div>
           <div style={{color: 'rgba(0, 0, 0, 0.20)'}} className="w-[0.1vw] z-10 -top-[4vw] left-[65.7vw] absolute h-[19vw] bg-[#50575E] translate-y-[50%]"></div>
         <div className="grid grid-cols-4 gap-3 w-full z-20">
          {expertise?.map((item, index) => {
            return <main key={index} className='flex items-center z-20'>
              <img src="/img/list_icon.png" alt={item?.title} className='w-full mt-[1vw] max-w-[3vw]' />
              <h1 className='text-vw mt-vw text-[#1B1B1B] font-medium'>{item?.title}</h1>
            </main>
          })}
         </div>
         <button className="w-full text-vw flex items-center justify-center max-w-[9vw] hover:bg-white hover:text-[#092370] border-[2px] mt-[2vw] bg-[#092370] text-white p-[0.5vw] rounded-md font-medium">Order Team</button>
          </article>
        </main>
        <main className="col-center relative mt-2vw m-auto w-full max-w-[85vw]">
          <h1 className='text-[2vw] text-center text-black font-bold'>Frequently Asked Questions</h1>
          <div className="mt-2vw w-full max-w-[60vw]">
                {toggleInfo?.map((item, index) => (
                  <Questions key={index} title={item?.title} info={item?.info} />
                ))}
              </div>
        </main>
        <main className="col-center relative mt-2vw m-auto w-full max-w-[85vw]">
        <h1 className='text-[2vw] text-black text-center font-bold'>Why Choose <span className='text-[#092370]'>SpaceMaster</span> to Hire Teams Professionals</h1>
          <div className="mt-2vw grid grid-cols-3 gap-3 w-full">
                {whyChoose?.map((item, index) => (
                  <main className='col-center w-full max-w-[30vw]' key={index}>
                    <img src={item?.img} alt={item?.title} className='w-full max-w-[12vw] object-cover' />
                    <h1 className='text-[1.5vw] mt-vw text-[#1B1B1B] font-bold'>{item?.title}</h1>
                    <p className='text-vw w-full max-w-[15vw] text-center font-medium mt-vw'>{item?.info}</p>
                  </main>
                ))}
              </div>
         <p className="w-full flex items-center justify-center text-gray-500 text-vw mt-[2vw] font-medium">Trusted by leading startups and businesses:</p>
         <div className="flex mt-vw justify-evenly items-center w-full max-w-[60vw]">
          {partners?.map((partners, index) =>(
            <div className="w-full max-w-[5vw]" key={index}><img src={partners?.img} alt="partner" className='w-full' /></div>
          ))}
         </div>
        </main>
      </Layout>
    </main>
  )
}

export default Home