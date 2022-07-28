import React,{ useRef,useState} from 'react';
const userObject = {id:[],email:[],password:[],password2:[],nickname:[],gender:[],age:[],height:[],weight:[]}
const current_date = new Date()
const join_month = current_date.getMonth()+1

const signUpFunction = async() => {
  const userData =
  { userId:userObject.id[0],
    password:userObject.password[0],
    passoerdConfirm:userObject.password2[0],
    email:userObject.email[0],
    nickname:userObject.nickname[0],
    gender:userObject.gender[0],
    age:userObject.age[0],
    height:userObject.height[0],
    weight:userObject.weight[0],
    status:"Y",category:120,dropDate:0,id:null,
    regDate: 
    current_date.getFullYear()+"년 "
    +join_month+"월 "
    +current_date.getDate()+"일 "
    +current_date.getHours()+"시 "
    +current_date.getMinutes()+"분"
    ,category:0,dropDate:0,id:null
  }
  try{const sign = await fetch(`/join`, {
    method : "post",
    body : JSON.stringify(userData),
    headers : {"Content-Type" : "application/json"},
  })
  if(sign.ok){alert("Completed for Sign Up :) ")
  window.location.href = '/'
}}
  catch(e){console.log(e); alert("Fail To Sign Up :(")}
}

const userInFormationRadio = (imformation,item,array) => {
return(<><h3 style = {{"marginBottom":"0px"}}>{item}</h3>
{imformation.map((childInformation,index)=>{
return (<>{childInformation}<input key={index} type ="radio"name={item} value = {item+":"+`${childInformation}`} onClick ={(e)=>
  {if(e.target.checked===true){
   array.push(e.target.value)  
  const inputStyle =array.filter((element,index)=>array.indexOf(element)===index)}
    else{const deleteStyle =array.splice(array.indexOf(e.target.value),1)}
}}/> <br/></>)})}</>)
}
const userInFormationInput = (type,plho,ref,array) => {
  return(
  <><input type ={type} placeholder={plho} ref={ref} onChange = {()=>{
  array.push(ref.current.value)
  array.splice(0,array.length-1)
  }}/>
<br/> <br/></>
  )}
export default function Sign_Up (){
  const [age] =useState(["10 ~ 19세","20 ~ 29세","30 ~ 39세","40 ~ 49세","50세 이상"])
  const [gender] =useState(["남자","여자"])
  const [height] =useState(["156 ~ 160cm","160 ~ 165cm","165 ~ 170cm","170 ~ 175cm","175이상"])
  const [weight] =useState(["45 ~ 55kg","56 ~ 65kg","66 ~ 75kg","76 ~ 85kg","85kg 이상"])
  const [input_id,input_pw,input_pw2,input_em,input_nm] = [useRef(),useRef(),useRef(),useRef(),useRef()]
return(<>
  <h1>회원가입</h1>
  <form onSubmit={e=>e.preventDefault()}>
      {userInFormationInput("text","닉네임",input_nm,userObject.nickname)}
      {userInFormationInput("text","ID",input_id,userObject.id)}
      {userInFormationInput("text","E-mail",input_em,userObject.email)}
      {userInFormationInput("password","비밀번호",input_pw,userObject.password)}
      {userInFormationInput("password","비밀번호 확인",input_pw2,userObject.password2)}
      {userInFormationRadio(gender,"성별",userObject.gender)}
      {userInFormationRadio(age,"연령",userObject.age)}
      {userInFormationRadio(height,"신장",userObject.height)}
      {userInFormationRadio(weight,"체중",userObject.weight)}
      <br/>
      <input type="button" value="가입"onClick={()=>signUpFunction}/>   
      <br/>
      <input type="button" value="홈페이지"onClick={()=>{window.location.href = '/'}}/>
      </form>

  </>);
}