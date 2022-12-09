import { useDispatch } from "react-redux"
import { addStyle,removeStyle,deduplicationStyle} from "../store"
const UserSeasonClothing = ({season,seasonList,storeText,includeElement}) => {
      const dispatch = useDispatch()
      return (<div className={"Myadress_main_component"}>
      <h3 style={{"margin": "0px"}} className={"Myadress_main_component_title"}>{season}</h3>
      {seasonList.map((clothing,number) => {return (
      <div className={"Myadress_main_component_items"} key={number}>
      <input className={"Myadress_main_component_item_check"}
      type="checkbox"  value = {seasonList[number]} onClick={e=>
      {const action = {list:storeText, value:e.target.value,index:0}
      if(e.target.checked){dispatch(addStyle(action))
      dispatch(deduplicationStyle(action))}
      else{dispatch(removeStyle(action))}}}/>
      <span className={"Myadress_main_component_item_text"}
      style={includeElement[season]?.includes(clothing)?{color:"#4254ff"}:{color:"#54595E"}}>
      {clothing}</span></div>)})}</div>)}
export default UserSeasonClothing  