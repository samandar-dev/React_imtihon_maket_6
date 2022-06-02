import React from 'react'
import NavBar from './MainNavBar/NavBar'
import MainRight from './MainRight/MainRight'
import ListCon from './MainContent/ListCon/ListCon'

function List({
  obj,
  inpVal, setInpVal,
  saveObj, setSaveObj,
  descInp, setDescInp,
  listArr, setListArr,
  modalBtn, setModalBtn,
  creatBtn, setCreatBtn,
  inpval, textAre, privB,
  saveModal, setSaveModal,
  privateBtn, setPrivateBtn,
  textareaVal, setTextareaVal,
}) {

  return (
    <>
      <div className="container">
        <NavBar />
        <section className="main__content mcon">
          <div className="mcon__container">
            <ListCon
              obj={obj}
              privB={privB}
              inpval={inpval}
              inpVal={inpVal}
              listArr={listArr}
              textAre={textAre}
              saveObj={saveObj}
              descInp={descInp}
              creatBtn={creatBtn}
              modalBtn={modalBtn}
              setInpVal={setInpVal}
              saveModal={saveModal}
              setListArr={setListArr}
              setDescInp={setDescInp}
              privateBtn={privateBtn}
              setSaveObj={setSaveObj}
              setModalBtn={setModalBtn}
              setCreatBtn={setCreatBtn}
              textareaVal={textareaVal}
              setSaveModal={setSaveModal}
              setPrivateBtn={setPrivateBtn}
              setTextareaVal={setTextareaVal}
            />
          </div>
        </section>
        <MainRight />
      </div>
    </>
  )
}

export default List
