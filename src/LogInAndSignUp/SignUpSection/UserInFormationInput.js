import { useDispatch } from "react-redux"
import { addStyle,inputLengthStyle} from "../../store"
import React from "react"
const UserInFormationInput = ({title,type}) => {
  const dispatch = useDispatch()
    return (
        <input className={"Sign_up_ID"} type={type} placeholder={title}
          onBlur={e=>{const action = {list:title, value:e.target.value,index:2}
          dispatch(addStyle(action))
          dispatch(inputLengthStyle(action))}}/>)}
export default React.memo(UserInFormationInput)