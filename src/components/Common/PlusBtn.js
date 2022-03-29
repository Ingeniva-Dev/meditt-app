import React from "react";
import styles from './PlusBtn.module.css';
import plusIcon from "../../assets/Images/plusIcon.png";

export default (props) => {
    return(
        <div className={styles['plus']} onClick={props.onClick}>
            <img src={plusIcon} alt='Plus icon'/>
        </div>
    )
}