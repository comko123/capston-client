import axios from "axios"
import { useState } from "react"
import {useNavigate } from "react-router-dom"
import {signInfo,selectUserData,userSelect,userClientInput,inputTypeAndPalcehorder,selectUserCheck} from '../data'

const basicSetting = Object.keys(selectUserData)
const userSetting = Object.keys(inputTypeAndPalcehorder)
const styleObject = Object.keys(selectUserCheck)
const signUpFunction = async(result,setResult,navigate) => {
  const {password,email} = userClientInput
  const {성별,연령,신장,체중,스타일} = userSelect
  const signIn = new signInfo(email[0],password[0],성별[0],연령[0],신장[0],체중[0],스타일)
try{  
setResult(await(await axios.post('/join',signIn)).data)
return result&&typeof(result)==="object"?alert(result.errorMessag):typeof(result)==="string"?(alert(result),navigate(-1)):null
}
catch(e){console.log(e)}
console.log(signIn)
}

const userInFormationRadio = (...rest) => {
return(<div key={rest[3]}><h3 style = {{"marginBottom":"0px"}}>{rest[1]}</h3>
{rest[0].map((childInformation,index)=>{
return (<div key = {index}>{childInformation}
<input type ="radio"name={rest[1]} value = {
  childInformation==="남성"||childInformation==="여성"?childInformation:index
} onClick ={(e)=>
  {
    if(!!!rest[2].length){rest[2].push(e.target.value)}
      else{
      rest[2].splice(rest[2].indexOf(e.target.value),1)
      rest[2].push(e.target.value)
    }
}}/> <br/></div>)})}</div>)
}

const userInFormationCheckBox = (...rest) =>{
  return(<div key = {rest[0]}>
  <h3>{rest[0]}</h3>
  {rest[1].map((clothing,index)=>{
  return (<div key = {index}>{clothing}<input type ="checkbox" 
  value = {clothing} onClick ={e=>
    {if(e.target.checked===true){
     rest[2].push(e.target.value)  
    rest[2].filter((element,index)=>rest[2].indexOf(element)===index)}
      else{rest[2].splice(rest[2].indexOf(e.target.value),1)}
  }}/> <br/></div>)})}</div>)
}

const userInFormationInput = (...rest) => {
  return(
  <div key={rest[3]}><input type ={rest[0]} placeholder={rest[1]} onBlur={(e)=>{
  rest[2]&& rest[2].push(e.target.value)
  rest[2]&& rest[2].splice(0,rest[2].length-1)
  }}/><br/> <br/></div>)
}

  
export default function Sign_Up (){
  const trans = useNavigate()
  const [result,setResult] = useState(null)
return(<>
  <h1>회원가입</h1>
  <form onSubmit={e=>e.preventDefault()}>
  {userSetting.map((item,index)=>userInFormationInput(inputTypeAndPalcehorder[userSetting[index]][0],item,userClientInput[item],index))}
  {basicSetting.map((item,index)=>userInFormationRadio(selectUserData[item],item,userSelect[item],index))}
  {styleObject.map((item,index)=>userInFormationCheckBox(item,selectUserCheck[item],userSelect[styleObject[0]],index))}
  <br/>
 <input type="submit" value="가입"onClick={()=>{signUpFunction(result,setResult,trans)}}/>   
  <br/> <br/>
 <input type="button" value="홈페이지"onClick={()=>trans('/')}/>  
  </form></>)}