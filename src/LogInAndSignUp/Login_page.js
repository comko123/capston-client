import React,{useRef } from "react";
import { Link } from "react-router-dom";
const test = async(id,pw) => {
   const data = {userId:id,password:pw}
 try{
    const result = await(await (fetch(`/login`, {
     method : "post", 
     body : JSON.stringify(data),
     headers : {"Content-Type" : "application/json"}
     }))).json()
        if(result.status==="Y"){
          sessionStorage.setItem("login_information",JSON.stringify(result));
           alert("로그인 성공");
           window.history.back()
          }
        }
        catch(e){console.log(e)}    
}
const Login_page = () => {
  const input_id=useRef();
    const input_pw=useRef();
return (<div>
    <h1> Log-in </h1>

            <form onSubmit={e=>e.preventDefault()}>
            <input className="ID" type="text" placeholder="아이디를 입력하세요." ref={input_id} /><br />
            <input className="PW"type="password" placeholder="비밀번호를 입력하세요." ref={input_pw}/>
            <button className ="in" onClick={()=>
              test(input_id.current.value,input_pw.current.value)}>LOGIN</button><br/><br/>
            </form>  
            <Link to={'/weather_coder/Id_find'}>아이디</Link> 찾기
        
</div>);
}
export default Login_page;