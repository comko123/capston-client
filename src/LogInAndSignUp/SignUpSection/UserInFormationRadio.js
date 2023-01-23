import React,{ useState ,useCallback } from "react"
import { FaChevronDown } from "react-icons/fa"
import SignSelctCheck from "./SignSelctCheck"
const UserInFormationRadio = ({checkList, title, length}) => {
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
  
    const onSelectChoice = useCallback(() => {
      switch (title) {
        case "성별":setGenderSelected(!genderSelected);break
        case "연령":setAgeSelected(!ageSelected);break
        case "신장":setHeightSelected(!heightSelected);break
        case "체중":setWeightSelected(!weightSelected);break
        default:return}},[title])
  
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
      return (<SignSelctCheck key={title + ":" + `${childInformation}`}
      index={index} list={title} value={childInformation} length={length}
      />)})}</div></div>)}
  export default React.memo(UserInFormationRadio)
