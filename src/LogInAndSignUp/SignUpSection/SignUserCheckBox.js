import React from "react"
import { useReduxClallBack } from "../../hooks/useReduxClallBack"

const SignUserCheckBox = ({value,list}) => {
    const {add,dpc,rmv} = useReduxClallBack({list,value,index:3})
    return(<><div className="checkbox_selector">
    <input className={"Sign_up_radiobtn"} type="checkbox" value={value}
    onClick ={e=>{if(e.target.checked){add();dpc()}else{rmv()}}}/>
    <div className={"Sign_up_radiolabel"}>{value}</div></div></>)}
export default React.memo(SignUserCheckBox)