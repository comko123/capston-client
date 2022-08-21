/*eslint-disable*/
import React,{useState} from "react";
import MenuBar from "../Bar/MenuBar";
const userClothing = {springObj:{spring:[]},summerObj:{summer:[]},
fallObj:{fall:[]},winterObj:{winter:[]},styleObj:{style:[]}}
 const userSeasonStyle = (...rest) =>{
return(<>
<h3>{rest[0]}</h3>
<form onSubmit = {e=>e.preventDefault()}>
<input type="button" value = "제출" onClick={()=>console.log(rest[3])}/><br/>
{rest[1].map((clothing,index)=>{
return (<div key = {index}>{clothing}<input type ="checkbox" value = {rest[0]+"/"+`${clothing}`} onClick ={(e)=>
  {if(e.target.checked===true){
   rest[2].push(e.target.value)  
  const inputStyle =rest[2].filter((element,index)=>rest[2].indexOf(element)===index)}
    else{const deleteStyle =rest[2].splice(rest[2].indexOf(e.target.value),1)}
}}/> <br/></div>)})}</form></>)}
export default function  Information() {
  const [spring] = useState(["청바지","맨투맨","셔츠/블라우스","후드티","가디건"])
  const [summer] =useState(["반바지","반팔 티셔츠","셔츠/블라우스","민소매티셔츠","청바지"])
  const [fall] =useState(["청바지","맨투맨","셔츠/블라우스","후드티","니트/스웨터"])
  const [winter] =useState(["청바지","코트","패딩","후드티","니트/스웨터"])
  const [style] =useState(["빈티지","댄디","캐주얼","놈코어","스트릿"])
  return (<><h3>내정보 수정하기</h3>
<h5>마이페이지&gt;내정보 수정하기</h5>
{userSeasonStyle("봄" , spring , userClothing.springObj.spring , userClothing.springObj)}
{userSeasonStyle("여름" , summer , userClothing.summerObj.summer , userClothing.summerObj)}
{userSeasonStyle("가을" , fall,userClothing.fallObj.fall , userClothing.fallObj)}
{userSeasonStyle("겨울" , winter , userClothing.winterObj.winter , userClothing.winterObj)}
{userSeasonStyle("스타일" , style , userClothing.styleObj.style , userClothing.styleObj)}
<br/>
<form onSubmit = {e=>e.preventDefault()}>
<h3>비밀번호 변경</h3>
현재 비밀번호&nbsp;<input type="password" />
<br/><br/>
새로운 비밀번호<input type="password"/>
<br/><br/>
새로운 비밀번호 <input type="password"/><br/>
확인
<br/>
<input type = "button" value = "비밀번호 수정"/>
<br/>

</form>
<MenuBar/>
    </>);}