import styles from './Map.module.css'
import woman from '../../assets/EllipseWoman.png'
import map from '../../assets/map.png'
import right from '../../assets/ArrowRight.png'
import left from '../../assets/ArrowLeft.png'
import {MapMessage} from "./Components/MapMessage";
import {mapMessage} from "../../Contstants";
import {useState} from "react";

export const Map = () => {
    const [message, setMessage] = useState(1);
    const handler2 = () => {
        setMessage(message - 1)
        if (message <= 1){
            setMessage(3)
        }
    }
    const handler = () => {
        setMessage(message + 1)
        if (message >= 3){
            setMessage(1)
        }
    }
    const arr = [{id: 1}, {id: 2}, {id: 3}]
    return (
        <section className={styles.map}>
            <img className={styles.img} src={map} alt={"map"}/>
            <div className={styles.width1140px}>
                <div className={styles.border}>
                    <div className={styles.paddingLeft30}>
                        <div className={styles.sliderContainer}>
                            <div className={styles.slider}>
                                <div className={styles.arrCont}  onClick={handler2}>
                                    <img src={left} alt={"left"} className={styles.sliderArrow}></img>
                                </div>
                                {mapMessage.filter(m => message === m.id).map(m => <MapMessage key={m.id} title={m.title}
                                                                                               number={m.id} text={m.text}/>)}
                                <div className={styles.arrCont} onClick={handler}>
                                    <img src={right} alt={"left"} className={styles.sliderArrow} ></img>
                                </div>
                            </div>
                            <div className={styles.circles}>
                                {arr.map(a => a.id === message ? <div key={a.id} className={styles.circleA}></div> : <div key={a.id} className={styles.circle}></div>)}
                            </div>
                        </div>
                        <div className={styles.noSlider}>
                            {mapMessage.map(m => <MapMessage key={m.id} title={m.title}
                                                             number={m.id} text={m.text}/>)}
                        </div>
                        <div className={styles.containerWoman}>
                            <img src={woman} alt="woman" className={styles.image}/>
                            <div className={styles.text}>
                                <p className={styles.name}>Мария Иванова</p>
                                <p className={styles.job}>Фотограф</p>
                                <p className={styles.link}>Показать больше информации</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}