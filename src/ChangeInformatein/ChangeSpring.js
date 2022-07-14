const ChangeSpring = () =>{

    return <>
        <form onSubmit = {e=>e.preventDefault()}>
<h3>봄</h3> <input type = "button" value = "제출" /><br/>
청바지 <input type = "checkbox" value = "spring-jeans"/>
<br/>
맨투맨 <input type = "checkbox" value = "spring-pullover"/>
<br/>
셔츠/블라우스 <input type = "checkbox" value = "spring-shirt"/>
<br/>
후드티 <input type = "checkbox" value = "spring-hoodie"/>
<br/>
가디건 <input type = "checkbox" value = "spring-Cardigan"/>
</form>
    </>
}
export default ChangeSpring;