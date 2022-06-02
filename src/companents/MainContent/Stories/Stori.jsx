import React from 'react'
import { Link } from 'react-router-dom'
import './Stori.scss'

function Stori({ artObj, setArtObj, addArtObj, setAddArtObj }) {
  return (
    <>
      <div className="stori">
        <div className="stori__top_box">
          <h3 className='stori__title'>Your stories</h3>
          <div>
            <button className='stori__addBtn-one'>Write a story</button>
            <button className='stori__addBtn-two'>Import a story</button>
          </div>
        </div>

        <div className="stori__categor_btn_box">
          <button className='stori__stocategor_btn'>Drafts 1</button>
          <button className='stori__stocategor_btn'>Published <span>3</span></button>
          <button className='stori__stocategor_btn'>Responses</button>
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
    </>
  )
}

export default Stori
