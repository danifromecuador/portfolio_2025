import './PersonalInterests.css'

export const PersonalInterests = ({ data }) => {
  return (
    <div className='personal-interests'>
      title: {data.title}
      text: {data.text}
    </div>
  )
}