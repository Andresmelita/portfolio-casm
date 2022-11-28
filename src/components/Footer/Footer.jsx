import image from '../../media/footerCover.jpg'
import './footer.scss'
import { GiClover } from 'react-icons/gi'

const Footer = () => {

    return (
        <div className='footer'>
            <div className='footer-information'>
                <h2>&copy; 2022 - Andrés Salazar Melita <span>&#123;<GiClover className='clover'/>&#125;</span></h2>
            </div>
        </div>
    )
}

export default Footer