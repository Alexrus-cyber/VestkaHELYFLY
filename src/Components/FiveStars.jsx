import styles from "../Sections/css/Photoshoot.module.css";
import star from "../assets/star.svg";

export const FiveStars = () => {
    const stars = [
        {id:1},
        {id:2},
        {id:3},
        {id:4},
        {id:5},
    ]
    return (
            stars.map(e => <img key={e.id} className={styles.star} src={star} alt="star"/>)
    )
}