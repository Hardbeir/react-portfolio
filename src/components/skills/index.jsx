import React from 'react'

import {AiOutlineCloudDownload} from "react-icons/ai"

import Section from "../shared/section"
import CallToAction from "../shared/CallToAction"

import TechIcons from "../../images/tech-icons.png"

import "./style.sass"

const Skills = () => {
  return (
    <Section background="dark" id="skills">
        <div className="skills-content-wrapper">
            <div className="left-col">
                <img src={TechIcons} alt="JS,React,HTML,CSS" />
            </div>
            <div className="right-col">
                <h2>Skills</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque porro natus tempore iusto aliquam optio totam possimus pariatur corrupti unde.</p>
                <CallToAction text="Download CV" icon={<AiOutlineCloudDownload/>}/>
            </div>
        </div>
    </Section>
  )
}

export default Skills