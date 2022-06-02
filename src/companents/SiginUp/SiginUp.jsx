import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './SiginUp.scss'

function SiginUp({ userObj, setUserObj, setFnameVal, setLnameVal, setPhoneeVal, setEmaillVal, setPasswordVal }) {
  const [fname, setFname] = useState(true)
  const [lname, setLname] = useState(true)
  const [phonee, setPhonee] = useState(true)
  const [emaill, setEmaill] = useState(true)
  const [passwordd, setPasswordd] = useState(true)
  const [submit, setSubmit] = useState(false)

  const submitFunc = (e) => {
    e.preventDefault()
  }

  const addUserObj = (e) => {
    console.log(submit);
    if (e.target.id === 'firstName') {
      if (e.target.value.length > 2) {
        setFnameVal(e.target.value)
        setFname(true)
      }
      else {
        setFname(false)
      }
    }
    if (e.target.id === 'lastName') {
      if (e.target.value.length > 2) {
        setLnameVal(e.target.value)
        setLname(true)
      }
      else {
        setLname(false)
      }
    }
    if (e.target.id === 'number') {
      if (e.target.value.length >= 9) {
        setPhoneeVal(e.target.value)
        setPhonee(true)
      }
      else {
        setPhonee(false)
      }
    }
    if (e.target.id === 'email') {
      if (e.target.value.length >= 2 && e.target.value.includes('@')) {
        setEmaillVal(e.target.value)
        setEmaill(true)
      }
      else {
        setEmaill(false)
      }
    }
    if (e.target.id === 'password') {
      setSubmit(true)
      if (e.target.value.length >= 8) {
        setPasswordVal(e.target.value)
        setPasswordd(true)
      }
      else {
        setPasswordd(false)
      }
    }
  }

  return (
    <>
      <div className="siginup sigup">
        <div className="sigup__inner">
          <div className="sigup__left">
            <div className="sigup__img_box">
              <img className='sigin__left_img' src="https://imgur.com/mCnkXy2.png" alt="img" />
            </div>
          </div>
          <div className="sigup__right">
            <div className="sigup__right_box">
              <h2 className="sigup__title">Sigin up</h2>
              <p className='sigup__links'>Already have an account? <Link to={"/SiginIn"}>Sign in</Link></p>

              <form className='sigin__form' >
                <input
                  className={`sigin__form_inp ${fname ? "" : "inpBorder"}`}
                  type="text" name="text" id="firstName"
                  placeholder='First name'
                  onChange={addUserObj}
                  required
                />
                <p className={`sigin__form_eror-tit ${fname ? "errorNone" : "errorBlock"}`}>Length should be greater than 2</p>
                <input
                  className='sigin__form_inp'
                  type="text" name="text" id="lastName"
                  placeholder='Last name'
                  onChange={addUserObj}
                  required
                />
                <p className={`sigin__form_eror-tit ${lname ? "errorNone" : "errorBlock"}`}>Length should be greater than 2</p>
                <input
                  className='sigin__form_inp'
                  type="number" name="text" id="number"
                  placeholder='Phone'
                  onChange={addUserObj}
                  required
                />
                <p className={`sigin__form_eror-tit ${phonee ? "errorNone" : "errorBlock"}`}>The number is greater than 9</p>
                <input
                  className='sigin__form_inp'
                  type="text" name="text" id="email"
                  placeholder='Email'
                  onChange={addUserObj}
                  required
                />
                <p className={`sigin__form_eror-tit ${emaill ? "errorNone" : "errorBlock"}`}>Length should be greater than 2</p>
                <input
                  className='sigin__form_inp'
                  type="text" name="text" id="password"
                  placeholder='Password'
                  onChange={addUserObj}
                  required
                />
                <p className={`sigin__form_eror-tit ${passwordd ? "errorNone" : "errorBlock"}`}>password length should not be less than 8</p>
                {submit ?
                  <Link to={'/Home'}><button className='sigin__form_btn' onSubmit={submitFunc}>Next step</button></Link> :
                  <button className='sigin__form_btn'>Next step</button>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SiginUp
