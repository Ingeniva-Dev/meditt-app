import React from "react";
import styles from './reports.module.css';
import arrowRight from './../../../../assets/Images/arrow-right.png';
import {reportsData} from "../../../DummyData";

export default () => {

    return (
        <>
            {reportsData.map((item, index) =>
                <div
                    key={index}
                    className={styles['report-container']}
                >
                    <div className={styles['text-area']}>
                        <span>{item.name}</span>
                        <span>{item.text}</span>
                    </div>
                    <div className={styles['image-box']}>
                        <img src={arrowRight} alt='arrow right'/>
                    </div>
                </div>)}
        </>
    )
}