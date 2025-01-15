import './App.css'
import { Header } from './components/header/Header'
import { Home } from './components/home/Home'
import { Projects } from './components/projects/Projects'
import { About } from './components/about/About'
import { Contact } from './components/contact/Contact'

export const App = () => {
  return (
    <div className='app'>
      <Header />
      <div className='main-section'>
        <Home />
        <Projects />
        <About />
        <Contact />
      </div>
    </div>
  )
}
