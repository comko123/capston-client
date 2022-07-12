import {useRef} from 'react';

export default function Sign_up (){
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
return(<>
  <h1>회원가입</h1>
  <form onSubmit={e=>e.preventDefault()}>
      <input type="tetx" placeholder="닉네임" ref={input_nm}/> 
      <br /> <br />
      <input type="tetx" placeholder="ID" ref={input_id} /> 
      <br /> <br />
      <input type="tetx" placeholder="E-MAIL" ref={input_em} />
      <br /> <br />
      <input type="password" placeholder="비밀번호" ref={input_pw}/> 
      <br /> <br />
      <input type="password" placeholder="비밀번호 확인" />
      <br /> <br />
      <input type="button" value="가입"onClick={Loation}/>   
      </form>
      <input type="button" value="홈페이지"onClick={()=>{window.location.href = '/'}}/>
      <br /> <br />

      <div>
      <h3>성별</h3>
      남자<input type = "checkbox" value = "man"/> 
      <br/>
      여자<input type = "checkbox" value = "woman"/>
      </div>
      <div>
        <h3>연령대</h3>
        10 ~ 19세 <input type = "checkbox" value = "age10over"/>
        <br/>
        20 ~ 29세 <input type = "checkbox" value = "age20over"/>
        <br/>
        30 ~ 39세 <input type = "checkbox" value = "age30over"/>
        <br/>
        40 ~ 49세 <input type = "checkbox" value = "age40over"/>
        <br/>
        50세 이상<input type = "checkbox" value = "age50over"/>
        </div>
      <div>
      <h3>신장</h3>
        156 ~ 160cm <input type = "checkbox" value = "height155over"/>
        <br/>
        160 ~ 165cm <input type = "checkbox" value = "height160over"/>
        <br/>
        165 ~ 170cm <input type = "checkbox" value = "height165over"/>
        <br/>
        170 ~ 175cm <input type = "checkbox" value = "height170over"/>
        <br/>
        175cm 이상<input type = "checkbox" value = "height175over"/>
      </div>
      <div>
      <h3>체중</h3>
        45 ~ 55kg <input type = "checkbox" value = "weight45over"/>
        <br/>
        56 ~ 65kg <input type = "checkbox" value = "weight56over"/>
        <br/>
        66 ~ 75kg <input type = "checkbox" value = "weight66over"/>
        <br/>
        76 ~ 85kg <input type = "checkbox" value = "weight76over"/>
        <br/>
        85kg 이상<input type = "checkbox" value = "weight85over"/>

      </div>

  </>);
}

