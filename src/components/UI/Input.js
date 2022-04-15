import styles from './Input.module.css';
import React from "react";

const Input = (props) => {

    return (
        <div className={props.className || styles.container}>
            {props.label && <label htmlFor={props.input.id} className={styles.label}>{props.label}</label>}
            {props.img && <label htmlFor={props.input.id}><img src={props.img.src} alt={props.img.alt} className={props.img.className}/></label>}
            <input
                {...props.input}
            />
            {/*{props.hasError && <p className={'errorAlert'}>{props.errorMessage}</p>}*/}
        </div>
    )
}

export default Input
