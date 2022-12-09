import axios from "axios"
import React,{ useEffect, useState} from "react"
import "./NowWeather.moudule.css"
import weather_cloudy from "../img/weather_cloudy.png"
import weather_rain_small from "../img/weather_rain_small.png"
import weather_humidity_small from "../img/weather_humidity_small.png"

// eslint-disable-next-line react/prop-types
const NowWeather = ({latitude,longitude,setDate}) => {
   const [weather,setWeather] = useState({})
   const [state,setState] = useState(true)
    useEffect(()=>{ try{(async() =>{
    const nowWeatherData = (await axios(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_WHEATHER_API_KEY}&units=metric`)).data
    setWeather(nowWeatherData)
    setDate(nowWeatherData)
    setState(false)})()}
    catch(e){console.log(e)}},[]) 
  return(<>{state?<></>:
        <div className={"NowWeather_card"}>
        <h1 className={"NowWeather_card_top"}>현재</h1>
        <div className={"NowWeather_card_maincontainer"}>
        <div className={"NowWeather_card_mainleft"}>
        <h1 className={"NowWeather_card_title NowWeather_card_title_top"}>온도</h1>
        <div className={"NowWeather_card_degree"}>{!isNaN(Math.round(weather.main.temp)) && Math.round(weather.main.temp)}</div></div>
        <div className={"NowWeather_card_maincenter"}></div>
        {weather.weather.map(P=>{return(
        <div key={P.id} className={"NowWeather_card_mainright"}>
        <h1 className={"NowWeather_card_title NowWeather_card_title_top"}>{P.main}</h1>
        <img src={weather_cloudy} width={'51px'} height={'44px'} alt={P.main}/></div>)})}</div>
        <div className={"NowWeather_card_bottom"}>
        <img className={"NowWeather_card_thumnail"} src={weather_rain_small} width={'16px'} height={'15.02px'}/>
        <div className={"NowWeather_card_title"}>강수</div><div className={"NowWeather_card_title_value"}>{"10%"}</div></div>
        <div className={"NowWeather_card_bottom"}>
        <img className={"NowWeather_card_thumnail"} src={weather_humidity_small} width={'12px'} height={'15.81px'}/>
        <div className={"NowWeather_card_title"}>습도</div><div className={"NowWeather_card_title_value"}>{weather.main.humidity+"%"}</div>
        </div></div>}</>)}
export default React.memo(NowWeather)
