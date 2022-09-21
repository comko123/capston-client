import MenuBar from "../Bar/MenuBar"
const InfoToMyClothing = () =>{
    return(<>
    <h1>내 옷들로 추천받기</h1>
    {
                JSON.parse(sessionStorage.getItem("rain"))?
                <h4>외출시 우산을 챙기세요</h4>:null

        }
    <MenuBar/>
    </>)

}
export default InfoToMyClothing