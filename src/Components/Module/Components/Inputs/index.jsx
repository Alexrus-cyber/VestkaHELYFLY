import styles from "../Form.module.css";
import calendar from "../../../../assets/Calendar.svg";

export const Input = (props) => {
    return (
        <div>
            <p className={styles.moduleText}>{props.title}<b style={{color: "red"}}>*</b></p>
            {props.object ?  <label style={{position: "relative"}}>
                <img className={styles.img} src={calendar} alt={"vk"}/>
                <input placeholder={"Дата"} className={styles.input}/>
            </label> :  <input placeholder={props.placeholder} className={styles.input}/>}
        </div>
    )
}