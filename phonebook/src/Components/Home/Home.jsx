import React from 'react'
import { Link } from 'react-router-dom'
import add from './img/plus.png'

import './Home.scss'

const Home = () => {
  return (
    <div className='Home'>
      <div className="content">
            <h1>Phone Book</h1>
      </div>
      <div className="footer">
        <div className="border"></div>
        <Link to={'/addnumber'}>
        <img src={add} alt="" />
        </Link>
        <div className="border"></div>
      </div>
    </div>
  )
}

export default Home
