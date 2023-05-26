/*eslint-disable*/
import "./InfoToWeather.moudule.css"
import MenuBar from "../bar/MenuBar"
import mypage_btn from "img/mypage_btn.png"
import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { infotomyinfo, wheather, userLoginInfo, ruby, certifiedToken } from "data"
import UnLoginSelectButton from "./UnLoginSelectButton"
import ImageSlider from "./ImageSlider"
import { inCloser } from "api/inClosing"

const userUnLogined = async (value, setRegis, setResult, unLoginUser) => {
    const nMember = new infotomyinfo(wheather?.Mtemp, wheather?.Htemp, value)
    setRegis(await (await unLoginUser[0](nMember)).data); setResult(false)
}

const ClothingRecommendations = ({ link, title }) => {
    const [regis, setRegis] = useState({})
    const [result, setResult] = useState(true)
    const { pathname } = useLocation()
    const unLoginUser = inCloser.useSetUnLoginImpMutation()
    const loginUser = inCloser.useSetLoginImpMutation()
    useEffect(() => {
        if (!userLoginInfo) {
            if (!sessionStorage.getItem("no1")) {
                userUnLogined("여성", setRegis, setResult, unLoginUser)
            }
            else {
                userUnLogined(sessionStorage.getItem("no1"), setRegis, setResult, unLoginUser)
            }
        }
        else {
            if (pathname === "/Recommendation/weather") {
                userUnLogined(userLoginInfo.gender, setRegis, setResult, unLoginUser)
            }
            else {
                (async () => {
                    const rubyLan = new ruby(wheather?.Mtemp, wheather?.Htemp)
                    setRegis(await (await loginUser[0]({
                        token: { Authorization: `Bearer ${certifiedToken}` }, info: rubyLan, url: link
                    })).data)
                    setResult(false)
                })()
            }
        }
    }, [link, pathname])

    return (
        <>{result ?
            <div className="loadingContanier">
                <span className="loadingText">loading ...</span></div> :
            <div className={"LogoWithMainPage_container Recommendation_container"}>
                <div className={"top_title_area"}>
                    <div className={"top_title"}>{title}</div>
                    <div className={"top_mypage"}>
                        <Link to={`/My_page`}>
                            <img src={mypage_btn} width="25" height="25" alt="마이 페이지" />
                        </Link></div></div>
                <UnLoginSelectButton setRegis={setRegis} setResult={setResult} unLoginUser={unLoginUser} />
                <ImageSlider regis={regis} /><MenuBar />
            </div>}</>)
}
export default ClothingRecommendations