import axios from "axios"
import { useState } from "react"
import MenuBar from "../Bar/MenuBar"
import {infotomyinfo, userLoginInfo, wheather} from "../data"
const setting = (value,func) => func(value)
const showingImg = (img,num,key) => {
 return  <div key={key}>{!!img?.clothesList?
 !!img?.clothesList[num]?<img src={img?.clothesList[num]} 
 alt="이미지를 불러 오는데 실패 했습니다."/>:<h4>이미지가 없습니다.</h4>:
 <h4>{img?.errorMessage}</h4>}</div>
}
const InfoToWeather = () => {
const [gender,setGender] = useState()
const [img,setImg] = useState()
return(
        <>
         {sessionStorage.getItem("login_information")?setGender(userLoginInfo?.gender):null}
         <h1>날씨 정보로 추천받기</h1>
        {
                sessionStorage.getItem("login_information")?
                null
                :
                <>
                <fieldset><legend>성별</legend>
                <form onSubmit={e=>e.preventDefault()}>   
                <input type = "radio" name = "gender" value = "여성" onClick={(e)=>setting(e.target.value,setGender)} />여성<br/>
                <input type = "radio" name = "gender" value = "남성" onClick={(e)=>setting(e.target.value,setGender)}/>남성<br/>
                <input type="submit" value="추천 받기" onClick = {async()=>{
                        const area = new infotomyinfo(wheather.ltemp,wheather.htemp,gender)
                        console.log(area)
                        !!gender?setImg(await(await axios(`/suggest1 `,area)).data):alert("성별을 선택 해주세요...")
                        console.log(await(await axios(`/suggest1 `,area)).data)
                }}/>
                </form>
                </fieldset>
                </>
        }
        {wheather.rain?<h4>외출시 우산을 챙기세요</h4>:null}
        {[0,1].map((item,index)=>showingImg(img,item,index))}
        <MenuBar/>
        </>
        
        )

}
export default InfoToWeather