import axios from "axios";
import React,{ useEffect, useState,useTransition, useDeferredValue } from "react";
const NowWeather = (props) => {
    const  {latitude,longitude} = props
    const [weatherTemp,setWeatherTemp]=useState({}) 
    const [realWeather,setRealWeather]=useState([])
   const [isPending,startTransition] = useTransition()
   const nowState = useDeferredValue(realWeather)
   const nowTemp = useDeferredValue(weatherTemp)
        useEffect(()=>{ try{startTransition( async() =>{
    const nowWeatherData = (await axios(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=f980d31253eb2b185606cca64544373f&units=metric`)).data
     setWeatherTemp(nowWeatherData.main);setRealWeather(nowWeatherData.weather);
    })}catch(e){console.log(e)}
},[])
return(
    <>
    <h1>현재</h1>
    <h1>습도 : {nowTemp.humidity}</h1>
    <h1>온도 : {Math.round(nowTemp.temp)}</h1>
    {nowState.map(P=>{
        return(
        <div key={P.id}>
        <h1>{P.main}</h1>
        </div>)
    })}
    </>
)
}
export default React.memo(NowWeather);