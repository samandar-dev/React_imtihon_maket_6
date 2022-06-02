import React from 'react'
import { Link } from 'react-router-dom'

function Profil({ fnameVal, lnameVal, artObj, setArtObj, addArtObj, setAddArtObj }) {
  return (
    <>
      <section className="main__content mcon profil">
        <div className="mcon__container">
          <div className="mcon__profil">
            <div className="mcon__top_box">
              <dir className="mcon__top_left">
                <img src="https://brusvnika.com.ua/wp-content/uploads/2020/07/default_avatar.png" alt="user logo" />
                <div>
                  <h3>{lnameVal} {fnameVal}</h3>
                  <p>Apr 2 . 0 stories </p>
                </div>
              </dir>
              <button>•••</button>
            </div>
            <div className="stori__list_box">
              <ul className="stori__list">
                {addArtObj.map((obj, i) => (
                  <li className="stori__item">
                    <Link to={`/ArticlPage:id${obj.id}`} key={i + 1}>
                      <h4 className='stori__item_title'>{obj.title}</h4>
                      <p className='stori__item_desc'>{obj.itemsDesc}</p>
                    </Link>

                    <div className="stori__item_bottom">
                      <p>Published 10 minutes ago • <span>{obj.data} read</span></p>
                      <button className='stori__item_btn'><i class='bx bx-export'></i></button>
                      <button className='stori__item_btn'>•••</button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Profil
