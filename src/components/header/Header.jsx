import './Header.css'
import { FaHouse } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa";
import { FaIdCard } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

export const Header = () => {
  return (
    <nav className='header'>
      <ul>
        <li><a href='#home'><FaHouse className='mobile' /><span className='desktop'>Home</span></a></li>
        <li><a href='#projects'><FaBriefcase className='mobile' /><span className='desktop'>Projects</span></a></li>
        <li><a href='#about'><FaIdCard className='mobile' /><span className='desktop'>About</span></a></li>
        <li><a href='#contact'><FaPhone className='mobile' /><span className='desktop'>Contact</span></a></li>
      </ul>
    </nav>
  )
}