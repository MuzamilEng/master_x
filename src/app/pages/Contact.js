import React from 'react'
import { emailForm, toggleInfo } from '../Data';
import Layout from '../Layout/Layout'
import { useForm, Controller } from 'react-hook-form'
import { useState } from 'react'
import Hero from '../Component/Common/Hero';
import Questions from '../Component/Queries/Questions';

const Contact = () => {
  const [emailDetails, setEmailDetails] = useState({name: '', phoneNumber: '', email: '', message: ''})
  const {handleSubmit, control, reset, setValue} = useForm({
      defaultValues: {
          name: '',
          phoneNumber: "",
          email: '',
          message: ''
      }
  })

  const handleInputChange = (e)=> {
      const {name, value} = e.target
      setEmailDetails({...emailDetails, [name]: value})
      setValue(name, value)
  }

  const onSubmit = (data) => {
      console.log(data)
  }
  return (
    <Layout>
         <Hero title={'Build your own software team'}
          info={'Seeking a dynamic development team that can either be a part of your existing workforce or works as an independent extension?'}
          btn={'Order Team'}
          />    
      <main className='w-full flex items-start p-2vw bg-white' >
      <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-[40vw] p-2vw'>
          {emailForm?.map((item, index)=> {
              return <div className="w-full max-w-[35vw] p-[0.5vw]" key={index}>
                  <label htmlFor={item?.id} className='text-[1.2vw] flex items-center font-medium'>{item?.label} <span className='text-red-600 ml-0.3vw mt-0.2vw'>*</span> </label>
                  {item?.type === 'textarea' ? 
                     <Controller
                      name={item?.name}
                      control={control}
                      rules={item?.rules}
                      render={({field}) => (
                          <textarea type={item?.type} placeholder={item?.placeholder} {...field}
                           onChange={handleInputChange} rows={6} className='w-full p-[0.7vw] focus:outline-none focus:shadow-md border-[1.5px] border-gray-400 rounded-md mt-0.5vw' ></textarea>
                      )}
                  /> : 
                  <Controller
                  name={item?.name}
                  control={control}
                  rules={item?.rules}
                  render={({field}) => (
                      <input type={item?.type} placeholder={item?.placeholder} {...field}
                       onChange={handleInputChange} className='w-full p-[0.7vw] border-[1.5px] focus:outline-none focus:shadow-md border-gray-400 rounded-md mt-0.5vw spin-button-none' />
                  )}
                 />
                 }   
              </div>
          })}
          <div className="w-full mb-2vw -ml-vw relative max-w-[35vw]">
          <button className='w-full max-w-[10vw] absolute right-0 hover:bg-[#021c9cf3] bg-[#021B9C] text-white p-[0.7vw] rounded-md mt-2vw'>Submit</button>
          </div>
      </form>
      <section className='w-full mt-2vw'>
      <h1 className='text-[#092370] font-bold text-[2.5vw] w-full'>Get in touch.</h1>
      <p className='text-[1.3vw] text-black font-medium'>Looking for more information about hiring <span className='text-[#092370] font-semibold'>remote developers?</span></p>
      <p className='text-[1.3vw] mt-2vw text-gray-700 font-semibold'>Sales Inquiries</p>
      <p className='text-[1.3vw] text-[#092370] mt-0.5vw '>+1 (858) 586 7777</p>
      <p className='text-[1.3vw] mt-2vw text-gray-700 font-semibold'>Business Inquiries</p>
      <p className='text-[1.3vw] text-[#092370] mt-0.5vw '>adam@vteams.com</p>
      <p className='text-[1.3vw] mt-2vw text-gray-700 font-semibold'>Mailling Address</p>
      <p className='text-[1.3vw] text-[#092370] mt-0.5vw '>Division of Nextwerk Inc. 6790 Embarcadero Ln, Ste 100, Carlsbad, <br />A 92011, USA</p>
      </section>
      </main>
      <main className="col-center relative mt-3vw m-auto w-full max-w-[85vw]">
          <h1 className='text-[2.3vw] text-center text-black font-bold'>Frequently Asked Questions</h1>
          <div className="mt-2vw w-full max-w-[60vw]">
                {toggleInfo?.map((item, index) => (
                  <Questions key={index} title={item?.title} info={item?.info} />
                ))}
              </div>
        </main>
    </Layout>
    )
}

export default Contact