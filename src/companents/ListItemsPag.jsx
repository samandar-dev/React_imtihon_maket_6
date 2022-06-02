import React from 'react'
import NavBar from './MainNavBar/NavBar'
import MainRight from './MainRight/MainRight'
import LisItemPag from './MainContent/ListCon/ListitemsPag/LisItemPag'

function ListItemsPag({
  artObj, setArtObj,
  inpVal, setInpVal,
  saveObj, setSaveObj,
  descInp, setDescInp,
  modalBtn, setModalBtn,
  creatBtn, setCreatBtn,
  saveModal, setSaveModal,
  categorArr, setCategorArr,
  privateBtn, setPrivateBtn,
  textareaVal, setTextareaVal,
}) {

  return (
    <>
      <div className="container">
        <NavBar />
        <LisItemPag
          inpVal={inpVal}
          artObj={artObj}
          saveObj={saveObj}
          descInp={descInp}
          modalBtn={modalBtn}
          creatBtn={creatBtn}
          setArtObj={setArtObj}
          saveModal={saveModal}
          setInpVal={setInpVal}
          setSaveObj={setSaveObj}
          categorArr={categorArr}
          privateBtn={privateBtn}
          setDescInp={setDescInp}
          setModalBtn={setModalBtn}
          setCreatBtn={setCreatBtn}
          textareaVal={textareaVal}
          setSaveModal={setSaveModal}
          setCategorArr={setCategorArr}
          setPrivateBtn={setPrivateBtn}
          setTextareaVal={setTextareaVal}
        />
        <MainRight />
      </div>
    </>
  )
}

export default ListItemsPag
