import React from 'react'
import NavBar from './MainNavBar/NavBar'
import MainRight from './MainRight/MainRight'
import Profil from './MainContent/ProfilPage/Profil'

function ProfilPage({ fnameVal, lnameVal, artObj, setArtObj, addArtObj, setAddArtObj }) {
  return (
    <>
      <div className="container">
        <NavBar />
        <Profil
          artObj={artObj}
          fnameVal={fnameVal}
          lnameVal={lnameVal}
          setArtObj={setArtObj}
          addArtObj={addArtObj}
          setAddArtObj={setAddArtObj}
        />
        <MainRight />
      </div>
    </>
  )
}

export default ProfilPage
