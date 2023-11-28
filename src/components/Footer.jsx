import telegram from '../assets/Telegram.svg';
import email from '../assets/Email.svg';
import github from '../assets/Github.svg';
const Footer = () => {
    return (
        <footer>
            <div className="wrapper-footer">
                <div className='wrapper-fotter-left'>
                    <div className='footer-profile'>
                        <h3>Andrii</h3>
                        <p>vlasandrey878@gmail.com</p>
                        <p className='dev'>Full-Stack developer</p>
                    </div>
                    <div className='footer-media-wrapper'>
                        <h3>Media</h3>
                        <div className='footer-media-icons'>
                            <img src={telegram} alt="" />
                            <img src={email} alt="" />
                            <img src={github} alt="" />
                        </div>
                    </div>
                </div>
                <div>© Copyright 2023. Made by Andrii</div>
            </div>

        </footer>
    )
}
export default Footer;