import styles from "../../Sections/Photoshoot/Photoshoot.module.css";
import helicopter from "../../assets/Helicopter.png";
import {menuShooting} from "../../Contstants";

export const Shooting = () => {
    return (
        <div style={{display:"flex"}}>
            <div style={{width: 569, color: "#37373F",borderBottom:"0.5px solid #C7C7C7", height:440}}>
                <p className={styles.mainTitle}>Фотосессия <br/>в вертолете</p>
                <p className={styles.text}>Полет на вертолете это прекрасная возможность получить новые ощущения! А
                    наш замечательный фотограф запечатлит лучшие моменты</p>
                <ul className={styles.border}>
                    {menuShooting.map(m =>  <li key={m.id} className={styles.li}><img src={m.img} alt={"clock"}/>{m.text}</li>)}
                </ul>
            </div>
            <img style={{width: "554px", height: "374px", minWidth: "100px", minHeight: "100px"}} src={helicopter}
                 alt="helicopter"/>
        </div>
    )
}