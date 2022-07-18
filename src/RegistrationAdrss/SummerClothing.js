import { useState } from "react";
import Collect from "./Collect";
const SummerCloThing = () => {
    const [shorts,setShorts]=useState(null)
    const [shortsleeve,setShortsleeve]=useState(null) 
    const [shirt,setShirt] =useState(null)
    const [sleeveless,setSleeveless]=useState(null)
    const [jeans,setJeans]=useState(null) 
    const del = [jeans,shorts,shirt,shortsleeve,sleeveless].filter(S=>S!==null)

return <form onSubmit = {e=>e.preventDefault()}>
    <h1>여름</h1>
반바지 <input type = "checkbox" value = "summer-shorts" onClick = {(e)=>setShorts(e.target.value)}/>
<br/>
반팔티셔츠 <input type = "checkbox" value = "summer-shortsleeve"onClick = {(e)=>setShortsleeve(e.target.value)}/>
<br/>
셔츠/블라우스 <input type = "checkbox" value = "summer-shirt"onClick = {(e)=>setShirt(e.target.value)}/>
<br/>
민소매티셔츠 <input type = "checkbox" value = "summer-sleeveless"onClick = {(e)=>setSleeveless(e.target.value)}/>
<br/>
청바지 <input type = "checkbox" value = "summer-jeans"onClick = {(e)=>setJeans(e.target.value)}/>
    <br/>
    <Collect Summer = {del}/>
    </form>
}
export default SummerCloThing;