import React from 'react'

const AchievementCard = ({icon, no, dot}) => {
  return (
    <section className={`w-full relative max-w-[20vw] ${no ? 'border-l-[1px]' : 'border-l-[1px]  border-t-[1px]'} col-center border-gray-400 p-2vw`}>
        <div className="w-full max-w-[10vw]">
            <img src={icon} alt="achievements" className='w-full' />
            {no && <span className="absolute -bottom-[1.7vw] -left-[0.6vw] z-50 text-4vw font-bold text-[#EE4200]">.</span>}
            {no && dot && <span className="absolute -bottom-[1.7vw] -right-[0.6vw] z-50 text-4vw font-bold text-[#EE4200]">.</span>}
        </div>
    </section>
  )
}

export default AchievementCard