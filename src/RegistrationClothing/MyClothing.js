import {infoUser,userClothingRegistration} from "../data"
const slash = "/"
const userSeasonStyle = (...rest) =>{
return(<>
<h3 style={{"margin":"0px"}}>{rest[0]}</h3>
{rest[1].map((clothing,index)=>{
return (<div key = {index}>{clothing}<input type ="checkbox" 
value = {rest[0]+slash+`${clothing}`} onClick ={e=>
  {if(e.target.checked===true){
   rest[2].push(e.target.value)  
  rest[2].filter((element,index)=>rest[2].indexOf(element)===index)}
    else{rest[2].splice(rest[2].indexOf(e.target.value),1)}
}}/> <br/></div>)})}</>)}
const MyClothing = () => {
  const userSave = Object.keys(userClothingRegistration) 
  const userIn = Object.keys(infoUser)
  return (
    <><h3>자신의옷 등록하기</h3>
<h5>마이페이지&gt;자신의옷 등록하기</h5>
<form onSubmit = {e=>e.preventDefault()}>
    {userIn.map((item,index)=>{return <div style ={{margin:"20px"}} key={index}>{
    userSeasonStyle(userIn[index],infoUser[item],userClothingRegistration[userSave[index]])}</div>})}
<input type="button" value = "click" onClick={()=>console.log(userClothingRegistration)}/> 
  </form>
    </>
  );
}

export default MyClothing;



