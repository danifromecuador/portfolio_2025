import './Testimonial.css'
import { TestimonialData } from './testimonialData'

export const Testimonial = ({name}) => {
  return (
    <div className='testimonial'>
      name: {TestimonialData[1].name}
    </div>
  )
}