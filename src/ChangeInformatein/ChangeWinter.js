const ChangeWinter = () => {

    return<>
    <form onSubmit = {e=>e.preventDefault()}>
<h3>겨울</h3> <input type = "button" value = "제출"/><br/>
청바지 <input type = "checkbox" value = "winter-jeans"/>
<br/>
코트 <input type = "checkbox" value = "winter-coat"/>
<br/>
패딩 <input type = "checkbox" value = "winter-padding"/>
<br/>
후드티 <input type = "checkbox" value = "winter-hoodie"/>
<br/>
니트/스웨터 <input type = "checkbox" value = "winter-knit"/>
</form>
    </>
}
export default ChangeWinter;