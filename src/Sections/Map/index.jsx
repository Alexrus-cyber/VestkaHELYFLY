import styles from './Map.module.css'
import woman from '../../assets/EllipseWoman.png'
import map from '../../assets/map.png'
import {MapMessage} from "./Components/MapMessage";
import {mapMessage} from "../../Contstants";

export const Map = () => {
    return (
        <section className={styles.map}>
            <img className={styles.img} src={map} alt={"map"}/>
            <div className={styles.width1140px}>
                <div className={styles.border}>
                    <div className={styles.paddingLeft30}>
                        {mapMessage.map(m => <MapMessage key={m.id} title={m.title} number={m.id} text={m.text}/>)}
                        <div className={styles.container}>
                            <img src={woman} alt="woman" className={styles.number}/>
                            <div className={styles.text}>
                                <p className={styles.name}>Мария Иванова</p>
                                <p className={styles.job}>Фотограф</p>
                                <p className={styles.link}>Показать больше информации</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}