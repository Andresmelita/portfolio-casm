import React from 'react'
import coverVideo from '../../media/coverVideo3.mp4'
import coverImage from '../../media/cover6.jpg'
import './cover.scss'

const Cover = () => {
    return (
        <div className='cover-container' id='home'>
            {/* <video className='video' src={coverVideo} autoPlay loop muted /> */}
            <img className='img-cover' src={coverImage} alt=''/>
            <div className='container'>
                <div className='container-description'>
                    <div className="content">
                        <div className="content__container">
                            <h2 className="content__container__text">Hello</h2>
                            <ul className="content__container__list">
                                <li className="content__container__list__item">world !</li>
                                <li className="content__container__list__item">developer !</li>
                                <li className="content__container__list__item">users !</li>
                                <li className="content__container__list__item">everybody !</li>
                            </ul>
                        </div>
                    </div>
                    <h1 className='name'>Andrés Salazar Melita</h1>
                    <p className='developer'>Developer Front-end</p>
                    <p className='bachelor'>Bachelor of Science in Applied Engineering</p>
                    <form className='content-button'>
                        <button className='button-cv'>Download CV</button>
                    </form>
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