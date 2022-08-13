/*eslint-disable*/
import Userdata from "./Userdata";
import IdFind from "./Find/IdFind";
import ErrorPages from "./ErrorPages";
import Mypage from "./MyPage/Mypage";
import Board from "./BarPages/Board";
import Sign_up from "./LogInAndSignUp/Sign_up";
import LogoWithMainPage from "./LogoWithMainPage";
import InfoToMyInfo from "./BarPages/InfoToMyInfo";
import MyClothing from "./RegistrationClothing/MyClothing";
import Login_page from "./LogInAndSignUp/Login_page";
import InfoToWeather from "./BarPages/InfoToWeather";
import Information from "./ChangeInformatein/Information";
import InfoToMyClothing from "./BarPages/InfoToMyClothing";
import NewReactiveType from "./ReactiveType/NewReactiveType";
import { Routes, Route } from "react-router-dom";

const loginState = () => {
    const gett = sessionStorage.getItem("login_information")
    const user = JSON.parse(gett) 
    return user?.email
    }

export default function App  (){
const login = loginState()
return(
<NewReactiveType>
<Userdata>
<Routes>
<Route path="*" element = {<ErrorPages/>}/>
<Route path="/" element={<LogoWithMainPage/>}/>
<Route path="/weather_code/Board" element={<Board/>}/>
<Route path="/weather_coder/My_page" element={<Mypage/>}/>
<Route path="/weather_code/Recommendation/weather" element={<InfoToWeather/>}/>
<Route path="/weather_coder/Id_find" element={!!login?<LogoWithMainPage/>:<IdFind/>}/>
<Route path="/weather_coder/Sign_up" element={!!login?<LogoWithMainPage/>:<Sign_up/>}/>
<Route path="/weather_coder/Login" element={!!login?<LogoWithMainPage/>:<Login_page/>}/>
<Route path="/weather_coder/Input_clothing" element={!!login?<MyClothing/>:<Login_page/>}/>
<Route path="/weather_coder/UserInformation/:id" element={!!login?<Information/>:<Login_page/>}/>
<Route path="/weather_code/Recommendation/Information" element={!!login?<InfoToMyInfo/>:<Login_page/>}/>
<Route path="/weather_code/Recommendation/Clothing" element={!!login?<InfoToMyClothing/>:<Login_page/>}/>
</Routes>
</Userdata>
</NewReactiveType>
);
}