import React from "react";
import styles from './progress.module.css';
import ProgressBar from '../../Common/ProgressBar/ProgressBarCircular';
import ProgressBarLine from './../../Common/ProgressBar/ProgressBarLine';
import Reports from './../../Patients/Progress/Reports';
import doneIcon from './../../../assets/Images/doneIcon.svg';
import {weekDaysData} from "../../DummyData";

export default () => {




    const weekDaysStatus = weekDaysData.map((item, index) =>
        <div
            key={index}
            className={styles['week-day']}
        >
            <div className={`${styles['circle']} ${item.done && styles['done']}`}>
                <img src={doneIcon} alt='done icon'/>
            </div>
            <span>{item.text}</span>
        </div>)


    return (
        <div className={styles.container}>
            <div className={styles['left-big']}>
                <span className={styles['title']}>Programme Completion</span>
                <div className={styles['progress-container']}>
                    <ProgressBar
                        strokeWidth="16"
                        sqSize="350"
                        percentage={28}/>
                </div>
            </div>
            <div className={styles['top-middle']}>
                <span className={styles['title']}>Pain Reduction</span>
                <ProgressBar
                    strokeWidth="10"
                    sqSize="218"
                    percentage={25}/>
            </div>
            <div className={styles['top-right']}>
                <span className={styles['title']}>Program adherence</span>
                <ProgressBar
                    strokeWidth="10"
                    sqSize="218"
                    percentage={75}/>
            </div>
            <div className={styles['bottom-middle']}>
                <span className={styles['title']}>Week Status</span>
                <div className={styles['week-days-container']}>
                    {weekDaysStatus}
                </div>
                <div className={styles['line']}/>
                <div className={styles['completed-container']}>
                    <span>27 out of 36 completed</span>
                    <ProgressBarLine/>
                </div>
            </div>
            <div className={styles['bottom-right']}>
                <span className={styles['title']}>Reports</span>
                <Reports/>
            </div>
        </div>
    )
}

