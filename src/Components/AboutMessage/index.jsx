import styles from "../../Sections/About/About.module.css";
import arrow from "../../assets/Arrow.svg";

export const AboutMessage = ({title, text, text2}) => {
    return (
        <div className={styles.aboutContainer}>
            <p style={{marginBottom: 14, fontSize: 18, fontWeight: 500}}>{title}</p>
            <p style={{whiteSpace: "normal", fontWeight: 400, marginBottom: 5}}>
                {text}
            </p>
            <p style={{marginTop: 30, fontWeight: 400}}>{text2}</p>
            <p style={{color: "#5286EC"}}>Читать еще <img style={{marginLeft: 10}} src={arrow} alt={"arrow"}/></p>
        </div>
    )
}