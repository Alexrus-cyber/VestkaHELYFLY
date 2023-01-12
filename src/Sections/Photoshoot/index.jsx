import styles from './Photoshoot.module.css'
import {Shooting} from './Shooting/index';
import cup from '../../assets/Cup.svg'
import {Gallery} from "../Gallery/index";
import {About} from "../About/index";
import {FiveStars} from "../../Components/FiveStars";

export const Photoshoot = () => {
    return (
        <section className={styles.photoShoot}>
            <div className={styles.container}>
                <Shooting />
                <div className={styles.wrapperCup}>
                    <img className={styles.cup} src={cup} alt="cup"/>
                    <p className={styles.cupText}>Более 50 отзывов с оценкой</p>
                   <FiveStars/>
                </div>
                <Gallery/>
                <About/>
            </div>
        </section>
    )
}