import axios from"axios"
import {useState}from"react"
import MenuBar from "../Bar/MenuBar"
import {wheather} from "../data"
import {userLoginInfo,infotomyinfo2,no2ImData}from"../data"
const no2ImplementsList = (img1,img2) => {
<><div><h3>최저 온도</h3>
<img src={img1}alt="이미지가 없습니다..."/>
</div>
<h3>최고 온도</h3>
<img src={img2}alt="이미지가 없습니다..."/>
</>}

const InfoToMyInfo = () => {
const [pending,setPending] = useState(true)
const [regist,setRegist] = useState({})
return(<>
<h1>내 정보로 추천받기</h1>
{wheather.rain?<h4>외출시 우산을 챙기세요</h4>:null}
{!!no2ImData?Object.keys(no2ImData).length===1&&no2ImplementsList(no2ImData.clothesList[0],no2ImData.clothesList[1])
:
pending?<form onSubmit={e=>e.preventDefault()}>
    <input type = "submit" value = "추천 받기" onClick ={async()=>{
        try{
            const clothMember = new infotomyinfo2(wheather.ltemp,wheather.htemp,userLoginInfo.email)
          setRegist(await(await axios.post(`/suggest2`,clothMember)).data)
           setPending(false)
           sessionStorage.setItem("No2Implements",JSON.stringify(regist))
        }catch(e){console.log(e)}
    }}/>
</form>:
Object.keys(regist).length===1?no2ImplementsList(regist?.clothesList[0],regist?.clothesList[1]):
alert(regist.errorMessage)}

<MenuBar/></>)}
export default InfoToMyInfo