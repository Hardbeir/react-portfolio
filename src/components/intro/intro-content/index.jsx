import React from 'react'

import {BsAwardFill} from 'react-icons/bs'
import {FaUser} from 'react-icons/fa'

import CallToAction from '../../shared/CallToAction'

import hand from "../../../images/hand.png"
import avatar from "../../../images/girl.png"

import "./style.sass"

const IntroContent = () => {
    return (
        <div className="intro-content">
            <div className="layout">
                <div className="left-col">
                    <h1 className="title">
                        <span className="small-text">
                            <span className="text">Hello</span>
                            <span className="icon">
                                <img src={hand} />
                            </span>
                            <span className="text">, I Am</span>
                        </span>
                        <span className="big-text">JS Dev Hindi</span>
                    </h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500
                    </p>
                    <CallToAction text="Contact me" />
                </div>
                <div className="right-col">
                    <img
                        src={avatar}
                        alt="JS Dev Hindi"
                    />

                    <div className="highlights horizontal">
                        <div className="icon">
                            <BsAwardFill />
                        </div>
                        <div className="text">Best Design Award</div>
                    </div>

                    <div className="highlights verticle">
                        <div className="icon">
                            <FaUser />
                        </div>
                        <div className="text">
                            <span>4k+</span>
                            Happy Customers
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntroContent;