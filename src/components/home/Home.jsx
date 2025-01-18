import './Home.css'
import { SocialIcons } from '../shared/SocialIcons'
import { FaLaptopCode } from "react-icons/fa";
import { Testimonial } from './Testimonial';
import { testimonialData } from './testimonialData';

export const Home = () => {
  return (
    <div className='home' id='home'>
      <h1>Welcome!</h1>
      <SocialIcons />
      <div className='about-me'>
        <h2>A little bit about me:</h2>
        <FaLaptopCode className='fa-laptop-code' />
        <p>I am a Full-Stack Web Developer with two years of professional experience, primarily focused on backend development while also contributing to frontend tasks. I have practical expertise in working with JavaScript, TypeScript, Node.JS and Ruby in production environments.</p>
        <p>This diverse background gives me the flexibility to adapt to a wide range of project needs.</p>
        <p>I look forward to collaborating with you!</p>
      </div>
      <div className='testimonials'>
        <h2>Co-Workers Testimonials</h2>
        <ul>{testimonialData.map(t => (<Testimonial testimonial={t} key={t.id}/>))}</ul>
      </div>
      <div className="personal-interests">
        <h2>Personal Interests</h2>
        <ul>

        </ul>
      </div>
    </div>
  )
}