/*eslint-disable*/
import { useReduxClallBack } from "hooks/useReduxClallBack"

const UserCheck = ({ list, value, number, styleList }) => {
    const { add, dpc, rmv } = useReduxClallBack({ list, value, index: "no2"})

    return (
        <div className={"Myadress_main_component_items"}>
            <input className={"Myadress_main_component_item_check"} type="checkbox" value={styleList[number]}
                onClick={e => { if (e.target.checked) { add(); dpc() } else { rmv() } }} />
            <span className={"Myadress_main_component_item_text"}>{value}
            </span></div>)
}
export default UserCheck