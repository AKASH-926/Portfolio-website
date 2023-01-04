import React from 'react'
import { Projects } from '../Projects/Projects'
import './ProjectList.css'
import { projects } from '../../data'
export const ProjectList = () => {
    return (
        <div className='pl'>
            <div className="pl-texts">
                <h1 className="pl-title">
                    Create & inspire.It's Akash
                </h1>
                <p className="pl-desc"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
                    in enim! Veritatis saepe reiciendis hic autem error repellendus officia odit?</p>
            </div>
            <div className="pl-list">
                {projects.map((item) => {
                    return (
                        <Projects key={item.id} img={item.img} link={item.link} />
                    )
                })}


            </div>
        </div>
    )
}
