//import {ChangeToUserData} from "./Userdata";
import { Link } from "react-router-dom";
function Information (){
    const dataValue = JSON.parse(sessionStorage.getItem("login_information"))
    
    return (<>
    <h1>내정보 수정</h1> 
    <h3>Id : {dataValue.userId}</h3>
    <h3>NickName : {dataValue.nickname}</h3>
    <h3>Email : {dataValue.email}</h3>
    <Link to = '/'> 홈페이지 </Link>
    </>
    )

    
}
export default Information;
{/*<ChangeToUserData.Consumer>
    {(H)=><>
    <h1>내정보 수정</h1> 
    <h1>User Information</h1>
    <h3>Id : {H.Id}</h3>
    <h3>Email : {H.Email}</h3>
    <h3>NickName : {H.Nickname}</h3>
    <Link to = '/'> 홈페이지 </Link>
    </>}
    </ChangeToUserData.Consumer>*/}