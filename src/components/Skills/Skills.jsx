import React from 'react'
import { SiJavascript, SiHtml5, SiCss3, SiReact, SiRedux, SiGit, SiExpress, SiSequelize, SiReactrouter, SiNodedotjs, SiNodemon, SiPostgresql, SiSass, SiPython } from 'react-icons/si'
import { FaNode } from 'react-icons/fa'
import postgreSQL from '../../media/icons/postgresql.svg'
import './skills.scss'

const Skills = () => {
    return (
        <div className='skills-container' id='skills'>
            <div className='skills-title'>
                <h1 className='title'>Technologies</h1>
            </div>
            <div className='skillbox'>
                <div className='skillbox-technologies'>
                    <SiJavascript className='skill-icon javascriptIcon'/>
                    <p className='skill-name'>Javascript</p>
                </div>
                <div className='skillbox-technologies'>
                    <SiHtml5 className='skill-icon htmlIcon'/>
                    <p className='skill-name'>HTML</p>
                </div>
                <div className='skillbox-technologies'>
                    <SiCss3 className='skill-icon cssIcon'/>
                    <p className='skill-name'>CSS</p>
                </div>
                <div className='skillbox-technologies'>
                    <SiReact className='skill-icon reactIcon'/>
                    <p className='skill-name'>ReactJS</p>
                </div>
                <div className='skillbox-technologies'>
                    <SiRedux className='skill-icon reduxIcon'/>
                    <p className='skill-name'>Redux</p>
                </div>
                <div className='skillbox-technologies'>
                    <SiExpress className='skill-icon expressIcon'/>
                    <p className='skill-name'>ExpressJS</p>
                </div>
                <div className='skillbox-technologies'>
                    <SiSequelize className='skill-icon sequelizeIcon'/>
                    <p className='skill-name'>Sequelize</p>
                </div>
                <div className='skillbox-technologies'>
                    <SiReactrouter className='skill-icon reactRouterIcon'/>
                    <p className='skill-name'>React Router</p>
                </div>
                <div className='skillbox-technologies'>
                    <FaNode className='skill-icon nodeIcon'/>
                    <p className='skill-name'>NodeJS</p>
                </div>
                <div className='skillbox-technologies'>
                    <img src={postgreSQL} alt='' className='skill-icon postgresqlIcon'/>
                    <p className='skill-name'>PostgreSQL</p>
                </div>
                <div className='skillbox-technologies'>
                    <SiSass className='skill-icon sassIcon'/>
                    <p className='skill-name'>SASS</p>
                </div>
                <div className='skillbox-technologies'>
                    <SiPython className='skill-icon pythonIcon'/>
                    <p className='skill-name'>Python</p>
                </div>
                <div className='skillbox-technologies'>
                    <SiGit className='skill-icon gitIcon'/>
                    <p className='skill-name'>Git</p>
                </div>
                <div className='skillbox-technologies'>
                    <SiNodemon className='skill-icon nodemonIcon'/>
                    <p className='skill-name'>Nodemon</p>
                </div>
            </div>
        </div>
    )
}

export default Skills