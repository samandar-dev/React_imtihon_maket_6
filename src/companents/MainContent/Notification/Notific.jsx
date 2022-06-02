import React from 'react'
import './Notific.scss'
function Notific() {
  return (
    <>
      <div className="notific">
        <h3 className='notific__title'>Notifications</h3>

        <div className="notific__btns_box">
          <button className='notific__btn'>All</button>
          <button className='notific__btn'>Responses</button>
        </div>

        <div className="notific__bottom_box">
          <p>You're all caught up.</p>
          <button>Your stats</button>
        </div>
      </div>
    </>
  )
}

export default Notific
