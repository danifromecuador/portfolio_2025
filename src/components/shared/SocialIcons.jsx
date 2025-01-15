import './SocialIcons.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaEnvelopeSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

export const SocialIcons = () => {
  return (
    <ul className='social-icons'>
      <a href="https://www.linkedin.com/in/danifromec/" target='_blank' rel='noopener'><FaLinkedin /></a>
      <a href="https://github.com/danifromecuador" target='_blank' rel='noopener'><FaGithubSquare /></a>
      <a href="mailto:danifromecuador@gmail.com" target='_blank' rel='noopener'><FaEnvelopeSquare /></a>
      <a href="https://wa.me/593980022515" target='_blank' rel='noopener'><FaWhatsappSquare /></a>
    </ul>
  )
}