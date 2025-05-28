import React from 'react'
import { FaAngleDown } from "react-icons/fa6";
import img from "../../assests/human-body-frontal_1048-5345.avif"
import HealthStatusCard from './HealthStatusCard';

const AnatomySection = () => {

  return (
    <div className='absolute top-0 left-0 h-full w-[241px] md:w-1/2 md:h-2/3'>
      <header className='flex items-center justify-around gap-12 p-2 lg:gap-24 xl:gap-40 w-full'>
        <h1 className=' font-bold text-lg md:text-2xl lg:text-3xl text-[#25207c] '>Dashboard</h1>
        <span className='flex items-center justify-center text-xs text-[#322c9a] font-medium'>This week <FaAngleDown className='m-2' /></span>
         </header>

        <main className=' flex absolute items-center h-[350px] w-[140px] md:h-5/6 md:w-3/5'>
           <div className='h-full w-full absolute'>
              <div className='hidden lg:block absolute top-[68px] left-[225px] lg:top-[68px] lg:left-[155px] xl:left-[208px] z-10 bg-[#2e2cab] rounded-[12px] text-white lg:text-[8px] xl:text-sm lg:p-2 xl:pr-3 font-normal'>❤️ Healthly Heart</div>
              <div className='hidden lg:block absolute top-[208px] left-6 lg:left-0 xl:left-[18px] z-10 bg-[#02E2EF] rounded-[12px] text-[#2e2cab] lg:text-[10px] xl:text-sm p-2 pr-3 font-medium'>🦵🏻 Healthly Legs</div>
              <img  className='h-[340px] w-[250px] absolute top-2 lg:absolute lg:top-2 xl:left-[50px] z-0 border-2 border-[#eff4fa] rounded-[20px]' src={img} alt="" />
            </div>
            <div><HealthStatusCard/></div>
        </main>
        
    </div>
  )
}

export default AnatomySection;

