import React from 'react'
import './Card.css'


const Card = ({
    imgsrc,
    heading,
    singlePrice,
    doublePrice,
    btntext
}) => {
    return (
        <div className='card_div'>
            <div className='card_img_div'>
                <img src="src\assets\Holiday.png" alt="Image description" className='card_img' />
                <h6 className='card_img_text'>{imgsrc}</h6>
            </div>
            <div className='card_bottom_div'>
                <h6 className='card_bottom_heading'>{heading}</h6>
                <div className='card_btn_content_div'>
                    <div className='card_btn_content_text_div'>
                        <h6 className='card_btn_content_text'>{singlePrice} </h6>
                        <h6 className='card_btn_content_text'>{doublePrice}</h6>
                    </div>
                    <button className='card_btn'>{btntext} </button>
                </div>
            </div>
        </div>
    )
}

export default Card