import styles from './TimeVideo.module.css'
import cup from "../../assets/Cup.svg";
import calendar from "../../assets/Calendar.svg";
import {FiveStars} from "../../Components/FiveStars";
import {PlaceTime} from "./Components/PlaceTime/PlaceTime";
import {placeTime} from "../../Contstants";

export const TimeShoot = () => {
    return (
        <section className={styles.timeShoot}>
            <div className={styles.container}>
                <p className={styles.title}>Доступная съемка<br/> в
                    ближайшее время:</p>
                <div className={styles.border}>
                    <div className={styles.header}>
                        <p>Пятница, 14 сентября</p> <img src={calendar} alt="calend"/>
                    </div>
                    {placeTime.map(p => <PlaceTime key={p.id} time={p.time} price={p.price} places={p.places}/>)}
                    <div className={styles.wrapperCup}>
                        <img className={styles.cup} src={cup} alt="cup"/>
                        <p className={styles.cupText}>Более 50 отзывов с оценкой</p>
                        <FiveStars/>
                    </div>
                </div>
            </div>
        </section>
    )
}