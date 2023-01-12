import styles from './Header.module.css'
import helyfly from '../../assets/NameCompany.svg'

export const Header = () => {
    return (
        <header className={styles.header}>
                <div className={styles.container}>
                    <img src={helyfly} alt="CompanyName"/>
                    <div className={styles.phone}>
                        <p className={styles.telephone}>Телефон:</p>
                        <p>8(800)-123-12-12</p>
                    </div>
                </div>
        </header>

    )
}