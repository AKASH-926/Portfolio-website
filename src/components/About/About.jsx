import React from 'react'
import './About.css'
import Me from '../../img/me image.png'
const About = () => {
    return (
        <div className='a'>
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={Me} alt="" className="a-img" />
                </div>
            </div>
            <div className="a-right"></div>
        </div>
    )
}

export default About