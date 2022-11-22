import React from 'react'
import coverVideo from '../../media/coverVideo3.mp4'
import coverImage from '../../media/cover6.jpg'
import me from '../../media/me.png'
import './cover.scss'

const Cover = () => {
    return (
        <div className='cover-container' id='home'>
            {/* <video className='video' src={coverVideo} autoPlay loop muted /> */}
            <img className='video' src={coverImage} alt=''/>
            <div className='container'>
                <div className='container-description'>
                    <div class="content">
                        <div class="content__container">
                            <h2 class="content__container__text">Hello</h2>
                            <ul class="content__container__list">
                                <li class="content__container__list__item">world !</li>
                                <li class="content__container__list__item">developer !</li>
                                <li class="content__container__list__item">users !</li>
                                <li class="content__container__list__item">everybody !</li>
                            </ul>
                        </div>
                    </div>
                    <h1 className='name'>Andrés Salazar Melita</h1>
                    <p className='developer'>Developer Front-end</p>
                    <p className='bachelor'>Bachelor of Science in Applied Engineering</p>
                </div>
                {/* <div className='container-photo'>
                    <img src={me} alt="" />
                </div> */}
                </div>
                <div className='sns-links'>
                    <a href='https://www.linkedin.com/in/andresmelita/' target="_blank" rel='noreferrer'>
                        <i className='fab fa-linkedin linkedin'></i>
                    </a>
                    <a href='https://github.com/Andresmelita' target="_blank" rel='noreferrer'> 
                        <i className='fab fa-github github'></i>
                    </a>
                    <a href='https://www.instagram.com/andresmelita/' target="_blank" rel='noreferrer'>
                        <i className='fab fa-instagram instagram'></i>
                    </a>
            </div>

        </div>
    )
}

export default Cover