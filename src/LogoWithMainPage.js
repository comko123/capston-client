import { Link } from "react-router-dom"
import { useState,useEffect } from "react";
const LogoWithMainPage =()=>{
    const [logo,setLogo] = useState(true)

    const input = () =>{
        if(sessionStorage.getItem("logo") === null){
            setTimeout(()=>{setLogo(false)},3000)
            if(logo){sessionStorage.setItem("logo","checked");}
        }
        else{setLogo(false)}
    }
    useEffect(()=>{input()},[])
    return(
            <>
            {
            (sessionStorage.getItem("logo") === null)?
            <><h1>weather coder</h1></>
            :
            <>
            <span>weather coder logo</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span><Link to = {`/weather_coder/my_page`}>마이 페이지</Link></span>
            </>
            }        
            </>
        )

}
export default LogoWithMainPage;