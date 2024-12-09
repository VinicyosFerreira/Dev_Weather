import styles from '../assets/css/About.module.css'

function AboutCompontent() {
  return (
    <section className={styles.about}>
        <p>
             Dev Weather é uma aplicação para consultas á previsão do tempo em diferentes
             locais do mundo, utilizando a API do OpenWeatherMap.
        </p>
        <p>
             O objetivo desenvolver uma aplicação web que seja simples e intuitiva para
             as consultas do tempo. Também em demonstrar conhecimentos em React.js, 
             o projeto inclui:
        </p>
        <ul>
            <li>Consulta a API de previsão do tempo</li>
            <li>Context API para gerenciamento de estados</li>
            <li>Hooks como useState e useEffect</li>
            <li>Sistema simples de navegação com React Router DOM</li>
        </ul>
    </section>
  )
}

export default AboutCompontent