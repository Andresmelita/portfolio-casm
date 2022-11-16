import React, { useState } from 'react'
import './slider.scss'
import product from './images.js'

const Slider = () => {

    const [indexImgs, setIndexImgs] = useState(1)

    const handlePrev = () => {
        if (indexImgs-1 <0){
            setIndexImgs(product.productImgs.length-1)
        } else {
        setIndexImgs(indexImgs-1)            
        }
    }

    const handleNext = () => {
        if (indexImgs+1 > product.productImgs.length-1){
            setIndexImgs(0)
        } else {
        setIndexImgs(indexImgs+1)            
        }
    }

    return (

        <div className='slider'>
            {/* <button onClick={handlePrev} className='slider_prev'>◀</button> */}
            <i onClick={handlePrev} className="fa-solid fa-angle-left slider_prev"></i>
            <div className='slider_static'>
                <div style={{transform: `translateX(calc(-${indexImgs} / 5*100%))`}} className='slider_move'>
                    {
                        product.productImgs.map(url => (
                            <div key={url} className='slider_img-container'>
                                <img className='slider_img' src={url} alt=""/>
                            </div>
                        ))
                    }
                </div>
            </div>
            <i onClick={handleNext} className="fa-solid fa-angle-right slider_next"></i>
            {/* <button onClick={handleNext} className='slider_next'>▶</button> */}
        </div>

    )
}

export default Slider