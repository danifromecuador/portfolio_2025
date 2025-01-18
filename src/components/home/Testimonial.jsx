import './Testimonial.css'

export const Testimonial = ({ testimonial }) => {
  return (
    <li className='testimonial'>
      text: {testimonial.text}
      name: {testimonial.name}
    </li>
  )
}