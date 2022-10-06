import React from 'react'
import './footer-style.scss'
import { BsFacebook, BsLinkedin, BsTwitter } from 'react-icons/bs'
import { withPrefix } from 'gatsby'

const Footer = () => (
  <div className="content-ctn footer">
    <div className="footer-text-ctn">
      <p><a target="_blank" href={withPrefix('polityka-prywatnosci.pdf')}>Polityka Prywatności</a></p>
      <div className="spacer"><p>|</p></div>
      <p>2022 METSPHERE All rights reserved. Created by <a target="_blank" href="https://www.innovationshub.pl/">InHub</a>.</p>
    </div>
    <div style={{display: 'flex'}}>
      <a target="_blank" rel="nofollow" href="https://www.linkedin.com/"><BsLinkedin size={20}/></a>
      <a target="_blank" rel="nofollow" href="https://www.twitter.com/"><BsTwitter size={20}/></a>
      <a target="_blank" rel="nofollow" href="https://www.facebook.com/"><BsFacebook size={20}/></a>
    </div>
  </div>
)

export default Footer
