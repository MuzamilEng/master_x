import React from 'react'
import { Icon } from '@iconify/react';

const Questions = ({title, info}) => {
    const [show, setShow] = React.useState(false)
  return (
    <div>
        <div className="w-full m-[1.6vw] bg-white">
            <div onClick={() => setShow(!show)} className={`flex justify-between border-b-[1px] border-gray-200 cursor-pointer items-center p-vw`}>
                <h1 className={` ${show ? 'text-[#092370]': 'text-black'} text-[1.1vw] font-medium `}>{title}</h1>
                <div className="flex items-center cursor-pointer" onClick={() => setShow(!show)}>
                    {show? <Icon icon="iconamoon:arrow-up-2-light" className='text-[#092370] text-[1.3vw]'/> : <Icon icon="ep:arrow-down" className='text-[1.3vw] text-[#152347]' />}
                </div>
            </div>
            {show && <p className='p-2vw text-vw text-black'>{info}</p> }
        </div>
    </div>
  )
}

export default Questions