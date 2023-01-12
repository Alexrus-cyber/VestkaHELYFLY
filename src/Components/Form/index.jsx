import styles from "../../Sections/Hero/Hero.module.css";
import close from "../../assets/Close.png";
import {Input} from "./Inputs/index";
import {inputs} from "../../Contstants";

export const Form = ({setActive}) => {
    return (
        <form>
            <img className={styles.img} style={{width: 20, top: 22, right: 22}} onClick={()=> setActive(false)} src={close} alt={"close"}/>
            <h1 style={{fontSize: 22,marginBottom: 10}}>Бронирование</h1>
            <div style={{display: "inline-block"}}>
                {inputs.map(r =>   <Input key={r.id} object={r.object} placeholder={r.placeholder} title={r.title}/>)}
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