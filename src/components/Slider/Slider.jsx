import React from 'react'
import './slider.scss'
import image1 from '../../media/01.jpg'
import image2 from '../../media/02.jpg'
import image3 from '../../media/03.jpg'
import image4 from '../../media/04.jpg'
import image5 from '../../media/05.jpg'

const Slider = () => {

    const carousel = document.querySelector(".carousel");
    const arrowIcons = document.querySelector(".wrapper i")

    let isDragStart = false, prevPageX, prevScrollLeft;

    const dragStart = (e) => {
        // updatating global variables value on mouse down event
        isDragStart = true;
        prevPageX = e.pageX;
        prevScrollLeft = carousel.scrollLeft;
    }

    const dragging = (e) => {
        // scrolling images/carousel to left according to mouse pointer
        if(!isDragStart) return;
        e.preventDefault();
        let positionDiff = e.pageX - prevPageX;
        carousel.scrollLeft = prevScrollLeft - positionDiff;
    }

    // const dragStop = (e) => {
    //     isDragStart = false;
    // }

    carousel?.addEventListener("mousedown", dragStart);
    carousel?.addEventListener("mousemove", dragging);
    // carousel?.addEventListener("mouseup", dragStop);

    return (
        <div className='wrapper'>
            <i className="fa-solid fa-angle-left"></i>
            <div className='carousel'>
                <img src={image1} alt='img'/>
                <img src={image2} alt='img'/>
                <img src={image3} alt='img'/>
                <img src={image4} alt='img'/>
                <img src={image5} alt='img'/>
            </div>
            <i className="fa-solid fa-angle-right"></i>
        </div>
    )
}

export default Slider