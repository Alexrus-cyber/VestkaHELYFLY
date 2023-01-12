import styles from './Gallery.module.css'
import arrow from "../../assets/Arrow.svg";
import {carts} from "../../Contstants";

export const Gallery = () => {
    return (
        <section className={styles.gallery}>
            <p className={styles.title}>Фотографии пакета: </p>
            <div className={styles.wrap}>
                {carts.map(e => <div key={e.id} className={styles.wrapper}>
                    <picture>
                        <img src={e.img} alt={`${e.img}`}/>
                    </picture>
                </div>)}
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