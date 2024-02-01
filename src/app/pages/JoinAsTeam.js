import React from 'react'
import { emailForm, joinTeamForm, toggleInfo } from '../Data';
import Layout from '../Layout/Layout'
import { useForm, Controller } from 'react-hook-form'
import { useState } from 'react'
import Hero from '../Component/Common/Hero';
import Questions from '../Component/Queries/Questions';
import { Icon } from '@iconify/react';

const JoinAsTeam = () => {
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
         <Hero title={'Elevate Your Career with Our Global,Remote-First Team'}
          info={'We are a team of smart, driven individuals who are not afraid to raise the bar and meet it with the flair of habitual winners. Wewill give you the platform you need to keep challenging yourself, perfect'}
          />    
      <main className='w-full col-center p-2vw bg-white' >
      <form onSubmit={handleSubmit(onSubmit)} className='w-full bg-[#F3F4F6] col-center max-w-[90vw] rounded-xl p-2vw'>
          {joinTeamForm?.map((item, index)=> {
              return <div className="w-full max-w-[45vw] p-[0.5vw]" key={index}>
                  <label htmlFor={item?.id} className='text-[1.2vw] flex items-center font-medium'> <span className='text-red-600 mt-0.2vw'>*</span>{item?.label} </label>
                  {item?.type === 'textarea' ? 
                     <Controller
                      name={item?.name}
                      control={control}
                      rules={item?.rules}
                      render={({field}) => (
                          <textarea type={item?.type} placeholder={item?.placeholder} {...field}
                           onChange={handleInputChange} rows={6} className='w-full max-w-[45vw] p-[0.7vw] focus:outline-none focus:shadow-md border-[1.5px] border-gray-400 rounded-md mt-0.5vw' ></textarea>
                      )}
                  /> :  item?.type === 'checkbox' ? 
                  <div className="">
                    {item?.options?.map((option, idnex)=>(
                      <div key={idnex} className="flex items-center">
                        <Controller
                     name={item?.name}
                     control={control}
                    //  rules={item?.rules}
                     render={({field}) => (
                         <input type={item?.type} placeholder={item?.placeholder} {...field}
                          onChange={handleInputChange} className='' />
                     )}
                 />
                 <p className='text-vw text-gray-900 font-medium ml-vw'>{option?.label}</p>
                      </div>
                    ))}
                  </div> :
                  <Controller
                  name={item?.name}
                  control={control}
                  rules={item?.rules}
                  render={({field}) => (
                      <input type={item?.type} placeholder={item?.placeholder} {...field}
                       onChange={handleInputChange} className='w-full p-[0.7vw] max-w-[45vw] border-[1.5px] focus:outline-none focus:shadow-md border-gray-400 rounded-md mt-0.5vw spin-button-none' />
                  )}
                 />
                 }   
              </div>
          })}
          <section className='w-full max-w-[45vw]'>
          <label htmlFor={''} className='text-[1.2vw] flex items-center font-medium'> <span className='text-red-600 mt-0.2vw'>*</span>Salary expectation in your currency </label>
          <div className="flex items-center w-full">
            <select className='w-full max-w-[6vw] p-[0.8vw] border-[1.5px] focus:outline-none focus:shadow-md border-gray-400 rounded-md mt-0.5vw spin-button-none'>
              <option className='text-vw' value="select">Select</option>
              <option className='text-vw' value="dollar">dollar</option>
              <option className='text-vw' value="rupee">rupee</option>
            </select>
          <input type={'text'} placeholder={''}
            onChange={handleInputChange} className='w-full ml-0.3vw max-w-[38.5vw] p-[0.7vw] border-[1.5px] focus:outline-none focus:shadow-md border-gray-400 rounded-md mt-0.5vw spin-button-none' />
          </div>
          </section>
          <section className='w-full max-w-[45vw]'>
          <label htmlFor={''} className='text-[1.2vw] flex items-center font-medium'> <span className='text-red-600 mt-0.2vw'>*</span>Tell us about yourself </label>
          <input type={'text'} placeholder={''}
            onChange={handleInputChange} className='w-full max-w-[45vw] ml-0.3vw p-[2vw] border-[1.5px] focus:outline-none focus:shadow-md border-gray-400 rounded-md mt-0.5vw spin-button-none' />
          </section>
          <div className="w-full max-w-[45vw]">
          <label htmlFor={''} className='text-[1.2vw] mt-vw flex items-center font-medium'> <span className='text-red-600 mt-0.2vw'>*</span>Tell us about yourself </label>
          <section className='w-full border-dashed col-center p-3vw mt-vw rounded-md border-[1px] border-gray-950 max-w-[45vw]'>
          <Icon icon="ion:cloud-upload-sharp" className='text-3vw text-black hover:text-gray-800' />
          </section>
          <p className='text-vw text-gray-600 mt-vw'>Select CV file (TXT, PDF or Word DOC)</p>
          </div>
          <div className="w-full max-w-[45vw]">
          <button className='w-full max-w-[45vw] hover:bg-[#021c9cf3] bg-[#021B9C] text-white p-[0.7vw] rounded-full mt-2vw'>Submit</button>
          </div>
      </form>
     
      </main>
    </Layout>
    )
}

export default JoinAsTeam