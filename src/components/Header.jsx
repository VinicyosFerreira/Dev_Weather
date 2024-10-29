import styles from '../assets/css/Header.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSun} from '@fortawesome/free-solid-svg-icons'
import {faCloud} from '@fortawesome/free-solid-svg-icons'
 
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
            <a>Home</a>|
            <a>Sobre</a>
        </nav>
    </header>
  )
}

export default Header