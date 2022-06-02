import React, { useEffect, useState } from 'react'
import object from '../../../../Object'
import './Categor.scss'

function Categor({ artObj, setArtObj, categorArr, setCategorArr }) {
  const [categorBtns, setCategorBtns] = useState(['All'])
  const categorBtnsFunc = () => {
    let arr = []
    let categorBtnsArr;
    object.map((btns, i) => {
      arr.push(btns.categor)
      categorBtnsArr = arr.filter((elem, inex, obj) => obj.indexOf(elem) === inex)
    })
    setCategorBtns([...categorBtns, ...categorBtnsArr])
  }

  const categorFuncHandler = (e) => {
    if (e.target.id === 'All') {
      setArtObj([...object])
    } else {
      setArtObj([...object.filter((item) => item.categor === e.target.id)])
    }
  }

  useEffect(() => {
    categorBtnsFunc()
  }, [object]);

  return (
    <>
      <div className="mcon__categor">
        <ul className="mcon__list">
          {categorBtns.map((btns, i) => (
            <li className="mcon__item" key={i + 1}>
              <button className='mcon__btn' id={btns} onClick={categorFuncHandler}>{btns}</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Categor
