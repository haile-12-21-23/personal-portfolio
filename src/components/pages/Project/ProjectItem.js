import React from 'react'
function ProjectItem({ image, name }) {
    return (
        <div className="projectItem">
            <div style={{ background: `url(${image})` }} className="bgImage" />
            <h1> {name}</h1>

        </div>
    )
}

export default ProjectItem
