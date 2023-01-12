import styles from './Reviews.module.css'
import {Cart} from "../../Components/Cart";
import arrow from "../../assets/Arrow.svg";
import nameCompany from "../../assets/NameCompany.svg";
import {socialIcons, texts} from "../../Contstants";

export const Reviews = () => {
    return (
        <section className={styles.reviews}>
            <div className={styles.container}>
                <div>
                    <p style={{textAlign: "left", marginBottom: 50, fontSize: 20, fontWeight: 500}}>Отзывы:</p>
                    {texts.map(e => <Cart key={e.id} name={e.name} job={e.job} text={e.text} data={e.data}
                                          img={e.img}/>)}
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <p className={styles.all}>
                            <img src={arrow} alt={"arrow"}/>
                            Показать все (134)
                            <img src={arrow} alt={"arrow"}/>
                        </p>
                    </div>
                    <div className={styles.preFooter}>
                        <img src={nameCompany} alt="nameCompany"/>
                        <div style={{display: "flex", marginRight: 30}}>
                            {socialIcons.map(s => <img key={s.id} className={styles.icons} src={s.img} alt={s.img}/> )}
                            <p style={{fontSize:15, marginRight: 6}}>RU</p><img src={arrow} alt={"arrow"}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}