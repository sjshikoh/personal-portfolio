import React from 'react'
import Image from 'next/image';

const Hero = () => {
  return (
        <section className='h-[697px] mx-auto'>

    <div className='max-w-7xl m-auto '>
      <div className=''>
        
        <h2 className='text-center font-semibold text-[40px] mt-[150px] '>Frontend Developer</h2>

        <h3 className='text-center font-medium text-[35px] m-auto'>
          I design and code beatifully simple things, and I love what I do
        </h3>
      </div>
      <div className='items-center m-auto pl-96 sm:pl-2 md:pl-52 lg:pl-96 '>
         {/* for Image */}
      <Image src={'/shaista1.png'} alt="profile-pic " width={514} height={513} />
      </div>
      {/* <div className='max-w-4xl m-auto'>
        <p className='text-center font-medium text-[30px] p-10'>I have been working  for the past 6 months with 
          Javascript. I have been writing/learning code and 
          I can help developers with best practices as well.</p>
      </div>
       */}
       <div className='items-center m-auto pl-80 sm:pl-2 md:pl-52 lg:pl-80 '>
        <Image src={'/test.png'} alt='devices-pic' width={650} height={513} />
       </div>
     
    </div>
        </section>
  );
}

export default Hero
