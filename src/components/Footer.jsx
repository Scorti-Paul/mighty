import './../style/footer.css'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="primary-footer">
        <div className="footer-contacts">
          <div className="contact">
            <a href="mailto:lamteyanastacia@gmail.com">lamteyanastacia@gmail.com</a>
            <a href="tel:+233249282982">+233 24 928 2982</a>
          </div>
          <div className="socials">
            <a href="#">INSTAGRAM</a>
            <a href="#">GITHUB</a>
            <a href="#">LINKEDIN</a>
          </div>
        </div>

        <div className="footer-nav">
          <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/services'>Services</NavLink></li>
            <li><NavLink to='/users'>Users</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
          </ul>
          <div className="copyright">Curious about our Privacy or Cookies? © 2022 Mighty</div>
        </div>
      </div>
      <div className="secondary-footer">
        Mighty has been proudly headquartered in the heart of downtown Grand Rapids, Michigan since 2007. We have teammates in Philadelphia, Pennsylvania, and Pompano Beach, Florida, and plan, design, and develop content-centered websites and digital products for clients on the East Coast, West Coast, Third Coast, and everywhere in between. Looking for our office? We’re at 50 Louis St NW Ste 520, Grand Rapids, MI 49503.
      </div>
    </div>
  )
}

export default Footer