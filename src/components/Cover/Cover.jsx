import React from 'react'
import coverVideo from '../../media/coverVideo3.mp4'
import coverImage from '../../media/cover6.jpg'
import './cover.scss'
import { useState } from 'react'
import cv from '../../media/files/cv.pdf'

const Cover = () => {

    const [clickOne, setClickOne] = useState(false)
    const handleClickOne = () => setClickOne(!clickOne)
    const hoverClickOne = () => {
        setClickOne(false)
    }

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
                                <li className="content__container__list__item">developers !</li>
                                <li className="content__container__list__item">users !</li>
                                <li className="content__container__list__item">everybody !</li>
                            </ul>
                        </div>
                    </div>
                    <h1 className='name'>Andrés Salazar Melita</h1>
                    <p className='developer'>Desarrollador Front-End</p>
                    <p className='bachelor'>Licenciado en Ingeniería Aplicada</p>
                    {/* <form className='content-button'>
                        <button className='button-cv'>Download CV</button>
                    </form> */}
                    <div className='content-button'>
							<div className='btn-download'>
								{clickOne ? (<div className='content-buttonOne' onClick={hoverClickOne}><p className='button-cvOne'>Descargado !</p></div>)
									: (<div className='content-buttonOne' name="btn-curriculum" id="download" onClick={handleClickOne} ><p><a className='button-cvTwo' target='_blank' href={cv}>Descargar CV</a></p></div>)}
							</div>
					</div> 
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