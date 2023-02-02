import React from "react"
import { useReduxClallBack } from "../hooks/useReduxClallBack"
const UserSelectorList = ({value,includeElement,season,clothing,list}) => {
const {add,dpc,rmv} = useReduxClallBack({list,value,index:0})
return (<><div className={"Myadress_main_component_items"}>
<input className={"Myadress_main_component_item_check"}type="checkbox"  value={value} 
onClick={e=>{if(e.target.checked){add();dpc()}else{rmv()}}}/>
<span className={"Myadress_main_component_item_text"}style={includeElement[season]?.includes(clothing)?
{color:"#4254ff"}:{color:"#54595E"}}>{clothing}</span></div></>)}
export default React.memo(UserSelectorList)