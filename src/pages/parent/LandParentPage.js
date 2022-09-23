import React from 'react'
import ParentNavbar from '../../components/parent/ParentNavbar'
import '../../assest/css/parent/landParentPage.css'
import ParenttopBoxes from '../../components/parent/ParentTopBoxes'

export default function LandParentPage() {
  return (
    <div className='land-parent'>
        <ParentNavbar/>
        <div className='parent-land-content'>
          <ParenttopBoxes/>
        </div>
    </div>
  )
}
