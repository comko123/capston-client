import { useState } from "react";
import Collect from "./Collect";

const SpringCloThing = () => {
    const [jeans,setJeans]=useState(null) 
    const [pullover,setPullover]=useState(null)
    const [shirt,setShirt] =useState(null)
const [hoodie,setHoodie]=useState(null) 
const [cardigan,setCardigan]=useState(null)
    const del = [jeans,pullover,shirt,hoodie,cardigan].filter(S=>S!==null)

return <form onSubmit = {e=>e.preventDefault()}>
<h1>봄</h1>
    청바지 <input type = "checkbox" value = "spring-jeans" onClick = {(e)=>setJeans(e.target.value)}/>
    <br/>
    맨투맨 <input type = "checkbox" value = "spring-pullover" onClick = {(e)=>setPullover(e.target.value)}/>
    <br/>
    셔츠/블라우스 <input type = "checkbox" value = "spring-shirt" onClick = {(e)=>setShirt(e.target.value)} />
    <br/>
    후드티 <input type = "checkbox" value = "spring-hoodie" onClick = {(e)=>setHoodie(e.target.value)}/>
    <br/>
    가디건 <input type = "checkbox" value = "spring-cardigan" onClick = {(e)=>setCardigan(e.target.value)}/>
    <br/>
    
    <Collect Spring = {del}/>
    </form>
}
export default SpringCloThing;