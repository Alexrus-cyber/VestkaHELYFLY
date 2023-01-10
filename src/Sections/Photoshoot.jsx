import styles from './css/Photoshoot.module.css'
import {Shooting} from '../Components/Shooting';
import cup from '../assets/Cup.svg'
import star from '../assets/star.svg'
import {Gallery} from "./Gallery";
import {About} from "./About";

export const Photoshoot = () => {
    const a = [
        {id:1},
        {id:2},
        {id:3},
        {id:4},
        {id:5},
    ]
    return (
        <section className={styles.photoShoot}>
            <div className={styles.container}>
                <Shooting />
                <div style={{display:"flex", width:569, height:87, alignItems:"center", borderBottom: "0.5px solid #C7C7C7"}}>
                    <img style={{marginRight:12}} src={cup} alt="cup"/>
                    <p style={{marginRight:14}}>Более 50 отзывов с оценкой</p>
                    {a.map(e => <img key={e.id} className={styles.star} src={star} alt="star"/>)}
                </div>
                <Gallery/>
                <About/>
            </div>
        </section>
    )
}