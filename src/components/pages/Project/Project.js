import React from 'react'
import ProjectItem from './ProjectItem'
// import Proj1 from "../../../assets/proj1.jpg"
// import Proj3 from "../../../assets/proj3.webp"
import "./Project.css"
import { ProjectList } from '../../../helpers/ProjectList'
function Project() {
    return (
        <div className="projects">
            <h1>My Personal Projects</h1>
            <div className="projectList">
                {ProjectList.map((project) => {
                    return <ProjectItem name={project.name} image={project.image} />
                })}
            </div>
        </div>
    )
}

export default Project
