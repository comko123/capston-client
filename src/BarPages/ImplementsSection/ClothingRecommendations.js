import axios from "axios"
import "./InfoToWeather.moudule.css"
import MenuBar from "../../Bar/MenuBar"
import mypage_btn from "../../img/mypage_btn.png"
import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import {infotomyinfo,wheather,userLoginInfo,ruby, certifiedToken} from "../../data"
import UnLoginSelectButton from "./UnLoginSelectButton"
import ImageSlider from "./ImageSlider"

const unLoginAxios = async(value,link,setRegis,setResult)=>{
    const nMember = new infotomyinfo(wheather.Mtemp,wheather.Htemp,value)
    setRegis(await(await axios.post(link,nMember)).data)
    setResult(false)}

const ClothingRecommendations = ({link,title}) => {
    const [regis,setRegis] = useState({})
    const [result,setResult] = useState(true)
    const location = useLocation()
    const {pathname} = location 
    useEffect(()=>{
    if(!userLoginInfo){
    if(!sessionStorage.getItem("no1")){unLoginAxios("여성",link,setRegis,setResult)}
    else{unLoginAxios("남성",link,setRegis,setResult)}}
    else {if(pathname==="/Recommendation/weather"){
    unLoginAxios(userLoginInfo.gender,link,setRegis,setResult)}
    else{(async()=>{
    const rubyLan = new ruby(wheather.Mtemp,wheather.Htemp)
    setRegis(await(await axios.post(link,rubyLan,{headers:{Authorization:`Bearer ${certifiedToken}`}})).data)
    setResult(false)})()}}},[link,pathname]) 
    return (<>{result?<div className="loadingContanier">
    <span className="loadingText">loading ...</span></div>
    :<div className={"LogoWithMainPage_container Recommendation_container"}>
    <div className={"top_title_area"}>
    <div className={"top_title"}>{title}</div>
    <div className={"top_mypage"}><Link to={`/My_page`}>
    <img src={mypage_btn} width="25" height="25" alt="마이 페이지"/></Link></div></div>
    <UnLoginSelectButton setRegis={setRegis} setResult={setResult} link={link}/>
    <ImageSlider regis={regis}/><MenuBar/></div>}</>)}
export default ClothingRecommendations