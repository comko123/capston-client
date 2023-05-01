import { useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { selectUserCheck } from "../data"
import MenuBar from "../Bar/MenuBar"
import "./StyleChange.moudule.css"
import pageback_btn from "../img/pageback_btn.png"
import { useAlert } from "../hooks/useAlert"
import UserSeasonStyle from "./UserSeasonStyle"
import { useClear } from "../hooks/useClear"

export default function StyleChange() {
    const selector = useSelector(item => item.addStyleList)
    const navigate = useNavigate()
    const userIn = Object.keys(selectUserCheck)
    const selectData = Object.keys(selector.no2)
    const [message, setMessage] = useState({})
    useClear(); useAlert(message, '/')
    return (<><div className={"Myadress_container"} style={{ height: "60%" }}>
        <div className={"Myadress_innercontainer"}>
            <img src={pageback_btn} width={16} height={16} onClick={() => navigate(-1)}
                className={"Myadress_pageback"} alt="" />
            <h3 className={"Myadress_title"} style={{ marginRight: "80px" }}>내정보 수정하기</h3>
            <h5 className={"Myadress_description"} style={{ marginRight: "80px" }}>마이페이지&gt;내정보 수정하기</h5>
            <div className={"Myadress_maincontainer_outer"}>
                <div className={"Myadress_maincontainer"} style={{ marginLeft: "146px" }}>
                    {userIn.map((item, num) => {
                        return <UserSeasonStyle title={userIn[num]}
                            styleList={selectUserCheck[item]} key={userIn[num]}
                            storeText={selectData[num]} storeStyleList={selector}
                            result={setMessage} />
                    })}
                </div></div></div></div><MenuBar /></>)
}