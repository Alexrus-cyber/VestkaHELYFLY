import styles from './Reviews.module.css'
import review1 from '../../assets/reviews1.png'
import review2 from '../../assets/reviews2.png'
import review3 from '../../assets/reviews3.png'
import {Cart} from "../../Components/Cart/Cart";
import arrow from "../../assets/Arrow.svg";
import nameCompany from "../../assets/NameCompany.svg";
import vk from "../../assets/vk.svg";
import Facebook from "../../assets/Facebook.svg";
import Instagram from "../../assets/Instragram.svg";

export const Reviews = () => {
    const texts = [
        {
            id: 1,
            name: "Валерия Антонова",
            job: "Арт-директор",
            text: "Хотим выразить огромную благодарность вашей компании! Получили море ощущений, " +
                "все прошло просто замечательно. Фотки получились великолепные, отдельное спасибо фотографу!",
            data: "27 Апреля, 2019г.",
            img: review1,
        },
        {
            id: 2,
            name: "Виталий Петров",
            job: "Фотограф",
            text: "Восторг! :) Очень понравилось :) Захватили последний теплый, солнечный октябрьский день :) " +
                "Впечатлило всё: сам вертолет, взлет, полёт, приземление. \n" +
                "Организация полёта отличная. Спасибо!",
            data: "19 Апреля, 2019г..",
            img: review2,
        },
        {
            id: 3,
            name: "Джим Керри",
            job: "",
            text: "Круто-круто-круто!!! Отмечали мой ДэРэ. Отлично провели время!!! Кстати закуски были вкусными и сытными))Мы \n" +
                "с собой ничего не брали. Сами много фоткались,поэтому воспоминания обалденные!!!)) А еще нам всем напечатали по сертификату воздухоплавателя, правда некоторые ленятся за ним съездить)))" +
                " Но все равно приятно. Короче, Презентстар – проверено. Оценка: пять!",
            data: "11 Апреля, 2019г.",
            img: review3,
        }
    ]

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
                            <img className={styles.icons} src={vk} alt="vk"/>
                            <img className={styles.icons} src={Facebook} alt="face"/>
                            <img className={styles.icons} src={Instagram} alt="insta"/>
                            <p style={{fontSize:15, marginRight: 6}}>RU</p><img src={arrow} alt={"arrow"}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}