import styles from './css/Map.module.css'
import woman from '../assets/EllipseWoman.png'
export const Map = () => {
    return (
        <section className={styles.map}>
            <div style={{width: 1140}}>
                <div className={styles.border}>
                    <div style={{paddingLeft: 30}}>
                        <div className={styles.container}>
                            <div className={styles.number}>1</div>
                            <div className={styles.text}>
                                <p className={styles.question}>Где встречаемся?</p>
                                <p>Москва</p>
                            </div>
                        </div>
                        <div className={styles.container}>
                            <div className={styles.number}>2</div>
                            <div className={styles.text}>
                                <p className={styles.question}>Время съемки</p>
                                <p>3 часа</p>
                            </div>
                        </div>
                        <div className={styles.container}>
                            <div className={styles.number}>3</div>
                            <div className={styles.text}>
                                <p className={styles.question}>Мест осталось:</p>
                                <p>2 места</p>
                            </div>
                        </div>
                        <div className={styles.container}>
                            <img src={woman} alt="woman" className={styles.number}/>
                            <div className={styles.text}>
                                <p style={{marginBottom: 5, fontSize: 18,}}>Мария Иванова</p>
                                <p style={{marginBottom: 5, fontSize: 16,}}>Фотограф</p>
                                <p style={{color:"#5286EC", fontSize: 14, }}>Показать больше информации</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}