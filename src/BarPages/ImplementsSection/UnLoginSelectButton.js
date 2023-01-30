import { useState } from "react"
import { infotomyinfo,wheather } from "../../data"

const UnLoginSelectButton = ({setRegis,setResult,unLoginUser}) => {
const [value,setValue] = useState(sessionStorage.getItem("no1")?"남성":"여성")
return( <>{sessionStorage.getItem("login_information") ? null : (
<div className={"InfoToWeather_gubun"}><div className={"InfoToWeather_gubun_radiobtn_active"}
style={value==="여성"?{backgroundColor: "#4254FF",color:"white"}:{backgroundColor: "white",color:"#4254FF"}} >
<span className={"InfoToWeather_gubun_radiobtn_text_active"}style={value==="여성"?{color:"white"}:{color:"#4254FF"}}
onClick={e=>{(async()=>{try {const nMember = new infotomyinfo(wheather.Mtemp,wheather.Htemp,e.target.innerText)
setRegis(await(await unLoginUser[0](nMember)).data);setResult(false);setValue("여성");sessionStorage.removeItem("no1")}
catch(error){console.log(error)}})()}}>여성</span></div>
<div className={"InfoToWeather_gubun_radiobtn"} style={value==="남성"?{backgroundColor: "#4254FF",color:"white"}:{backgroundColor: "white",color:"#4254FF"}}>
<span className={"InfoToWeather_gubun_radiobtn_text"} style={value==="남성"?{color:"white"}:{color:"#4254FF"}}
onClick={e=>{(async()=>{try {const nMember = new infotomyinfo(wheather.Mtemp,wheather.Htemp,e.target.innerText)
setRegis(await(await unLoginUser[0](nMember)).data);setResult(false);setValue("남성")
sessionStorage.setItem("no1",e.target.innerText)} catch(error){console.log(error)}})()}}>남성</span></div></div>)}</>)}
export default UnLoginSelectButton