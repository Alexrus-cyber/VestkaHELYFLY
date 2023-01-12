import styles from './Gallery.module.css'
import arrow from "../../assets/Arrow.svg";
import {carts} from "../../Contstants";

export const Gallery = () => {
    return (
        <section style={{paddingTop: 30, borderBottom: "0.5px solid #C7C7C7", width: "100%"}}>
            <p className={styles.title}>Фотографии пакета: </p>
            <div className={styles.wrap}>
                {carts.map(e => <div key={e.id} className={styles.wrapper}>
                    <picture>
                        <img src={e.img} alt={`${e.img}`}/>
                    </picture>
                </div>)}
            </div>
            <div style={{display:"flex", justifyContent:"center", alignItems: "center"}}>
                <p className={styles.text}>
                    <img src={arrow} alt={"arrow"}/>
                    Показать все фото
                    <img src={arrow} alt={"arrow"}/>
                </p>
            </div>
        </section>
    )
}