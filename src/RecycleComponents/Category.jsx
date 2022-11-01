import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { useDispatch, useSelector} from "react-redux"
import { useNavigate } from "react-router-dom"
import { userInfoRegistration, userLoginInfo} from "../data"
import { addStyle,removeStyle,deduplicationStyle,clearStyle} from "../store"
const userSeasonStyle = (...rest) =>{
return(<><h3>{rest[0]}</h3>
{rest[1].map((clothing,index)=>{
  return (<div key = {index}>{clothing}<input type ="checkbox" 
  value = {clothing} onClick ={e=>
    {const action = {list:rest[2], value:e.target.value,index:rest[4]}
    if(e.target.checked){
    rest[3](addStyle(action))
    rest[3](deduplicationStyle(action))}
    else{rest[3](removeStyle(action)) }
}}/> <br/></div>)})}</>)}

const Category = (props) => {
  const selector = useSelector(item=>item)
  const {addStyleList} = selector
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const selectData = Object.keys(addStyleList[props.index])
  const userIn = Object.keys(props.type)
  let [message,setMessage] = useState(null)
  useEffect(()=>{dispatch(clearStyle(props.index))},[dispatch,props.index])
  return (<><h3>{props.text}</h3>
<form onSubmit = {e=>
{(async()=>{
    e.preventDefault()
    try {
      const userClothing = new userInfoRegistration(userLoginInfo.email,addStyleList[props.index])
    setMessage(await(await axios.post(props.link,userClothing)).data)
    if(Object.keys(message).length===2){
      alert(message.errorMessage)}
    else{
      alert(message)
      navigate(-1)
    }
  } catch (error) {
    console.log(error)}})()}}>
    {userIn.map((item,index)=>{
      return <div key={index}>{
    userSeasonStyle(userIn[index],props.type[item],selectData[index],dispatch,props.index)}
    </div>})}
<input type="submit" value = "click"/> 
  </form></>)}
export default Category



