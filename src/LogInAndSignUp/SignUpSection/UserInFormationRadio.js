import React,{ useState } from "react"
import { FaChevronDown } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { addStyle,removeStyle} from "../../store"
const UserInFormationRadio = ({checkList, title, length}) => {
  const dispatch = useDispatch()
    const [ageSelected, setAgeSelected] = useState(true)
    const [genderSelected, setGenderSelected] = useState(false)
    const [heightSelected, setHeightSelected] = useState(false)
    const [weightSelected, setWeightSelected] = useState(false)
  const selectB = "Sign_up_selectbox__active"
  const selectC = "Sign_up_selectcontainer__active"
    const getClassName = () => {
      if (title === "성별" && genderSelected)return selectB
      else if (title === "연령" && ageSelected)return selectB
      else if (title === "신장" && heightSelected)return selectB
      else if (title === "체중" && weightSelected)return selectB
    }
  
    const onSelectChoice = () => {
      switch (title) {
        case "성별":setGenderSelected(!genderSelected);break
        case "연령":setAgeSelected(!ageSelected);break
        case "신장":setHeightSelected(!heightSelected);break
        case "체중":setWeightSelected(!weightSelected);break
        default:return}}
  
    const getClassName2 = () => {
      if (title === "성별" && genderSelected)return selectC
      else if (title === "연령" && ageSelected)return selectC
      else if (title === "신장" && heightSelected)return selectC
      else if (title === "체중" && weightSelected)return selectC
      else return}

return(<div><h3 className={`Sign_up_selectbox ${getClassName()}`} onClick={onSelectChoice}>
      <div className={"Sign_up_selectlabel"}>{title}</div>
      <FaChevronDown className={"Sign_up_selectboxright"}></FaChevronDown></h3>
      <div className={`Sign_up_selectcontainer ${getClassName2()}`}>
      {checkList.map((childInformation, index) => {
      return (<div className={"Sign_up_selecteachrow"} key={title + ":" + `${childInformation}`}>
      <input className={"Sign_up_radiobtn"} type="radio" name={title}
      value={childInformation === "남성" || childInformation === "여성"? childInformation:index+1}
      onClick={e=>{const action = {list:title, value:e.target.value,index:3}
      if(!length.length){dispatch(addStyle(action))}
      else{dispatch(removeStyle(action))
      dispatch(addStyle(action))}}}/>
      <div className={"Sign_up_radiolabel"}>{childInformation}
      </div></div>)})}</div></div>)}
  export default React.memo(UserInFormationRadio)

  //중복제거 해보기