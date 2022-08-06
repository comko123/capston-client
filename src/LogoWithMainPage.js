import { Link } from "react-router-dom"
import { useState,useEffect } from "react";
import MenuBar from "./Bar/MenuBar";
import WeatherComponents from "./Weather/WeatherComponents";
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
            <span><Link to = {`/weather_coder/My_page`}>마이 페이지</Link></span>
            <br/>
                    <WeatherComponents/> 
                <br/>
                <MenuBar/>
            </>
            }        
            </>
        )

}
export default LogoWithMainPage;