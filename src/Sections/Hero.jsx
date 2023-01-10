import styles from './css/Hero.module.css'

export const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div>
                    <div className={styles.contTitle}>
                        <p className={styles.title}>Эксклюзивная <b style={{color:"#FC9B09"}}>фотосессия</b> при полете на вертолете</p>
                    </div>
                    <div className={styles.containerText}>
                        <div style={{marginTop:"auto", marginBottom: "auto"}}>
                            <div className={styles.price}>
                                <div style={{display:"flex", justifyContent:"start", alignItems: "center",height:50, columnGap: 10, color:"white"}}>
                                    <div>
                                        <p style={{fontSize: 20, }}>Стоимость:</p>
                                        <p style={{fontSize: 35, fontWeight: 800}}>1500₽</p>
                                    </div>
                                    <p className={styles.percent}>%</p>
                                </div>
                            </div>
                            <button className={styles.button}>Забронировать место</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}