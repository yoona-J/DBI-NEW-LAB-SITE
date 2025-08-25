import React from 'react'
import hyuLogo from '../assets/HYU_logo_singlecolor_white_png.png'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3>Data and Business Intelligence Lab.</h3>
          <p>College of Engineering, Hanyang University</p>
          <p>Research and Development Building Room #708-1,</p>
          <p>222 Wangsimni-ro, Seongdong-gu, Seoul, South Korea, 04763</p>
          <p className="copyright">COPYRIGHT © DBI Lab. ALL RIGHTS RESERVED.</p>
        </div>
        <div className="footer-right">
          <img src={hyuLogo} alt="Hanyang University" className="hyu-logo" />
        </div>
      </div>
    </footer>
  )
}  