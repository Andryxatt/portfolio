
import myPhoto from '../assets/Portfolio.png'
import { useTranslation } from 'react-i18next';
import logo from '../assets/LogoDef.svg'
import logoPink from '../assets/logoPink.svg'
import { data } from '../data/index'
import aboutImg from '../assets/aboutPng.png'
import telegram from '../assets/Telegram.svg'
import email from '../assets/Email.svg'
const Home = () => {
    const { t } = useTranslation();
    return (
        <div className='home-wrapper'>
            
            <div className="home-top">
                <div className='home-text'>
                    <h1 className="">Full-Stack <span>Java Script</span> Developer</h1>
                    <article className='home-info'>
                        {t('home_description2')}
                    </article>
                    <button className='home-connect'>{t('contact_button') + "!"}</button>
                </div>
                <div className='home-images'>
                    <img className='photo' src={myPhoto} alt="Photo" />
                    <img className='logo' src={logo} alt="Logo" />
                    <span className='dots'></span>
                    {/* <code className=''>{"(developer) => 'Barba non facit {developer}'"}</code> */}
                    <div className='slogan'>Currently working on <span>Portfolio</span></div>
                </div>
            </div>
            <div className='home-bottom'>
                <cite className='quote'>{t('home_quote')}</cite>
                <span>Steve Jobs</span>
            </div>
            <div className='home-projects'>
                <div className='projects-top'>
                    <h2 className=''><span className='pink'>#</span>{t('Projects').toLowerCase()}</h2>
                    <button className='view-all-btn'>{t('view_all')}<span className='animated-arrow'>{'~~>'}</span></button>
                </div>
                <div className='projects-wrapper'>
                    {
                        data.map((project, index) => {
                            return (
                                <div key={index} className='project'>
                                    <img src={project.projectImage} alt={project.projectName} />

                                    <div className='project-tech'>
                                        {
                                            project.projectStack.map((tech, index) => {
                                                return (
                                                    <span key={index}>{tech} </span>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className='project-info'>
                                        <h3>{project.projectName}</h3>
                                        <p className='project-description'>{project.projectDescription}</p>
                                        <div className='project-links'>
                                            <a className='project-link' href={project.projectLink} target="_blank" rel="noreferrer">{t('home_project_button') + '<~>'} </a>
                                            <a className='project-link-git' href={project.projectLinkGit} target="_blank" rel="noreferrer">{t('home_github_button') + '>='}</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='skills-wrapper'>
                    <div className='skills-top'>
                        <h2 className=''><span className='pink'>#</span>{t('Skills').toLowerCase()}</h2>
                    </div>
                    <div className='skills-bottom'>
                        <div className="skills-left">
                            <span className='dots-small'></span>
                            <span className='dots-small'></span>
                            <img src={logoPink} className='big-pink-logo'></img>
                            <div className='cube-big'></div>
                            <div className='cube-small'></div>
                        </div>
                        <div className="skills-right">
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

                <div className='aboutme-wrapper'>
                    <div className='aboutme-top'>
                        <h2 className=''><span className='pink'>#</span>{t('About').toLowerCase()}</h2>
                    </div>
                    <div className='aboutme-bottom'>
                        <div className='aboutme-left'>
                            <p> {t('about_me_header')}</p>
                            <p>{t('about_me_first')}</p>
                            <p>{t('about_me_last')}</p>
                            <button>{t('read_more') + ' ->'}</button>
                        </div>
                        <div className='aboutme-right'>
                            <img className='about-img' src={aboutImg} />
                            <span className='dots'></span>
                            <span className='half-dots'></span>
                        </div>
                    </div>
                </div>

                <div className='contacts-wrapper'>
                    <div className='contacts-top'>
                        <h2 className=''><span className='pink'>#</span>{t('Contact').toLowerCase()}</h2>
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
                </div>
            </div>
        </div>
    )
}
export default Home