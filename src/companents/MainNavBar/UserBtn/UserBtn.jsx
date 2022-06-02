import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './UserBtn.scss'
function UserBtn() {
  const [userModal, setUserModal] = useState(false)

  return (
    <>
      <div className="mleft__user">
        <Link to={'/ProfilPage'}>
          <button className='mleft__user_btn'>
            <img src="https://brusvnika.com.ua/wp-content/uploads/2020/07/default_avatar.png" alt="user logo" />
          </button>
        </Link>
      </div>
    </>
  )
}

export default UserBtn
