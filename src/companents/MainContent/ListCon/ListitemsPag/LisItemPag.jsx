import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ArticlModal from '../../Homee/Articls/ArticlModal/ArticlModal'
import './LisItemPag.scss'
import object from '../../../../Object'
import ListModal from '../ListModal/ListModal'
function LisItemPag({
  saveObj, setSaveObj,
  inpval, textAre, privB,
  modalBtn, setModalBtn,
  creatBtn, setCreatBtn,
  inpVal, setInpVal,
  textareaVal, setTextareaVal,
  privateBtn, setPrivateBtn,
  descInp, setDescInp,
  listArr, setListArr,
  saveModal, setSaveModal,
  artObj, setArtObj,
  categorArr, setCategorArr }) {

  let ulocation = useLocation()
  let obj;
  {
    saveObj.map((obb, i) => {
      if (obb.id == ulocation.pathname.at(-1)) {
        obj = obb
      }
    })
  }

  const saveBtnFunc = (e) => {
    setCategorArr(
      artObj.map((itm, i) => {
        itm.storiesArr.map(el => {
          if (e === el.id) {
            el.active = !el.active
          }
          else {
            el.active = false
          }
          console.log(el);
        })
      }))
    setArtObj([...artObj])

    saveObj.map((objj) => {
      obj.storiesArr.filter((elem) => elem.id === e ? obj.active = true : obj.active = false)
    })
  }

  return (
    <>
      <section className="main__content mcon">
        <div className="mcon__container">
          <div className="mcon__top_box">
            <dir className="mcon__top_left">
              <img src="https://brusvnika.com.ua/wp-content/uploads/2020/07/default_avatar.png" alt="user logo" />
              <div>
                <h3>Samandar Bohodirov</h3>
                <p>May 31 . 13 stories </p>
              </div>
            </dir>
            <button>•••</button>
          </div>
          <div className="mcon__main">
            <h3 className='mcon__main_title'>Reading list</h3>
            <div className="mcon__articl mart">
              <ul className="mart__list">
                {obj.storiesArr.map((elem, i) => (
                  <li className="mart__itemm martitemm" key={i + 1} id={elem.id}>
                    <div className="martitem__note_box">
                      <textarea name="text" id="" placeholder='Add a note'></textarea>
                      <div className='martitem__btn-box'>
                        <button>Cancel</button>
                        <button className='martitem__btn_done'>Done</button>
                      </div>
                    </div>
                    <div className='martitem__con-img_box'>
                      <div>
                        <div className="martitem__user_box">
                          <img src={elem.avatar} alt="avatar" />
                          <h4 className='martitem__name'>{elem.name} <span>{elem.data}</span></h4>
                        </div>
                        <Link to={`/ArticlPage:id${elem.id}`} key={i + 1}>
                          <h3 className="martitem__title">{elem.title}</h3>
                          <p className='martitem__desc'>{elem.itemsDesc}</p>
                        </Link>
                        <div className="martitem__btn_read">
                          <div className='martiem__btn_box'>
                            <button className='martitem__catBtn'>{elem.categor}</button>
                            <p className='martitem__read'>{elem.read} Selected for you</p>
                          </div>
                          <div className='martiem__btn_box'>
                            <button className='martitem__saveBtn' onClick={() => saveBtnFunc(elem.id)}>
                              <i className='bx bx-bookmark'></i>
                            </button>
                            <ArticlModal
                              obj={elem}
                              saveObj={saveObj}
                              setSaveObj={setSaveObj}
                              modalBtn={modalBtn}
                              setModalBtn={setModalBtn}
                              saveModal={saveModal}
                              setSaveModal={setSaveModal}
                            />
                            <button className='martitem__menuBtn'>•••</button>
                          </div>
                        </div>
                      </div>
                      <Link to={`/ArticlPage:id${elem.id}`} key={i + 1}>
                        <div className='mart__item_img_box'>
                          <img src={elem.img} alt="obj img" />
                        </div>
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <ListModal
        saveObj={saveObj} setSaveObj={setSaveObj}
        modalBtn={modalBtn}
        setModalBtn={setModalBtn}
        creatBtn={creatBtn}
        setCreatBtn={setCreatBtn}
        inpVal={inpVal}
        setInpVal={setInpVal}
        textareaVal={textareaVal}
        setTextareaVal={setTextareaVal}
        privateBtn={privateBtn}
        setPrivateBtn={setPrivateBtn}
        descInp={descInp}
        setDescInp={setDescInp}
        saveModal={saveModal}
        setSaveModal={setSaveModal}
      />
    </>
  )
}

export default LisItemPag
