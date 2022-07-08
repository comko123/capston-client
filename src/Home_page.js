import { Link } from "react-router-dom";
import {useRef } from "react";

function Home_page (){
  const input_id=useRef();
    const input_pw=useRef();
   function Login_Function()
   { const data = {
    userId:input_id.current.value,
    password:input_pw.current.value
  }
     fetch(`/login`, {
      method : "post", 
      body : JSON.stringify(data),
      headers : {"Content-Type" : "application/json"}
      }).then((response)=> 
     response.json()
       ).then(json=>{
         if(json.status==="Y"){
           sessionStorage.setItem("login_information",JSON.stringify(json));
            alert("로그인 성공");
            window.history.back()
           }
          else if(json.status ===500){alert("로그인 실패"); }
         }); 
}
return (<div>
    <h1> tlttle </h1>

            <form onSubmit={(e)=>e.preventDefault()}>
            <input className="ID" type="text" placeholder="ID" ref={input_id} /><br />
            <input className="PW"type="password" placeholder="PASSWORD" ref={input_pw}/>
            <button className ="in" onClick={Login_Function}>LOGIN</button><br/><br/>
            </form>  
            <Link to={'/weather_coder/Id_find'}>아이디</Link> 찾기
        
</div>);
}
export default Home_page;