import React,{ useState } from "react"
import { FaChevronDown } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { addStyle,removeStyle,deduplicationStyle} from "../../store"
const UserInFormationCheckBox = ({title,checkList}) => {
    const [styleSelected, setStyleSelected] = useState(false)
    const dispatch = useDispatch()
    return (
      <><h3 className={`Sign_up_selectbox ${styleSelected&&title==="스타일"? 
      "Sign_up_selectbox__active":null}`} 
      onClick={()=>setStyleSelected(!styleSelected)}>
      <div className={"Sign_up_selectlabel"}>{title}</div>
      <FaChevronDown className={"Sign_up_selectboxright"}></FaChevronDown></h3>
      <div className={`Sign_up_selectcontainer ${styleSelected&&title==="스타일"?
      "Sign_up_selectcontainer__active":null}`}>
      {checkList.map((clothing, index) => {
      return (<div key={index} className="checkbox_selector">
      <input className={"Sign_up_radiobtn"} type="checkbox" value={clothing}
      onClick ={e=>{const action = {list:title, value:e.target.value,index:3}
      if(e.target.checked){dispatch(addStyle(action))
      dispatch(deduplicationStyle(action))}else{dispatch(removeStyle(action))}}}/>
      <div className={"Sign_up_radiolabel"}>{clothing}</div></div>)})}</div></>)}
  export default React.memo(UserInFormationCheckBox)