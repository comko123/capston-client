/*eslint-disable*/
import PasswordChange from "./Change/PasswordChange"
import Mypage from "./MyPage/Mypage"
import Sign_up from "./LogInAndSignUp/SignUpSection/Sign_up"
import { Routes, Route, useNavigate} from "react-router-dom"
import LogoWithMainPage from "./LogoWithMainPage"
import InfoToMyInfo from "./BarPages/InfoToMyInfo"
import Login_page from "./LogInAndSignUp/Login_page"
import InfoToWeather from "./BarPages/InfoToWeather"
import MyClothing from "./RegistrationClothing/MyClothing"
import InfoToMyClothing from "./BarPages/InfoToMyClothing"
import StyleChange from "./ChangeInformation/StyleChange"
import Border from "./BarPages/Border/BorderMainSection/Border"
import Comment from "./BarPages/Border/Comment"
import Write from "./BarPages/Border/Write"
import WritingLetter from "./BarPages/Border/WritingLetter"
import ErrorPages from "./ErrorPages"
import BorderSearchPage from "./BarPages/Border/BorderSearchSection/BorderSearchPage"
import { useEffect } from "react"

const loginState = () => {
const gett = sessionStorage.getItem("login_information")
const user = JSON.parse(gett)
return user?.username}

export default function App() {
const login = loginState()
const navigate = useNavigate()
useEffect(()=>{sessionStorage.getItem("wheatherInfo")?null:navigate('/')},[])
return (<><Routes>
<Route path="*" element={<ErrorPages/>}/>
<Route path="/Border" element={<Border/>}>
<Route path="route/:index" element={null}/></Route>
<Route path="detail/:index" element={<WritingLetter/>}>
<Route path="Comment/:id" element={<Comment/>}/></Route>
<Route path="/Border/search/content"element={<BorderSearchPage/>}/>
<Route path="/detail/write" element={<Write/>}/>     
<Route path="/My_page" element={<Mypage/>}/>
<Route path="/Recommendation/weather" element={<InfoToWeather/>}/>
<Route path="/" element={<LogoWithMainPage/>}/>
<Route path="/ChangeToPassword" element={<PasswordChange/>}/>
<Route path="/Sign_up" element={!!login ? <LogoWithMainPage/>:<Sign_up/>}/>
<Route path="/Login" element={!!login ? <Mypage/>:<Login_page/>}/>
<Route path="/Input_clothing" element={!!login ? <MyClothing/>:<Login_page/>}/>
<Route path="/Recommendation/Information" element={!!login ? <InfoToMyInfo/>:<Login_page/>}/>
<Route path="/Recommendation/Clothing" element={!!login ? <InfoToMyClothing/>:<Login_page/>}/>
<Route path="/My_page/StyleChange" element={!!login ? <StyleChange />:<Login_page />}/>
</Routes></>)}