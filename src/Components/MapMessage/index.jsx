import styles from "../../Sections/Map/Map.module.css";

export const MapMessage = ({text, number , title}) => {
    return (
        <div className={styles.container}>
            <div className={styles.number}>{number}</div>
            <div className={styles.text}>
                <p className={styles.question}>{title}</p>
                <p>{text}</p>
            </div>
        </div>
    )
}