import styles from "../Cart/Cart.module.css";
import {FiveStars} from "../../../../Components/FiveStars";
import accept from "../../../../assets/accept.png";

export const Cart = (props) => {
    return (
        <div className={styles.cart}>
            <img src={props.img} alt={"review1"} className={styles.img}/>
            <div className={styles.containerText}>
                <p className={styles.name}>{props.name}</p>
                <p className={styles.job}>{props.job}</p>
                <div className={styles.container}>
                    <FiveStars/>
                    <img className={styles.accept} src={accept} alt={"accept"}/>
                    <p className={styles.reviewText}>Супер! Я бы заказал съемку снова!</p>
                </div>
                <p  className={styles.text}>{props.text}</p>
                <p  className={styles.reviewText}>{props.data}</p>
            </div>
        </div>
    )
}