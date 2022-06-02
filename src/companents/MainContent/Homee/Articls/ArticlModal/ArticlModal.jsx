import React, { useEffect, useState } from 'react'
import './ArticlModal.scss'

function ArticlModal({ saveObj, setSaveObj, modalBtn, obj, setModalBtn, saveModal, setSaveModal }) {
  const [listsObj, setListObj] = useState([...saveObj])
  let arrFilter;
  const listsClickFunc = (e) => {
    listsObj.map((btns, i) => {
      if (btns.id === e) {
        btns.active = !btns.active
        btns.storiesArr = [...btns.storiesArr, obj]
        btns.storiescount = btns.active ? btns.storiescount + 1 : btns.storiescount - 1
      }
      if (btns.active == false && btns.id == e) {
        btns.storiesArr = [...btns.storiesArr.filter(obb => obb.id !== obj.id)]
      }
    })
    arrFilter = listsObj.filter((elem, inex, obj) => obj.indexOf(elem) === inex)

    setListObj([...arrFilter])
    console.log(saveObj);
  }

  useEffect(() => {
    setListObj([...saveObj])
  }, [saveObj]);

  return (
    <>
      <div className={`martitem__save_modal ${obj.active ? "saveModal" : ""}`}>
        <div className="msavemodal__lists_box">
          {listsObj.map((lists, i) => (
            <div className='msavemodal__btn_box' key={i + 1}>
              <button
                className={`${lists.active ? 'msavemodal__btnn' : ""}`}
                id={lists.id}
                onClick={() => listsClickFunc(lists.id)}>
                <i className='bx bx-check'></i>
              </button>

              <p
                id={lists.id}
                onClick={() => listsClickFunc(lists.id)}>
                {lists.listTitle} <span>{lists.priv}</span>
              </p>
            </div>
          ))}
        </div>
        <button
          className="msavemodal__creatlist_modal"
          onClick={() => setModalBtn(!modalBtn)}>Create new list
        </button>
      </div>
    </>
  )
}

export default ArticlModal
