import { useState } from "react";
const StyleClothing = () => {

    const [vintage,setVintage]=useState(null) 
    const [dandy,setDandy]=useState(null)
    const [casual,setCasual] =useState(null)
const [normcore,setNormcore]=useState(null) 
const [street,setStreet]=useState(null)
    const del = () => {
   return [vintage,dandy,casual,normcore,street].filter(S=>S!==null)
}

    return <form onSubmit={e=>e.preventDefault()}>
<h1>스타일</h1>
    빈티지 <input type = "checkbox" value = "vintage" onClick = {(e)=>setVintage(e.target.value)}/>
    <br/>
    댄디 <input type = "checkbox" value = "dandy" onClick = {(e)=>setDandy(e.target.value)}/>
    <br/>
    캐주얼 <input type = "checkbox" value = "casual"onClick = {(e)=>setCasual(e.target.value)}/>
    <br/>
    놈코어 <input type = "checkbox" value = "normcore" onClick = {(e)=>setNormcore(e.target.value)}/>
    <br/>
    스트릿 <input type = "checkbox" value = "street" onClick = {(e)=>setStreet(e.target.value)}/>
    <br/>
    <input type = "button" value = "제출" onClick={()=>console.log(del())}/>
    </form> 
}
export default StyleClothing