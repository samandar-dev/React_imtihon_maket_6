import React from 'react'
import { Link } from 'react-router-dom'
import UserBtn from './UserBtn/UserBtn'
import Nav from './Nav/Nav'
import './NavBar.scss'

function NavBar() {

  return (
    <>
      <section className='main-left mleft'>
        <div className="mleft__logo_box">
          <Link to={'/Home'}>
            <img src="https://imgur.com/MDi3hch.png" alt="logo" />
          </Link>
        </div>
        <Nav />
        <UserBtn />
      </section>
    </>
  )
}

export default NavBar
