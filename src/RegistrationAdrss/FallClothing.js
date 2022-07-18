import { useState } from "react";

const FallCloThing = () => {
    const [jeans,setJeans]=useState(null) 
    const [pullover,setPullover]=useState(null)
    const [shirt,setShirt] =useState(null)
    const [hoodie,setHoodie]=useState(null) 
    const [cardigan,setCardigan]=useState(null)
    const del = () => {
   return [jeans,pullover,shirt,cardigan,hoodie].filter(S=>S!==null)
}

return <form onSubmit = {e=>e.preventDefault()}>
    <h1>가을</h1>
청바지 <input type = "checkbox" value = "fall-jeans" onClick = {(e)=>setJeans(e.target.value)}/>
<br/>
맨투맨 <input type = "checkbox" value = "fall-pullover"onClick = {(e)=>setPullover(e.target.value)}/>
<br/>
셔츠/블라우스 <input type = "checkbox" value = "fall-shirt"onClick = {(e)=>setShirt(e.target.value)}/>
<br/>
후드티 <input type = "checkbox" value = "fall-hoodie"onClick = {(e)=>setHoodie(e.target.value)}/>
<br/>
니트/스웨터 <input type = "checkbox" value = "fall-cardigan"onClick = {(e)=>setCardigan(e.target.value)}/>
    <br/>
    <input type = "button" value = "제출" onClick={()=>console.log(del())}/>
    </form>
}
export default FallCloThing;