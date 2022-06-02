import React, { useRef, useState } from 'react'

let replyObj = "", replyVal = "", idd = 0, count = true;

function CommentItems({ obj, artObj, setArtObj, objArt,
  setFnameVal, setLnameVal,
  setobjArt }) {

  const [replyUserBox, setReplyUserBox] = useState(false)
  const [replyModal, setReplyModal] = useState(false)
  let inp = useRef(null)

  const addReplyCommentFunc = (e) => {
    replyVal = e.target.value
    if (e.target.value.length > 0) {
      replyObj = {
        comRepId: idd + 1,
        comRepAvatar: 'https://static.tildacdn.com/tild3739-6430-4136-b536-343732316235/man_2_2x.png',
        comRepLike: 0,
        comReplyArr: [],
        comRepName: 'Samandar Bohodirov',
        dataComRep: '1 min',
        comRepDesc: replyVal,
      }
    }
  }

  const addReplyBtnFunc = (id) => {
    if (replyVal !== "") {
      setArtObj([...artObj.filter(
        elm => elm.id === obj.id ? elm.comments.map(rep => rep.commentId === id ?
          (rep.commentReplyArr = [replyObj, ...rep.commentReplyArr], rep.commentActive = true)
          : rep.commentActive = false) : "")])

      setReplyModal(false)
      setReplyUserBox(true)
    }
  }

  const replyModalRemovFunc = (e) => {
    artObj.map((el) => {
      if (el.id === obj.id) {
        el.comments.filter((elem) =>
        (elem.commentId === e ? (elem.commentActive = false, setReplyModal(false))
          : elem.commentActive = false))
        setReplyUserBox(true)
        count = true
        replyVal = ""
        inp.current.value = ""
      }
    })
  }

  const replyInpModalFunc = (e) => {
    if (count == true) {
      artObj.map((el) => {
        if (el.id === obj.id) {
          el.comments.filter((elem) =>
          (elem.commentId === e ? (elem.commentActive = true, setReplyModal(true)) :
            elem.commentActive = false))
          setReplyUserBox(true)
          count = false
        }
      })
    }
    else {
      count = true
      replyModalRemovFunc(e)
    }
  }

  const repleyLikeFunc = (id) => {
    console.log(obj);
    objArt.map((obb => {
      obb.comments.map((com) => {
        if (com.commentId === id) {
          com.commentLike = com.commentLike + 1
        }
      })
    }))
    setobjArt([...objArt])
  }

  return (
    <>
      {obj.comments.map((itm, i) => (
        <li className='commodal__item' id={itm.id} key={i + 1}>
          <div className="commodal__item-top-box">
            <div className='commodal__item-img-name'>
              <img src={itm.commentAvatar} alt="user logo" />
              <div>
                <p>{itm.commentName}</p>
                <p>{itm.dataComment}</p>
              </div>
            </div>
            <button>•••</button>
          </div>

          <div className="commodal__item-desc_box">
            <p>{itm.commentDesc}</p>
          </div>

          <div className="commodal__bottom-box">
            <button
              className='commodal__bottom-btn-one'
              onClick={() => repleyLikeFunc(itm.commentId)}>👏 <span>{itm.commentLike}</span>
            </button>

            <button onClick={() => replyInpModalFunc(itm.commentId)}>Reply</button>
          </div>

          <div className={`addReply ${itm.commentActive ? "" : "d-none"}`}>
            <div className='addReply__inp-box'>
              <textarea
                ref={inp}
                name="text" id="addReply"
                placeholder='Raplying to Vyka Nguyen'
                onKeyUp={addReplyCommentFunc}>
              </textarea>

              <div className='addReply__btn-box'>
                <button className='commodal__btn-one' onClick={() => replyModalRemovFunc(itm.commentId)}>Cancel</button>
                <button
                  className={`commodal__btn-two ${replyVal.length > 0 ? 'disabled' : ""}`}
                  onClick={() => replyVal.length > 0 ?
                    (addReplyBtnFunc(itm.commentId), replyModalRemovFunc(itm.commentId)) : ""}>Raspond
                </button>
              </div>
            </div>
          </div>

          <div className='reply__box'>
            {itm.commentReplyArr.map((rep, i) => (
              <div className={`addReply_comBox ${replyUserBox ? "d-block" : ""}`} id={rep.comRepId} key={i + 1}>
                <div className='addReply_inner'>
                  <div className="commodal__item-top-box">
                    <div className='commodal__item-img-name'>
                      <img src="https://brusvnika.com.ua/wp-content/uploads/2020/07/default_avatar.png" alt="user logo" />
                      <div>
                        <p>{rep.comRepName}</p>
                        <p>{rep.dataComRep}</p>
                      </div>
                    </div>
                    <button>•••</button>
                  </div>

                  <div className="addReply_desc_box">
                    <p>{rep.comRepDesc}</p>
                  </div>

                  <div className="commodal__bottom-box">
                    <button
                      className='commodal__bottom-btn-one'
                      onClick={() => repleyLikeFunc(itm.commentId)}>👏 <span>{rep.comRepLike}</span>
                    </button>

                    <button>Reply</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </li>
      ))}
    </>
  )
}

export default CommentItems
