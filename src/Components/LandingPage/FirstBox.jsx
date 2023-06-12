import React from 'react'

export const FirstBox = () => {
  return (
    <div className='content_firstbox_div'>
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
            <div className='progress_div'>
              <div className='progress_rec_text_div'>
                <h6 className='rec_text'>RECEIVED</h6>
              </div>
              <div className='progress__neg_text_div'>
                <h6 className='neg_text'>NEGOTIATING</h6>
              </div>
              <div className='progress_com_text_div'>
                <h6 className='com_text'>COMPLETED</h6>
              </div>
            </div >
          </div>
  )
}
