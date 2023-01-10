import styles from './css/About.module.css'
import arrow from "../assets/Arrow.svg";
import ellipseWoman from "../assets/EllipseWoman.png";
import heart from "../assets/Vectorheart.svg";

export const About = () => {
    return (
        <section style={{paddingTop: 50,display:"flex", borderBottom: "0.5px solid #C7C7C7"}}>
            <div>
                <div className={styles.aboutContainer}>
                    <p style={{marginBottom: 14, fontSize: 18, fontWeight: 500}}>Об организаторе:</p>
                    <p style={{whiteSpace: "normal", fontWeight: 400, marginBottom: 5}}>
                        Всем привет! Я фотограф Мария! И по мимо фотосъемки я так же являюсь членом группы экспертов
                        туристической отрасли, которые хорошо разбираются в маркетинге, операциях и услугах обслуживания
                        клиентов, специализирующихся на совместном использовании и частных турах.
                        <p style={{marginTop: 30}}>Сначала мы (я и моя команда) изучаем интересы клиентов, а затем
                            придумываем подходящее решение, которое соответствует бюджету
                            и планам клиента. Мы никогда не зависим от субпоставщиков
                            и не свяжемся…</p>
                    </p>
                    <p style={{color: "#5286EC"}}>Читать еще <img style={{marginLeft: 10}} src={arrow} alt={"arrow"}/></p>
                </div>
                <div className={styles.aboutContainer}>
                    <p style={{marginBottom: 14, fontSize: 18, fontWeight: 500}}>Что я предоставлю:</p>
                    <p style={{whiteSpace: "normal", fontWeight: 400, marginBottom: 5}}>
                        Встречу вас на машине после длительного перелёта. Качественный подбор места и локации для вашей
                        съемки. При необходимости всегда возможно прерваться на обед/ужин. Более 50 фотографий на выходе с
                        обработкой и замечательные впечатления о Дубае !
                    </p>
                    <p style={{color: "#5286EC"}}>Читать еще <img style={{marginLeft: 10}} src={arrow} alt={"arrow"}/></p>
                </div>
            </div>
            <div className={styles.contact}>
                <div>
                    <img className={styles.heart} src={heart} alt={"ellipseWoman"}/>
                    <img style={{marginBottom: 23}} src={ellipseWoman} alt={"ellipseWoman"}/>
                    <p style={{fontSize:18 ,marginBottom: 7}}>Марина Иванова</p>
                    <p style={{fontSize:14, marginBottom: 11}}>Фотограф</p>
                    <a href="#" style={{textDecoration: "none", color: "#5286EC", fontSize:14}}>Показать больше<br/> информации о фотографе</a>
                </div>
            </div>
        </section>
    )
}