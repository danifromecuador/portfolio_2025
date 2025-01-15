import './SocialIcons.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaEnvelopeSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

export const SocialIcons = () => {
  return (
    <ul className='social-icons'>
      <a href=""><FaLinkedin /></a>
      <a href=""><FaGithubSquare /></a>
      <a href=""><FaEnvelopeSquare /></a>
      <a href=""><FaWhatsappSquare /></a>
    </ul>
  )
}