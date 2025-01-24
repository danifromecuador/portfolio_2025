import './SocialIcons.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaEnvelopeSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { useState } from 'react';

export const SocialIcons = () => {
  const [s1, ss1] = useState(false)
  const [s2, ss2] = useState(false)
  const [s3, ss3] = useState(false)
  const [s4, ss4] = useState(false)
  return (
    <ul className='social-icons'>
      <a href="https://www.linkedin.com/in/danifromec/" target='_blank' rel='noopener' onMouseEnter={() => ss1(true)} onMouseLeave={() => ss1(false)}><FaLinkedin /></a>
      <span className={`${s1 || 'hide'}`}>@danifromec</span>
      <a href="https://github.com/danifromecuador" target='_blank' rel='noopener' onMouseEnter={() => ss2(true)} onMouseLeave={() => ss2(false)}><FaGithubSquare /></a>
      <span className={`${s2 || 'hide'}`}>@danifromecuador</span>
      <a href="mailto:danifromecuador@gmail.com" target='_blank' rel='noopener' onMouseEnter={() => ss3(true)} onMouseLeave={() => ss3(false)}><FaEnvelopeSquare /></a>
      <span className={`${s3 || 'hide'}`}>danifromecuador@gmail.com</span>
      <a href="https://wa.me/593980022515" target='_blank' rel='noopener' onMouseEnter={() => ss4(true)} onMouseLeave={() => ss4(false)}><FaWhatsappSquare /></a>
      <span className={`${s4 || 'hide'}`}>+593980022515</span>
    </ul>
  )
}