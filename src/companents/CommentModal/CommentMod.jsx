import React, { useState } from 'react'
import CommentItems from './CommentItems/CommentItems';
import './CommentMod.scss'

let comObj = "", commentVal = "", idd;

function CommentMod({ obj, artObj, setArtObj, modalBox, setModalBox, objArt,
  setFnameVal, setLnameVal,
  setobjArt }) {
  const [inpTarget, setInpTarget] = useState(false)

  const addCommentFuncHandler = (e) => {
    idd = obj.comments.length + 1
    commentVal = e.target.value
    if (e.target.value.length > 0) {
      comObj = {
        commentId: idd,
        commentAvatar: 'https://static.tildacdn.com/tild3739-6430-4136-b536-343732316235/man_2_2x.png',
        commentLike: 0,
        commentReplyArr: [],
        commentName: 'Samandar Bohodirov',
        dataComment: '1 min',
        commentDesc: commentVal,
      }
    }
  }

  const addCommentBtnFunc = () => {
    if (commentVal !== "") {
      setArtObj([...artObj.filter(elm => elm.id === obj.id ? (elm.commentCount = elm.commentCount + 1, elm.comments = [comObj, ...elm.comments]) : "")])
      commentVal = ""
    }
  }

  return (
    <>
      <div className={`commodal ${modalBox ? "modalOpen" : ""}`}>
        <div className="commodal__top_box">
          <h3>Respons 12</h3>

          <button className='commodal__removBtn' onClick={() => setModalBox(false)}>
            <i className='bx bx-x'></i>
          </button>
        </div>

        <div className="commodal__comment">
          <div className={`commodal__user_box ${inpTarget ? "d-nonee" : ""}`}>
            <img
              className={`${inpTarget ? "d-nonee" : ""}`}
              src="https://brusvnika.com.ua/wp-content/uploads/2020/07/default_avatar.png"
              alt="user logo"
            />
            <p className={`${inpTarget ? "d-nonee" : ""}`}>{setLnameVal} {setFnameVal}</p>
          </div>

          <div className={`commodal__inp-box ${inpTarget ? "inpH" : ""}`}>
            <textarea
              name="text" id="commentInp"
              placeholder='What are your thoughts?'
              onClick={() => setInpTarget(false)}
              onKeyUp={addCommentFuncHandler} >
            </textarea>
          </div>

          <div className={`commodal__btns_box ${inpTarget ? "d-nonee" : ""}`}>
            <button
              className={`commodal__btn-one ${inpTarget ? "d-nonee" : ""}`}
              onClick={() => setInpTarget(true)}>Cancel
            </button>

            <button
              className={`commodal__btn-two ${inpTarget ? "d-nonee" : ""}`}
              onClick={addCommentBtnFunc}>Raspond
            </button>
          </div>
        </div>

        <div className="commodal__comList-box">
          <ul className='commodal__list'>
            <CommentItems
              obj={obj}
              artObj={artObj}
              setArtObj={setArtObj}
              objArt={objArt}
              setobjArt={setobjArt}
              setLnameVal={setLnameVal}
              setFnameVal={setFnameVal}
            />
          </ul>
        </div>
      </div>
    </>
  )
}

export default CommentMod
