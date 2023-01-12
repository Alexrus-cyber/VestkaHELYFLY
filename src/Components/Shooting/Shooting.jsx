import styles from "../../Sections/Photoshoot/Photoshoot.module.css";
import clock from "../../assets/clock.svg";
import camera from "../../assets/camera.svg";
import Moscow from "../../assets/Moscow.svg";
import Message from "../../assets/Messages.svg";
import helicopter from "../../assets/Helicopter.png";

export const Shooting = () => {
    return (
        <div style={{display:"flex"}}>
            <div style={{width: 569, color: "#37373F",borderBottom:"0.5px solid #C7C7C7", height:440}}>
                <p className={styles.mainTitle}>Фотосессия <br/>в вертолете</p>
                <p className={styles.text}>Полет на вертолете это прекрасная возможность получить новые ощущения! А
                    наш замечательный фотограф запечатлит лучшие моменты</p>
                <ul className={styles.border}>
                    <li className={styles.li}><img src={clock} alt={"clock"}/>3 часа съемки</li>
                    <li className={styles.li}><img src={camera} alt={"clock"}/>Более 50 фотографий</li>
                    <li className={styles.li}><img src={Moscow} alt={"clock"}/>Москва</li>
                    <li className={styles.li}><img src={Message} alt={"clock"}/>Готовы ответить на любые вопросы</li>
                </ul>
            </div>
            <img style={{width: "554px", height: "374px", minWidth: "100px", minHeight: "100px"}} src={helicopter}
                 alt="helicopter"/>
        </div>
    )
}