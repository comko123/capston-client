import { useRef } from "react"
import { Link, useNavigate, useSearchParams } from "react-router-dom"
import MenuBar from "../../../Bar/MenuBar"
import pen_square from "../../../img/pen_square.png"    
import mypage_btn from "../../../img/mypage_btn.png"
import BorderSearchContentList from "./BorderSearchContentList"
import BorderSearchButtonList from "./BorderSearchButtonList"
import { inCloser  } from "../../../api/inClosing"
const styleBorderObject = {border:"2px solid #4254ff",backgroundColor:"white",color:"#4254ff"}
const styleBoxObject = {backgroundColor: "#4254ff",color:"white"}
const BorderSearchPage = () => {const [searchParams] = useSearchParams();const navigate = useNavigate() 
const searchRef = useRef();const userText = searchParams.get("id")
const pageNumber = +searchParams.get("number")
const {isLoading,data} = inCloser.useGetBorderSearchArticlesQuery({info:userText,num:searchParams.get("number")})
const nextContentEmpty = data?.content?.length === pageNumber
const nextContentNotEmpty = data?.totalPages-1 === pageNumber
return(
<>{isLoading?
<div className="loadingContanier">
<span className="loadingText">loading ...</span></div>:
<div className="topContanier"><div className={"top_title_area"}>
<div className={"top_title"}>게시판</div>
<div className={"top_mypage"}><Link to={`/My_page`}>
<img src={mypage_btn} width="25" height="25" alt="마이 페이지"/></Link></div></div>
<form className="search_box" onSubmit={
    e=>{e.preventDefault()
window.location.replace(`/Border/search/content?id=${searchRef.current.value}&number=${0}`)}}>

<input className="search" placeholder="search" ref ={searchRef} defaultValue={userText}/>
<input className="search_btn" type="submit" value="검색" minLength={2}/></form>
<div style={!data.content.length?{height:"30vh"}:{height:`${30+(13.5*data.content.length)}vh`}}>
<BorderSearchContentList data={data.content} search={userText}/>

<form className="numFormBtn" onSubmit={e => e.preventDefault()}>

<input className="previousBtn" type="button" value="<" 
disabled={!pageNumber?true:false} style={!pageNumber?styleBorderObject:styleBoxObject}
onClick={()=>{navigate(`/Border/search/content?id=${userText}&number=${pageNumber-1}`)}}/>

<BorderSearchButtonList langth={data.totalElements} searchParams={userText}
 styleBorderObject={styleBorderObject} styleBoxObject={styleBoxObject}/>

<input className="nextBtn" type="button" value=">"
disabled={!data.content.length?nextContentEmpty?true:false:nextContentNotEmpty?true:false} 
style={!data.content.length? nextContentEmpty?styleBorderObject
:styleBoxObject:nextContentNotEmpty?styleBorderObject:styleBoxObject}
onClick={()=>{
    navigate(`/Border/search/content?id=${userText}&number=${pageNumber+1}`)}}/></form>
<i className="fa-solid fa-pen-to-square"></i>
<div className="writingBtnPR"><Link className="writingBtn" to={"/detail/write"}>
<div className="pen_square"><img src={pen_square} width="20" height="20" alt=""/>
</div>글쓰기</Link></div></div><MenuBar/></div>}</>)}
export default BorderSearchPage