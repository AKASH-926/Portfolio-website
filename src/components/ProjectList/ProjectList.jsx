import React from 'react'
import { Projects } from '../Projects/Projects'
import './ProjectList.css'
import { projects } from '../../data'
export const ProjectList = () => {
    return (
        <div className='pl'>
            <div className="pl-texts">
                <h1 className="pl-title">
                    Create & inspire
                </h1>
                <p className="pl-desc"> "Unleashing the Potential of a Full Stack Development  with some of my projects "</p>
            </div>
            <div className="pl-list">
                {projects.map((item) => {
                    return (
                        <>
                            <Projects key={item.id} img={item.img} link={item.link} pname={item.pname} />

                        </>


                    )
                })}
            </div>
        </div>
    )
}
