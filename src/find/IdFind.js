import axios from "axios";
import { useState,useRef} from "react";
export default function IdFind(){
let [IdFind_state,setIdFind_State]=useState(true);
const [id_value,setId_value] = useState("");
const find_id_email=useRef();
const id_find = async() => {
      
    const data = find_id_email.current.value
    const middle = await axios.post(`/login/${data}`,{
        email:find_id_email.current.value})
       try{
            setId_value(middle.data.userId)
                setIdFind_State(false) 
                console.log(middle)
        }
        catch(e){
         if(e.response.status === 500 ){
             alert("이메일 형식이 맞지 않거나 가입된 이메일이 아닙니다.")
         }
        }
}
    return(
    <>
    {IdFind_state?
    <>
    <h1>ID 찾기</h1>
    <input type="text" placeholder="EMAIL" ref={find_id_email}/>
    <br/> <br/>
    <button onClick={id_find}>다음</button>
    </>
    :
    <>
    <h1>가입하신 아이디는 "{id_value}" 입니다.</h1>
    <h1>*주의*</h1> <h3>뒤로가기나 새로고침시 초기화면으로 돌아 갑니다.</h3>
    </>}
    
    </>
    );
}