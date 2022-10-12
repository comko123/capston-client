import axios from"axios"
import {useState}from"react"
import MenuBar from "../Bar/MenuBar"
import {wheather} from "../data"
import {userLoginInfo,infotomyinfo2}from"../data"
const InfoToMyInfo = () => {
const [pending,setPending] = useState(true)
const [regist,setRegist] = useState({})
return(<>
<h1>내 정보로 추천받기</h1>
{wheather.rain?<h4>외출시 우산을 챙기세요</h4>:null}
{pending?<form onSubmit={e=>e.preventDefault()}>
    <input type = "submit" value = "추천 받기" onClick ={async()=>{
        try{
            const clothMember = new infotomyinfo2(wheather.ltemp,wheather.htemp,userLoginInfo.email)
          setRegist(await(await axios.post(`/suggest2`,clothMember)).data)
           setPending(false)
        }catch(e){console.log(e)}
    }}/>
</form>:Object.keys(regist).length===1?<>
<div><h3>최고 온도</h3>
<img src={regist?.clothesList[0]}alt="이미지가 없습니다..."/>
</div>
<h3>최저 온도</h3>
<img src={regist?.clothesList[1]}alt="이미지가 없습니다..."/>
</>:alert(regist.errorMessage)}

<MenuBar/></>)}
export default InfoToMyInfo