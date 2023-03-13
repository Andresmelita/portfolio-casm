import React from 'react'
import hoja from '../../media/hoja.png'
import './portfolio.scss'
import project0 from '../../media/portfolio/paracuando.png'
import project1 from '../../media/portfolio/pokedex0.png'
import project2 from '../../media/portfolio/weatherapp0.png'
import project3 from '../../media/portfolio/rickandmorty0.png'
import project4 from '../../media/portfolio/quotebox0.png'
import project5 from '../../media/portfolio/ecommerce0.png'
import { TbPokeball } from 'react-icons/tb'
import { RiAliensLine} from 'react-icons/ri'
import { TiWeatherPartlySunny } from 'react-icons/ti'
import { HiCursorClick, HiShoppingCart } from 'react-icons/hi'
import { MdAdsClick } from 'react-icons/md'
import { AiOutlineTool } from 'react-icons/ai'
import {FaQuestion} from 'react-icons/fa'
import { ImPen } from 'react-icons/im'
import { useState } from 'react'

const Portfolio = () => {

    const [click1, setClick1] = useState(false)
    const [click2, setClick2] = useState(false)
    const [click3, setClick3] = useState(false)
    const [click4, setClick4] = useState(false)
    const [click5, setClick5] = useState(false)

    const handleClick1 = () => setClick1(!click1)
    const handleClick2 = () => setClick2(!click2)
    const handleClick3 = () => setClick3(!click3)
    const handleClick4 = () => setClick4(!click4)
    const handleClick5 = () => setClick5(!click5)

    const hover1 = () => {
        setClick1(false)
    }
    const hover2 = () => {
        setClick2(false)
    }
    const hover3 = () => {
        setClick3(false)
    }
    const hover4 = () => {
        setClick4(false)
    }
    const hover5 = () => {
        setClick5(false)
    }

    //? Links Pokedex
    const toWeb0 = () => {
        window.open('https://project-jseight.vercel.app')
    }
    const toGitHub0 = () => {
        window.open('https://github.com/Andresmelita/project-JsEight')
    }

    //? Links Pokedex
    const toWeb1 = () => {
        window.open('https://pokeapi-andresmelita.netlify.app')
    }
    const toGitHub1 = () => {
        window.open('https://github.com/Andresmelita/poke-api')
    }

    //? Links WeatherApp
    const toWeb2 = () => {
        window.open('https://weather-andresmelita.netlify.app/')
    }
    const toGitHub2 = () => {
        window.open('https://github.com/Andresmelita/weather')
    }

    //? Links Rick&Morty
    const toWeb3 = () => {
        window.open('https://rick-and-morty-andresmelita.netlify.app')
    }
    const toGitHub3 = () => {
        window.open('https://github.com/Andresmelita/rickandmorty')
    }

    //? Links QuoteBox
    const toWeb4 = () => {
        window.open('https://quotebox-andresmelita.netlify.app')
    }
    const toGitHub4 = () => {
        window.open('https://github.com/Andresmelita/quoteBox')
    }

    //? Links Ecommerce
    // const toWeb5 = () => {
    //     window.open('')
    // }
    // const toGitHub5 = () => {
    //     window.open('')
    // }

    return (
        <div className='portfolio-container' id='portfolio'>
            <div className='about-hoja'>
                <img className='hoja' src={hoja} alt=''/>
            </div>
            <h1 className='portfolio-title'>Mis <p> Proyectos</p></h1>
            <div className='projects'>


                <div className='portfolio-projects'>
                    <div className='hamburguer' onClick={handleClick1}>
                        {click1 ? (<HiCursorClick className='icon' size={27} style={{color: '#ffffff'}} onClick={hover1}/>)
                            : (<MdAdsClick className='icon' size={27} style={{color:'#ffffff'}}/>)}
                    </div>
                    <div className={click1 ? 'project-information active' : 'project-information'}>
                            <h2 className='line'><FaQuestion className='icon-react'/> Para Cuando?</h2>
                            <p>Proyecto en grupo diseñado para votar y proponer eventos en la comunidad de residencia.</p>
                            <div className='buttons-container'>
                                <button className='btn-portfolio' onClick={toWeb1}>Ver Proyecto</button>
                                <button className='btn-portfolio' onClick={toGitHub1}>Repositorio</button>
                            </div>
                    </div>
                    <img className='project-img' src={project0} alt='' id='project1'/>
                    <div className='line'></div>
                </div>

                <div className='portfolio-projects'>
                    <div className='hamburguer' onClick={handleClick1}>
                        {click1 ? (<HiCursorClick className='icon' size={27} style={{color: '#ffffff'}} onClick={hover1}/>)
                            : (<MdAdsClick className='icon' size={27} style={{color:'#ffffff'}}/>)}
                    </div>
                    <div className={click1 ? 'project-information active' : 'project-information'}>
                            <h2 className='line'><TbPokeball className='icon-react'/> Pokedex</h2>
                            <p>Consulta la información de tu Pokémon favorito!, puedes filtrar por tipo o buscar directamente por el nombre en esta enciclopedia.</p>
                            <div className='buttons-container'>
                                <button className='btn-portfolio' onClick={toWeb1}>Ver Proyecto</button>
                                <button className='btn-portfolio' onClick={toGitHub1}>Repositorio</button>
                            </div>
                    </div>
                    <img className='project-img' src={project1} alt='' id='project1'/>
                    <div className='line'></div>
                </div>


                <div className='portfolio-projects'>
                    <div className='hamburguer' onClick={handleClick2}>
                        {click2 ? (<HiCursorClick className='icon' size={27} style={{color: '#ffffff'}} onClick={hover2}/>)
                            : (<MdAdsClick className='icon' size={27} style={{color:'#ffffff'}}/>)}
                    </div>
                    <div className={click2 ? 'project-information active' : 'project-information'}>
                            <h2 className='line'><TiWeatherPartlySunny className='icon-react'/> Weather App</h2>
                            <p>Activa tu ubicación para conocer el clima actual en tu zona.</p>
                            <div className='buttons-container'>
                                <button className='btn-portfolio' onClick={toWeb2}>Ver Proyecto</button>
                                <button className='btn-portfolio' onClick={toGitHub2}>Repositorio</button>
                            </div>
                    </div>
                    <img className='project-img' src={project2} alt='' id='project2'/>
                    <div className='line'></div>
                </div>


                <div className='portfolio-projects'>
                    <div className='hamburguer' onClick={handleClick3}>
                        {click3 ? (<HiCursorClick className='icon' size={27} style={{color: '#ffffff'}} onClick={hover3}/>)
                            : (<MdAdsClick className='icon' size={27} style={{color:'#ffffff'}}/>)}
                    </div>
                    <div className={click3 ? 'project-information active' : 'project-information'}>
                            <h2 className='line'><RiAliensLine className='icon-react'/> Rick & Morty App</h2>
                            <p>Página que muestra diferentes personajes de la serie según la dimensión o el universo al que pertenezcan.</p>
                            <div className='buttons-container'>
                                <button className='btn-portfolio' onClick={toWeb3}>Ver Proyecto</button>
                                <button className='btn-portfolio' onClick={toGitHub3}>Repositorio</button>
                            </div>
                    </div>
                    <img className='project-img' src={project3} alt='' id='project3'/>
                    <div className='line'></div>
                </div>


                <div className='portfolio-projects'>
                    <div className='hamburguer' onClick={handleClick4}>
                        {click4 ? (<HiCursorClick className='icon' size={27} style={{color: '#ffffff'}} onClick={hover4}/>)
                            : (<MdAdsClick className='icon' size={27} style={{color:'#ffffff'}}/>)}
                    </div>
                    <div className={click4 ? 'project-information active' : 'project-information'}>
                            <h2 className='line'><ImPen className='icon-react'/> Quote Box</h2>
                            <p>Conoce diversas frases célebres de grandes autores y personajes a lo largo de la historia, éstas se mostrarán aleatoriamente.</p>
                            <div className='buttons-container'>
                                <button className='btn-portfolio' onClick={toWeb4}>Ver Proyecto</button>
                                <button className='btn-portfolio' onClick={toGitHub4}>Repositorio</button>
                            </div>
                    </div>
                    <img className='project-img' src={project4} alt='' id='project4'/>
                    <div className='line'></div>
                </div>


                {/* <div className='portfolio-projects'>
                    <div className='hamburguer' onClick={handleClick5}>
                        {click5 ? (<HiCursorClick className='icon' size={27} onClick={hover5}/>)
                            : (<MdAdsClick className='icon' size={27}/>)}
                    </div>
                    <div className={click5 ? 'project-information active' : 'project-information'}>
                            <h2 className='line'><HiShoppingCart className='icon-react'/> Ecommerce</h2>
                            <p>Página que simula una tienda virtual. <br/><span>&nbsp; &nbsp; &nbsp; &nbsp; En Mantención... <AiOutlineTool className='icon-react'/></span></p>

                    </div>
                    <img className='project-img' src={project5} alt='' id='project5'/>
                    <div className='line'></div>
                </div> */}

                
            </div>
        </div>
    )
}

export default Portfolio