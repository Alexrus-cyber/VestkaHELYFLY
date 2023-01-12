import styles from './About.module.css'
import ellipseWoman from "../../assets/EllipseWoman.png";
import heart from "../../assets/Vectorheart.svg";
import {AboutMessage} from "../../Components/AboutMessage";
import {aboutMessage} from "../../Contstants/index"

export const About = () => {
    return (
        <section style={{paddingTop: 50, display: "flex", borderBottom: "0.5px solid #C7C7C7", lineHeight: "24px"}}>
            <div>
                {aboutMessage.map(m => <AboutMessage key={m.id} text={m.text} text2={m.text2} title={m.title}/>)}
            </div>
            <div className={styles.contact}>
                <div>
                    <img className={styles.heart} src={heart} alt={"ellipseWoman"}/>
                    <img style={{marginBottom: 23}} src={ellipseWoman} alt={"ellipseWoman"}/>
                    <p style={{fontSize: 18, marginBottom: 7}}>Марина Иванова</p>
                    <p style={{fontSize: 14, marginBottom: 11}}>Фотограф</p>
                    <a href="src/Sections/About/About#hello"
                       style={{textDecoration: "none", color: "#5286EC", fontSize: 14}}>Показать больше<br/> информации
                        о фотографе</a>
                </div>
            </div>
        </section>
    )
}