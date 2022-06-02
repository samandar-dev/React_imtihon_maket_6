import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import object from './Object';
import Home from './companents/Home';
import List from './companents/List';
import Articl from './companents/Articl';
import Stories from './companents/Stories';
import ArticlPage from './companents/ArticlPage';
import ProfilPage from './companents/ProfilPage';
import SiginUp from './companents/SiginUp/SiginUp';
import Natification from './companents/Natification';
import ListItemsPag from './companents/ListItemsPag';
import './App.scss';

function App() {
  const [fnameVal, setFnameVal] = useState('')
  const [lnameVal, setLnameVal] = useState('')
  const [phoneeVal, setPhoneeVal] = useState('')
  const [emaillVal, setEmaillVal] = useState('')
  const [passwordVal, setPasswordVal] = useState('')

  const [categorArr, setCategorArr] = useState([...object])
  const [artObj, setArtObj] = useState([...object])
  const [addArtObj, setAddArtObj] = useState([])
  const [saveObj, setSaveObj] = useState([
    {
      id: 1,
      private: true,
      active: true,
      listTitle: 'Reading list',
      listDesc: 'Desc ',
      storiescount: 1,
      storiesArr: []
    },
  ])

  const [inpVal, setInpVal] = useState(0)
  const [listArr, setListArr] = useState([])
  const [descInp, setDescInp] = useState(false)
  const [modalBtn, setModalBtn] = useState(false)
  const [creatBtn, setCreatBtn] = useState(false)
  const [textareaVal, setTextareaVal] = useState(0)
  const [saveModal, setSaveModal] = useState(false)
  const [privateBtn, setPrivateBtn] = useState(false)

  useEffect(() => {
  }, [artObj]);

  return (
    <>
      <Routes>
        <Route path='/Notification'
          element={<Natification />}
        />
        <Route path='/Stories' element={<Stories
          artObj={artObj}
          setArtObj={setArtObj}
          addArtObj={addArtObj}
          setAddArtObj={setAddArtObj}
        />}
        />
        <Route path='/ProfilPage'
          element={<ProfilPage
            artObj={artObj}
            fnameVal={fnameVal}
            lnameVal={lnameVal}
            setArtObj={setArtObj}
            addArtObj={addArtObj}
            setAddArtObj={setAddArtObj}
          />}
        />
        <Route path='/'
          element={<SiginUp
            setFnameVal={setFnameVal}
            setLnameVal={setLnameVal}
            setPhoneeVal={setPhoneeVal}
            setEmaillVal={setEmaillVal}
            setPasswordVal={setPasswordVal}
          />}
        />
        <Route path='/Home'
          element={<Home
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
          />}
        />
        <Route path='/Lists'
          element={<List
            inpVal={inpVal}
            saveObj={saveObj}
            listArr={listArr}
            descInp={descInp}
            creatBtn={creatBtn}
            modalBtn={modalBtn}
            setInpVal={setInpVal}
            saveModal={saveModal}
            setSaveObj={setSaveObj}
            setListArr={setListArr}
            privateBtn={privateBtn}
            setDescInp={setDescInp}
            setModalBtn={setModalBtn}
            setCreatBtn={setCreatBtn}
            textareaVal={textareaVal}
            setSaveModal={setSaveModal}
            setPrivateBtn={setPrivateBtn}
            setTextareaVal={setTextareaVal}
          />}
        />
        <Route path='/Articl'
          element={<Articl
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
            setListArr={setListArr}
            privateBtn={privateBtn}
            setDescInp={setDescInp}
            setModalBtn={setModalBtn}
            setCreatBtn={setCreatBtn}
            textareaVal={textareaVal}
            setAddArtObj={setAddArtObj}
            setSaveModal={setSaveModal}
            setCategorArr={setCategorArr}
            setPrivateBtn={setPrivateBtn}
            setTextareaVal={setTextareaVal}
          />}
        />
        <Route path='/ArticlPage:id'
          element={<ArticlPage
            artObj={artObj}
            inpVal={inpVal}
            descInp={descInp}
            saveObj={saveObj}
            modalBtn={modalBtn}
            creatBtn={creatBtn}
            setArtObj={setArtObj}
            setInpVal={setInpVal}
            saveModal={saveModal}
            setSaveObj={setSaveObj}
            categorArr={categorArr}
            privateBtn={privateBtn}
            setDescInp={setDescInp}
            setFnameVal={fnameVal}
            setLnameVal={lnameVal}
            setModalBtn={setModalBtn}
            setCreatBtn={setCreatBtn}
            textareaVal={textareaVal}
            setSaveModal={setSaveModal}
            setPrivateBtn={setPrivateBtn}
            setCategorArr={setCategorArr}
            setTextareaVal={setTextareaVal}
          />}
        />
        <Route path='/ListItemsPag:id'
          element={<ListItemsPag
            artObj={artObj}
            inpVal={inpVal}
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
            setCreatBtn={setCreatBtn}
            setModalBtn={setModalBtn}
            textareaVal={textareaVal}
            setSaveModal={setSaveModal}
            setCategorArr={setCategorArr}
            setPrivateBtn={setPrivateBtn}
            setTextareaVal={setTextareaVal}
          />}
        />
      </Routes>
    </>
  );
}

export default App;
