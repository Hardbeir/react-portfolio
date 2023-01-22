import React from 'react'

import {
    FaYoutube,
    FaGithub,
    FaLinkedinIn,
    FaStackOverflow,
    FaInstagram
} from "react-icons/fa"

import Section from "../shared/section"
import Logo from "../../images/logo.png"
import SocialIcon from './social-icon'
import {scrollToSection} from "../utils/helpers"


import "./style.sass"

const Footer = () => {
  return (
    <Section background="dark" className="footer">
        <div className="footer-content-wrapper">
            <div className="footer-logo">
                <img src={Logo} alt="logotype" />
            </div>
            <ul className="footer-menu-items">
                <li className="footer-menu-item" onClick={() => scrollToSection("skills")}>Skills</li>
                <li className="footer-menu-item" onClick={() => scrollToSection("portfolio")}>Portfolio</li>
                <li className="footer-menu-item" onClick={() => scrollToSection("blogs")}>Blog & Articles</li>
                <li className="footer-menu-item" onClick={() => scrollToSection("contact")}>Contact me</li>
            </ul>
            <div className="social-icons">
                <SocialIcon color="#FF0000" icon={<FaYoutube/>} link="https://www.youtube.com"/>
                <SocialIcon color="#0D2636" icon={<FaGithub/>} link="https://www.youtube.com"/>
                <SocialIcon color="#E84C88" icon={<FaInstagram/>} link="https://www.youtube.com"/>
                <SocialIcon color="#0A66C2" icon={<FaLinkedinIn/>} link="https://www.youtube.com"/>
                <SocialIcon color="#f2740d" icon={<FaStackOverflow/>} link="https://www.youtube.com"/>
            </div>
            <div className="bottom-bar">
                <div className="copyright-text">
                    Cpoyright 2023 React
                </div>
            </div>
            
        </div>
    </Section>
  )
}

export default Footer