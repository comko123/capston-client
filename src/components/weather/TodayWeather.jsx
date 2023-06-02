/*eslint-disable */
import NowWeather from "./NowWeather"
import WeatherDisplay from "./WeatherDisplay"
import React, { useEffect } from "react"
import "./TodayWeather.moudule.css"
import { inCloser } from "api/inClosing"

const temp = (data) => {
    const dateValue = new Date()
    const todayWeather = data.filter(R => {
        const value = new Date(R.dt * 1000)
        return dateValue.getDate() === value.getDate()
    })
    const todayWeatherTemp = todayWeather.map(item=>item.temp)
    const todayRain = todayWeather.map(item=>item.rain)

    // const todayRain = data.filter(R => {
    //     const value = new Date(R.dt * 1000)
    //     return dateValue.getDate() !== value.getDate() ? null : R.rain ?? null
    // })
    // 위 코드와 비교 해봤을떄 어떤게 좋은방식인가??

    sessionStorage.setItem("wheatherInfo",JSON.stringify({
        Htemp:Math.max(...todayWeatherTemp),
        Mtemp:Math.min(...todayWeatherTemp),
        rain:todayRain.includes(true)
        // rain:todayRain.length?true:false
    }))
}

const TodayWeather = ({ latitude, longitude, setDate }) => {
    const { isLoading, data } = inCloser.useGetWheatherQuery({ latitude, longitude, state: "onecall" })
    useEffect(() => {
        if (data?.hourly?.length) {
           temp(data.hourly)
        }
    }, [data?.hourly])
    return (<>{isLoading ? null :
        <div className={"TodayWeather_container"}>
            <NowWeather latitude={latitude} longitude={longitude} setDate={setDate} />
            {data?.hourly?.map(({ dt, humidity, temp, weather }) =>
            <WeatherDisplay key={dt} dt={dt} humidity={humidity} temp={temp} weather={weather} />)}
        </div>}</>)

}
export default React.memo(TodayWeather)