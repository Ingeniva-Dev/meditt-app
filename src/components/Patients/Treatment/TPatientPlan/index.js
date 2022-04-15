import React from "react";
import styles from './patientPlan.module.css';
import DropDown from "../../../Common/DropDown";
import PatientPlanExercises from "./PatientPlanExercises";
import binIcon from "../../../../assets/Images/bin.png";
import pencil from "../../../../assets/Images/pencil.png";
import Button from "../../../UI/Button";

const exercisesData = [
    {
        title: 'Hour',
    },
    {
        title: 'Day',
    },
    {
        title: 'Week',
    },
    {
        title: 'Month',
    },

];

export default (props) => {


    return(
        <div className={styles['patient-plan-container']}>
            <span className={styles['title']}>Patient Plan</span>
            <div className={styles['title-input-container']}>
                <span className={styles['secondary-titles']}>Title</span>
                <input placeholder='Lorem Ipsum'/>
            </div>
            <div className={styles['title-input-container']}>
                <span className={styles['secondary-titles']}>Duration</span>
                <div className={styles['duration-box']}>
                    <input placeholder='6'/>
                    <DropDown data={{
                        dropMenuItems: exercisesData,
                        placeholder: 'Week'
                    }}/>
                </div>
            </div>
            <div className={styles['title-input-container']}>
                <span className={styles['secondary-titles']}>Exercises</span>
                <PatientPlanExercises data={props.data}/>

            </div>
            <Button className={styles['create-btn']} >CREATE PLAN</Button>
        </div>
    )
}