import MenuBar from "../Bar/MenuBar";
const InfoToWeather = () => {

        return(
        <>{
                sessionStorage.getItem("login_information")?
                null
                :
                <>
                성별<br/><input type = "checkbox"/>여성<br/>
                <input type = "checkbox"/>남성
                </>
        }
        <h1>날씨 정보로 추천받기</h1>
        <MenuBar/>
        </>
        
        )

}
export default InfoToWeather;