import MenuBar from "../Bar/MenuBar"
const InfoToWeather = () => {

        return(
        <>
         <h1>날씨 정보로 추천받기</h1>
        {
                sessionStorage.getItem("login_information")?
                null
                :
                <>
                성별<br/><input type = "checkbox"/>여성<br/>
                <input type = "checkbox"/>남성
                </>
        }
        {
                JSON.parse(sessionStorage.getItem("rain"))?
                <h4>외출시 우산을 챙기세요</h4>:null

        }
       
        <MenuBar/>
        </>
        
        )

}
export default InfoToWeather;