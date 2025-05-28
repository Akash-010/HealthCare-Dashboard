import React from 'react'
import { body } from '../../data/healthData';
import { IoIosArrowRoundForward } from "react-icons/io";

const HealthStatusCard = () => {
  return (
    <div className='absolute top-0 left-full w-[99px] md:w-[119px] lg:h-full lg:w-[160px] xl:w-[247px]'>
              <ul className='h-[340px] p-1 '>
                {body.map((link,index)=>(
                    <li key={index} className=' flex flex-col p-[11px] z-0 mt-1 lg:ml-2 xl:ml-8 md:mt-2 h-[100px] xl:w-2/3  rounded-[20px] bg-[#eff4fa]'>
                        <div className='mt-1 text-xs md:text-sm lg:text-lg font-medium text-[#25207c]'>{link.icon} {link.label} </div>
                        <div className='mt-2 text-[8px] md:text-[10px] lg:text-xs text-slate-400'>Date: {link.date}</div>
                        <div className={`${link.bar} rounded-[15px] p-[3px] md:p-1 mt-2 w-[70px] md:w-[86px] lg:w-[125px]`}></div>
                        <div className={`${link.status}  rounded-[15px] p-[3px] md:p-1 mt-2 w-[52px] md:w-[60px] lg:w-[92px] absolute top-[59px] md:top-[70px] lg:top-[79px] `}></div>
                        <div className={`${link.status} bg-teal-400 rounded-[15px] p-[3px] md:p-1 mt-2 w-[51px] md:w-[63px] lg:w-[90px] absolute top-[163px] md:top-[178px] lg:top-[187px]`}></div>
                        <div className={`${link.status} bg-orange-500 rounded-[15px] p-[3px] md:p-1 mt-2 w-[51px] md:w-[62px] lg:w-[90px] absolute top-[267px] md:top-[286px] lg:top-[295px]`}></div>
                    </li>
                ))}
              </ul>
           <div className=' ml-[40px] md:ml-[60px] lg:ml-[103px] xl:ml-[138px] flex items-center text-xs text-[#25207c]'>Details <IoIosArrowRoundForward className='m-1' /></div>
    </div>
  )
}

export default HealthStatusCard
