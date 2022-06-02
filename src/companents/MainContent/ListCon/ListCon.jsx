import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './ListCon.scss'
import ListModal from './ListModal/ListModal';

function ListCon({
  saveObj, setSaveObj,
  inpval, textAre, privB, obj,
  modalBtn, setModalBtn,
  creatBtn, setCreatBtn,
  inpVal, setInpVal,
  textareaVal, setTextareaVal,
  privateBtn, setPrivateBtn,
  descInp, setDescInp,
  listArr, setListArr,
  saveModal, setSaveModal
}) {
  // const [listArr, setListArr] = useState([])
  // const [modalBtn, setModalBtn] = useState(false)
  // const [creatBtn, setCreatBtn] = useState(false)
  // const [inpVal, setInpVal] = useState(0)
  // const [textareaVal, setTextareaVal] = useState(0)
  // const [privateBtn, setPrivateBtn] = useState(false)
  // const [descInp, setDescInp] = useState(false)
  // const [listId, setListId] = useState(1)

  return (
    <>
      <div className="listcon">
        <div className="listcon__top_box">
          <h3 className='listcon__title'>Your lists</h3>
          <button className='listcon__addBtn' onClick={() => setModalBtn(true)}>New list</button>
        </div>

        <div className="listcon__categor_btn_box">
          <button className='listcon__liscategor_btn'>Saved</button>
          <button className='listcon__liscategor_btn'>Highlights</button>
        </div>

        <div className="listcon__list_box">
          <ul className="listcon__list">
            {/* <li className="listcon__item">
              <div className="listcon__item_left">
                <h4 className="listcon__itemlef_title">Reading list</h4>
                <div className="listcon__item_btn_box">
                  <button className='listcon__item_btn'>View list</button>
                  <p className='listcon__item_stories_count'>1 stories <span><i className='bx bxs-lock-alt'></i></span></p>
                </div>
              </div>
              <div className="listcon__item_imgs">
                <div className="listcon__imgs_box">
                  <img src="https://picsum.photos/id/5/166/166" alt="picsum photos" />
                </div>
                <div className="listcon__imgs_box">
                  <img src="https://picsum.photos/id/18/166/166" alt="picsum photos" />
                </div>
                <div className="listcon__imgs_box">
                  <img src="https://picsum.photos/id/66/166/166" alt="picsum photos" />
                </div>
              </div>
            </li> */}

            {saveObj.map((items, i) => (
              <Link to={`/ListItemsPag:id-${items.id}`} key={i + 1}>
                <li className="listcon__item" key={i + 1}>
                  <div className="listcon__item_left">
                    <h4 className="listcon__itemlef_title">{items.listTitle}</h4>
                    <div className="listcon__item_btn_box">
                      <button className='listcon__item_btn'>View list</button>
                      <p className='listcon__item_stories_count'>{items.storiescount} stories {items.private ? <span><i className='bx bxs-lock-alt'></i></span> : ""}</p>
                    </div>
                  </div>
                  <div className="listcon__item_imgs">
                    <div className="listcon__imgs_box">
                      <img src={`https://picsum.photos/id/${Math.floor(Math.random() * 100)}/166/166`} alt="picsum photos" />
                    </div>
                    <div className="listcon__imgs_box">
                      <img src={`https://picsum.photos/id/${Math.floor(Math.random() * 100)}/166/166`} alt="picsum photos" />
                    </div>
                    <div className="listcon__imgs_box">
                      <img src={`https://picsum.photos/id/${Math.floor(Math.random() * 100)}/166/166`} alt="picsum photos" />
                    </div>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
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

export default ListCon
