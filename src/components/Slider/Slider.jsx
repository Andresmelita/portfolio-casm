import React, { useState } from 'react'
import './slider.css'
import projects from './projects.js'
import image01 from '../../media/01.jpg'
import image02 from '../../media/02.jpg'
import image03 from '../../media/03.jpg'
import image04 from '../../media/04.jpg'
import image05 from '../../media/05.jpg'

const Slider = () => {
    
    const [framework, setFramework] = useState(1)

    const changeRadioFramework = (e) => {
        setFramework(e.target.value);
    }

    return (

        <div className='slider container-all'>
            {/* <i onClick={handlePrev} className="fa-solid fa-angle-left slider_prev"></i>
            <i onClick={handleNext} className="fa-solid fa-angle-right slider_next"></i> */}
            <input type='radio' className='radio_btn image-slide' id='radio1' value='1' checked={framework == 1? true : false} onChange={changeRadioFramework} hidden/>
            <input type='radio' className='radio_btn image-slide' id='radio2' value='2' checked={framework == 2? true : false} onChange={changeRadioFramework} hidden/>
            <input type='radio' className='radio_btn image-slide' id='radio3' value='3' checked={framework == 3? true : false} onChange={changeRadioFramework} hidden/>
            <input type='radio' className='radio_btn image-slide' id='radio4' value='4' checked={framework == 4? true : false} onChange={changeRadioFramework} hidden/>
            <div className='slide'>
                <div className='item-slide first'>
                    <img src={image01} alt=''/>
                </div>
                <div className='item-slide'>
                    <img src={image02} alt=''/>
                </div>
                <div className='item-slide'>
                    <img src={image03} alt=''/>
                </div>
                <div className='item-slide'>
                    <img src={image04} alt=''/>
                </div>
            </div>
            <div className='pagination'>
                <label className='pagination-item item-1' for='radio1'>
                    <img src={image01} alt=''/>
                </label>
                <label className='pagination-item item-2' for='radio2'>
                    <img src={image02} alt=''/>
                </label>
                <label className='pagination-item item-3' for='radio3'>
                    <img src={image03} alt=''/>
                </label>
                <label className='pagination-item item-4' for='radio4'>
                    <img src={image04} alt=''/>
                </label>
            </div>
        </div>
    )
}

export default Slider