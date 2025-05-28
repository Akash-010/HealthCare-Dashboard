import DashboardOverview from './DashboardOverview'
import ActivityFeed from './ActivityFeed'
import UpcomingSchedule from './UpcomingSchedule'
import CalenderView from './CalenderView'

const DashboardMinContent = () => {
  return (
    <div className=' absolute top-[80px] left-[64px] md:absolute md:top-[80px] md:left-[149px] lg:left-[200px] xl:left-[300px] w-4/5 h-[110vh] md:h-[87vh]'>
      <DashboardOverview/>
      <ActivityFeed/>
      <CalenderView/>
      <UpcomingSchedule/>
    </div>
  )
}

export default DashboardMinContent
