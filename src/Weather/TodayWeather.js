/*eslint-disable */
import NowWeather from "./NowWeather"
import WeatherDisplay from "./WeatherDisplay"
import WeatherAlgorithm from "./WeatherAlgorithm"
import React, { useEffect, useState } from "react"
import "./TodayWeather.moudule.css"
import { inCloser } from "../api/inClosing"

const temp = (...rest) => {
    const dateValue = new Date()
    const array = rest[0].map((R) => {
        const value = new Date(R.dt * 1000);
        return dateValue.getDate() !== value.getDate() ? null : R.temp
    })
    const data = array.filter(E => E !== null)
    const hotdata = Math.max.apply(null, data)
    const colddata = Math.min.apply(null, data)
    rest[1](hotdata); rest[2](colddata)
}

const rain = (...rest) => {
    const dateValue = new Date()
    const rainning = rest[0].map((R) => {
        const value = new Date(R.dt * 1000)
        return dateValue.getDate() !== value.getDate() ? null : R.rain ?? null
    })
    const rainData = rainning.filter(E => E !== null);
    (rainData.length !== 0) ? rest[1](true) : rest[1](false)
}

const TodayWeather = ({ latitude, longitude, setDate }) => {
    const [[rainData, setRainData], [lowTemp, setLowTemp], [highTemp, setHighTemp]] = [useState(false), useState(0), useState(0)]
    const { isLoading, data } = inCloser.useGetWheatherQuery({ latitude, longitude, state: "onecall" })
    useEffect(() => {
        if (data?.hourly?.length) {
            temp(data?.hourly, setHighTemp, setLowTemp)
            rain(data?.hourly, setRainData)
        }
    }, [data?.hourly])
    return (<>{isLoading ? null :
        <div className={"TodayWeather_container"}>
            <NowWeather latitude={latitude} longitude={longitude} setDate={setDate} />
            {data?.hourly?.map(({ dt, humidity, temp, weather }) =>
                <WeatherDisplay key={dt} dt={dt} humidity={humidity} temp={temp} weather={weather} />)}
            <WeatherAlgorithm Htemp={Math.round(highTemp)} Mtemp={Math.round(lowTemp)} rain={rainData} />
            </div>}</>)

}
export default React.memo(TodayWeather)