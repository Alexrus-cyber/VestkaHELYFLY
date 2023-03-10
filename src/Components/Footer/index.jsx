import styles from './Footer.module.css'
import visa from '../../assets/VISA.svg'
import MC from '../../assets/MC.svg'

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.icons}>
                    <img className={styles.img} src={MC} alt={"MC"}/>
                    <img className={styles.img + ' ' + styles.marginLeft20} src={visa} alt={"Visa"}/>
                </div>
                <div className={styles.text}>
                    <div>
                        <p className={styles.marginBottom7}>Тех. поддержка: 8(800)700-00-00</p>
                        <p>© 2018 HELYFLY. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}