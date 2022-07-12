import React from "react"

const parm = (para) =>(sessionStorage.getItem("login_information"))?
         window.location.assign(`/weather_coder/Recommendation/${para}`)
        :
         (alert("로그인후 이용이 가능한 서비스 입니다."), 
        window.location.assign(`/weather_coder/Login`))
            
const MenuBar = () => {

    return(<>
            <h3 onClick={()=>window.location.assign(`/weather_code/Recommendation/weather`)}> 날씨 정보로 추천받기 </h3>
            
            <h3 onClick={() => parm("Informatin")}> 내 정보로 추천받기 </h3>

            <h3 onClick={() => parm("Clothing")}> 내 옷들로 추천받기 </h3>

            <h3 onClick={()=>window.location.assign(`/weather_code/Board`)}> 게시판 </h3>
    </>)
}
export default React.memo(MenuBar);
