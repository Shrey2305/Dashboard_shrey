import React from 'react'
import Main from '../Main/Main'
import Hello from '../SideBar/Hello'
import './Mix.css'


function Mix() {
  return (
    <>
    <div className='all'>
<div className='Box'>

    <div className='hello'>
        <Hello></Hello>
    </div>
    <div className='main'>
        <Main></Main>
    </div>
</div>
    </div>
    
    
    </>

  )
}

export default Mix