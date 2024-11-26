import React from 'react'
import SidebarDash from './SidebarDash'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <div className='flex gap-6 h-screen'>
        {/* <SidebarDash/> */}
        <Outlet/>
    </div>
  )
}

export default DashboardLayout