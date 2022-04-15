import React from "react";
import styles from './patientPlanExercises.module.css';
import binIcon from "../../../../../assets/Images/bin.png";
import pencil from "../../../../../assets/Images/pencil.png";

export default (props) => {
    return (
        <>
            {props.data.map((item, index) =>
                <div
                    key={index}
                    className={styles['plan-exercises']} >
                    <div className={styles['name-img-container']}>
                        <span>Lower Trunk Rotation Stretch</span>
                        <div className={styles['icon-box']}>
                            <img src={binIcon} alt='recycle bin'/>
                            <img src={pencil} alt='pencil'/>
                        </div>


                    </div>
                    <div className={styles['exercises-results-area']}>
                        <div>
                            <span className={styles['secondary-titles']}>Duration</span>
                            <div className={styles['results-container']}>
                                <span>{item.duration.inputVal}</span>
                                <span>{item.duration.selectVal}</span>
                            </div>
                        </div>
                        <div>
                            <span className={styles['secondary-titles']}>Schedule</span>
                            <div className={styles['results-container']}>
                                <span>{item.schedule.inputVal}</span>
                                <span className={styles['secondary-titles']}>pr</span>
                                <span>{item.schedule.selectVal}</span>
                            </div>
                        </div>
                    </div>
                </div>)}
        </>
    )
}