import React,{ useState } from "react"
import { FaChevronDown } from "react-icons/fa"
import SignUserCheckBox from "./SignUserCheckBox"
const UserInFormationCheckBox = ({title,checkList}) => {
const [styleSelected, setStyleSelected] = useState(false)
return (<>
<h3 className={`Sign_up_selectbox ${styleSelected&&title==="스타일"? "Sign_up_selectbox__active":null}`} 
onClick={()=>setStyleSelected(!styleSelected)}>
<div className={"Sign_up_selectlabel"}>{title}</div>
<FaChevronDown className={"Sign_up_selectboxright"}/></h3>
<div className={`Sign_up_selectcontainer ${styleSelected&&title==="스타일"?"Sign_up_selectcontainer__active":null}`}>
{checkList.map((clothing, index) => {
    return (<SignUserCheckBox key={index} list={title} value = {clothing}/>)})}</div></>)}
export default React.memo(UserInFormationCheckBox)