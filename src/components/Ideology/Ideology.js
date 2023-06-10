import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import mujibImg from "../../images/Mujib_100_Logo.svg.png";

const Ideology = () => {
  return (
    <section>

    <div className=''>
    <div className="d-flex pt-5 row" data-aos="fade-right"  data-aos-duration="3000">
      <div className='col-lg-6 col-md-12 col-sm-12 col-12 '>
        <img src={mujibImg} className="w-lg-100 w-md-100 w-sm-75 w-75 h-75 ms-5  me-5" alt="...." />
      </div>
      <div className="mt-5 pt-5 col-lg-6 col-md-12 col-sm-12
      col-12 ps-md-5 pb-md-5 ps-sm-5 ps- pb-sm-5 ps-5 pb-5">
        <h2>THE IDEOLOGY</h2>
        <p>
          My greatest strength is the love for my people, My <br />
          greatest weakness is that I love them too much.
        </p>
        <h3>-Bangabondhu Sehikh Mujibur rahman</h3>
        <button className='p-2'>
          Learn More <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
    </div>
  </section>
  )
}

export default Ideology