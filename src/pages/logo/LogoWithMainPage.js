/*eslint-disable*/
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import MenuBar from "components/bar/MenuBar"
import WeatherComponents from "../weather/WeatherComponents"
import "./LogoWithMainPage.moudule.css"
import mypage_btn from "img/mypage_btn.png"
import { useCookies } from "react-cookie"
import moment from "moment/moment"
const key = "Main Logo"
const LogoWithMainPage = () => {
    const [[cookie, setCookie], [logo, setLogo], mon] = [useCookies([key]), useState(true), moment()]
    useEffect(() => {
        if (!cookie[key]) {
            setTimeout(() => { setLogo(false) }, 3000)
            if (logo) {
                mon.add(30, 'm')
                setCookie(key, 'true',
                    { path: '/', expires: mon.toDate() })
            }
        }
        else { setLogo(false) }
    }, [])
    return (<>{logo ? (
        <div className="Logo_container1">
            <div className="Logo_logo"></div></div>) :
        (<div className="LogoWithMainPage_container">
            <div className="top_title_area">
                <div className="top_title">현재 날씨 조회</div>
                <div className="top_mypage">
                    <Link to={`/My_page`}>
                        <img src={mypage_btn} width='25' height='25' alt='마이 페이지' />
                    </Link></div></div><WeatherComponents /><MenuBar /></div>)}</>)
}
export default LogoWithMainPage