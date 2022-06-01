import axios from "axios";
import { useState,useRef} from "react";
export default function IdFind(){
let [IdFind_state,setIdFind_State]=useState(true);
const [id_value,setId_value] = useState("");
const find_id_name=useRef();
const find_id_email=useRef();
const id_find = async() => {
   setId_value(await axios.post(`/login/${find_id_email.current.value}`,{
    name:find_id_name,email:find_id_email}))
    setIdFind_State(false) 
    console.log(
        await axios.post(`/login/${find_id_email.current.value}`,{
            name:find_id_name,email:find_id_email})
    )
}
    return(
    <>
    <h1>ID 찾기</h1>
    {IdFind_state?
    <>
    <input type="text" placeholder="NAME"ref={find_id_name}/>
    <br/> <br/>
    <input type="text" placeholder="EMAIL" ref={find_id_email}/>
    <br/> <br/>
    <button onClick={id_find}>다음</button>
    </>
    :
    <>
    <h1>가입하신 아이디는 {id_value} 입니다.</h1>
    <h1>*주의</h1> <h3>뒤로가기나 새로고침시 초기화면으로 돌아 갑니다.*</h3>
    </>}
    
    </>
    );
}