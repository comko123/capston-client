import {useRef,useState} from "react"
import {Link} from "react-router-dom"
import MenuBar from "../Bar/MenuBar"
import "./Login_page.moudule.css"
import {login} from "../data"
import { useAlert } from "../hooks/useAlert"
import { useSetLoginStateMutation } from "../api/inClosing"
const Login_page = () => {
const [[result, setResult],loginState] = [useState({}),useSetLoginStateMutation()]
const [input_id,input_pw] = [useRef(),useRef()];useAlert(result,'/')
return (<div className="container"><h1 className="loginpage_title"> Log-in </h1>
<form className="form" onSubmit={async(e) =>{e.preventDefault()
try{const user = new login(input_id.current.value,input_pw.current.value)
setResult(await(await loginState[0](user)).data)} catch(error) {console.log(error)}}}>
<div className="emailtext">E-mail</div><input className="ID" type="text" placeholder="이메일을 입력하세요." ref={input_id}/>
<div className="passwordtext">Password</div>
<input className="PW" type="password" placeholder="비밀번호를 입력하세요." ref={input_pw}/>
<div className={"normaltext"}>계정이 없으신가요?&nbsp;&nbsp;
<Link to={"/Sign_up"} className="boldtext">회원가입하기</Link></div><input type = "submit" value="submit" className="submit2"/></form>
<div className="normaltext">개인정보보호정책</div><div className="normaltext">WeatherStyle 이용약관</div><MenuBar/></div>)}
export default Login_page
