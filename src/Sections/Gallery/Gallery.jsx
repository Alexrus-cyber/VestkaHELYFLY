import styles from './Gallery.module.css'
import helicopter from "../../assets/Helicopter.png";
import woman from "../../assets/Woman.png";
import first from "../../assets/first.png";
import plane from "../../assets/plane.png";
import arrow from "../../assets/Arrow.svg";

export const Gallery = () => {
    const carts = [
        {id:1,img: woman},
        {id:2,img: plane},
        {id:3,img: helicopter},
        {id:4,img: first},
        {id:5,img: helicopter},
        {id:6,img: first},
        {id:7,img: plane},
        {id:8,img: helicopter},
    ]
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