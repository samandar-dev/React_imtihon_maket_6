import React from 'react'
import NavBar from './MainNavBar/NavBar'
import MainRight from './MainRight/MainRight'
import Notific from './MainContent/Notification/Notific'

function Natification() {
  return (
    <>
      <div className="container">
        <NavBar />
        <section className="main__content mcon">
          <div className="mcon__container">
            <Notific />
          </div>
        </section>
        <MainRight />
      </div>
    </>
  )
}

export default Natification
