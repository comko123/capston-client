import axios from "axios"
import { useEffect, useState } from "react"
import { Outlet, useParams } from "react-router-dom"

const WritingLetter = () => {
    const parms = useParams()
    const [content,setContet] = useState({})
    const [chanArticle,setChanArticle] =useState({})
    useEffect(()=>{
        (async()=>{
            try {
    setContet(await(await axios(`/articles/{id}`)).data)  
            } catch(error){console.log(error)}})()},[parms])

const {title,body} = content
return(<>
 {typeof(chanArticle)==="object"?alert(chanArticle.errorMessage):typeof(chanArticle)==="string"?alert(chanArticle):null}
<h1>{title}</h1>
<span onClick = {async()=>{
    setChanArticle(await(await axios.delete(`/articles/{id}/delete`)).data)
    }}>삭제 하기</span>
<br/>
<span onClick = {async()=>{
    setChanArticle(await(await axios(`/articles/{id}/delete`)).data)
    }}>수정 하기</span>
<br/>
<h3>{body}</h3>
<hr/>
<h4> 댓글 </h4>
<Outlet></Outlet>
</>)}
export default WritingLetter
//수정하기 추가구현