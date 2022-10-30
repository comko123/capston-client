import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { userLoginInfo } from "../data"
const myPageLoginState = sessionStorage.getItem("login_information")
const CorrectionPage = () => {
const [data,setData] = useState({})
useEffect(()=>{setData(userLoginInfo)},[])
    const navigate = useNavigate()
    return(<>
    <h1 onClick={()=>(myPageLoginState)?
        navigate(`/UserInformation/${data.password}`):
        alert("로그인후 이용이 가능한 서비스 입니다.")}>카테고리 변경하기</h1>
        <h1>스타일 변경하기</h1>
        <h1>비밀번호 변경하기</h1>
    </>)
}
export default CorrectionPage