import styles from '../assets/css/SearchBar.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import {useContext , useState} from 'react'
import {DataContext} from '../context/DataContext'


function SearchBar() {
  
  const [searchCity , setSearchCity] = useState("");
  const {setTriggerFetch,  fetchWeatherData , weatherData} = useContext(DataContext)
  const key = "bc58a71572a93b130724223f2049370b";
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&units=metric&lang=pt_br&appid=${key}`
  fetchWeatherData(api);

  const handleSubmit = (e) => {
     e.preventDefault()
     setTriggerFetch(true)
  }

  return (
        <form onSubmit={handleSubmit} className={styles.searchBar}>
          <button>
             <i><FontAwesomeIcon icon={faMagnifyingGlass}/></i>
          </button>
          <div>
            <input 
              type="text" 
              placeholder="Digite o nome da cidade desejada"
              onChange={(e) => setSearchCity(e.target.value)}
              required
            />
          </div>
        </form>
  )
}

export default SearchBar