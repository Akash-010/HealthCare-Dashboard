import React from 'react'
import { MdAddBox } from "react-icons/md";
import { FaBell, FaSearch } from "react-icons/fa";


const Header = () => {
  return (
    <div className='
  flex items-center h-20 
  md:flex-row md:items-center md:h-20  md:rounded-[30px]
'>
  <section className='
    flex items-center justify-center bg-[#eff4fa] h-full w-full rounded-tl-[30px]
    md:w-1/5 md:rounded-tl-[30px]
  '>
    <div className='text-[#3ccdd4] text-xs font-bold md:text-lg lg:text-2xl'>
      Health<span className='text-[#1F1647]'>care.</span>
    </div>
  </section>

      <section className='flex flex-col items-center justify-center bg-[#FFFFFF] h-full w-full mt-2 md:w-2/5'>
        <div className=' flex items-center h-full w-full md:h-3/5 xl:w-11/12 rounded-md'>
        <FaSearch className="text-gray-500 ml-6"/> 
        <input className='md:h-full md:w-4/5 md:ml-4 border-none outline-none' type="search" placeholder=' Search' />
        <FaBell  className="text-[#352DA4] md:ml-6 text-[20px]" />
        </div>
      </section>

      <section className='flex items-center justify-end bg-[#eff4fa] h-full w-full rounded-tr-[30px] md:w-2/5 gap-2'>
        <span className=' flex items-center justify-center rounded-md ml-3 text-base md:text-2xl bg-[#3ccdd4] h-9 w-9'>🧒🏻</span>
        <span className='text-[#3732A7] md:mr-16 text-[47px] '><MdAddBox/></span>
      </section>
    </div>
  )
}

export default Header;
