import "./WeatherComponents.moudule.css"
import { useState } from "react"
import TodayWeather from "./TodayWeather"
const dateAraea = new Date()
export default function WeatherComponents() {
    const [location,setLocation] = useState({latitude:0,longitude:0})
    const [date, setDate] =  useState({})
    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(({coords:{longitude,latitude}}) => {
                setLocation({longitude,latitude})
            }, (error) => {
                console.error(error)
            }, { enableHighAccuracy: false, maximumAge: 0, timeout: Infinity })
        } else { alert('GPS를 지원하지 않습니다') }
    }
    getLocation()
    return (<div className={"WeatherComponents_container"}>
        <div className={"WeatherComponents_date"}>
            {dateAraea.getFullYear() + "-" + (dateAraea.getMonth() + 1) + "-" + dateAraea.getDate()}</div>
        <div className={"WeatherComponents_location"}>
            {!!date && date.name + " , " + date.sys?.country}</div>
        <TodayWeather latitude={location.latitude} 
        longitude={location.longitude} 
        setDate={setDate} />
        </div>)
}