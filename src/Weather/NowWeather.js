import axios from "axios";
import React,{ useEffect, useState } from "react";
const NowWeather = (props) => {
    const  {latitude,longitude} = props
    const [weatherTemp,setWeatherTemp]=useState({}) 
    const [realWeather,setRealWeather]=useState([])
   
        useEffect(()=>{const nowWeather = async() =>{
    const nowWeatherData = (await axios(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=f980d31253eb2b185606cca64544373f&units=metric`)).data
     setWeatherTemp(nowWeatherData.main);setRealWeather(nowWeatherData.weather);
    }
nowWeather()
},[])
return(
    <>
    <h1>현재</h1>
    <h1>습도 : {weatherTemp.humidity}</h1>
    <h1>온도 : {Math.round(weatherTemp.temp)}</h1>
    {realWeather.map(P=>{
        return(
        <div key={P.id}>
        <h1>{P.main}</h1>
        </div>)
    })}
    </>
)
}
export default React.memo(NowWeather);