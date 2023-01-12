import styles from './TimeVideo.module.css'
import cup from "../../assets/Cup.svg";
import calendar from "../../assets/Calendar.svg";
import {FiveStars} from "../../Components/FiveStars";
import {PlaceTime} from "../../Components/PlaceTime/PlaceTime";
import {placeTime} from "../../Contstants";

export const TimeShoot = () => {
    return (
        <section className={styles.timeShoot}>
            <div className={styles.container}>
                <p style={{textAlign: "left", fontSize: 18, fontWeight: 500, marginBottom: 30}}>Доступная съемка<br/> в
                    ближайшее время:</p>
                <div className={styles.border}>
                    <div className={styles.header}>
                        <p>Пятница, 14 сентября</p> <img src={calendar} alt="calend"/>
                    </div>
                    {placeTime.map(p => <PlaceTime key={p.id} time={p.time} price={p.price} places={p.places}/>)}
                    <div style={{display: "flex", width: 569, alignItems: "center", marginTop: 50, marginLeft: 32}}>
                        <img style={{marginRight: 12}} src={cup} alt="cup"/>
                        <p style={{marginRight: 14}}>Более 50 отзывов с оценкой</p>
                        <FiveStars/>
                    </div>
                </div>
            </div>
        </section>
    )
}