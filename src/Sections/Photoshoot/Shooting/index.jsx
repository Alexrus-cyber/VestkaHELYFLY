import styles from "../Photoshoot.module.css";
import helicopter from "../../../assets/Helicopter.png";
import {menuShooting} from "../../../Contstants";

export const Shooting = () => {
    return (
        <div className={styles.flex}>
            <div className={styles.wrapperShooting}>
                <p className={styles.mainTitle}>Фотосессия <br/>в вертолете</p>
                <p className={styles.text}>Полет на вертолете это прекрасная возможность получить новые ощущения! А
                    наш замечательный фотограф запечатлит лучшие моменты</p>
                <ul className={styles.border}>
                    {menuShooting.map(m =>  <li key={m.id} className={styles.li}><img src={m.img} alt={"clock"}/>{m.text}</li>)}
                </ul>
            </div>
            <img className={styles.imgShoot} src={helicopter}
                 alt="helicopter"/>
        </div>
    )
}