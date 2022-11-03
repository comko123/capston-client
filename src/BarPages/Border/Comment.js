import axios from "axios"
import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { content } from "../../data"

const Comment = () => {
    const [commentList,setCommentList] = useState([])
    const [message,setMessage] = useState(null)
    const [modifr,setModifr] = useState(true)
    const [focus,setFocus] = useState(null) 
    const [modRef,creRef] = [useRef(),useRef()]
    const navigate = useNavigate()
    useEffect(()=>{
        (async()=>{
            try {
              setCommentList(await(await axios(`/articles/${aritcle_id}/comments`)).data)  
            } catch(error){console.log(error)}})()
    },[])
return(<>
{typeof(message)==="object"?alert(message.errorMessage):typeof(message)==="string"?alert(message):null}
    {commentList.map((item,index)=>{return(<div>
        {index}. {item.nickname} : {item.body}
        <span onClick = {async()=>{
            await axios.delete(`/articles/comment/${comment_id}/delete`)

            navigate(0)
            }}>삭제하기</span>
        <span onClick={()=>{
            setModifr(!modifr)
            setFocus(index)}}>수정하기</span>
        {modifr?null:focus===index?
        <><br/>
        <form onSubmit={e=>{
            (async()=>{
                e.preventDefault()
                const modfContent = new content(item.nickname,modRef.current.value)
                setMessage(await(await axios.patch(`/articles/comment/${comment_id}/edit`,modfContent)).data)
                navigate(0)
            })()
        }}>
        <input type = "text" ref = {modRef} placeholder="수정내용"/>
        <input type="submit" value = "댓글 수정"/>
            </form></>:null}
        </div>)})}
<hr/>
<h4>댓글 작성하기</h4>
<form onSubmit={e=>{
    (async()=>{
        e.preventDefault()
        const creContent = new content(creRef.current.value)
        setMessage(await(await axios.post(`articles/${article_id}/new`,creContent)).data)
        navigate(0)
    })()
}}>
    <textarea placeholder="댓글을 작성해 보세요." ref = {creRef} rows="5" cols="80"/> 
    <input type = "submit" value = "작성 하기"/>
</form>
</>)}
export default Comment