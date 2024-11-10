import React from 'react'
import Card from '@/components/card';

const About = () => {
  return (
    <section className='h-[697px] mx-auto'>

     
      <div className='max-w-4xl m-auto'>
        <h3 className='text-center font-semibold text-[35px] p-10 tracking-wide'>Hi, I am Shaista.</h3>
        <p className='text-center font-medium text-[30px] p-10'>
          Begining my journey as a freelance developer. I would love to remote
          work for agencies, consult for startups, and collaborate with talented
          people to create digital products for both business and consumer use.
          I am quietly confident, naturally curious, and perpetually working on
          improving my chops.
        </p>
      </div>
      
    <div>
      <p className='text-center font-medium text-[24px] p-10 '>I like to code things from scratch, and enjoy bringing ideas to life.</p>
    </div>
    <div className='max-w-7xl mx-auto  justify-center'>
      <div className='max-w-7xl mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center w-full text-center text-slate-800 sm:gap-4 md:gap-2 sm:mx-8'>
        <Card title='Things I Enjoy Designing' techStack='Design Tools' devName='' devAge='Figma'/>
        <Card title='Languages I speak' techStack='HTML' devName='CSS' devAge='TypeScript'/>
        <Card title='Dev Tools' techStack='VS Code' devName='Tailwind CSS' devAge='Github'/>
      </div>

    </div>
    </section>
  )
}

export default About
