import { Link,useNavigate } from "react-router-dom";
import React,{useState,useEffect} from "react";
const Mypage = () =>{
        const [data,setData] = useState({})
const load = () =>{
        setData(JSON.parse(sessionStorage.getItem("login_information")))
}
useEffect(()=>{load()},[])
const navi = useNavigate()
return(
<>
{sessionStorage.getItem("login_information")?
<>
<span onClick={()=>{
    alert("로그아웃 되었습니다. 메인 화면으로 이동합니다.")
    sessionStorage.clear()
    navi(`/`)
    }}>로그아웃</span> 
</>
:
<>
<span><Link to ={`/weather_coder/login`}>로그인</Link></span>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<span><Link to = {`/weather_coder/Sign_up`}>회원가입</Link></span>
</>
}
<h1>정보</h1>
<hr/>
<h1>개인정보 처리 방침</h1>
<h1>서비스 이용약관</h1>
<h1 onClick={()=>(sessionStorage.getItem("login_information"))?
        navi(`/weather_coder/Input_adress`):alert("로그인후 이용이 가능한 서비스 입니다.")}>자신의 옷 등록하기</h1>
<h1 onClick={()=>(sessionStorage.getItem("login_information"))?
        navi(`/weather_coder/UserInformation/${data.password}`):alert("로그인후 이용이 가능한 서비스 입니다.")}>내정보 수정하기</h1>
<h1>Weather Coder</h1>
</>
)

}
export default Mypage;