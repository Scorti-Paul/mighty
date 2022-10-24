import { Link, Outlet } from 'react-router-dom'
import './../style/home.css'
import Footer from './Footer'


const Home = () => {
  return (
    <div className='home'>
      <div className="hero">
        <div className="hero-content">
          <h1>Mighty is a digital design and web technology company.</h1>
          <p>We're a team of strategists, designers, and web technologists, here to help you find clarity and craft websites and digital products that effectively connect people to meaningful content.</p>
        </div>
        <div className="hero-card">
          <div className="project">
            <p>A digital marketing website platform for Herman Miller furniture dealers</p>
            <small>Herman Miller</small>
          </div>
          <div className="project">
            <p>Launching and growing an academic publishing brand</p>
            <small>Zondervan Academic</small>
          </div>
          <div className="project">
            <p>A multi-site platform to localize a national outdoor conservation nonprofit</p>
            <small>Conservation Legacy</small>
          </div>
          <button className='more-work'>SEE MORE WORK</button>
        </div>
      </div>

      <div className="projects">
        <div className="project-links">
          <Link to='featured-projects'>Featured projects</Link>
          <Link to='latest-projects'>Latest projects</Link>
        </div>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Home