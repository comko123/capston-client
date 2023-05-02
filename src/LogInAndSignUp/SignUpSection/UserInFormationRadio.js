import React, { useState } from "react"
import { FaChevronDown } from "react-icons/fa"
import SignSelctCheck from "./SignSelctCheck"

const onSelectChoice = ({ setUserData, title }) => {
    setUserData(state => {
        const copy = { ...state }
        const copyState = !state[title]
        copy[title] = copyState; 
        return copy
    })
}

const UserInFormationRadio = ({ checkList, title, length }) => {
    const [userData, setUserData] = useState({ 연령: true, 성별: false, 신장: false, 체중: false })
    return (
        <div>
            <h3 className={`Sign_up_selectbox ${userData[title] ? "Sign_up_selectbox__active" : null}`}
                onClick={() => onSelectChoice({ setUserData, title })}><div className={"Sign_up_selectlabel"}>{title}</div>
                <FaChevronDown className={"Sign_up_selectboxright"} /></h3>
            <div className={`Sign_up_selectcontainer ${userData[title] ? "Sign_up_selectcontainer__active" : null}`}>
                {checkList.map((childInformation, index) => <SignSelctCheck key={title + ":" + `${childInformation}`}
                    index={index + 1} list={title} value={childInformation} length={length} />)}</div></div>)
}
export default React.memo(UserInFormationRadio)