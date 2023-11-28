import { useTranslation } from 'react-i18next';
import { data } from '../data/index'
const Projects = () => {
    const { t } = useTranslation();
    return  (
        <div className='all-projects-wrapper'>
            <h2> <span className='pink'>/</span>{t('Projects').toLowerCase()}</h2>
            <p>{t('list_of_my_projects')}</p>

            <div className=''>
                <h2><span className='pink'>#</span>{t('compleate_appes')}</h2>
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
            </div>
            <div className='small-projects'>
                <h2><span className='pink'>#</span>{t('small_projects')}</h2>
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
            </div>
        </div>
    )
}
export default Projects