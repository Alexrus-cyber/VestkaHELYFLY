import styles from "../../Sections/TimeShoot/TimeVideo.module.css";

export const PlaceTime = ({time, places, price}) => {
    return (
        <div className={styles.time}>
            <div style={{textAlign: "left", marginLeft: 10}}>
                <p>{time}</p>
                <p className={styles.marginTop} style={{fontWeight: 600, fontSize: 18}}>{price}₽</p>
                <p className={styles.marginTop}>Осталось — {places}</p>
            </div>
            <div style={{marginTop: 10}}>
                <button className={styles.button}>Выбрать</button>
            </div>
        </div>
    )
}