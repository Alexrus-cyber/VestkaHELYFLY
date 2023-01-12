import styles from './Hero.module.css'
import {useState} from "react";
import {Module} from "../../Components/Module";
import {Form} from "../../Components/Module/Components";

export const Hero = () => {
    const [active, setActive] = useState(false);
    const handler = () => {
        setActive(true)
    }
    return (
        <section className={styles.hero}>
            <Module active={active}>
                <Form setActive={setActive}/>
            </Module>
            <div className={styles.container}>
                <div>
                    <div className={styles.contTitle}>
                        <p className={styles.title}>Эксклюзивная <b className={styles.orange}>фотосессия</b> при полете
                            на вертолете</p>
                    </div>
                    <div className={styles.containerText}>
                        <div className={styles.wrapperSuperficial}>
                            <div className={styles.price}>
                                <div className={styles.superficial}>
                                    <div>
                                        <p className={styles.cost}>Стоимость:</p>
                                        <p className={styles.officialPrice}>1500₽</p>
                                    </div>
                                    <p className={styles.percent}>%</p>
                                </div>
                            </div>
                            <button onClick={handler} className={styles.button}>Забронировать место</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}