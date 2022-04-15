import React from "react";
import styles from './diagnosis.module.css';
import {treatmentPlan} from "../../../DummyData";

export default (props) => {

    const diagnosis = props.data.map((elem, index) =>
        <div
            key={index}
            className={`${styles['areas-item']} ${props.active === index && styles['active']}`}
            onClick={() => props.onCategoryChange(index)}
        >
            {elem.text}

        </div>);

    return(
        <div className={styles['diagnosis-container']}>
            {diagnosis}
        </div>

    )
}