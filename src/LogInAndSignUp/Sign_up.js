import axios from "axios"
import { useState,useEffect } from "react"
import { useDispatch, useSelector} from "react-redux"
import {useNavigate } from "react-router-dom"
import {signInfo,selectUserData,inputTypeAndPalcehorder,selectUserCheck} from '../data'
import { addStyle,removeStyle,deduplicationStyle,inputLengthStyle} from "../store"
const basicSetting = Object.keys(selectUserData)
const userSetting = Object.keys(inputTypeAndPalcehorder)
const styleObject = Object.keys(selectUserCheck)

const userInFormationRadio = (...rest) => {
return(<div key={rest[3]}><h3 style = {{"marginBottom":"0px"}}>{rest[1]}</h3>
{rest[0].map((childInformation,index)=>{
return (<div key = {index}>{childInformation}
<input type ="radio"name={rest[1]} value = {
  childInformation==="남성"||childInformation==="여성"?childInformation:index+1
} 
onClick ={e=>
  {
    const action = {list:rest[1], value:e.target.value,index:3}
    if(!rest[2].length){
     rest[4](addStyle(action))
    }
      else{
        rest[4](removeStyle(action))
      rest[4](addStyle(action))
    }}}/> <br/></div>)})}</div>)
}
const userInFormationCheckBox = (...rest) =>{
  return(<div key = {rest[0]}>
  <h3>{rest[0]}</h3>
  {rest[1].map((clothing,index)=>{
  return (<div key = {index}>{clothing}<input type ="checkbox" 
  value = {clothing} onClick ={e=>
    {
      const action = {list:rest[0], value:e.target.value,index:3}
      if(e.target.checked){
        rest[4](addStyle(action))
        rest[4](deduplicationStyle(action))}
      else{rest[4](removeStyle(action))}}}/> <br/></div>)})}</div>)
}
const userInFormationInput = (...rest) => {
  return(
  <div key={rest[3]}><input type ={rest[0]} placeholder={rest[1]} 
  onBlur={e=>{
    const action = {list:rest[1], value:e.target.value,index:2}
  rest[4](addStyle(action))
  rest[4](inputLengthStyle(action))
  }}/><br/> <br/></div>)
} 
export default function Sign_Up (){
  const trans = useNavigate()
  const dispatch = useDispatch()
  const selector = useSelector(item=>item)
  const {addStyleList} = selector
  const [result,setResult] = useState({})
useEffect(()=>{ 
  if(Object.keys(result).length===2)
  {alert(result.errorMessage)}
  else if (Object.keys(result).length===1){
  alert(result)
  window.history.back()
  trans(0)}
  else return;
},[result,trans])
return(<>
  <h1>회원가입</h1>
  <form onSubmit={e=>{
    (async() => {
      e.preventDefault()
    const{email,password} = addStyleList[2]
    const {성별,연령,신장,체중,스타일} =  addStyleList[3]
      const signIn = new signInfo(email[0],password[0],성별[0],연령[0],신장[0],체중[0],스타일)
    try{  
  setResult(await(await axios.post('/join',signIn)).data)
  }
  catch(e){console.log(e)}
  })()}}>
  {userSetting.map((item,index)=>userInFormationInput(inputTypeAndPalcehorder[userSetting[index]][0],item,addStyleList[2][item],index,dispatch))}
  {basicSetting.map((item,index)=>userInFormationRadio(selectUserData[item],item,addStyleList[3][item],index,dispatch))}
  {styleObject.map((item,index)=>userInFormationCheckBox(item,selectUserCheck[item],addStyleList[3][item],index,dispatch))}
  <br/><input type="submit" value="가입"/>   
  <br/><br/><input type="button" value="홈페이지"onClick={()=>trans('/')}/></form></>)}
