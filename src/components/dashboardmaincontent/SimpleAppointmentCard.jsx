import React from 'react'

const SimpleAppointmentCard = ({title,icon,time,className}) => {
  return (
    <div className={`${className} flex  flex-col p-2 md:p-4 lg:mr-2 lg:mt-1 xl:mt-4 bg-[#DDE2F9] rounded-[15px] md:rounded-[25px] text-[10px] md:text-sm text-[#2F2A54]`}>
    <div className='flex md:font-medium'>
      <div className={``}>{title}</div>
      <div className=' hidden md:block md:ml-9'>{icon}</div>
      </div>
      <div className='mt-1'>{time}</div>
    </div>
  )
}

export default SimpleAppointmentCard
