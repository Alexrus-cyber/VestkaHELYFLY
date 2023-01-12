import React from "react";
import styles from './Module.module.css'

export const Module = ({active, children}) => {
    return (
        <div className={active ? styles.active : styles.module}>
            <div className={active ? styles.moduleContentActive : styles.moduleContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}