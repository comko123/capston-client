/*eslint-disable*/
import {useRef} from "react"
import { useNavigate,useLocation,Link} from "react-router-dom"
import "./Border.moudule.css"
import mypage_btn from "../../../img/mypage_btn.png"
import pen_square from "../../../img/pen_square.png"
import MenuBar from "../../../Bar/MenuBar"
import BorderContentList from "./BorderContentList"
import BorderButtonList from "./BorderButtonList"
import { useGetBorderQuery } from "../../../api/inClosing"
const borderStyleObject = {border:"2px solid #4254ff",backgroundColor:"white",color:"#4254ff"}
const borderClickStyleObject = {backgroundColor: "#4254ff",color:"white"}
const Border = () => {const navigate = useNavigate();const {pathname} = useLocation();const searchRef = useRef()
const {currentData,isLoading} = useGetBorderQuery({url:"/articles"})
const pageIndex = Math.floor(+pathname.substring(14)/10)
const finalBtnCheck = Math.floor((currentData?.length-1)/10)
return(<>{isLoading?<div className="loadingContanier"><span className="loadingText">loading ...</span></div>:
<><div className="topContanier"><div className={"top_title_area"}><div className={"top_title"}>게시판</div>
<div className={"top_mypage"}><Link to={`/My_page`}>
<img src={mypage_btn} width="25" height="25" alt="마이 페이지"/></Link></div></div>
<form className="search_box" onSubmit={e=>{e.preventDefault()
window.location.replace(`/Border/search/content?id=${searchRef.current.value}&number=${0}`)}}>
<input className="search" placeholder="search" ref ={searchRef} minLength={2}/>
<input className="search_btn" type="submit" value="검색"/></form>
<div style={!currentData?.length?{height:"30vh"}:{height:`165vh`}}>
<BorderContentList currentData={currentData} pageIndex={pageIndex}/>
<form className="numFormBtn" onSubmit={e => e.preventDefault()}>
<input className="previousBtn" type="button" value="<" disabled={!pageIndex ? true : false}
style={!pageIndex?borderStyleObject:borderClickStyleObject}
onClick={() => {navigate(`/border/route/${(pageIndex-1)*10}`)}}/>
<BorderButtonList currentData={currentData} borderStyleObject={borderStyleObject} borderClickStyleObject={borderClickStyleObject}/>
<input className="nextBtn" type="button" disabled={finalBtnCheck === pageIndex ? true : false} value=">"
style={!currentData?.length?borderStyleObject:finalBtnCheck===pageIndex?borderStyleObject:borderClickStyleObject}
onClick={()=>{navigate(`/border/route/${(pageIndex+1)*10}`)}}/></form>
<i className="fa-solid fa-pen-to-square"></i><div className="writingBtnPR">
<Link className="writingBtn" to={"/detail/write"}><div className="pen_square">
<img src={pen_square} width="20" height="20"/></div>글쓰기</Link></div></div></div><MenuBar/></>}</>)}
export default Border