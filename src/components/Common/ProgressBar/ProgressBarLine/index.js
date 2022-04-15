
import React from "react";
import styles from './progressBarLine.module.css';
export default (props) => {


    return (
        <div className={styles['container-styles']}>
            <div className={styles['filler-styles']} style={{width:`${50}%`}}>
                <span className={styles['label-styles']}/>
            </div>
        </div>
    );
}
