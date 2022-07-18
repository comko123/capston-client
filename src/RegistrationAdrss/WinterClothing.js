import { useState } from "react";

const WinterCloThing = () => {
    const [jeans,setJeans]=useState(null) 
    const [coat,setCoat]=useState(null)
    const [padding,setPadding] =useState(null)
    const [hoodie,setHoodie]=useState(null) 
    const [knit,setKnit]=useState(null)
    const del = () => {
   return [jeans,coat,padding,knit,hoodie].filter(S=>S!==null)
}

return <form onSubmit = {e=>e.preventDefault()}>
    <h1>겨울</h1>
청바지 <input type = "checkbox" value = "winter-jeans" onClick = {(e)=>setJeans(e.target.value)}/>
<br/>
코트 <input type = "checkbox" value = "winter-coat" onClick = {(e)=>setCoat(e.target.value)}/>
<br/>
패딩 <input type = "checkbox" value = "winter-padding" onClick = {(e)=>setPadding(e.target.value)}/>
<br/>
후드티 <input type = "checkbox" value = "winter-hoodie" onClick = {(e)=>setHoodie(e.target.value)}/>
<br/>
니트/스웨터 <input type = "checkbox" value = "winter-knit" onClick = {(e)=>setKnit(e.target.value)}/>
    <br/>
    <input type = "button" value = "제출" onClick={()=>console.log(del())}/>
    </form>
}
export default WinterCloThing;