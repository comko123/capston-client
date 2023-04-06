/*eslint-disable*/
import { Routes, Route, useNavigate } from "react-router-dom"
import { useEffect, lazy, Suspense } from "react"
import LogoWithMainPage from "./LogoWithMainPage"
import FallBackWating from "./FallBackWating"
const Mypage = lazy(() => import("./MyPage/Mypage"))
const ErrorPages = lazy(() => import("./ErrorPages"))
const Write = lazy(() => import("./BarPages/Border/Write"))
const Comment = lazy(() => import("./BarPages/Border/Comment"))
const InfoToMyInfo = lazy(() => import("./BarPages/InfoToMyInfo"))
const Login_page = lazy(() => import("./LogInAndSignUp/Login_page"))
const InfoToWeather = lazy(() => import("./BarPages/InfoToWeather"))
const PasswordChange = lazy(() => import("./Change/PasswordChange"))
const StyleChange = lazy(() => import("./ChangeInformation/StyleChange"))
const MyClothing = lazy(() => import("./RegistrationClothing/MyClothing"))
const InfoToMyClothing = lazy(() => import("./BarPages/InfoToMyClothing"))
const WritingLetter = lazy(() => import("./BarPages/Border/WritingLetter"))
const Sign_up = lazy(() => import("./LogInAndSignUp/SignUpSection/Sign_up"))
const Border = lazy(() => import("./BarPages/Border/BorderMainSection/Border"))
const BorderSearchPage = lazy(() => import("./BarPages/Border/BorderSearchSection/BorderSearchPage"))

const loginState = () => {
    const gett = sessionStorage.getItem("login_information")
    const user = JSON.parse(gett)
    return user?.username
}

export default function App() {
    const login = loginState()
    const navigate = useNavigate()
    useEffect(() => { sessionStorage.getItem("wheatherInfo") ? null : navigate('/') }, [])

    return (
        <Suspense fallback={<FallBackWating />}><Routes>
            <Route path="*" element={<ErrorPages />} />
            <Route path="/Border" element={<Border />}>
                <Route path="route/:index" element={null} /></Route>
            <Route path="detail/:index" element={<WritingLetter />}>
                <Route path="Comment/:id" element={<Comment />} /></Route>
            <Route path="/Border/search/content" element={<BorderSearchPage />} />
            <Route path="/detail/write" element={<Write />} />
            <Route path="/My_page" element={<Mypage />} />
            <Route path="/Recommendation/weather" element={<InfoToWeather />} />
            <Route path="/" element={<LogoWithMainPage />} />
            <Route path="/ChangeToPassword" element={<PasswordChange />} />
            <Route path="/Sign_up" element={!!login ? <LogoWithMainPage /> : <Sign_up />} />
            <Route path="/Login" element={!!login ? <Mypage /> : <Login_page />} />
            <Route path="/Input_clothing" element={!!login ? <MyClothing /> : <Login_page />} />
            <Route path="/Recommendation/Information" element={!!login ? <InfoToMyInfo /> : <Login_page />} />
            <Route path="/Recommendation/Clothing" element={!!login ? <InfoToMyClothing /> : <Login_page />} />
            <Route path="/My_page/StyleChange" element={!!login ? <StyleChange /> : <Login_page />} />
        </Routes></Suspense>)
}