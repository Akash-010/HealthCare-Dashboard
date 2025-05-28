import React from "react";
import { calendarAppointments, bottomAppointments } from "../../data/calenderData";
import { RiArrowLeftFill } from "react-icons/ri";
import { RiArrowRightFill } from "react-icons/ri";

const CalendarView = () => {
  return (
    <div className="absolute top-0 left-[241px] md:left-1/2 h-1/2 w-[103px] md:w-1/2 xl:left-[550px] 2xl:left-[598px] bg-[#eff4fa] ">
        <div className="flex items-center gap-[14px] md:gap-[160px] lg:gap-[230px] xl:gap-[400px] p-2 text-[#1e2070]">
         <h2 className="text-[8px] md:text-sm font-semibold lg:pl-6">October 2021 </h2>
         <div className="flex text-xs md:text-base"><RiArrowLeftFill /><RiArrowRightFill /></div>
       </div>
      <ul className="flex items-center justify-evenly">
        {calendarAppointments.map((item,index)=>(
            <li key={index} className={`flex flex-col items-center justify-center py-2 xl:px-[10px]  text-[#1e2070] ${index===1 ? 'bg-[#DDE2F9] rounded-[20px]':''} ${index ===0 ? '': 'hidden md:flex'} ${index===6 ? '':'hidden lg:flex'}`}>
                <div className="mt-1 text-xs font-normal">{item.day}</div>
                <div className="mt-1 font-bold">{item.date}</div>
                <div className={`mt-1 text-xs font-normal p-1 ${index===5||index===6 ? 'bg-slate-400 text-white rounded-[10px] px-3':''}`}>{item.slot1}</div>
                <div className={`mt-1 text-xs font-normal p-1 ${index===1 ? 'bg-[#3b36c1] text-white rounded-[10px] px-3':''} ${index===3 ?'bg-slate-400 text-white rounded-[10px] px-3':''}`}>{item.slot2}</div>
                <div className="mt-1 text-xs font-normal p-1">{item.slot3}</div>
            </li>
        ))}
      </ul>
      <ul className="flex mt-2 ">
        {bottomAppointments.map((item,index)=>(
            <li key={index} className={`p-2 md:ml-4 md:p-4 lg:p-3 lg:mr-3 lg:ml-2 lg:pl-5 2xl:p-5 2xl:mt-4 2xl:ml-6 rounded-[22px] ${index=== 0 ? 'bg-[#3934bf] text-white':'bg-[#DDE2F9] text-[#1e2070]'}  ${index===1 ? '':'hidden lg:block'}`}>
                <div className= 'flex'>
                <div className="text-[10px] md:text-sm font-bold">{item.title}</div>
                <div className="hidden md:block md:ml-6 lg:ml-10 xl:ml-20">{item.icon}</div>
                </div>
                <div className="text-[10px] md:text-sm font-normal">{item.time}</div>
                <div className="text-[10px] md:text-sm font-normal">{item.name}</div>
            </li>
        ))}
      </ul>
    </div>
  );
};

export default CalendarView;





















// className='h-1/2 w-1/2 border border-black'