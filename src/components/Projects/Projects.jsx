import React from 'react'
import './Projects.css'
export const Projects = ({ img, link, pname }) => {
    return (
        <div className='p'>
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <p className='p-name'>{pname}</p>
            </div>

            <a href={link} target='_blank' rel='noreferrer'>
                <img src={img} alt="" className='p-img' />
            </a>

        </div>
    )
}
