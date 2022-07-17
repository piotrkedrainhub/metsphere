import React from 'react'
import './footer-style.scss'
import { BsFacebook, BsLinkedin, BsTwitter } from 'react-icons/bs'

const Footer = () => (
  <div className="content-ctn footer">
    <p>2022 METSPHERE All rights reserved </p>
    <div>
      <BsLinkedin size={20}/>
      <BsTwitter size={20}/>
      <BsFacebook size={20}/>
    </div>
  </div>
)

export default Footer
