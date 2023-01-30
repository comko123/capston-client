import { useState} from "react"
import { Link,useNavigate } from "react-router-dom"
import "./Sign_up.moudule.css"
import {signInfo,selectUserData,inputTypeAndPalcehorder,selectUserCheck, parsingLogic,} from "../../data"
import MenuBar from "../../Bar/MenuBar"
import {useSelector} from "react-redux"
import UserInFormationRadio from "./UserInFormationRadio"
import UserInFormationCheckBox from "./UserInFormationCheckBox"
import UserInFormationInput from "./UserInFormationInput"
import { useAlert } from "../../hooks/useAlert"
import { useSetSignUpStateMutation } from "../../api/inClosing"

const basicSetting = Object.keys(selectUserData)
const userSetting = Object.keys(inputTypeAndPalcehorder)
const styleObject = Object.keys(selectUserCheck)

export default function Sign_Up() {
const [[isFirst, setIsFirst],[result, setResult] ] = [useState(true),useState({})]
const [signUpState,trans] = [useSetSignUpStateMutation(),useNavigate()]
const {addStyleList} = useSelector(item=>item)
useAlert(result,'/')
  
return (<div className={"Sign_up_container"}>
<div className={"Sign_up_container_1"} style={{ display: isFirst ? "flex" : "none" }}>
<h1 className={"Sign_up_loginpage_title"}>Sign Up</h1>
<div className={"Sign_up_normaltext"}>이미 계정이 있으신가요?{" "}
<Link to={"/Login"} className="Sign_up_boldtext">로그인하기</Link></div></div>
<div className={"Sign_up_container_2"} style={{ display: !isFirst ? "flex" : "none" }}>
<h1 className={"Sign_up_title1"}>Weather Style 회원정보 입력</h1>
<h1 className={"Sign_up_title2"}>User Information</h1>
<div className={"Sign_up_title3"}>* 회원 정보 기반 맞춤형 추천을 제공합니다.</div></div>
<form onSubmit={async(e) => {e.preventDefault();const{email,password} = addStyleList[2]
const {성별,연령,신장,체중,스타일} =  addStyleList[3]
const signIn = new signInfo(email[0],password[0],성별[0],연령[0],신장[0],체중[0],스타일)
const resultS = await(await signUpState[0](signIn)).data
try {parsingLogic(setResult,resultS)} catch (error) {console.log(error)}}}>
<div className={"Sign_up_form"} style={{display:isFirst?"flex":"none"}}><div className="sign_up_contanier">
{userSetting.map((item,index)=>
<UserInFormationInput type = {inputTypeAndPalcehorder[userSetting[index]][0]} title = {item} key = {item}/>)}
<input type = "button" value="Next" className="Sign_up_in" onClick={()=>{setIsFirst(false)}}/></div></div>
<div className={"Sign_up_form2"}style={{ display: !isFirst ? "flex" : "none" }}>
{basicSetting.map((item)=><UserInFormationRadio checkList={selectUserData[item]} title={item} key={item}
length={addStyleList[3][item]}/>)}
{styleObject.map((item)=><UserInFormationCheckBox title = {item} checkList={selectUserCheck[item]} key={item}/>)}
<br/><input type="submit" value="가입"className={"Sign_Up_button"}/>
<input type="button" value="홈페이지" onClick={() => {trans("/")}} className={"Sign_Up_button"}/></div></form>
<br/><br/><br/><br/><br/><MenuBar/></div>)}