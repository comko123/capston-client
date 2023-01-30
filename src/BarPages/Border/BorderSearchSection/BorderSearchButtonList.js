/*eslint-disable*/ 
import React,{ useEffect,useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
const BorderSearchButtonList = ({langth,searchParams,styleBorderObject,styleBoxObject}) => {
const navigate = useNavigate()
const [buttonState,setButtonState] = useState([])
const [number,_] = useSearchParams()
useEffect(()=>{for(let i=0; i<=langth-1; i++){
if(!(i%10)) setButtonState(state=>[...state,i])}},[])
return(<>{!buttonState.length?null:buttonState.map((item,index)=>{
return (<React.Fragment key={item}><input className="numberBtn" type="button" value={item/10}
style={+number.get("number")===index?styleBorderObject:styleBoxObject}
onClick={() => {navigate(`/Border/search/content?id=${searchParams}&number=${index}`)}}/></React.Fragment>)})}</>)}
export default React.memo(BorderSearchButtonList)