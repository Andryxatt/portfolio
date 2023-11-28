import telegram from '../assets/Telegram.svg'
import email from '../assets/Email.svg'
import { useTranslation } from 'react-i18next'
const Contact = () => {
    const { t } = useTranslation();
    return (
        <div className='contacts-wrapper'>
                    <div className='contacts-top'>
                        <h2 className=''><span className='pink'>/</span>{t('Contact').toLowerCase()}</h2>
                    </div>
                    <div className='contacts-bottom'>
                        <div className="contacts-left">
                            <p>{t('contacts_text')}</p>
                        </div>
                        <div className="contacts-right">
                            <h3>{t('message_me')}</h3>
                            <div>
                                <img src={telegram} />
                                <p>@Andryxatt</p>
                            </div>
                            <div>
                                <img src={email} />
                                <p>vlasandrey878@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="all-media">
                        <h2><span className='pink'>#</span></h2>
                    </div>
                </div>
    )
}
export default Contact
