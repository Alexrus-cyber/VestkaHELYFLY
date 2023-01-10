import styles from './css/Photoshoot.module.css'
import helicopter from '../assets/Helicopter.png'
import clock from '../assets/clock.svg'
export const Photoshoot = () => {
    return (
        <section className={styles.photoShoot}>
            <div className={styles.container}>
                <div style={{width: 569, color: "#37373F"}}>
                    <p className={styles.mainTitle}>Фотосессия <p>в вертолете</p></p>
                    <p className={styles.text}>Полет на вертолете это прекрасная возможность получить новые ощущения! А наш замечательный фотограф запечатлит лучшие моменты</p>
                    <ul className={styles.border}>
                        <li className={styles.li}><img src={clock} alt={"gfdasgdg"}/>3 часа съемки</li>
                        <li className={styles.li}>Более 50 фотографий</li>
                        <li className={styles.li}>Москва</li>
                        <li className={styles.li}>Готовы ответить на любые вопросы</li>
                    </ul>
                </div>
                <img style={{width: "554px", height: "374px", minWidth: "100px", minHeight: "100px"}} src={helicopter} alt="helicopter"/>
            </div>
        </section>
    )
}