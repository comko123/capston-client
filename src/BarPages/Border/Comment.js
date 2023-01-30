import { useRef,useState } from "react"
import { useParams } from "react-router-dom"
import { inCloser } from "../../api/inClosing"
import { articles, parsingLogic } from "../../data"
import { useAlert } from "../../hooks/useAlert"
import "./Comment.moudule.css"
const Comment = () => {
const [[message,setMessage],{id}] = [useState({}),useParams()]
const [creRef,creNickName] = [useRef(),useRef()]
const [{data},commentInfo] = [inCloser.useGetCommentQuery(id),inCloser.useSetCommentInputMutation()]
useAlert(message,0)
return (<><ul>{data?.map((item, index) => {
return (<div className="commentList" key={index}>
<li><hr className="comment_HR"/><h4 className="comment_nickname">{item.nickname}</h4>
<h4 className="comment">{item.body}</h4><div className="commentContentsPR"></div></li></div>)})}</ul>
<div className="borderHR_comment"/><form onSubmit={async e=>{e.preventDefault()
try{const crefContent = new articles(creNickName.current.value,creRef.current.value)
const newCommentInfo = await(await commentInfo[0]({info:crefContent,num:id})).data
parsingLogic(setMessage,newCommentInfo)}catch(error){console.log(error)}}}>
<div className="commentSubmitPR"><input className="nickname"type="text"placeholder="닉네임을 입력하세요." ref={creNickName}/>
<textarea className="commentField" placeholder="댓글을 입력하세요." rows="5" cols="80" ref={creRef}/>
<input className="commentSubmit" type="submit" value="submit"/></div></form></>)}
export default Comment
