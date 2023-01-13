import styles from './Header.module.css'
import helyfly from '../../assets/NameCompany.svg'
import user from '../../assets/user.svg'

export const Header = () => {
    return (
        <header className={styles.header}>
                <div className={styles.container}>
                    <img className={styles.helyfly} src={helyfly} alt="CompanyName"/>
                    <p className={styles.hidden}>Москва</p>
                    <img className={styles.hidden} src={user} alt={user}/>
                    <div className={styles.phone}>
                        <p className={styles.telephone}>Телефон:</p>
                        <p>8(800)-123-12-12</p>
                    </div>
                </div>
        </header>

    )
}