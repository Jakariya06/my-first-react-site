import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className="footer-subscription-heading">
                    Join Our NewsLetter to Stay Update About MY TRIP MY EPENTIR
                </p>
                <p className="footer-subscription-text">
                    You Can Unsub Anytime
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="@your email" className="footer-input"/>
                        <Button buttonStyle ="btn--outline">Subscribe</Button>
                    </form>
                </div>
            </section>

            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to ='/sign-up'>How it Works</Link>
                        <Link to ='/'>Testimonials</Link>
                        <Link to ='/'>Careers</Link>
                        <Link to ='/'>Investors</Link>
                        <Link to ='/'>Terms of Service</Link>
                    </div>

                    <div className="footer-link-items">
                        <h2> Us</h2>
                        <Link to ='/sign-up'>How it Works</Link>
                        <Link to ='/'>Testimonials</Link>
                        <Link to ='/'>Careers</Link>
                        <Link to ='/'>Investors</Link>
                        <Link to ='/'>Terms of Service</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to ='/sign-up'>How it Works</Link>
                        <Link to ='/'>Testimonials</Link>
                        <Link to ='/'>Careers</Link>
                        <Link to ='/'>Investors</Link>
                        <Link to ='/'>Terms of Service</Link>
                    </div>

                    <div className="footer-link-items">
                        <h2> Our SocMed</h2>
                        <Link to ='/sign-up'>Youtube</Link>
                        <Link to ='/'>Twitter</Link>
                        <Link to ='/'>Instagram</Link>
                        <Link to ='/'>Facebook</Link>
                        <Link to ='/'>Tiktod</Link>
                    </div>
                </div>
            </div>

    <section className='social-media'>
        <div className='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              DOL4N
              <i className='fas fa-compass'/>
            </Link>
          </div>
          <small className='website-rights'>DOL4N @2021</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>

    </div>
    )
}

export default Footer
