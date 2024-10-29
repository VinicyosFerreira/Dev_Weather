import styles from '../assets/css/InitialWeather.module.css'

function InitialWeather() {
  return (
    <section className={styles.initialWeather}>
       <h2 className={styles.animationFadeIn}>Olá, seja bem vindo </h2>
       <h2 className={styles.animationFadeIn}>ao Dev Weather</h2>
    </section>
  )
}

export default InitialWeather