import styles from "../../Sections/Reviews/Reviews.module.css";
import {FiveStars} from "../FiveStars/FiveStars";
import accept from "../../assets/accept.png";

export const Cart = (props) => {
    return (
        <div className={styles.cart}>
            <img src={props.img} alt={"review1"} className={styles.img}/>
            <div className={styles.text}>
                <p className={styles.marginBottom} style={{fontSize: 18, fontWeight: 500}}>{props.name}</p>
                <p className={styles.marginBottom} style={{fontSize: 14}}>{props.job}</p>
                <div style={{display: "flex", marginBottom: 26, alignItems: "center"}}>
                    <FiveStars/>
                    <img style={{marginLeft: 40, marginRight: 5, width: 15}} src={accept} alt={"accept"}/>
                    <p style={{color: "#B3B3B3", fontSize: 14}}>Супер! Я бы заказал съемку снова!</p>
                </div>
                <p style={{marginBottom: 22}}>{props.text}</p>
                <p style={{color: "#B3B3B3", fontSize: 14}}>{props.data}</p>
            </div>
        </div>
    )
}