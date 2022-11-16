import React, { useState } from 'react'
import './slider.css'
import projects from './projects.js'
import image01 from '../../media/01.jpg'
import image02 from '../../media/02.jpg'
import image03 from '../../media/03.jpg'
import image04 from '../../media/04.jpg'
import image05 from '../../media/05.jpg'

const Slider = () => {

    const [indexImgs, setIndexImgs] = useState(1)

    const handlePrev = () => {
        if (indexImgs-1 <0){
            setIndexImgs(projects.images.length-1)
        } else {
        setIndexImgs(indexImgs-1)            
        }
    }

    const handleNext = () => {
        if (indexImgs+1 > projects.images.length-1){
            setIndexImgs(0)
        } else {
        setIndexImgs(indexImgs+1)            
        }
    }

    return (

        <div className='slider'>
            {/* <button onClick={handlePrev} className='slider_prev'>◀</button> */}
            {/* <i onClick={handlePrev} className="fa-solid fa-angle-left slider_prev"></i> */}
            {/* image slider start */}
            <div className='slides'>
                {/* <div style={{transform: `translateX(calc(-${indexImgs} / 5*100%))`}} className='slider_move'> */}
                {/* radio buttons start */}
                <input type='radio' className='radio_btn' id='radio1'/>
                <input type='radio' className='radio_btn' id='radio2'/>
                <input type='radio' className='radio_btn' id='radio3'/>
                <input type='radio' className='radio_btn' id='radio4'/>
                {/* radio buttons ends */}
                    {/* {
                        projects.images.map(url => (
                            <div key={url} className='slider_img-container'>
                                <img className='slider_img' src={url} alt=""/>
                            </div>
                        ))
                    } */}
                <div className='slide first'>
                    <img src={image01} alt=''/>
                </div>
                <div className='slide'>
                    <img src={image02} alt=''/>
                </div>
                <div className='slide'>
                    <img src={image03} alt=''/>
                </div>
                <div className='slide'>
                    <img src={image04} alt=''/>
                </div>
                <div className='slide'>
                    <img src={image05} alt=''/>
                </div>
                {/* slide images end */}
                {/* automatic navigation start */}
                <div className='navigation-auto'>
                    <div className='auto-btn1'></div>
                    <div className='auto-btn2'></div>
                    <div className='auto-btn3'></div>
                    <div className='auto-btn4'></div>
                </div>
                {/* automatic navigation end*/}
            </div>
            {/* manual navigation start */}
            <div className='navigation-manual'>
                <label for='radio1' className='manual-btn'></label>
                <label for='radio2' className='manual-btn'></label>
                <label for='radio3' className='manual-btn'></label>
                <label for='radio4' className='manual-btn'></label>
            </div>
            {/* manual navigation end */}
            {/* image slider end */}
            {/* <i onClick={handleNext} className="fa-solid fa-angle-right slider_next"></i> */}
            {/* <button onClick={handleNext} className='slider_next'>▶</button> */}
        </div>
    )
}

export default Slider