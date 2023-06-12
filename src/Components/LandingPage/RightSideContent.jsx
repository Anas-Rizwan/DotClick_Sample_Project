import React from 'react'
import { FirstBox } from './FirstBox'
import SecondBox from './SecondBox'

const RightSideContent = () => {
    return (
        <div className='content_div'>
            <h2 className='heading_text'>You currently have 3 requests</h2>
            <FirstBox />
            <SecondBox />
        </div>
    )
}

export default RightSideContent