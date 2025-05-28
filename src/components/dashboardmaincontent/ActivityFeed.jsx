import React from 'react'

const ActivityFeed = () => {

    const activityData = [
        {teal:"bg-[#3ccdd4]",blue:"bg-[#6382e7]",slate:"bg-slate-300"},
    ];
    
    const days = [
        {day:"Mon"},
        {day:"Tues"},
        {day:"Wed"},
        {day:"Thurs"},
        {day:"Fri"},
        {day:"Sat"},
        {day:"Sun"},
      ]
  return (
    <div className='absolute top-[420px] md:top-2/3 left-0 md:h-1/3 md:w-1/2 w-[241px] 2xl:left-[20px]'>
       <footer className=" bg-[#eff4fa] rounded-[30px] md:p-3 xl:w-11/12">
            <div className='flex items-center justify-around pt-1'>
             <h2 className=" text-sm md:text-sm lg:text-lg font-semibold text-gray-800 md:mr-9 xl:mr-56 ">Activity</h2>
             <p className="text-xs lg:text-sm text-gray-500">3 appointments on this week</p>
            </div>

      <ul className="py-2 lg:p-1 mt-1">
        {activityData.map((item, index) => (
          <li key={index} className='flex items-center justify-evenly '>
            <section className="flex items-center ">
            <div className={`w-1 h-24  ${item.slate} mx-[2px] md:mx-[3px] xl:mx-[7px] rounded-[30px]`}></div>
            <div className={`w-1 h-16  ${item.teal} mx-[2px] md:mx-[3px] xl:mx-[7px] rounded-[30px] `}></div>
            <div className={`w-1 h-8  ${item.slate} mx-[2px] md:mx-[3px] xl:mx-[7px] mr-1 rounded-[30px] `}></div>
            <div className={`w-1 h-12  ${item.slate} mx-[2px] md:mx-[3px] xl:mx-[7px] rounded-[30px] `}></div>
            </section>
             <section className="flex items-center ">
            <div className={`w-1 h-24  ${item.blue} mx-[2px] md:mx-[3px] xl:mx-[7px] rounded-[30px]`}></div>
            <div className={`w-1 h-16  ${item.blue} mx-[2px] md:mx-[3px] xl:mx-[7px] rounded-[30px] `}></div>
            <div className={`w-1 h-8  ${item.slate} mx-[2px] md:mx-[3px] xl:mx-[7px] mr-1 rounded-[30px] `}></div>
            <div className={`w-1 h-12  ${item.teal} mx-[2px] md:mx-[3px] xl:mx-[7px] rounded-[30px] `}></div>
            </section>
             <section className="flex items-center ">
            <div className={`w-1 h-24  ${item.slate} mx-[2px] md:mx-[3px] xl:mx-[7px] rounded-[30px]`}></div>
            <div className={`w-1 h-16  ${item.slate} mx-[2px] md:mx-[3px] xl:mx-[7px] rounded-[30px] `}></div>
            <div className={`w-1 h-8  ${item.teal}   mx-[2px] md:mx-[3px] xl:mx-[7px] mr-1 rounded-[30px] `}></div>
            <div className={`w-1 h-12  ${item.blue}  mx-[2px] md:mx-[3px] xl:mx-[7px] rounded-[30px] `}></div>
            </section>
             <section className="flex items-center ">
            <div className={`w-1 h-24  ${item.slate} mx-[2px] md:mx-[3px] xl:mx-[7px] rounded-[30px]`}></div>
            <div className={`w-1 h-16  ${item.blue} mx-[2px] md:mx-[3px] xl:mx-[7px] rounded-[30px] `}></div>
            <div className={`w-1 h-8  ${item.slate} mx-[2px] md:mx-[3px] xl:mx-[7px] mr-1 rounded-[30px] `}></div>
            <div className={`w-1 h-12  ${item.slate} mx-[2px] md:mx-[3px] xl:mx-[7px] rounded-[30px] `}></div>
            </section>
            <section className="flex items-center ">
            <div className={`w-1 h-24  ${item.blue} mx-[2px] md:mx-[3px] xl:mx-[7px] rounded-[30px]`}></div>
            <div className={`w-1 h-16  ${item.teal} mx-[2px] md:mx-[3px] xl:mx-[7px] rounded-[30px] `}></div>
            <div className={`w-1 h-8  ${item.slate} mx-[2px] md:mx-[3px] xl:mx-[7px] mr-1 rounded-[30px] `}></div>
            <div className={`w-1 h-12  ${item.blue} mx-[2px] md:mx-[3px] xl:mx-[7px] rounded-[30px] `}></div>
            </section>
            <section className="flex items-center ">
            <div className={`w-1 h-24  ${item.slate} mx-[2px] md:mx-[3px] xl:mx-[7px] rounded-[30px]`}></div>
            <div className={`w-1 h-16  ${item.slate} mx-[2px] md:mx-[3px] xl:mx-[7px] rounded-[30px] `}></div>
            <div className={`w-1 h-8  ${item.teal}  mx-[2px]  md:mx-[3px] xl:mx-[7px] mr-1 rounded-[30px] `}></div>
            <div className={`w-1 h-12  ${item.blue}  mx-[2px] md:mx-[3px] xl:mx-[7px] rounded-[30px] `}></div>
            </section>
             <section className="flex items-center ">
            <div className={`w-1 h-24  ${item.slate} mx-[2px] md:mx-[3px] xl:mx-[7px] rounded-[30px]`}></div>
            <div className={`w-1 h-16  ${item.teal} mx-[2px]  md:mx-[3px] xl:mx-[7px] rounded-[30px] `}></div>
            <div className={`w-1 h-8  ${item.slate} mx-[2px] md:mx-[3px] xl:mx-[7px] mr-1 rounded-[30px] `}></div>
            <div className={`w-1 h-12  ${item.blue} mx-[2px] md:mx-[3px] xl:mx-[7px] rounded-[30px] `}></div>
            </section>
          </li>
        ))}
      </ul>

      <ul className='flex items-center justify-evenly'>
        {days.map((item,index)=>(
            <li key={index} className='text-xs pb-1 md:text-sm'>
                <div>{item.day}</div>
            </li>
        ))}
      </ul>
    </footer>
    </div>
  )
}

export default ActivityFeed
