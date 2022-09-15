import axios from "axios"
import NowWeather from "./NowWeather"
import WeatherDisplay from "./WeatherDisplay"
import WeatherAlgorithm from "./WeatherAlgorithm"
import React,{useEffect,useState,useMemo,useTransition} from "react"

const temp = (...rest) => {
    const dateValue = new Date()
    const  array = rest[0].map((R)=>{
const value = new Date(R.dt*1000); 
    return dateValue.getDate()!==value.getDate()?
  null:R.temp})
  const data = array.filter(E=>!!E)
  const hotdata = Math.max.apply(null,data)
  const colddata = Math.min.apply(null,data)
  rest[1](hotdata)
  rest[2](colddata)
  rest[3](false);
(colddata<=12||hotdata>=23)?rest[4](true):rest[4](false)}

const rain = (...rest) => {
    const dateValue = new Date()
    const rainning =  
    rest[0].map((R)=>{ 
   const value = new Date(R.dt*1000)
      return dateValue.getDate()!==value.getDate()?
      null:R.rain??null })
      const rainData = rainning.filter(E=>!!E);
      (!!rainData.length)? rest[1](true): rest[1](false) 
}

const TodayWeather = ({latitude,longitude}) =>{
    const [weatherObject,setWeatherObject] = useState([])
    const [rainData,setRainData] = useState(false)
    const [lowTemp,setLowTemp] = useState(0) 
    const [highTemp,setHighTemp] = useState(0) 
    const [pageLoading,setPageLoading] = useState(true)
    const [outerClothing,setOuterClothing] = useState(false)
    const [isPending,startTransition] = useTransition()

     useMemo(()=>{
        try{
            startTransition(
             async() => {if(!!latitude&&!!longitude){
                setWeatherObject(
                await(
                    await axios(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=87c2a0db9525243baf59b3218bb1b0de&units=metric`)
            ).data.hourly)  
          }}
            )}catch(e){console.log(e)}
    },[latitude,longitude])

    useEffect(()=>{
        if(!!weatherObject.length){
            temp(weatherObject,setHighTemp,setLowTemp,setPageLoading,setOuterClothing)
            rain(weatherObject,setRainData)}},[weatherObject]) 

    return (<>{isPending?
        <>
        <h1>loading.....</h1>
        </>
        :pageLoading?
        <>
        <h1>오늘의 날씨</h1> 
        </>:
        <> 
        <h1>오늘의 날씨</h1>
        <NowWeather latitude={latitude} longitude = {longitude}/>
            
            {weatherObject.map((item)=>{
            return<WeatherDisplay key={item.dt} {...item} />})}
           <WeatherAlgorithm Htemp = {highTemp} Mtemp={lowTemp} outp = {outerClothing} rain={rainData}/>
        </>}  
        </>)}
        export default React.memo(TodayWeather);