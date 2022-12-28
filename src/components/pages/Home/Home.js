import React from 'react'
import LinkedIcon from "@material-ui/icons/LinkedIn"
import EmailIcon from "@material-ui/icons/Email"
import GitHubIcon from "@material-ui/icons/GitHub";
import "./Home.css"
function Home() {
    return (
        <div className="home">
            <div className="about">
                <h2> Hello my name is Hailemariam</h2>
                <div className="prompt">
                    <p>A software developer with a passion for learning and creating. </p>
                    <LinkedIcon />
                    <EmailIcon />
                    <GitHubIcon />
                </div>
            </div>
            <div className="skills">
                <h1>Skills</h1>
                <ol className="list">
                    <li className="item">
                        <h2> Front-End</h2>
                        <span>ReactJs</span>
                    </li>
                    <li className="item">
                        <h2> Back-End</h2>
                        <span>NodeJs</span>
                    </li>
                    <li className="item">
                        <h2> Languages</h2>
                        <span>C++</span>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default Home
