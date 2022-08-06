import React,{useState} from "react";
import MenuBar from "../Bar/MenuBar";
const userClothing = {spring:[],summer:[],fall:[],winter:[],style:[]}
 const userSeasonStyle = (...rest) =>{
return(<>
<h3 style={{"margin":"0px"}}>{rest[0]}</h3>
{rest[1].map((clothing)=>{
return (<>{clothing}<input type ="checkbox" key = {Date.now()}
value = {rest[0]+"/"+`${clothing}`} onClick ={(e)=>
  {if(e.target.checked===true){
   rest[2].push(e.target.value)  
  const inputStyle =rest[2].filter((element,index)=>rest[2].indexOf(element)===index)}
    else{const deleteStyle =rest[2].splice(rest[2].indexOf(e.target.value),1)}
}
}/> <br/></>)
})}</>)}
const Myadress = () => {
  const [spring] = useState(["청바지","맨투맨","셔츠/블라우스","후드티","가디건"])
  const [summer] =useState(["반바지","반팔 티셔츠","셔츠/블라우스","민소매티셔츠","청바지"])
  const [fall] =useState(["청바지","맨투맨","셔츠/블라우스","후드티","니트/스웨터"])
  const [winter] =useState(["청바지","코트","패딩","후드티","니트/스웨터"])
  const [style] =useState(["빈티지","댄디","캐주얼","놈코어","스트릿"])
  return (
    <>
    <h3>자신의옷 등록하기</h3>
<h5>마이페이지&gt;자신의옷 등록하기</h5>
<form onSubmit = {e=>e.preventDefault()}>
  <div style = {{"backgroundColor":"orange"}}>
{userSeasonStyle("봄",spring,userClothing.spring)}
</div>
{userSeasonStyle("여름",summer,userClothing.summer)}
{userSeasonStyle("가을",fall,userClothing.fall)}
{userSeasonStyle("겨울",winter,userClothing.winter)}
{userSeasonStyle("스타일",style,userClothing.style)}
<input type="button" value = "click" onClick={()=>console.log(userClothing)}/>
  </form>
<MenuBar/>
    </>
  );
}

export default Myadress;