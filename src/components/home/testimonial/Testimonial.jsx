import './Testimonial.css'

export const Testimonial = ({ data }) => {
  return (
    <li className='testimonial'>
      text: {data.text}
      name: {data.name}
    </li>
  )
}