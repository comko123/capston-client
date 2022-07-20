import { useState } from "react";
import MenuBar from "../Bar/MenuBar";
const Myadress = () => {
    const [Springjeans,setSpringJeans]=useState(null) 
    const [Springpullover,setSpringPullover]=useState(null)
    const [Springshirt,setSpringShirt] =useState(null)
    const [Springhoodie,setSpringHoodie]=useState(null) 
    const [Springcardigan,setSpringCardigan]=useState(null)
    const [Summershorts,setSummerShorts]=useState(null)
    const [Summershortsleeve,setSummerShortsleeve]=useState(null) 
    const [Summershirt,setSummerShirt] =useState(null)
    const [Summersleeveless,setSummerSleeveless]=useState(null)
    const [Summerjeans,setSummerJeans]=useState(null) 
    const [Falljeans,setFallJeans]=useState(null) 
    const [Fallpullover,setFallPullover]=useState(null)
    const [Fallshirt,setFallShirt] =useState(null)
    const [Fallhoodie,setFallHoodie]=useState(null) 
    const [Fallcardigan,setFallCardigan]=useState(null)
    const [Winterjeans,setWinterJeans]=useState(null) 
    const [Wintercoat,setWinterCoat]=useState(null)
    const [Winterpadding,setWinterPadding] =useState(null)
    const [Winterhoodie,setWinterHoodie]=useState(null) 
    const [Winterknit,setWinterKnit]=useState(null)
    const [vintage,setVintage]=useState(null) 
    const [dandy,setDandy]=useState(null)
    const [casual,setCasual] =useState(null)
    const [normcore,setNormcore]=useState(null) 
    const [street,setStreet]=useState(null)

    const del = [Springjeans,Springpullover,Springshirt,Springhoodie,Springcardigan,
        Summerjeans,Summershorts,Summershirt,Summershortsleeve,Summersleeveless,
        Falljeans,Fallpullover,Fallshirt,Fallcardigan,Fallhoodie,
        Winterjeans,Wintercoat,Winterpadding,Winterknit,Winterhoodie,
        vintage,dandy,casual,normcore,street].filter(S=>S!==null)

return(
<>
<h3>자신의옷 등록하기</h3>
<h5>마이페이지&gt;자신의옷 등록하기</h5>
<form onSubmit = {e=>e.preventDefault()}>
<h1>봄</h1>
    청바지 <input type = "checkbox" value = "spring-jeans" onClick = {(e)=>setSpringJeans(e.target.value)}/>
    <br/>
    맨투맨 <input type = "checkbox" value = "spring-pullover" onClick = {(e)=>setSpringPullover(e.target.value)}/>
    <br/>
    셔츠/블라우스 <input type = "checkbox" value = "spring-shirt" onClick = {(e)=>setSpringShirt(e.target.value)} />
    <br/>
    후드티 <input type = "checkbox" value = "spring-hoodie" onClick = {(e)=>setSpringHoodie(e.target.value)}/>
    <br/>
    가디건 <input type = "checkbox" value = "spring-cardigan" onClick = {(e)=>setSpringCardigan(e.target.value)}/>
    <br/>
    <h1>여름</h1>
    반바지 <input type = "checkbox" value = "summer-shorts" onClick = {(e)=>setSummerShorts(e.target.value)}/>
    <br/>
    반팔티셔츠 <input type = "checkbox" value = "summer-shortsleeve"onClick = {(e)=>setSummerShortsleeve(e.target.value)}/>
    <br/>
    셔츠/블라우스 <input type = "checkbox" value = "summer-shirt"onClick = {(e)=>setSummerShirt(e.target.value)}/>
    <br/>
    민소매티셔츠 <input type = "checkbox" value = "summer-sleeveless"onClick = {(e)=>setSummerSleeveless(e.target.value)}/>
    <br/>
    청바지 <input type = "checkbox" value = "summer-jeans"onClick = {(e)=>setSummerJeans(e.target.value)}/>
    <br/>
    <h1>가을</h1>
    청바지 <input type = "checkbox" value = "fall-jeans" onClick = {(e)=>setFallJeans(e.target.value)}/>
    <br/>
    맨투맨 <input type = "checkbox" value = "fall-pullover"onClick = {(e)=>setFallPullover(e.target.value)}/>
    <br/>
    셔츠/블라우스 <input type = "checkbox" value = "fall-shirt"onClick = {(e)=>setFallShirt(e.target.value)}/>
    <br/>
    후드티 <input type = "checkbox" value = "fall-hoodie"onClick = {(e)=>setFallHoodie(e.target.value)}/>
    <br/>
    니트/스웨터 <input type = "checkbox" value = "fall-cardigan"onClick = {(e)=>setFallCardigan(e.target.value)}/>
    <h1>겨울</h1>
    청바지 <input type = "checkbox" value = "winter-jeans" onClick = {(e)=>setWinterJeans(e.target.value)}/>
    <br/>
    코트 <input type = "checkbox" value = "winter-coat" onClick = {(e)=>setWinterCoat(e.target.value)}/>
    <br/>
    패딩 <input type = "checkbox" value = "winter-padding" onClick = {(e)=>setWinterPadding(e.target.value)}/>
    <br/>
    후드티 <input type = "checkbox" value = "winter-hoodie" onClick = {(e)=>setWinterHoodie(e.target.value)}/>
    <br/>
    니트/스웨터 <input type = "checkbox" value = "winter-knit" onClick = {(e)=>setWinterKnit(e.target.value)}/>
    <br/>
    <h1>스타일</h1>
    빈티지 <input type = "checkbox" value = "vintage" onClick = {(e)=>setVintage(e.target.value)}/>
    <br/>
    댄디 <input type = "checkbox" value = "dandy" onClick = {(e)=>setDandy(e.target.value)}/>
    <br/>
    캐주얼 <input type = "checkbox" value = "casual"onClick = {(e)=>setCasual(e.target.value)}/>
    <br/>
    놈코어 <input type = "checkbox" value = "normcore" onClick = {(e)=>setNormcore(e.target.value)}/>
    <br/>
    스트릿 <input type = "checkbox" value = "street" onClick = {(e)=>setStreet(e.target.value)}/>
    <br/>
    <input type = "button" value = "제출" onClick={()=>console.log(del)}/>
</form>
<MenuBar/>
</>

    )

}
export default Myadress;