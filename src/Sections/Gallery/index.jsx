import styles from './Gallery.module.css'
import arrow from "../../assets/Arrow.svg";
import {carts} from "../../Contstants";

export const Gallery = () => {
    return (
        <section className={styles.gallery}>
            <p className={styles.title}>Фотографии пакета</p>
            <p className={styles.titleH}>Фотографии <br/> пакета</p>
            <div className={styles.wrap}>
                {carts.map(e =>
                        <img key={e.id} className={styles.img} src={e.img} alt={`${e.img}`}/>
               )}
            </div>
            <div className={styles.displayCenter}>
                <p className={styles.text}>
                    <img src={arrow} alt={"arrow"}/>
                    Показать все фото
                    <img src={arrow} alt={"arrow"}/>
                </p>
            </div>
        </section>
    )
}