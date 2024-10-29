import styles from '../assets/css/Weather.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faDroplet} from '@fortawesome/free-solid-svg-icons'
import { faWind } from '@fortawesome/free-solid-svg-icons'
import { faTemperatureQuarter } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { DataContext } from '../context/DataContext'
import CityNotFound from './CityNotFound'
import InitialWeather from './InitialWeather'

function Weather() {

   const {data} = useContext(DataContext);
  
    if (!data) {
       return <InitialWeather/>
    } 

    if(data.message === "city not found") {
        return <CityNotFound/>
    }

 
  const iconDescription = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
  const descriptionWeather = data.weather[0].description;
  
  return (
       <div className={styles.weatherData}>
            <h2>{data.name}</h2>
            <section className={styles.weatherDescription}>
                  <img src={iconDescription} alt="description-icon"/>
                  <div>
                    <i>
                      <FontAwesomeIcon icon={faTemperatureQuarter} />
                    </i>
                    <span>{data.main.temp.toFixed(1)}&deg;C</span>
                    <p>{descriptionWeather[0].toUpperCase() + descriptionWeather.substring(1)}</p>
                  </div>
                </section>
            
                <div className={styles.humidity}>
                  <i><FontAwesomeIcon icon={faDroplet}/></i> 
                  <span>{data.main.humidity}%</span>
                </div>

                <div className={styles.wind}>
                  <i><FontAwesomeIcon icon={faWind}/></i>
                  <span>{(data.wind.speed* 3.6).toFixed(2)} Km/h</span>
                </div>

              <button className={styles.button}>Mais dias</button>
        </div>
  )
  
}

export default Weather