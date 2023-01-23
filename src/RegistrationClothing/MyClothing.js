/*eslint-disable*/
import { useState,useEffect} from "react"
import { useSelector} from "react-redux"
import { useNavigate } from "react-router-dom"
import {selectDataParse,infoUser, certifiedToken} from "../data"
import MenuBar from "../Bar/MenuBar"
import pageback_btn from "../img/pageback_btn.png"
import "./MyClothing.moudule.css"
import { useAlert } from "../hooks/useAlert"
import UserSeasonClothing from "./UserSeasonClothing"
import { useClear } from "../hooks/useClear"
import {useSetStyleInfoMutation}  from "../api/inClosing"
const MyClothing = () => {
    const navigate = useNavigate()
    const selector = useSelector(item=>item.addStyleList)
    const selectData = Object.keys(selector[0])
    const userIn = Object.keys(infoUser)
    const [message,setMessage] = useState({})
    const [state,setState] = useState([])
    const styleModify =useSetStyleInfoMutation()
    
    useClear()
    useAlert(message,'/')
    useEffect(()=>{(async()=>{
    if(state.length){
    const resultData =  await(await styleModify[0]({token:{Authorization:`Bearer ${certifiedToken}`},
    info:state,settingUrl:`/my-clothes`})).data
     try {const result = JSON.parse(resultData);setMessage(result)} 
     catch {setMessage(resultData)}}
    else if(state.length>=5){navigate(0)}})()},[state,navigate])
    return (<><div className={"Myadress_container"}>
    <div className={"Myadress_innercontainer"}>
    <img src={pageback_btn} width={16} height={16} onClick={()=>navigate(-1)} alt="" 
    className={"Myadress_pageback"}/>
    <h3 className={"Myadress_title"}>자신의옷 등록하기</h3>
    <h5 className={"Myadress_description"}>* 회원의 옷을 기반으로 맞춤형 추천을 제공합니다.</h5>
    <form onSubmit={e => {(async()=>{e.preventDefault()
    try {for(const key in selector[0]){
    if(selector[0][key].length){
    const data = new selectDataParse(key,selector[0][key])
    setState(state=>[...state,data])
    }}} catch (error) {console.log(error)}})()}} 
    className={"Myadress_maincontainer_outer"}>
    <div className={"Myadress_maincontainer"}>
    {userIn.map((item,num)=>
    { return <UserSeasonClothing season={userIn[num]} 
    seasonList={infoUser[item]} key={userIn[num]} 
    storeText={selectData[num]} includeElement={selector[0]}/>})}
    </div><input className={"Myadress_submit"} type="submit" value="submit"/>
    </form></div></div><MenuBar/></>)}

export default MyClothing