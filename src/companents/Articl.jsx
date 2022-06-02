import React from 'react'
import ArtWrite from './MainContent/ArtWrite/ArtWrite'

function Articl({
  artObj, setArtObj,
  inpVal, setInpVal,
  saveObj, setSaveObj,
  descInp, setDescInp,
  listArr, setListArr,
  creatBtn, setCreatBtn,
  modalBtn, setModalBtn,
  saveModal, setSaveModal,
  addArtObj, setAddArtObj,
  privateBtn, setPrivateBtn,
  categorArr, setCategorArr,
  textareaVal, setTextareaVal,
}) {

  return (
    <>
      <div className="container">
        <ArtWrite
          artObj={artObj}
          inpVal={inpVal}
          saveObj={saveObj}
          listArr={listArr}
          descInp={descInp}
          modalBtn={modalBtn}
          creatBtn={creatBtn}
          setArtObj={setArtObj}
          addArtObj={addArtObj}
          setInpVal={setInpVal}
          saveModal={saveModal}
          categorArr={categorArr}
          setSaveObj={setSaveObj}
          privateBtn={privateBtn}
          setDescInp={setDescInp}
          setListArr={setListArr}
          setModalBtn={setModalBtn}
          setCreatBtn={setCreatBtn}
          textareaVal={textareaVal}
          setAddArtObj={setAddArtObj}
          setSaveModal={setSaveModal}
          setPrivateBtn={setPrivateBtn}
          setCategorArr={setCategorArr}
          setTextareaVal={setTextareaVal}
        />
      </div>
    </>
  )
}

export default Articl
