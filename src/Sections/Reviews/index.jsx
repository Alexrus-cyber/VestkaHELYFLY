import styles from './Reviews.module.css'
import {Cart} from "./Components/Cart";
import arrow from "../../assets/Arrow.svg";
import nameCompany from "../../assets/NameCompany.svg";
import {socialIcons, texts} from "../../Contstants";

export const Reviews = () => {
    return (
        <section className={styles.reviews}>
            <div className={styles.container}>
                <div>
                    <p className={styles.title}>Отзывы</p>
                    {texts.map(e => <Cart key={e.id} name={e.name} job={e.job} text={e.text} data={e.data}
                                          img={e.img}/>)}
                    <div className={styles.displayFlex}>
                        <p className={styles.all}>
                            <img src={arrow} alt={"arrow"}/>
                            Показать все (134)
                            <img src={arrow} alt={"arrow"}/>
                        </p>
                    </div>
                    <div className={styles.preFooter}>
                        <img src={nameCompany} alt="nameCompany"/>
                        <div className={styles.containerIcons}>
                            {socialIcons.map(s => <img key={s.id} className={styles.icons} src={s.img} alt={s.img}/> )}
                            <p className={styles.ru}>RU</p><img className={styles.arr} src={arrow} alt={"arrow"}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}