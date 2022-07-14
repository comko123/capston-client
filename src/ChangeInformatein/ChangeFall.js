const ChangeFall = () => {

    return <>
    <form onSubmit = {e=>e.preventDefault()}>
<h3>가을</h3> <input type = "button" value = "제출"/><br/>
청바지 <input type = "checkbox" value = "fall-jeans"/>
<br/>
맨투맨 <input type = "checkbox" value = "fall-pullover"/>
<br/>
셔츠/블라우스 <input type = "checkbox" value = "fall-shirt"/>
<br/>
후드티 <input type = "checkbox" value = "fall-hoodie"/>
<br/>
니트/스웨터 <input type = "checkbox" value = "fall-Cardigan"/>
</form>
    </>
}
export default ChangeFall;