import styles from './About.module.css'
import ellipseWoman from "../../assets/EllipseWoman.png";
import heart from "../../assets/Vectorheart.svg";
import {AboutMessage} from "./Components/AboutMessage";
import {aboutMessage} from "../../Contstants/index"

export const About = () => {
    return (
        <section className={styles.about}>
            <div>
                {aboutMessage.map(m => <AboutMessage key={m.id} text={m.text} text2={m.text2} title={m.title}/>)}
            </div>
            <div className={styles.contact}>
                <div>
                    <img className={styles.heart} src={heart} alt={"ellipseWoman"}/>
                    <img className={styles.ellipseWoman} src={ellipseWoman} alt={"ellipseWoman"}/>
                    <p className={styles.name}>Марина Иванова</p>
                    <p className={styles.job}>Фотограф</p>
                    <a href="src/Sections/About/About#hello"
                       className={styles.link}>Показать больше<br/> информации
                        о фотографе</a>
                </div>
            </div>
        </section>
    )
}