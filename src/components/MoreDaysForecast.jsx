import { useState , useEffect } from "react"
import { UseFetchWeatherData } from "../hooks/UseFetch";
import styles from '../assets/css/Weather.module.css'

function MoreDaysForecast() {

 // a data vem em timestamp(unix time)
 // Multiplica por 1000

const city = "curitiba";
const key = `bc58a71572a93b130724223f2049370b`;
const api = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=20&lang=pt_br&units=metric&appid=${key}`;
const {data} = UseFetchWeatherData(api);

if(!data) {
    return;
}

  return (
    <div>
      {data.list.map((datinha) => {
        return <p>{datinha.dt_txt}</p>
      })}
    </div>
  )


}

export default MoreDaysForecast