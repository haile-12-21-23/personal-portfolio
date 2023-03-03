import React from 'react'
import TelegramIcon from "@material-ui/icons/Telegram"
import TwitterIcon from "@material-ui/icons/Twitter"
import FaceBookIcon from "@material-ui/icons/Facebook"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import "./Footer.css"
import GitHubIcon from '@material-ui/icons/GitHub'
function Footer() {
    var today = new Date();
    var currentYear = today.getFullYear();
    return (
        <div className="footer">
            <div className="socialMedia">
                <a target="_blank" href='https://t.me/hailemariam12' rel="noreferrer"> <TelegramIcon /></a>
                <a target="_blank" href='https://twitter.com/EthioAbysinia21/' rel="noreferrer"> <TwitterIcon /></a>
                <a target="_blank" href='https://www.facebook.com/hailemarilam' rel="noreferrer"> <FaceBookIcon /></a>
                <a target="_blank" href='https://www.linkedin.com/in/haile1221/' rel="noreferrer">  <LinkedInIcon /></a>
                <a target="_blank" href='https://github.com/haile-12-21-23/' rel="noreferrer">  <GitHubIcon /></a>


            </div>
            <p>&copy; {currentYear}. Hailemariam</p>

        </div>
    )
}

export default Footer
