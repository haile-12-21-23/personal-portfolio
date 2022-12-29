import React from 'react'
import LinkedIcon from "@material-ui/icons/LinkedIn"
import EmailIcon from "@material-ui/icons/Email"
import GitHubIcon from "@material-ui/icons/GitHub";
import TelegramIcon from "@material-ui/icons/Telegram";
import "./Home.css"
function Home() {
    return (
        <div className="home">
            <div className="about">
                <h2> Hello I am Hailemariam</h2>
                <div className="prompt">
                    <p>A software developer with a passion for learning and creating. </p>
                    <a target="_blank" href='https://www.linkedin.com/in/haile1221/' rel="noreferrer"><LinkedIcon /></a>
                    <a target="_blank" href='mailto:hailemariamaadisu21@gmail.com' rel="noreferrer"><EmailIcon /></a>
                    <a target="_blank" href='https://github.com/haile-12-21-23/' rel="noreferrer"><GitHubIcon /></a>
                    <a target="_blank" href='https://t.me/hailemariam12' rel="noreferrer"><TelegramIcon /></a>


                </div>
            </div>
            <div className="skills">
                <h1>Skills</h1>
                <ol className="list">
                    <li className="item">
                        <h2> Front-End</h2>
                        <span> HTML, CSS,Flutter, NPM, ReactJs, Yarn and BootStrap</span>
                    </li>
                    <li className="item">
                        <h2> Back-End</h2>
                        <span>NodeJs, PHP, MongoDB, MySQL, ExpressJS </span>
                    </li>
                    <li className="item">
                        <h2> Mobile App</h2>
                        <span>Dart, Flutter</span>
                    </li>
                    <li className="item">
                        <h2> Languages</h2>
                        <span>C++, java, JavaScript, TypeScript, Dart</span>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default Home
