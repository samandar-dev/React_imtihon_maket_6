import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import object from '../../../../Object'
import CommentMod from '../../../CommentModal/CommentMod'
import ListModal from '../../ListCon/ListModal/ListModal'
import ArticlModal from '../Articls/ArticlModal/ArticlModal'
import './ArticlPages.scss'

function ArticlPages({
  saveObj, setSaveObj,
  inpval, textAre, privB,
  modalBtn, setModalBtn,
  creatBtn, setCreatBtn,
  artObj, setArtObj,
  inpVal, setInpVal,
  descInp, setDescInp,
  listArr, setListArr,
  saveModal, setSaveModal,
  setFnameVal, setLnameVal,
  privateBtn, setPrivateBtn,
  textareaVal, setTextareaVal,
}) {

  const [categorArr, setCategorArr] = useState([...object])
  const [objArt, setobjArt] = useState([...artObj])
  const [modalBox, setModalBox] = useState(false)

  let ulocation = useLocation()
  let obj;
  {
    artObj.map((obb, i) => {
      if (obb.id == ulocation.pathname.at(-1)) {
        obj = obb
      }
    })
  }

  const likeBtnFunc = (e) => {
    let arr = artObj.map((itm) => {
      if (itm.id === e) {
        itm.like = itm.like + 1
      }
    })
    setobjArt([...arr])
  }

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
    setobjArt([...artObj])
  }


  return (
    <>
      <section className="main__content mcon">
        <div className="artpages artpag">
          <div className="artpag__logo_box">
            <div className="artpag__logo_container">
              <img src={obj.avatar} alt="logo " />
              <p>Published in <b>{obj.categor}</b></p>
            </div>
          </div>
          <div className="mcon__container">
            <div className="artpag__top_box">
              <Link to={'/MyAccount'}>
                <div className="artpag__user_box">
                  <img src={obj.avatar} alt="avatar" />
                  <div className="artpag__user_name_data">
                    <h4 className='artpag__user_name'>{obj.name}</h4>
                    <p className='artpag__data'>
                      {obj.data} 2021 . <span>{obj.read}</span>
                    </p>
                  </div>
                </div>
              </Link>
              <div className="artpag__btns_box">
                <div className='artpag__btn_links'>
                  <button>
                    <i className='bx bxl-twitter'></i>
                  </button>
                  <button>
                    <i className='bx bxl-facebook-circle' ></i>
                  </button>
                  <button>
                    <i className='bx bxl-linkedin-square'></i>
                  </button>
                  <button>
                    <i className='bx bx-link'></i>
                  </button>
                </div>
                <div className='artpag__saveBtn_box'>
                  <button className='artpag__saveBtn' onClick={() => saveBtnFunc(obj.id)}>
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
                  <button className='artpag__saveBtn'>•••</button>
                </div>
              </div>
            </div>
            <div className="artpag__articl">
              <h3 className='artpag__art_title'>{obj.title}</h3>
              <p className='artpag__art_itemsdesc'>{obj.itemsDesc}</p>
              <div className="artpag__art_img-box">
                <img src={obj.img} alt="articl img" />
                <p>Photo by <span>Damian Zaleski</span> on <span>Unsplash</span></p>
              </div>
              <div>
                <p className='artpag__art_desctitle'>{obj.descTitle}</p>
                <p className='artpag__art__desc'>{obj.desc}</p>
              </div>
              <div className="artpag__art_bottom">
                <div className='artpag__art_bottom_btn'>
                  <button
                    className='artpag__art_like_btn'
                    onClick={() => likeBtnFunc(obj.id)}>👏 <span>{obj.like}</span>
                  </button>
                  <button className='artpag__art_like_btn' onClick={() => setModalBox(true)}>
                    <i className='bx bx-message-rounded'></i> <span>{obj.commentCount}</span>
                  </button>
                </div>
                <div className='artpag__art_bottom_btn'>
                  <button className='artpag__art_btn'>
                    <i className='bx bx-export'></i>
                  </button>
                  <button>
                    <i className='bx bxl-linkedin-square'></i>
                  </button>
                  <button>•••</button>
                </div>
              </div>
            </div>
          </div>
          <div className="artpag__art_modal">
            <button
              className='artpag__mod_like_btn'
              onClick={() => likeBtnFunc(obj.id)}>👏 <span>{obj.like}</span>
            </button>
            <button className='artpag__mod_like_btn' onClick={() => setModalBox(true)}>
              <i className='bx bx-message-rounded'></i> <span>{obj.commentCount}</span>
            </button>
            <button className='artpag__mod_like_btn'>•••</button>
          </div>
        </div>
      </section>
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
      <CommentMod
        obj={obj}
        artObj={artObj}
        objArt={objArt}
        modalBox={modalBox}
        setobjArt={setobjArt}
        setArtObj={setArtObj}
        setModalBox={setModalBox}
        setFnameVal={setFnameVal}
        setLnameVal={setLnameVal}
      />
    </>
  )
}

export default ArticlPages
