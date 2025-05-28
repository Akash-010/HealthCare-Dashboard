import React from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar';
import DashboardMinContent from './components/dashboardmaincontent/DashboardMinContent';

const App = () => {
  return (
    <div className=" flex flex-col relative md:h-[98vh]  mx-3 my-2">
      <Header/>
      <Sidebar/>
      <DashboardMinContent/>
      </div>
  )
};

export default App;
