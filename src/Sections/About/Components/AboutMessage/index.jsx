import styles from "../../About.module.css";
import arrow from "../../../../assets/Arrow.svg";

export const AboutMessage = ({title, text, text2}) => {
    return (
        <div className={styles.aboutContainer}>
            <p className={styles.title}>{title}</p>
            <p className={styles.text}>
                {text}
            </p>
            <p className={styles.subtext}>{text2}</p>
            <p className={styles.moreText}>Читать еще <img src={arrow} alt={"arrow"}/></p>
        </div>
    )
}