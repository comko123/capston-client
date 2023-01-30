import { Outlet,useNavigate,useParams } from "react-router-dom"
import { useGetArticleInfoQuery } from "../../api/inClosing"
import anonymous_blue from "../../img/anonymous_blue.png"
import pageback_btn from "../../img/pageback_btn.png"
import "./WrittingLetter.moudule.css"
const WritingLetter = () => {
const {id} = useParams()
const navigate = useNavigate()
const {isLoading,data} = useGetArticleInfoQuery(id)
return(<>{isLoading?<div className="loadingContanier">
<span className="loadingText">loading ...</span></div>:
<><div className="write_contanier"><img src={pageback_btn} width="18" height="18" alt=""onClick={()=>navigate(-1)}/></div>
<div className="writing_person"><img src={anonymous_blue} width="30" height="30" alt=""/>
<h1 className="writing_nickname">익명</h1></div><div className="borderHR"/>
<h1 className="writingTitle2">{data.title}</h1>
<h3 className="writingFillOut2">{data.content}</h3>
<div className="delBtnPR"></div><Outlet></Outlet></>}</>)}
export default WritingLetter