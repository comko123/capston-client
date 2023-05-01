import React from "react"
import { useReduxClallBack } from "../../hooks/useReduxClallBack"

const SignSelctCheck = ({ list, value, index, length }) => {
    const { add, rmv } = useReduxClallBack({ list, value, index: "no4" })
    return (<>
        <div className={"Sign_up_selecteachrow"} >
            <input className={"Sign_up_radiobtn"} type="radio" name={list}
                value={value === "남성" || value === "여성" ? value : index + 1}
                onClick={() => { if (!length.length) { add() } else { rmv(); add() } }} />
            <div className={"Sign_up_radiolabel"}>{value}</div></div></>)
}
export default React.memo(SignSelctCheck)