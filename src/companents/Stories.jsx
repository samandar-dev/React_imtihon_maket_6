import React from 'react'
import NavBar from './MainNavBar/NavBar'
import MainRight from './MainRight/MainRight'
import Stori from './MainContent/Stories/Stori'

function Stories({ artObj, setArtObj, addArtObj, setAddArtObj }) {
  return (
    <>
      <div className="container">
        <NavBar />
        <section className="main__content mcon">
          <div className="mcon__container">
            <Stori
              artObj={artObj}
              setArtObj={setArtObj}
              addArtObj={addArtObj}
              setAddArtObj={setAddArtObj}
            />
          </div>
        </section>
        <MainRight />
      </div>
    </>
  )
}

export default Stories
