import React from 'react'

import cloud from "../../images/cloud.png"
import cloudSoft from "../../images/cloud-soft.png"

import Navigation from './navigation-bar'
import IntroContent from './intro-content'

import "./style.sass"

const Intro = () => {
  return (
    <div className="intro-section">
        <div className="vector-bg" id='paralax'></div>
        <img src={cloud} className="cloud"  alt="wave-1"/>
        <img src={cloudSoft} className="cloud-soft" alt="wave-2" />

        <div className="content">
            <Navigation/>
            <IntroContent/>
        </div>
    </div>
  )
}

export default Intro