import styles from '../assets/css/Weather.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faDroplet} from '@fortawesome/free-solid-svg-icons'
import { faWind } from '@fortawesome/free-solid-svg-icons'
import { faTemperatureQuarter } from '@fortawesome/free-solid-svg-icons'
import { useContext} from 'react'
import { DataContext } from '../context/DataContext'
import CityNotFound from './CityNotFound'

function Weather() {

   const {weatherData} = useContext(DataContext);

    if (!weatherData) {
       return 
    } 
  
    if(weatherData.message === "city not found") {
        return <CityNotFound/>
    }


   const iconDescription = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`
   const descriptionWeather = weatherData.weather[0].description;

  return (
       <div className={`${styles.weatherData}`}>
            <h2>{weatherData.name}</h2>
            <section className={styles.weatherDescription}>
                  <img src={iconDescription} alt="description-icon"/>
                  <div>
                    <i>
                      <FontAwesomeIcon icon={faTemperatureQuarter} />
                    </i>
                    <span>{weatherData.main.temp.toFixed(1)}&deg;C</span>
                    <p>{descriptionWeather[0].toUpperCase() + descriptionWeather.substring(1)}</p>
                  </div>
            </section>
            
                <div className={styles.humidity}>
                  <i><FontAwesomeIcon icon={faDroplet}/></i> 
                  <span>{weatherData.main.humidity}%</span>
                </div>

                <div className={styles.wind}>
                  <i><FontAwesomeIcon icon={faWind}/></i>
                  <span>{(weatherData.wind.speed* 3.6).toFixed(2)} Km/h</span>
                </div> 
        </div>
  )
  
}

export default Weather