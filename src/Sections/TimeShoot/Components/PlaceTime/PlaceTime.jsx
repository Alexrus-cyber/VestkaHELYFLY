import styles from "../../TimeVideo.module.css";

export const PlaceTime = ({time, places, price}) => {
    return (
        <div className={styles.time}>
            <div className={styles.marginLeft10}>
                <p>{time}</p>
                <p className={styles.price}>{price}₽</p>
                <p className={styles.marginTop10}>Осталось — {places}</p>
            </div>
            <div className={styles.marginTop10}>
                <button className={styles.button}>Выбрать</button>
            </div>
        </div>
    )
}