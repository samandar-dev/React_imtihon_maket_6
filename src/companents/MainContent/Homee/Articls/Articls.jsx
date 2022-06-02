import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ListModal from '../../ListCon/ListModal/ListModal'
import ArticlModal from './ArticlModal/ArticlModal'
// import Object from '../../../../Object'
import './Articls.scss'

function Articls({
  artObj, setArtObj,
  categorArr, setCategorArr,
  saveObj, creatBtn,
  setCreatBtn, inpVal,
  setInpVal, textareaVal,
  setTextareaVal, privateBtn,
  setPrivateBtn, descInp, setDescInp,
  setSaveObj, modalBtn,
  setModalBtn, saveModal,
  setSaveModal,
}) {
  const saveBtnFunc = (e) => {
    setCategorArr(
      artObj.map((itm, i) => {
        if (e === itm.id) {
          itm.active = !itm.active
        }
        else {
          itm.active = false
        }
      }))
    setArtObj([...artObj])

    saveObj.map((obj) => {
      obj.storiesArr.filter((elem) => elem.id === e ? obj.active = true : obj.active = false)
    })
  }

  return (
    <>
      <div className="mcon__articl mart">
        <ul className="mart__list">
          {artObj.map((obj, i) => (
            <li className="mart__item martitem" key={i + 1} id={obj.id}>
              <div className='mart__item_box'>
                <div className="martitem__user_box">
                  <img src={obj.avatar} alt="avatar" />
                  <h4 className='martitem__name'>{obj.name} <span>{obj.data}</span></h4>
                </div>
                <Link to={`/ArticlPage:id${obj.id}`} key={i + 1}>
                  <h3 className="martitem__title">{obj.title}</h3>
                  <p className='martitem__desc'>{obj.itemsDesc}</p>
                </Link>
                <div className="martitem__btn_read">
                  <div className='martiem__btn_box'>
                    <button className='martitem__catBtn'>{obj.categor}</button>
                    <p className='martitem__read'>{obj.read} Selected for you</p>
                  </div>
                  <div className='martiem__btn_box'>
                    <button
                      className='martitem__saveBtn'
                      onClick={() => saveBtnFunc(obj.id)}>
                      {obj.active ? <i class='bx bxs-bookmark'></i> : <i className='bx bx-bookmark'></i>}
                    </button>
                    <ArticlModal
                      obj={obj}
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
              <Link to={`/ArticlPage:id${obj.id}`} key={i + 1}>
                <div className='mart__item_img_box'>
                  <img src={obj.img} alt="obj img" />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <ListModal
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
        saveObj={saveObj}
        setSaveObj={setSaveObj}
      />
    </>
  )
}

export default Articls
