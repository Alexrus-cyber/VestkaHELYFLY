import styles from "../Cart/Cart.module.css";
import {FiveStars} from "../../../../Components/FiveStars";
import accept from "../../../../assets/accept.png";

export const Cart = (props) => {
    return (
        <div className={styles.cart}>
            <img src={props.img} alt={"review1"} className={styles.img}/>
            <div className={styles.containerText}>
                <div className={styles.infoh}>
                    <div>
                        <img src={props.img} alt={"review1"} className={styles.imgh}/>
                    </div>
                    <div>
                        <p className={styles.name}>{props.name}</p>
                        <p className={styles.job}>{props.job}</p>
                        <FiveStars/>
                    </div>
                </div>
                <div className={styles.info}>
                    <p className={styles.name}>{props.name}</p>
                    <p className={styles.job}>{props.job}</p>
                </div>
                <div className={styles.container}>
                    <div className={styles.star}>
                        <FiveStars/>
                    </div>
                    <div className={styles.xxx}>
                        <img className={styles.accept} src={accept} alt={"accept"}/>
                        <p className={styles.reviewText}>Супер! Я бы заказал съемку снова!</p>
                    </div>
                </div>
                <p  className={styles.text}>{props.text}</p>
                <p  className={styles.reviewText}>{props.data}</p>
            </div>
        </div>
    )
}