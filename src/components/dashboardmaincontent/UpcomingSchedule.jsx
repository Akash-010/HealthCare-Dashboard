import React from 'react'
import { appointments } from '../../data/appointments'
import SimpleAppointmentCard from './SimpleAppointmentCard'

const UpcomingSchedule = () => {
  return (
    <div className='absolute top-1/2 left-[241px] md:left-1/2 xl:left-[550px] 2xl:left-[598px] bg-[#eff4fa] w-[103px] md:w-1/2 h-1/2 rounded-br-[30px]'>
        <h2 className='font-semibold text-xs md:text-base text-[#2F2A54] pl-2 pt-2 md:pl-5'>The Upcoming Schedule</h2>

        <div className=''>
            {appointments.map((item,index) =>(
                <div key={index} className='pl-2 md:pl-5 mt-3 md:mt-4'>
                    <h2 className=' text-slate-400 text-xs md:text-sm'>{item.day}</h2>

                    <div className='flex gap-4'>
                        {item.schedule.map((req,idx)=>(
                            <SimpleAppointmentCard key={idx}{...req}className={idx===1 ? '':'hidden lg:block'}/>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default UpcomingSchedule
