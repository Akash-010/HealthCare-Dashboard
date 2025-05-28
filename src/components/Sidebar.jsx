import {genreal_section, setting_section, tools_section} from "../data/navigation"

const Sidebar = () => {
  return (
    <div className='bg-[#eff4fa] h-[110vh] md:h-[87vh] w-[64px] md:w-1/5 md:pl-[70px] rounded-bl-[30px]'>
      <h1 className='hidden md:block pt-2 text-slate-300'>General</h1>
        <ul className='h-2/5 w-full'>
          {genreal_section.map((link,index)=>{
            const Icon = link.icon
            return(
            <li key={index} className={`flex items-center justify-start pl-1 pt-1 ${index===0 ? 'text-blue-900':'text-slate-400'}`}>
              <Icon className='m-3 lg:m-0'/>
              <span className='hidden md:hidden lg:block p-3 '>{link.label}</span>
            </li>
)})} 
        </ul>
        <h1 className=' hidden md:block text-slate-300 pt-7'>Tools</h1>
        <ul className='h-1/5 w-full'>
          {tools_section.map((link,index)=>{
            const Icon = link.icon
            return(
              <li key={index} className='flex items-center justify-start pl-1 pt-1 text-slate-400'>
              <Icon className="m-3 lg:m-0"/>
              <span className='hidden md:hidden lg:block p-3'>{link.label}</span>
              </li>
            )
          })}
        </ul>
        <ul className='h-2/5 w-full'>
          {setting_section.map((link,index)=>{
            const Icon = link.icon
            return (
              <li key={index} className='flex items-center justify-start pl-1 pt-[80px] text-slate-400'>
                <Icon className="m-3 lg:m-0"/>
                <span className='hidden md:hidden lg:block p-3'>{link.label}</span>
              </li>
              
            )
          })}
          <li></li>
        </ul>
    </div>
  )
}

export default Sidebar;
