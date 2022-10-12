import MenuBar from "../Bar/MenuBar"
import {wheather} from "../data"
const InfoToMyInfo = () => {

return(<>
<h1>내 정보로 추천받기</h1>
{wheather.rain?<h4>외출시 우산을 챙기세요</h4>:null}
<MenuBar/></>)}
export default InfoToMyInfo