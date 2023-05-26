/*eslint-disable*/
import { Routes, Route, useNavigate } from "react-router-dom"
import { useEffect, lazy, Suspense } from "react"
import LogoWithMainPage from "pages/logo/LogoWithMainPage"
import FallBackWating from "pages/fallback/FallBackWating"
const Mypage = lazy(() => import("pages/my_page/Mypage"))
const ErrorPages = lazy(() => import("pages/error/ErrorPages"))
const Write = lazy(() => import("pages/write/Write"))
const Comment = lazy(() => import("pages/comment/Comment"))
const InfoToMyInfo = lazy(() => import("pages/implements/InfoToMyInfo"))
const Login_page = lazy(() => import("pages/log_in/Login_page"))
const InfoToWeather = lazy(() => import("pages/implements/InfoToWeather"))
const PasswordChange = lazy(() => import("pages/change/PasswordChange"))
const StyleChange = lazy(() => import("pages/stylechange/StyleChange"))
const MyClothing = lazy(() => import("pages/registration/MyClothing"))
const InfoToMyClothing = lazy(() => import("pages/implements/InfoToMyClothing"))
const WritingLetter = lazy(() => import("pages/writingletter/WritingLetter"))
const Sign_up = lazy(() => import("pages/sign_up/Sign_up"))
const Border = lazy(() => import("pages/border/Border"))
const BorderSearchPage = lazy(() => import("pages/bordersearch/BorderSearchPage"))

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