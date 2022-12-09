import axios from "axios"
import { useDispatch } from "react-redux"
import {certifiedToken } from "../data"
import { addStyle,removeStyle,deduplicationStyle} from "../store"
const UserSeasonStyle = ({title,styleList,storeText,storeStyleList,result }) => {
    const dispatch = useDispatch()
    return (<div className={"Myadress_main_component"}>
    <div className={"Information_main_component_title_container"}>
    <h3 className={"Myadress_main_component_title Information_main_component_title"}>{title}</h3>
    </div><form onSubmit = {e=>{(async()=>{e.preventDefault()
    try {result(await(await axios.post(`/my-style`,{styleList:storeStyleList[1].style},{headers:{Authorization:`Bearer ${certifiedToken}`}})).data)}
    catch (error) {console.log(error)}})()}}>
    {styleList.map((clothing, number) => {
    return (<div className={"Myadress_main_component_items"} key={number}>
    <input className={"Myadress_main_component_item_check"} type="checkbox" value = {styleList[number]}
    onClick ={e=>{const action = {list:storeText, value:e.target.value,index:1}
    if(e.target.checked){dispatch(addStyle(action))
    dispatch(deduplicationStyle(action))}
    else{dispatch(removeStyle(action))}}}/>
    <span className={"Myadress_main_component_item_text"}>{clothing}</span></div>)})}
    <input className={"Information_component_submit"} type="submit" value="submit" /></form></div>)}
    export default UserSeasonStyle