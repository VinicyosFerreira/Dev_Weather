import styles from '../assets/css/SearchBar.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { useState , useContext} from 'react'
import {DataContext} from '../context/DataContext'

function SearchBar() {

  const [searchCity , setSearchCity] = useState("");
  const key = `bc58a71572a93b130724223f2049370b`;
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&lang=pt_br&units=metric&appid=${key}`
  const {setTriggerFetch , fetchData , data} = useContext(DataContext)
  fetchData(api);

  const searchData = () => {
     setTriggerFetch(true);  
  }

  return (
    <section className={styles.searchBar}>
        <i onClick={searchData}><FontAwesomeIcon icon={faMagnifyingGlass}/></i>
        <input type="text" 
         placeholder="Digite o nome da cidade desejada"
         onChange={(e) => setSearchCity(e.target.value)}
         required
        />
    </section>
  )
}

export default SearchBar