import React from 'react'
import './Intro.css'
import astro from '../../img/astro.png'
const Intro = () => {
    return (
        <div className='i'>
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className='i-intro'>Hello, My name is</h2>
                    <h1 className='i-name'>AKASH A P</h1>
                    <p className="i-desc">
                        I am a MERN  full stack developer. I have a passion for building modern and efficient web applications that are both user-friendly and visually appealing. I have had the experience to work on a some  of major and minor projects.
                    </p>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">MERN Stack Developer</div>
                            <div className="i-title-item">Data Structure & Algos</div>
                            <div className="i-title-item">HTML</div>
                            <div className="i-title-item">CSS</div>
                            <div className="i-title-item">JAVASCRIPT</div>
                            <div className="i-title-item">REACT JS</div>
                            <div className="i-title-item">NODE JS</div>
                            <div className="i-title-item">EXPRESS JS</div>
                            <div className="i-title-item">MongoDB</div>
                            <div className="i-title-item">GIT/GIT HUB</div>
                        </div>
                    </div>

                </div>

            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <div className="i-img">
                    <img src={astro} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Intro