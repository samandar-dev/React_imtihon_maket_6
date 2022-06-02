import React from 'react'
import NavBar from './MainNavBar/NavBar'
import MainRight from './MainRight/MainRight'
import Categor from './MainContent/Homee/Categor/Categor'
import Articls from './MainContent/Homee/Articls/Articls'
import './MainContent.scss'

function Home({
  saveObj, creatBtn,
  setCreatBtn, inpVal,
  setSaveObj, modalBtn,
  setModalBtn, saveModal,
  setInpVal, textareaVal,
  categorArr, setCategorArr,
  setTextareaVal, privateBtn,
  setSaveModal, artObj, setArtObj,
  setPrivateBtn, descInp, setDescInp,
}) {
  return (
    <>
      <div className="container">
        <NavBar />
        <section className="main__content mcon">
          <div className="mcon__container">
            <Categor
              artObj={artObj}
              setArtObj={setArtObj}
              categorArr={categorArr}
              setCategorArr={setCategorArr}
            />
            <Articls
              artObj={artObj}
              inpVal={inpVal}
              saveObj={saveObj}
              descInp={descInp}
              modalBtn={modalBtn}
              creatBtn={creatBtn}
              setArtObj={setArtObj}
              saveModal={saveModal}
              setInpVal={setInpVal}
              categorArr={categorArr}
              setSaveObj={setSaveObj}
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
          </div>
        </section>
        <MainRight />
      </div>
    </>
  )
}

export default Home
