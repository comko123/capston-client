import axios from "axios";
import { useState,useRef} from "react";
import Tablet from "../Reactive type/NewReactiveType";
export default function IdFind(){
let [IdFind_state,setIdFind_State]=useState(true);
const [id_value,setId_value] = useState("");
const find_id_email=useRef();
const id_find = async() => {
    const data = find_id_email.current.value
    setId_value((await axios.post(`/login/${data}`,{email:data})
    .catch(()=>alert("이메일을 잘못입력하셨거나 가입된이메일이 아닙니다."))
    ).data.userId)
    setIdFind_State(false) 
    }
    return(
    <>
    {IdFind_state?
    <>
    <Tablet>
    <h1>ID 찾기</h1>
    <input type="text" placeholder="EMAIL" ref={find_id_email}/>
    <br/> <br/>
    <button onClick={id_find}>다음</button>
    </Tablet>
    </>
    :
    <>
    <h1>가입하신 아이디는 "{id_value}" 입니다.</h1>
    <h1>*주의*</h1> <h3>뒤로가기나 새로고침시 초기화면으로 돌아 갑니다.</h3>
    </>}
    
    </>
    );
}