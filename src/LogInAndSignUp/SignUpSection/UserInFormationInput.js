import { useDispatch } from "react-redux"
import { addStyle,inputLengthStyle} from "../../store"
const UserInFormationInput = ({title,type}) => {
  const dispatch = useDispatch()
    return (
        <input className={"Sign_up_ID"} type={type} placeholder={title}
          onBlur={e=>{const action = {list:title, value:e.target.value,index:2}
          dispatch(addStyle(action))
          dispatch(inputLengthStyle(action))}}/>)}
export default UserInFormationInput