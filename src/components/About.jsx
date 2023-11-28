import aboutImg from '../assets/aboutPng.png'
// import logoPink from '../assets/logoPink.svg'
import { useTranslation } from 'react-i18next'
const About = () => {
    const { t } = useTranslation();
    return (
        <>
            <div className='aboutme-wrapper'>
                <div className='aboutme-top'>
                    <h2 className=''><span className='pink'>/</span>{t('About').toLowerCase()}</h2>
                </div>
                <div className='aboutme-bottom'>
                    <div className='aboutme-left'>
                        <p> {t('about_me_header')}</p>
                        <p>{t('about_me_first')}</p>
                        <p>{t('about_me_last')}</p>
                    </div>
                    <div className='aboutme-right'>
                        <img className='about-img' src={aboutImg} />
                        <span className='dots'></span>
                        <span className='half-dots'></span>
                    </div>
                </div>
            </div>
            <div className='skills-wrapper'>
                <div className='skills-top'>
                    <h2 className=''><span className='pink'>#</span>{t('Skills').toLowerCase()}</h2>
                </div>
                <div className='skills-bottom'>
                    <div className="skills-right skills-about">
                        <div className='languages-skills'>
                            <h4>{t('language_skill')}</h4>
                            <div>
                                TypeScript JavaScript C#
                            </div>
                        </div>
                        <div className='frameworks-skills'>
                            <h4>{t('frameworks_skill')}</h4>
                            <div>
                                React Node.js Nest.js ASP.NET Ethers.js
                            </div>
                        </div>
                        <div className='databases-skills'>
                            <h4>{t('databases_skill')}</h4>
                            <div>
                                MongoDB PostgreSQL MySQL
                            </div>
                        </div>
                        <div className='tools-skills'>
                            <h4>{t('tools_skill')}</h4>
                            <div>
                                Git Docker Postman VSCode
                            </div>
                        </div>
                        <div className='other-skills'>
                            <h4>{t('other_skill')}</h4>
                            <div>
                                HTML CSS SASS
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='fun-fucts-wrapper'>
            <div className='fun-fucts-top'>
                    <h2 className=''><span className='pink'>#</span>{t('my_fun_facts')}</h2>
                </div>
                <div className='fun-fucts-bottom'>
                    <div className='fun-fucts-left'>
              
                    </div>
                    <div className='fun-fucts-right'>
                       
                    </div>
                </div>
            </div>
            
        </>
    )
}
export default About