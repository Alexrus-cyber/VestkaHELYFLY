import styles from "../Components/Form.module.css";
import close from "../../../assets/Close.png";
import {Input} from "./Inputs";
import {inputs} from "../../../Contstants";

export const Form = ({setActive}) => {
    return (
        <form>
            <img className={styles.icon} onClick={() => setActive(false)} src={close} alt={"close"}/>
            <h1 className={styles.title}>Бронирование</h1>
            <div className={styles.dispBlock}>
                {inputs.map(r => <Input key={r.id} object={r.object} placeholder={r.placeholder} title={r.title}/>)}
                <div>
                    <p className={styles.moduleText}>Данные карты<b style={{color: "red"}}>*</b></p>
                    <div className={styles.container}>
                        <input placeholder={"Номер карты"} className={styles.mainInput}/>
                        <div style={{display: "flex", alignItems: "center"}}>
                            <input placeholder={"Срок действия"}
                                   style={{borderRight: "none", borderBottomLeftRadius: 3}}
                                   className={styles.smallInput}/>
                            <input placeholder={"CVV"} style={{borderBottomRightRadius: 3}}
                                   className={styles.smallInput}/>
                        </div>
                    </div>
                </div>
                <div className={styles.marginT34}>
                    <div className={styles.wrapperAccept}>
                        <label className={styles.label}>
                            <input type={"checkbox"} className={styles.checkbox}/>
                            <span className={styles.fake}></span>
                        </label>
                        <p className={styles.text}>Я согласен с пользовательским<br/>
                            соглашением и публичной офертой</p>
                    </div>
                </div>
                <button className={styles.buttonModule} onClick={() => setActive(false)}>Забронировать</button>
            </div>
        </form>
    )
}