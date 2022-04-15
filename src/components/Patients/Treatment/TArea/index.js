import React from "react";
import styles from './area.module.css';
import {treatmentPlan} from "../../../DummyData";


export default (props) => {

    const area = props.data.map((item, index) =>
        <div
            key={index}
            className={`${styles['areas-item']} ${props.active === index && styles['active']}`}
            onClick={() => props.onCategoryChange(index)}
        >
            {item.text}

        </div>);
    return(
        <div className={styles['areas-container']}>
            {area}
        </div>

    )
}