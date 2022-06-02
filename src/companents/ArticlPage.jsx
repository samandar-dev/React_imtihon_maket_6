import React from 'react'
import NavBar from './MainNavBar/NavBar'
import MainRight from './MainRight/MainRight'
import ArticlPages from './MainContent/Homee/ArticlPages/ArticlPages'

function ArticlPage({
  artObj, setArtObj,
  inpVal, setInpVal,
  descInp, setDescInp,
  saveObj, setSaveObj,
  creatBtn, setCreatBtn,
  modalBtn, setModalBtn,
  saveModal, setSaveModal,
  setFnameVal, setLnameVal,
  privateBtn, setPrivateBtn,
  categorArr, setCategorArr,
  textareaVal, setTextareaVal,
}) {

  return (
    <>
      <div className="container">
        <NavBar />
        <ArticlPages
          inpVal={inpVal}
          artObj={artObj}
          descInp={descInp}
          saveObj={saveObj}
          modalBtn={modalBtn}
          creatBtn={creatBtn}
          setArtObj={setArtObj}
          saveModal={saveModal}
          setInpVal={setInpVal}
          setSaveObj={setSaveObj}
          privateBtn={privateBtn}
          setDescInp={setDescInp}
          categorArr={categorArr}
          setModalBtn={setModalBtn}
          setCreatBtn={setCreatBtn}
          textareaVal={textareaVal}
          setFnameVal={setFnameVal}
          setLnameVal={setLnameVal}
          setSaveModal={setSaveModal}
          setPrivateBtn={setPrivateBtn}
          setCategorArr={setCategorArr}
          setTextareaVal={setTextareaVal}
        />
        <MainRight />
      </div>
    </>
  )
}

export default ArticlPage
