import React, { useState } from 'react'
let inpval = "", textAre = "", privB, obj;

function ListModal({
  saveObj, setSaveObj,
  creatBtn, setCreatBtn, inpVal,
  setInpVal, textareaVal,
  setTextareaVal, privateBtn,
  setPrivateBtn, descInp, setDescInp,
  modalBtn, setModalBtn, saveModal,
  setSaveModal
}) {
  const [listId, setListId] = useState(2)

  const inpValFunc = (e) => {
    // e.preventDefault()
    if (creatBtn) {
      if (e.target.id === 'creatListTitle') {
        inpval = e.target.value
        setInpVal(e.target.value.length)
      }
      if (e.target.id === 'lismodDescInp') {
        textAre = e.target.value
        setTextareaVal(e.target.value.length)
      }
      obj = {
        id: listId,
        private: privateBtn,
        active: false,
        listTitle: inpval,
        listDesc: textAre,
        storiescount: 0,
        storiesArr: []
      }
    }
    if (e.target.value.length > 0 && e.target.id === 'creatListTitle') {
      setCreatBtn(true)
    } else if (e.target.value.length === 0 && e.target.id === 'creatListTitle') {
      setCreatBtn(false)
    }
  }

  const createFunc = (e) => {
    e.preventDefault()
    if (creatBtn) {
      setDescInp(false)
      setModalBtn(false)
      privB = privateBtn
      setListId(listId + 1)
      setSaveObj([...saveObj, obj])
      inpval = ""
      textAre = ""
    }
    setInpVal(0)
    setTextareaVal(0)
    e.target.reset()
  }

  const removModal = () => {
    inpval = ""
    textAre = ""
    setInpVal(0)
    setTextareaVal(0)
    setDescInp(false)
    setModalBtn(false)
  }

  return (
    <>
      <div className={`lismodal ${modalBtn ? 'modalOpen' : ""}`}>
        <div className="lismodal__inner">
          <button className='lismodal__remov_btn' onClick={removModal}>
            <i className='bx bx-x' ></i>
          </button>
          <div className="lismodal__container">
            <h2 className="lismodal__title">Create new list</h2>
            <form className="lismodal__form" onSubmit={createFunc}>
              <div className='lismodform__inp_check_box'>
                <div className="lismodform__inp_box">
                  <input
                    type="text" name="text"
                    id="creatListTitle" placeholder='Give it a name'
                    onChange={inpValFunc}
                    value={inpval}
                  />
                  <p><span className={`${inpVal >= 60 ? 'inpval' : ""}`}>{inpVal}</span>/60</p>
                </div>
                <div className='lismodform__adddesc_btn_box'>
                  {descInp ? <textarea name="text" value={textAre} id="lismodDescInp" placeholder='Description' onChange={inpValFunc}></textarea> :
                    <button className='lismodform__adddesc_btn' onClick={() => setDescInp(true)}>Add a description</button>
                  }
                  {descInp ? <p><span className={`${textareaVal >= 280 ? 'inpval' : ""}`}>{textareaVal}</span>/280</p> : ""}
                </div>
                <div className='lismodform__checkbox_box'>
                  <button className={`checkboxBtn ${privateBtn ? "checkBtn" : ""}`} onClick={() => setPrivateBtn(!privateBtn)}>
                    <i className='bx bx-check'></i>
                  </button>
                  <p onClick={() => setPrivateBtn(!privateBtn)}>Make it private</p>
                </div>
              </div>

              <div className='limodform__btn_box'>
                <button className='lismodform__cancel_btn' onClick={() => (setModalBtn(false), setDescInp(false))}>Cancel</button>
                <button className={`lismodform__create_btn ${creatBtn ? "" : "disabled"}`}>Create</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default ListModal
