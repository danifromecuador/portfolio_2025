import './Interest.css'

export const Interest = ({ data }) => {
  return (
    <div className='interest'>
      title: {data.title}
      text: {data.text}
    </div>
  )
}