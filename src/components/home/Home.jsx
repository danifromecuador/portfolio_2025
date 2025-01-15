import './Home.css'
import { SocialIcons } from '../shared/SocialIcons'

export const Home = () => {
  return (
    <div className='home' id='home'>
      <h1>Welcome!</h1>
      <SocialIcons />
    </div>
  )
}