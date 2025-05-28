import { TbLayoutDashboardFilled} from 'react-icons/tb';
import { MdOutlineChangeHistory} from 'react-icons/md';
import { SlCalender} from 'react-icons/sl';
import { IoAddCircleSharp,IoCall} from 'react-icons/io5';
import { FcStatistics} from 'react-icons/fc';
import { AiOutlineMessage} from 'react-icons/ai';
import { IoSettingsOutline} from 'react-icons/io5';


export const genreal_section = [
    { label: 'Dashboard', icon: TbLayoutDashboardFilled  },
    {label:"History",icon:MdOutlineChangeHistory},
    {label:"Calender",icon:SlCalender},
    {label:"Appointments",icon:IoAddCircleSharp},
    {label:"Statistics",icon:FcStatistics},
];

export const tools_section = [
    {label:"Chat",icon:AiOutlineMessage},
    {label:"Support",icon:IoCall},
];

export const setting_section = [
    {label:"Setting",icon:IoSettingsOutline}
];
