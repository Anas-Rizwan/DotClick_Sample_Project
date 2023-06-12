import React from 'react'

export const SideBar = () => {
    return (
        <div className='side_div'>
            <h3 className='logo'>LODGN</h3>
            <div className='side_list_div'>
                <ul className='side_ul_list'>
                    <li className='side_li_list'>Current requests</li><div style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.29)', width: '90%', }}></div>
                    <li className='side_li_list'>Ongoing stays</li><div style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.29)', width: '90%', }}></div>
                    <li className='side_li_list'>Previous stays</li><div style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.29)', width: '90%', }}></div>
                    <li className='side_li_list'>Reports</li><div style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.29)', width: '90%', }}></div>
                </ul>
                <div className='side_bottom'>
                    <button className='side_bottom_btn'>Log-Out</button>
                    <h6 style={{ margin: '8px', color: '#494949' }}>Help Desk</h6>
                    <h6 style={{ marginTop: '5px', color: '#494949' }}>786-874 9988</h6>
                </div>
            </div>
        </div>
    )
}
