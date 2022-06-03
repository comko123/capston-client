import {useRef} from 'react';

function Sign_up (){
  const input_id=useRef();
  const input_pw=useRef();
  const input_em=useRef();
  const input_nm=useRef();
  const current_date = new Date()
  const join_month = current_date.getMonth()+1
  function Loation(){
  const able =
  { userId:input_id.current.value,
    password:input_pw.current.value,
    email:input_em.current.value,
    nickname:input_nm.current.value,
    status:"Y",category:120,dropDate:0,id:null,
    regDate: JSON.stringify(
    current_date.getFullYear()+"년 "
    +join_month+"월 "
    +current_date.getDate()+"일 "
    +current_date.getHours()+"시 "
    +current_date.getMinutes()+"분")
    ,category:0,dropDate:0,id:null
  }
   fetch(`/join`, {
     method : "post",
     body : JSON.stringify(able),
     headers : {"Content-Type" : "application/json"},
   }).then(response=>{
   if(response.ok === true){ 
     alert("Completed for Sign Up :) ") 
     window.location.href = '/'}
     else(alert("Fail to Sign Up :("))
  }
   ); }
return(<div>
  <h1>회원가입</h1>
      <input type="tetx" placeholder="NICKNAME" ref={input_nm}/> 
      <br /> <br />
      <input type="tetx" placeholder="ID" ref={input_id} /> 
      <br /> <br />
      <input type="password" placeholder="PASSWORE" ref={input_pw}/> 
      <br /> <br />
      <input type="tetx" placeholder="E-MAIL" ref={input_em} />
      <br /> <br />
      <input type="button" value="가입"onClick={Loation}/>   
      <input type="button" value="홈페이지"onClick={()=>{window.location.href = '/'}}/>
  </div>);
}

export default Sign_up;