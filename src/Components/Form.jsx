import styles from "../Sections/css/Hero.module.css";
import close from "../assets/Close.png";
import calendar from "../assets/Calendar.svg";

export const Form = ({setActive}) => {
    return (
        <form>
            <img className={styles.img} style={{width: 20, top: 22, right: 22}} onClick={()=> setActive(false)} src={close} alt={"close"}/>
            <h1 style={{fontSize: 22,marginBottom: 10}}>Бронирование</h1>
            <div style={{display: "inline-block"}}>
                <div>
                    <p className={styles.moduleText}>Дата<b style={{color: "red"}}>*</b></p>
                    <label style={{position: "relative"}}>
                        <img className={styles.img} src={calendar} alt={"vk"}/>
                        <input placeholder={"Дата"} className={styles.input}/>
                    </label>
                </div>
                <div>
                    <p className={styles.moduleText}>Email<b style={{color: "red"}}>*</b></p>
                    <input placeholder={"Электронная почта"} className={styles.input}/>
                </div>
                <div>
                    <p className={styles.moduleText}>Имя<b style={{color: "red"}}>*</b></p>
                    <input placeholder={"Имя"} className={styles.input}/>
                </div>
                <div>
                    <p className={styles.moduleText}>Фамилия<b style={{color: "red"}}>*</b></p>
                    <input placeholder={"Фамилия"} className={styles.input}/>
                </div>
                <div>
                    <p className={styles.moduleText}>Телефон<b style={{color: "red"}}>*</b></p>
                    <input placeholder={"+7 (905) 184-81-40"} className={styles.input}/>
                </div>
                <div>
                    <p className={styles.moduleText}>Данные карты<b style={{color: "red"}}>*</b></p>
                    <div style={{width: 420}}>
                        <input placeholder={"Номер карты"} style={{
                            borderBottom: "none",
                            borderBottomRightRadius: 0,
                            borderBottomLeftRadius: 0,
                        }} className={styles.input}/>
                        <div style={{display: "flex", alignItems: "center"}}>
                            <input placeholder={"Срок действия"} style={{borderRight:"none", borderBottomLeftRadius: 3}} className={styles.smallInput}/>
                            <input placeholder={"CVV"} style={{borderBottomRightRadius: 3}} className={styles.smallInput}/>
                        </div>
                    </div>
                </div>
                <div style={{marginTop:34}}>
                    <div style={{display:"flex", width:420, alignItems: "start", textAlign: "left"}}>
                        <label className={styles.label}>
                            <input type={"checkbox"} className={styles.checkbox}/>
                            <span className={styles.fake}></span>
                        </label>
                        <p style={{paddingLeft: 8, paddingTop: 0}}>Я согласен с пользовательским<br/>
                            соглашением и публичной офертой</p>
                    </div>
                </div>
                <button className={styles.buttonModule} onClick={()=> setActive(false)}>Забронировать</button>
            </div>
        </form>
    )
}