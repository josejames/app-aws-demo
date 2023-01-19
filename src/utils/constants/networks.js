import { FaFacebookF, FaYoutube, FaTelegramPlane } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
const networks = [
    {
        name: 'facebook',
        icon: <FaFacebookF/>,
        href: 'https://facebook.com'
    },
    {
        name: 'youtube',
        icon: <FaYoutube/>,
        href: 'https://youtube.com'
    },
    {
        name: 'instagram',
        icon: <AiFillInstagram/>,
        href: 'https://instagram.com'
    },
    {
        name: 'telegram',
        icon: <FaTelegramPlane/>,
        href: 'https://telegram.com'
    }
]

export {
    networks
}
