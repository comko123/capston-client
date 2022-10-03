import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import MenuBar from "../Bar/MenuBar"
import {imgListToSever, infotomyinfo, userLoginInfo, wheather} from "../data"
const setting = (value,func) => func(value)
const showingImg = (...rest) => {
        const message = Object.keys(rest[0])
  if(!!!sessionStorage.getItem("imgList")){
 return  <div key={rest[2]}>
        <h4>{message[1]==="errorCode"?null:rest[1]}</h4>
{!!rest[0]?.clothesList?!!rest[0]?.clothesList[rest[2]]?<img src={rest[0]?.clothesList[rest[2]]} 
 alt="이미지를 불러 오는데 실패 했습니다."/>:<h4>이미지가 없습니다.</h4>:
 <h4>{rest[0]?.errorMessage}</h4>}</div>}
 else{
        return <div key={rest[2]}>
        <h4>{message[1]==="errorCode"?null:rest[1]}</h4>
{!!rest[0]?.clothesList?!!rest[0]?.clothesList[rest[2]]?<img src={rest[0]?.clothesList[rest[2]]} 
 alt="이미지를 불러 오는데 실패 했습니다."/>:<h4>이미지가 없습니다.</h4>:
 <h4>{rest[0]?.errorMessage}</h4>}</div>
 }
}
const InfoToWeather = () => {
const [gender,setGender] = useState("")
const [img,setImg] = useState({})
const [regis,setRegis] = useState(true)
const gate = useNavigate()
useEffect(()=>{
       if(sessionStorage.getItem("login_information"))setGender(userLoginInfo.gender)
        if(sessionStorage.getItem("imgList"))setImg(imgListToSever)
        if(sessionStorage.getItem("imgList"))setRegis(false)
        if(sessionStorage.getItem("gender"))setGender(sessionStorage.getItem("gender"))
        return()=>{sessionStorage.removeItem("imgList")
        sessionStorage.removeItem("gender")}},[])
return(
        <>
         <h1>날씨 정보로 추천받기</h1>
         {wheather.rain?<h4>외출시 우산을 챙기세요</h4>:null}
         {regis?
         sessionStorage.getItem("login_information")?
               <><form onSubmit={e=>e.preventDefault()}>
                 <input type = "submit" value="추천 받기" onClick = {async()=>{
                        const member = new infotomyinfo(wheather.ltemp,wheather.htemp,gender)
                                try{
                                setImg(await(await axios(`/suggest1`,member)).data)
                                console.log(await(await axios(`/suggest1`,member)).data)
                                sessionStorage.setItem("imgList",JSON.stringify(img))
                                setRegis(false)}
                                catch(e){console.log(e)}}}/>
               </form></>
                :
                <>
                <h4>성별</h4>
                <form onSubmit={e=>e.preventDefault()}>   
                <input type = "radio" name = "gender" value = "여성" onClick={(e)=>setting(e.target.value,setGender)} />여성<br/>
                <input type = "radio" name = "gender" value = "남성" onClick={(e)=>setting(e.target.value,setGender)}/>남성<br/>
                <input type="submit" value="추천 받기" onClick = {async()=>{
                        const nMember = new infotomyinfo(wheather.ltemp,wheather.htemp,gender)
                        sessionStorage.setItem("gender",gender)
                        console.log(nMember)
                        try{
                        !!gender?setImg(await(await axios(`/suggest1 `,nMember)).data):alert("성별을 선택 해주세요...")
                        console.log(await(await axios(`/suggest1 `,nMember)).data)
                        sessionStorage.setItem("imgList",JSON.stringify(img))
                        setRegis(false)}
                        catch(e){console.log(e)}}}/>
                </form></>
                :
                <>{["최고온도","최저온도"].map((item,index)=>showingImg(img,item,index))}
                <form onSubmit={e=>e.preventDefault()}>
                <input type = "submit" value = "다른 옷 추천" onClick = {async()=>{
                const nMember = new infotomyinfo(wheather.ltemp,wheather.htemp,gender)
                try{
                setImg(await(await axios(`/suggest1`,nMember)).data)
                }catch(e){console.log(e)}
                }}/>
                {!!userLoginInfo?<input type = "submit" value = "초기화" onClick={()=>{
                sessionStorage.removeItem("gender")
                sessionStorage.removeItem("imgList")
                gate(0)
              }}/>:null}  
        </form></>}
        <MenuBar/></>)}
export default InfoToWeather