import React,{ useEffect } from "react"
import "./NowWeather.moudule.css"
import weather_cloudy from "../img/weather_cloudy.png"
import weather_rain_small from "../img/weather_rain_small.png"
import weather_humidity_small from "../img/weather_humidity_small.png"
import { inCloser } from "../api/inClosing"

const NowWeather = ({latitude,longitude,setDate}) => {
const {isLoading,data} = inCloser.useGetWheatherQuery({latitude,longitude,state:"weather"})
useEffect(()=>{setDate(data)},[data,setDate])
return(<>{isLoading?null:<div className={"NowWeather_card"}>
<h1 className={"NowWeather_card_top"}>현재</h1>
<div className={"NowWeather_card_maincontainer"}><div className={"NowWeather_card_mainleft"}>
<h1 className={"NowWeather_card_title NowWeather_card_title_top"}>온도</h1>
<div className={"NowWeather_card_degree"}>{!isNaN(Math.round(data.main.temp)) && Math.round(data.main.temp)}</div></div>
<div className={"NowWeather_card_maincenter"}></div>
{data?.weather?.map((id,main)=>{return(<div key={id} className={"NowWeather_card_mainright"}>
<h1 className={"NowWeather_card_title NowWeather_card_title_top"}>{main}</h1>
<img src={weather_cloudy} width={'51px'} height={'44px'} alt={main}/></div>)})}</div><div className={"NowWeather_card_bottom"}>
<img className={"NowWeather_card_thumnail"} src={weather_rain_small} width={'16px'} height={'15.02px'}alt=""/>
<div className={"NowWeather_card_title"}>강수</div><div className={"NowWeather_card_title_value"}>{"10%"}</div></div>
<div className={"NowWeather_card_bottom"}>
<img className={"NowWeather_card_thumnail"} src={weather_humidity_small} width={'12px'} height={'15.81px'}alt=""/>
<div className={"NowWeather_card_title"}>습도</div><div className={"NowWeather_card_title_value"}>{data.main.humidity+"%"}</div>
</div></div>}</>)}
export default React.memo(NowWeather)
