const ChangeSummer = () => {

    return <>
    <form onSubmit = {e=>e.preventDefault()}>
<h3>여름</h3> <input type = "button" value = "제출"/><br/>
반바지 <input type = "checkbox" value = "summer-shorts"/>
<br/>
반팔티셔츠 <input type = "checkbox" value = "summer-shortsleeve"/>
<br/>
셔츠/블라우스 <input type = "checkbox" value = "summer-shirt"/>
<br/>
민소매티셔츠 <input type = "checkbox" value = "summer-Sleeveless"/>
<br/>
청바지 <input type = "checkbox" value = "summer-jeans"/>
</form>
    </>
}
export default ChangeSummer;