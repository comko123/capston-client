import axios from "axios"
import {useEffect,useRef,useState} from "react"
import { useParams } from "react-router-dom"
import { articles } from "../../data"
import { useAlert } from "../../hooks/useAlert"
import "./Comment.moudule.css"
const Comment = () => {
  const [commentList,setCommentList] = useState([])
    const [message,setMessage] = useState({})
    const [creRef,creNickName] = [useRef(),useRef()]
    const parms = useParams()
    useEffect(()=>{(async()=>{try{
    setCommentList(await(await axios(`/articles/${parms.id}/comments`)).data)}
    catch(error){console.log(error)}})()},[parms])
    useAlert(message,0)
return (<><ul>{commentList.map((item, index) => {
        return (<div className="commentList" key={index}>
        <li><hr className="comment_HR"/>
        <h4 className="comment_nickname">{item.nickname}</h4>
        <h4 className="comment">{item.body}</h4>
        <div className="commentContentsPR"></div></li></div>)})}</ul>
        <div className="borderHR_comment"/>
        <form onSubmit={e=>{(async()=>{try{e.preventDefault()
        const crefContent = new articles(creNickName.current.value,creRef.current.value)
        setMessage(await(await axios.post(`/articles/${parms.id}/comment/new`,crefContent)).data)}
        catch(error){console.log(error)}})()}}>
        <div className="commentSubmitPR">
        <input className="nickname"type="text"
        placeholder="닉네임을 입력하세요." ref={creNickName}/>
        <textarea className="commentField" placeholder="댓글을 입력하세요."
        rows="5" cols="80" ref={creRef}/>
        <input className="commentSubmit" type="submit" value="submit"/>
        </div></form></>)}
export default Comment
