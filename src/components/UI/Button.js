import styles from './Button.module.css';
import React from "react";

const Button = (props) => {
    return (
        <button
            {...props}
            type={props.type || 'button'}
            className={`${styles.button} && ${props.className}`}
        >
            {props.children}
        </button>

    );
}

export default Button