import {createContext} from "react";
export const InputUserData = {}
export const ChangeToUserData = createContext();
export default function Userdata(props){
    const DataStruct = ()=> {
        
        return(<div>
            <h3> 날씨정보로 추천받기 </h3>
            <h3> 내 정보로 추천받기 </h3>
            <h3> 내 옷들로 추천받기 </h3>
            <h3> 게시판 </h3>
            </div>)
    } 
   
  
return(<ChangeToUserData.Provider value = { InputUserData}>{props.children}</ChangeToUserData.Provider>);}
