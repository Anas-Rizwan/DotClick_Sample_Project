import React from 'react'
import Card from '../Reuseable_component/Card'

const SecondBox = () => {
    return (
        <div className='content_secondbox_div'>
            <div style={{ display: 'flex', }}>
                <div className='firstbox_text_div'>
                    <h5 className='name_text'>St Judes Hospital</h5>
                    <h6 className='address_text'>Sarasota,FL. 33178</h6>
                </div>

                <div className='date_div'>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start'
                    }}>
                        <h6 className='name_text'>10</h6>
                        <h6 className='address_text'>October</h6>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start'
                    }}>

                        <h6 className='name_text' style={{ marginRight: '7px' }}>-</h6>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start'
                    }}>
                        <h6 className='name_text'>17</h6>
                        <h6 className='address_text'>December</h6>
                    </div>
                    {/* <h6 className='address_text'>17 December</h6> */}
                </div>

                <div className='firstbox_text_div'>
                    <h6 className='name_text'>20 Rooms</h6>
                    <h6 className='address_text'>10 Singles, 10 doubles</h6>
                </div>
            </div>
            <div className='progress_secondbox_div'>

                <div className='progress_secondbox_com_text_div'>
                    <h6 className='secondbox_com_text'>COMPLETED</h6>
                </div>
            </div >

            <div className='card_main_div'>
                <Card
                    imgsrc={'Holiday Inn'}
                    heading={'1.5 miles away from joblocation. '}
                    singlePrice={'Singles: $120'}
                    doublePrice={'Doubles: $145'}
                    btntext={'Book now'}
                />
                <Card
                    imgsrc={'Holiday Inn'}
                    heading={'1.5 miles away from joblocation. '}
                    singlePrice={'Singles: $120'}
                    doublePrice={'Doubles: $145'}
                    btntext={'Book now'}
                />
                <Card
                    imgsrc={'Holiday Inn'}
                    heading={'1.5 miles away from joblocation. '}
                    singlePrice={'Singles: $120'}
                    doublePrice={'Doubles: $145'}
                    btntext={'Book now'}
                />
            </div>

        </div>
    )
}

export default SecondBox