const ChangePassWord = () => {

return <>
<form onSubmit = {e=>e.preventDefault()}>
<h3>비밀번호 변경</h3>
현재 비밀번호&nbsp;<input type="password" />
<br/><br/>
새로운 비밀번호<input type="password"/>
<br/><br/>
새로운 비밀번호 <input type="password"/><br/>
확인
<br/>
<input type = "button" value = "비밀번호 수정"/>
<br/>
</form>
</>
}
export default ChangePassWord;