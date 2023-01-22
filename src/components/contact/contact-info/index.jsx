import React from 'react'

import {FaPhoneAlt} from "react-icons/fa"
import {MdEmail} from "react-icons/md"

import "./style.sass"

const ContactInfo = () => {
  return (
    <div className="contact-info-box">
        <h4>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</h4>
        <div className="contact-option">
            <FaPhoneAlt/>
            <span className="text">+48 234 421 234</span>
        </div>
        <div className="contact-option">
            <MdEmail/>
            <span className="text">sadsad@asd.com</span>
        </div>
    </div>
  )
}

export default ContactInfo