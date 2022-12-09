import { Link } from "react-router-dom"
import "./ErrorPages.moudule.css"
const ErrorPages = () =>{
return(<div className="errorPageContanier">
    <h1 className="errorTextMessage">잘못된 경로로 접근하였습니다.</h1> 
    <Link to ={'/'} className="errorPageToMainPage">메인 페이지로 이동하기</Link></div>)}
export default ErrorPages