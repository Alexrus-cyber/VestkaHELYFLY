import styles from './Photoshoot.module.css'
import {Shooting} from '../../Components/Shooting/Shooting';
import cup from '../../assets/Cup.svg'
import {Gallery} from "../Gallery/Gallery";
import {About} from "../About/About";
import {FiveStars} from "../../Components/FiveStars/FiveStars";

export const Photoshoot = () => {
    return (
        <section className={styles.photoShoot}>
            <div className={styles.container}>
                <Shooting />
                <div style={{display:"flex", width:569, height:87, alignItems:"center", borderBottom: "0.5px solid #C7C7C7"}}>
                    <img style={{marginRight:12}} src={cup} alt="cup"/>
                    <p style={{marginRight:14}}>Более 50 отзывов с оценкой</p>
                   <FiveStars/>
                </div>
                <Gallery/>
                <About/>
            </div>
        </section>
    )
}