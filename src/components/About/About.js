import React from 'react'
import './about.css';
import jimboCardDark from '../../assets/jimbo-card-dark.svg'
import linaCardDark from '../../assets/lina-card-dark.svg'
import jimboCardLight from '../../assets/jimbo-card-light.svg'
import linaCardLight from '../../assets/lina-card-light.svg'

const About = () => {
  return (
    <section>
        <div className='main-about'>

            {/* Component Title */}
            <div>
                <h2>ABOUT US</h2>
            </div>

            {/* Flip Cards */}
            <div>
              <img src={jimboCardDark}></img>
              <img src={linaCardDark}></img>
              <img src={jimboCardLight}></img>
              <img src={linaCardLight}></img>

            </div>

        </div>
    </section>
  )
}

export default About