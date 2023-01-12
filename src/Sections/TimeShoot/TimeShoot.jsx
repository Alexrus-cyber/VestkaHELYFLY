import styles from './TimeVideo.module.css'
import cup from "../../assets/Cup.svg";
import calendar from "../../assets/Calendar.svg";
import {FiveStars} from "../../Components/FiveStars/FiveStars";

export const TimeShoot = () => {
    return (
        <section className={styles.timeShoot}>
            <div className={styles.container}>
                <p style={{textAlign: "left", fontSize:18, fontWeight:500, marginBottom: 30}}>Доступная съемка<br/> в ближайшее время:</p>
                <div className={styles.border}>
                    <div className={styles.header}>
                        <p>Пятница, 14 сентября</p> <img src={calendar} alt="calend"/>
                    </div>
                    <div className={styles.time}>
                        <div style={{textAlign: "left",marginLeft: 10}}>
                            <p>15:00-18:00</p>
                            <p className={styles.marginTop} style={{fontWeight:600, fontSize:18}}>1500₽</p>
                            <p className={styles.marginTop}>Осталось — 1 место</p>
                        </div>
                        <div style={{marginTop: 10}}>
                            <button className={styles.button}>Выбрать</button>
                        </div>
                    </div>
                    <div className={styles.time}>
                        <div style={{textAlign: "left",marginLeft: 10}}>
                            <p>19:00-22:00</p>
                            <p className={styles.marginTop} style={{fontWeight:600, fontSize:18}}>1500₽</p>
                            <p className={styles.marginTop}>Осталось — 1 место</p>
                        </div>
                        <div style={{marginTop: 10}}>
                            <button className={styles.button}>Выбрать</button>
                        </div>
                    </div>
                    <div style={{display:"flex", width:569, alignItems:"center", marginTop: 50, marginLeft: 32}}>
                        <img style={{marginRight:12}} src={cup} alt="cup"/>
                        <p style={{marginRight:14}}>Более 50 отзывов с оценкой</p>
                        <FiveStars/>
                    </div>
                </div>
            </div>
        </section>
    )
}