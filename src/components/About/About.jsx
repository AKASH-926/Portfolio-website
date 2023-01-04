import React from 'react'
import './About.css'
import Me from '../../img/me image.png'
import Mebg from '../../img/me image bg.png'

const About = () => {
    return (
        <div className='a'>
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className='a-card-bg'>
                    <img src={Mebg} alt="" className="a-img" />
                </div>

                <div className="a-card">

                    <img src={Me} alt="" className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">I am a full stack developer with experience in building and maintaining web applications using a variety of programming languages and frameworks.</p>
                <p className="a-desc">I have a strong background in both front-end and back-end development, and am proficient in HTML, CSS, JavaScript,React JS, NodeJS, Express JS and MongoDB. I have a passion for creating intuitive and user-friendly interfaces, and am constantly seeking out ways to improve my skills and stay up-to-date on the latest technologies. In addition to my technical skills, I am also a strong team player and excel in working collaboratively with cross-functional teams to deliver high-quality products on time.</p>
            </div>
        </div>
    )
}

export default About