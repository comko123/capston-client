/*eslint-disable*/
import { Routes, Route, useNavigate } from "react-router-dom"
import { useEffect, lazy, Suspense } from "react"
import LogoWithMainPage from "pages/logo/index"
import FallBackWating from "pages/fallback/index"
const Mypage = lazy(() => import("pages/my_page/index"))
const ErrorPages = lazy(() => import("pages/error/index"))
const Write = lazy(() => import("pages/write/index"))
const Comment = lazy(() => import("pages/comment/index"))
const InfoToMyInfo = lazy(() => import("pages/implements/info_to_myinfo/index"))
const Login_page = lazy(() => import("pages/log_in/index"))
const InfoToWeather = lazy(() => import("pages/implements/info_to_weather/index"))
const PasswordChange = lazy(() => import("pages/change/index"))
const StyleChange = lazy(() => import("pages/stylechange/index"))
const MyClothing = lazy(() => import("pages/registration/index"))
const InfoToMyClothing = lazy(() => import("pages/implements/info_to_myclothing/index"))
const WritingLetter = lazy(() => import("pages/writingletter/index"))
const Sign_up = lazy(() => import("pages/sign_up/index"))
const Border = lazy(() => import("pages/border/index"))
const BorderSearchPage = lazy(() => import("pages/bordersearch/index"))

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