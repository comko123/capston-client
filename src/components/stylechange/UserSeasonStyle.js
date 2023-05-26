import { inCloser } from "api/inClosing"
import { certifiedToken, parsingLogic } from "data"
import UserCheck from "./UserCheck"
const UserSeasonStyle = ({ title, styleList, storeText, storeStyleList, result }) => {
    const infoModify = inCloser.useSetMyInfoMutation()
    return (
        <div className={"Myadress_main_component"}>
            <div className={"Information_main_component_title_container"}>
                <h3 className={"Myadress_main_component_title Information_main_component_title"}>{title}</h3>
            </div>
            <form onSubmit={async (e) => {
                e.preventDefault()
                const resultData = await (await infoModify[0]({
                    token: { Authorization: `Bearer ${certifiedToken}` },
                    info: storeStyleList.no2.style, settingUrl: `/my-style`
                })).data
                try { parsingLogic(result, resultData) } catch (error) { console.log(error) }
            }}>
                {styleList.map((clothing, number) => <UserCheck key={number} list={storeText} value={clothing} number={number} styleList={styleList} />)}
                <input className={"Information_component_submit"} type="submit" value="submit" />
            </form></div>)
}
export default UserSeasonStyle