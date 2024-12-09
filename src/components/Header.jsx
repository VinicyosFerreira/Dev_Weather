import styles from '../assets/css/Header.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSun} from '@fortawesome/free-solid-svg-icons'
import {faCloud} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
 
function Header() {

  return (
    <header className={styles.header}>
        <section className={styles.title}>
            <section className={styles.icons}>
              <i>
                <FontAwesomeIcon icon={faSun}/>
              </i>
              <i>
                <FontAwesomeIcon icon={faCloud}/>
              </i>
            </section>
           <h1>Dev Weather</h1>
        </section>
       
        <nav>
            <Link to="/">Home</Link>|
            <Link to="/about">Sobre</Link>
        </nav>
    </header>
  )
}

export default Header