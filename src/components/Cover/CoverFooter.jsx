import React from 'react'
import { GiClover } from 'react-icons/gi'
import './coverFooter.css'

const CoverFooter = () => {
    return (
        <div className='cover-footer'>
            <div className='footer-information'>
                <h2>&copy; 2022 - Andrés Salazar Melita <span>&#123;<GiClover className='clover'/>&#125;</span></h2>
            </div>
        </div>
    )
}

export default CoverFooter