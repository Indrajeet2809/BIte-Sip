import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">

            {/* removing the logo from the footer */}
             <img className='foody' src={assets.logo} alt=""  />
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ex incidunt voluptas dolore perspiciatis iusto natus, laudantium alias. Saepe inventore laboriosam consequuntur debitis iure ex, ratione aliquam molestias incidunt odio?</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt=""  />
                <img src={assets.twitter_icon} alt=""  />
                <img src={assets.linkedin_icon} alt=""  />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>Company</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
             <h2>GET IN TOUCH</h2>
             <ul>
                <li>+1-212-456-7890</li>
                <li>workforme199@gmail.com</li>
             </ul>
        </div>
       
      </div>
      <hr/>
      <p className="footer-copyright">Copyright 2024 Bite & Sip.com - All Right Reserved</p>
    </div>
  )
}

export default Footer
