import Userdata from "./Userdata";
import IdFind from "./Find/IdFind";
import ErrorPages from "./ErrorPages";
import Mypage from "./MyPage/Mypage";
import Board from "./BarPages/Board";
import Sign_up from "./LogInAndSignUp/Sign_up";
import LogoWithMainPage from "./LogoWithMainPage";
import InfoToMyInfo from "./BarPages/InfoToMyInfo";
import Myadress from "./RegistrationAdrss/Myadress";
import Login_page from "./LogInAndSignUp/Login_page";
import InfoToWeather from "./BarPages/InfoToWeather";
import Information from "./ChangeInformatein/Information";
import InfoToMyClothing from "./BarPages/InfoToMyClothing";
import NewReactiveType from "./ReactiveType/NewReactiveType";
import { Routes, Route } from "react-router-dom";
export default function App  (){
return(
<NewReactiveType>
<Userdata>
<Routes>
<Route path="*" element = {<ErrorPages/>}/>
<Route path="/" element={<LogoWithMainPage/>}/>
<Route path="/weather_code/Board" element={<Board/>}/>
<Route path="/weather_coder/My_page" element={<Mypage/>}/>
<Route path="/weather_coder/Id_find" element={<IdFind/>}/>
<Route path="/weather_coder/Sign_up" element={<Sign_up/>}/>
<Route path="/weather_coder/Login" element={<Login_page/>}/>
<Route path="/weather_coder/Input_adress" element={<Myadress/>}/>
<Route path="/weather_coder/UserInformation/:id" element={<Information/>}/>
<Route path="/weather_code/Recommendation/weather" element={<InfoToWeather/>}/>
<Route path="/weather_code/Recommendation/Information" element={<InfoToMyInfo/>}/>
<Route path="/weather_code/Recommendation/Clothing" element={<InfoToMyClothing/>}/>
</Routes>
</Userdata>
</NewReactiveType>
    );
}