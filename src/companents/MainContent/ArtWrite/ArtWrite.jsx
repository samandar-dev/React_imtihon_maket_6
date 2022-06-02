import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import object from '../../../Object';
import './ArtWrite.scss'
let titleInp = "", inpDesc = "", objDesc;

function ArtWrite({
  inpval, textAre,
  artObj, setArtObj,
  privB, setModalBtn,
  privateBtn, setDescInp,
  addArtObj, setAddArtObj,
  setInpVal, setTextareaVal,
}) {

  const inpFocus = useRef(null)
  const [listId, setListId] = useState(11)
  const [inpArr, setInpArr] = useState([1, 2])
  const [addArticl, setAddArticl] = useState([...object])

  const creatInputsFunc = (e) => {
    // e.preventDefault()
    if (e.keyCode == '13') {
      inpFocus.current.focus();
      setInpArr([...inpArr, 1])
    }
    if (e.keyCode == '8' && inpArr.length > 1) {
      inpArr.splice(-1)
      setInpArr([...inpArr])
      inpFocus.current.previousSibling.focus();
    }
    if (e.target.id == 'titleInp') {
      titleInp = e.target.value
    }
    if (e.target.id == 'descInp') {
      inpDesc = e.target.value
    }
    objDesc = {
      id: listId,
      avatar: 'https://static.tildacdn.com/tild3739-6430-4136-b536-343732316235/man_2_2x.png',
      name: 'Jari Roomer in Personal Growth Lab',
      categor: 'Productivity',
      comment: 34,
      like: 235,
      active: false,
      data: 'May 4',
      read: '5 min read  .',
      title: titleInp,
      itemsDesc: inpDesc,
      img: 'https://miro.medium.com/max/700/0*q-4W7FkbMVg8Fner',
      descTitle: inpDesc,
      descInfo: inpDesc,
      desc: inpDesc,
    }
  }

  const addDescBtnFunc = (e) => {
    e.preventDefault()
    setDescInp(false)
    setModalBtn(false)
    privB = privateBtn
    setListId(listId + 1)
    setArtObj([objDesc, ...artObj])
    setAddArtObj([objDesc, ...addArtObj])
    inpval = ""
    textAre = ""
    setInpVal(0)
    setTextareaVal(0)
    e.target.reset()
  }

  return (
    <>
      <div className="artwrite">
        <div className="artwrite__header">
          <div className="artwrite__logo-box">
            <Link to={'/Home'}>
              <img src="https://imgur.com/MDi3hch.png" alt="logo" />
            </Link>
            <h2>Draft in Samandar Bohodirov</h2>
          </div>
          <div className="artwrite__btns_box">
            <button className='artwrite__btns-publish' onClick={addDescBtnFunc}>
              <Link to={'/Stories'}>
                <p className='artwrite__btns-publish-p'>
                  Publish
                </p>
              </Link>
            </button>
            <button className='artwrite__btns'>•••</button>
            <button className='artwrite__btns'>
              <i className='bx bx-bell'></i>
            </button>
            <button className='artwrite__btns'>
              <img src="https://brusvnika.com.ua/wp-content/uploads/2020/07/default_avatar.png" alt="user logo" />
            </button>
          </div>
        </div>
        <div className="artwrite__inputs_box">
          {inpArr.map((inp, i) => {
            if (i == 0) {
              return (
                <div className='artwrite__inp_box'>
                  <input className='artwrite__inpTitle' ref={inpFocus} name="" id="titleInp" placeholder='Title' onKeyUp={creatInputsFunc}></input>
                </div>
              )
            }
            else {
              return (
                <div className='artwrite__inp_box' key={i + 1}>
                  <input className='artwrite__inpDesc' ref={inpFocus} name="descInp" id="descInp" placeholder='Tell your story...' onKeyUp={creatInputsFunc} />
                </div>
              )
            }
          })}
        </div>
      </div>
    </>
  )
}

export default ArtWrite
