/*eslint-disable*/
import IdFind from "./Find/IdFind"
import Mypage from "./MyPage/Mypage"
import Board from "./BarPages/Board"
import Sign_up from "./LogInAndSignUp/Sign_up"
import { Routes, Route } from "react-router-dom"
import LogoWithMainPage from "./LogoWithMainPage"
import InfoToMyInfo from "./BarPages/InfoToMyInfo"
import Login_page from "./LogInAndSignUp/Login_page"
import InfoToWeather from "./BarPages/InfoToWeather"
import Information from "./ChangeInformatein/Information"
import MyClothing from "./RegistrationClothing/MyClothing"
import InfoToMyClothing from "./BarPages/InfoToMyClothing"

const loginState = () => {
    const gett = sessionStorage.getItem("login_information")
    const user = JSON.parse(gett) 
    return user?.email}

export default function App  (){
const login = loginState()
return(<Routes>
<Route path="/Board" element={<Board/>}/>
<Route path="/My_page" element={<Mypage/>}/>
<Route path="/" element={<LogoWithMainPage/>}/>
<Route path="*" element = {<h1>404 ERROR :&#41;</h1>}/>
<Route path="/Recommendation/weather" element={<InfoToWeather/>}/>
<Route path="/Id_find" element={!!login?<LogoWithMainPage/>:<IdFind/>}/>
<Route path="/Sign_up" element={!!login?<LogoWithMainPage/>:<Sign_up/>}/>
<Route path="/Login" element={!!login?<LogoWithMainPage/>:<Login_page/>}/>
<Route path="/Input_clothing" element={!!login?<MyClothing/>:<Login_page/>}/>
<Route path="/UserInformation/:id" element={!!login?<Information/>:<Login_page/>}/>
<Route path="/Recommendation/Information" element={!!login?<InfoToMyInfo/>:<Login_page/>}/>
<Route path="/Recommendation/Clothing" element={!!login?<InfoToMyClothing/>:<Login_page/>}/>
</Routes>)}