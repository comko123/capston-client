import {selectUserData,userSelect,userClientInput,inputTypeAndPalcehorder,signUpData} from '../data'
import {useNavigate } from "react-router-dom"
const basicSetting = Object.keys(selectUserData)
const userSetting = Object.keys(inputTypeAndPalcehorder)
const signUpFunction = async(call) => {
  const {id,password,password2,email,nickname} = userClientInput
  const {성별,연령,신장,체중} = userSelect
const userInfo = new signUpData(id[0],password[0],password2[0],email[0],nickname[0],성별[0],연령[0],신장[0],체중[0])
try{const sign = await fetch(`/join`, {
  method : "post",
  body : JSON.stringify(userInfo),
  headers : {"Content-Type" : "application/json"}})
if(sign.ok){alert("Completed for Sign Up :) ")
call('/')}}
catch(e){console.log(e); alert("Fail To Sign Up :(")}
// console.log(userInfo)
}

const userInFormationRadio = (...rest) => {
  const bar = ":"
return(<div key={rest[3]}><h3 style = {{"marginBottom":"0px"}}>{rest[1]}</h3>
{rest[0].map((childInformation,index)=>{
return (<div key = {index}>{childInformation}
<input type ="radio"name={rest[1]} value = {rest[1]+bar+`${childInformation}`} onClick ={(e)=>
  {if(e.target.checked===true){
  rest[2]&& rest[2].push(e.target.value)  
  rest[2]&& rest[2].filter((element,index)=>rest[2].indexOf(element)===index)}
    else{rest[2].splice(rest[2].indexOf(e.target.value),1)}
}}/> <br/></div>)})}</div>)}

const userInFormationInput = (...rest) => {
  return(
  <div key={rest[3]}><input type ={rest[0]} placeholder={rest[1]} onBlur={(e)=>{
  rest[2]&& rest[2].push(e.target.value)
  rest[2]&& rest[2].splice(0,rest[2].length-1)
  }}/><br/> <br/></div>)}

export default function Sign_Up (){
  const trans = useNavigate()
return(<>
  <h1>회원가입</h1>
  <form onSubmit={e=>e.preventDefault()}>
  {userSetting.map((item,index)=>userInFormationInput(inputTypeAndPalcehorder[userSetting[index]][0],item,userClientInput[item],index))}
  {basicSetting.map((item,index)=>userInFormationRadio(selectUserData[item],item,userSelect[item],index))}
  <br/>
 <input type="button" value="가입"onClick={()=>signUpFunction(trans)}/>   
  <br/> <br/>
 <input type="button" value="홈페이지"onClick={()=>trans('/')}/>  
  </form></>)}