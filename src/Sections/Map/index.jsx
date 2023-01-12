import styles from './Map.module.css'
import woman from '../../assets/EllipseWoman.png'
import {MapMessage} from "../../Components/MapMessage";
import {mapMessage} from "../../Contstants";

export const Map = () => {
    return (
        <section className={styles.map}>
            <div style={{width: 1140}}>
                <div className={styles.border}>
                    <div style={{paddingLeft: 30}}>
                        {mapMessage.map(m => <MapMessage key={m.id} title={m.title} number={m.id} text={m.text}/>)}
                        <div className={styles.container}>
                            <img src={woman} alt="woman" className={styles.number}/>
                            <div className={styles.text}>
                                <p style={{marginBottom: 5, fontSize: 18,}}>Мария Иванова</p>
                                <p style={{marginBottom: 5, fontSize: 16,}}>Фотограф</p>
                                <p style={{color:"#5286EC", fontSize: 14, }}>Показать больше информации</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}