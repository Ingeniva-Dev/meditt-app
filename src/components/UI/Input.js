import styles from './Input.module.css';
import React from "react";

const Input = (props) => {
    return (
        <div className={styles.container}>
            {props.label && <label htmlFor={props.input.id}>{props.label}</label>}
            <input
                {...props.input}
            />
            {/*{props.hasError && <p className={'errorAlert'}>{props.errorMessage}</p>}*/}
        </div>
    )
}

export default Input