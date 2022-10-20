import {userClothingModify,infoUser} from "../data"
 const userSeasonStyle = (...rest) =>{
    const sla = "/"
return(<>
<h3>{rest[0]}</h3>
<form onSubmit = {e=>e.preventDefault()}>
<input type="submit" value = "제출" onClick={()=>console.log(rest[3])}/><br/>
{rest[1].map((clothing,index)=>{
return (<div key = {index}>{clothing}<input type ="checkbox" value = {rest[0]+sla+`${clothing}`} onClick ={(e)=>
  {if(e.target.checked===true){
   rest[2].push(e.target.value)  
  rest[2].filter((element,index)=>rest[2].indexOf(element)===index)}
    else{rest[2].splice(rest[2].indexOf(e.target.value),1)}
}}/> <br/></div>)})}</form></>)}

export default function  Information() {
    const userMof = Object.keys(userClothingModify) 
    const userInfo = Object.keys(infoUser)
    return (<><h3>내정보 수정하기</h3>
<h5>마이페이지&gt;내정보 수정하기</h5>
{userInfo.map((item,index)=>{
    const season =userClothingModify[userMof[index]]
    return <div key={index}>
    {userSeasonStyle(userInfo[index],infoUser[item],season[Object.keys(season)],season)}
</div>})}
<br/>
<form onSubmit = {e=>e.preventDefault()}>
<h3>비밀번호 변경</h3>
현재 비밀번호&nbsp;<input type="password" />
<br/><br/>
새로운 비밀번호<input type="password"/>
<br/><br/>
새로운 비밀번호 <input type="password"/><br/>
확인
<br/><input type = "submit" value = "비밀번호 수정"/><br/></form></>)}