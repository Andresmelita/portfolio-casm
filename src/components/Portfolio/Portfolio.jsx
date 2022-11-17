import React from 'react'
import Slider from '../Slider/Slider'
import './portfolio.scss'

const Portfolio = () => {
    return (
        <div className='portfolio-container'>
            <h1 className='portfolio-title'>What I <p> Do</p></h1>
            <div className='portfolio-projects'>
                {/* <div className='portfolio-info'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel qui veritatis dolorum sed repellendus quia ratione ipsam nemo vitae totam suscipit, cumque quaerat dolor quibusdam ad. Veniam corrupti expedita consectetur!
                </div> */}
                <Slider/>
            </div>
        </div>
    )
}

export default Portfolio