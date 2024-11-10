import React from 'react'

interface Icardprop {
    title: string,
    techStack: string,
    devName: string,
    devAge: string,
}
const Card = (cardProp:Icardprop) => {
  return (
    <div className=' p-4 h-[300px] w-[360px] items-center bg-white rounded-md gap-2 font-medium'>
      <p className='text-[#722067] font-semibold text-[24px] p-6'>{cardProp.title}</p>
      <p className='text-[24px]'>{cardProp.techStack}</p>
      <p className='text-[24px]'>{cardProp.devName}</p>
      <p className='text-[24px]'>{cardProp.devAge}</p>
    </div>
  )
}

export default Card

