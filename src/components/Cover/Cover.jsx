import React from 'react'
import coverVideo from '../../media/coverVideo3.mp4'
import './cover.scss'

const Cover = () => {
    return (
        <div className='cover-container'>
            <video className='video' src={coverVideo} autoPlay loop muted />
            <h1 className='name'>Andrés Salazar Melita</h1>
            <p>Developer Front-end | Bachelor of Science in Applied Engineering</p>
        </div>
    )
}

export default Cover