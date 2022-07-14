const ChangeStyle = () => {

    return <>
    <form onSubmit = {e=>e.preventDefault()}>
<h3>스타일</h3> <input type = "button" value = "제출"/><br/>
빈티지 <input type = "checkbox" value = "vintage"/>
<br/>
댄디 <input type = "checkbox" value = "dandy"/>
<br/>
캐주얼 <input type = "checkbox" value = "casual"/>
<br/>
놈코어 <input type = "checkbox" value = "normcore"/>
<br/>
스트릿 <input type = "checkbox" value = "street"/>
</form>
    </>
}
export default ChangeStyle;