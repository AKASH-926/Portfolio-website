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
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">MERN Full Stack Developer</div>
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
                    <p className="i-desc">
                        I design and develop services for customers of all sizes, specializing in creating stylish,modern websites,web services and online stores
                    </p>
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