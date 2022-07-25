import React,{useState} from "react";
import MenuBar from "../Bar/MenuBar";
const userClothing = {spring:[],summer:[],fall:[],winter:[],style:[]}
 const userSeasonStyle = (textSeason,stringSeason,nowSeanson) =>{
return(<>
<h3 style={{"margin":"0px"}}>{textSeason}</h3>
{stringSeason.map((clothing)=>{
return (<>{clothing}<input type ="checkbox" 
value = {textSeason+"/"+`${clothing}`} onClick ={(e)=>
  {if(e.target.checked===true){
   nowSeanson.push(e.target.value)  
  const inputStyle =nowSeanson.filter((element,index)=>nowSeanson.indexOf(element)===index)}
    else{const deleteStyle =nowSeanson.splice(nowSeanson.indexOf(e.target.value),1)}
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
{userSeasonStyle("봄",spring,userClothing.spring)}
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