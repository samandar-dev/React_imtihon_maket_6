import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.scss'
function Nav() {
  const [navBtns, setNavBtns] = useState([
    {
      id: 1,
      icon: 'bx bx-home',
      actIcon: 'bx bxs-home',
      active: true,
      pathname: 'Home',
    },
    {
      id: 2,
      icon: 'bx bx-bell',
      actIcon: 'bx bxs-bell',
      active: false,
      pathname: 'Notification',
    },
    {
      id: 3,
      icon: 'bx bx-bookmarks',
      actIcon: 'bx bxs-bookmarks',
      active: false,
      pathname: 'Lists',
    },
    {
      id: 4,
      icon: 'bx bx-detail',
      actIcon: 'bx bxs-detail',
      active: false,
      pathname: 'Stories',
    },
    {
      id: 5,
      icon: 'bx bx-edit',
      actIcon: 'bx bxs-message-edit',
      active: false,
      pathname: 'Articl',
    },
  ])

  // const actBtnsFunc = (id) => {
  //   setNavBtns([...navBtns.map(btns => btns.id === id ? btns.active = true : btns.active = false)])
  // }

  return (
    <>
      <nav className='mleft_nav nav'>
        <ul className="nav__list">
          {navBtns.map((items, i) => (
            <li className="nav__item" id={items.id} key={i + 1}>
              <NavLink to={'/' + items.pathname}>
                <button
                  className='nav__item_btn'
                  id={items.id}>
                  <i className={items.icon}></i>
                </button>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default Nav
