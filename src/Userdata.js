import {createContext} from "react";
export const ChangeToUserData = createContext();
export default function Userdata(props){
    const DataStruct = ()=> {
        
        return(<>
            </>)
    } 
   
  
return(<ChangeToUserData.Provider value = {DataStruct}>{props.children}</ChangeToUserData.Provider>);}
