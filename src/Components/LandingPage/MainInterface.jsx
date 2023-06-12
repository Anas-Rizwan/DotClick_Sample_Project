import React from 'react'
import './LandingPage.css'
import Card from '../Reuseable_component/Card'
import { SideBar } from './SideBar'
import RightSideContent from './RightSideContent'


function MainInterface() {
  return (
    <>
      <div className='main_div'>
        <SideBar />
        <RightSideContent />
      </div >
    </>
  )
}

export default MainInterface