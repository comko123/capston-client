import "./MenuBar.css"
import React from "react"
import menu_me from "img/menu_me.png"
import menu_home from "img/menu_home.png"
import menu_cloth from "img/menu_cloth.png"
import menu_board from "img/menu_board.png"
import menu_me_on from "img/menu_me_on.jpg"
import { useLocation, useNavigate } from "react-router-dom"
import menu_weather from "img/menu_weather.png"
import menu_cloth_on from "img/menu_cloth_on.jpg"
import menu_weather_on from "img/menu_weather_on.jpg"
import menu_home_off from "img/menu_home_off.jpg"
import menu_board_on from "img/menu_board_on.jpg"
const parm = (para,navigate) => sessionStorage.getItem("login_information") ?
   navigate(`/Recommendation/${para}`) :
    !alert("로그인후 이용이 가능한 서비스 입니다.") &&navigate(`/Login`)
const MenuBar = () => {
    const { pathname, search } = useLocation()
    const navigate = useNavigate()
    return (
        <div className={"bottom-nav"}>

            <h3 className={"bn-tab"} onClick={() =>navigate(`/Recommendation/weather`)}>
                <img src={pathname === "/Recommendation/weather" ? menu_weather_on : menu_weather}
                    width="24" height="18" alt="날씨 정보로 추천받기" /></h3>

            <h3 className={"bn-tab"} onClick={() => parm("Information",navigate)}>
                <img src={pathname === "/Recommendation/Information" ? menu_me_on : menu_me}
                    width="20" height="20" alt="내 정보로 추천받기" /></h3>

            <h3 className={"bn-tab"} onClick={() =>navigate(`/`)}>
                <img src={pathname === "/" ? menu_home : menu_home_off}
                    width="21.25" height="20.07" alt="현재 날씨 조회" /></h3>

            <h3 className={"bn-tab"} onClick={() => parm("Clothing",navigate)}>
                <img src={pathname === "/Recommendation/Clothing" ? menu_cloth_on : menu_cloth}
                    width="24" height="22" alt="내 옷들로 추천받기" /></h3>

            <h3 className={"bn-tab"} onClick={() =>navigate(`/Border/route/0`)}>
                <img src={isNaN(+pathname.split("")[14]) ? !search ? menu_board : menu_board_on : menu_board_on}
                    width="22" height="22" alt="게시판" /></h3>

        </div>)
}
export default MenuBar