import React from "react";
import styles from './PatientsList.module.css';


const PatientsLIst = (props) => {
    return (
        <div className={styles.container}>
            <span>{props.content.name}</span>
            <span>{props.content.birthDate}</span>
            <span>{props.content.phoneNumber}</span>
            <span>{props.content.email}</span>
        </div>
    );
}

export default PatientsLIst