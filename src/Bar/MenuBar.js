import React from "react"
import {useNavigate } from "react-router-dom";

const parm = (para,navigate) =>(sessionStorage.getItem("login_information"))?
         navigate(`/weather_code/Recommendation/${para}`)
        :
         (alert("로그인후 이용이 가능한 서비스 입니다."), 
        navigate(`/weather_coder/Login`))
          
const MenuBar = () => {
const navigate = useNavigate()
    return(<>
            <h3 onClick={()=>navigate(`/weather_code/Recommendation/weather`)}> 날씨 정보로 추천받기 </h3>
            
            <h3 onClick={() => parm("Information",navigate)}> 내 정보로 추천받기 </h3>

            <h3 onClick={() => parm("Clothing",navigate)}> 내 옷들로 추천받기 </h3>

            <h3 onClick={()=>navigate(`/weather_code/Board`)}> 게시판 </h3>
    </>)
}
export default React.memo(MenuBar);