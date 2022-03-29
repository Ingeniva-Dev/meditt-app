import React from "react";
import styles from './PatientsList.module.css';
import useViewport from "../../hooks/use-viewport";


const PatientsLIst = (props) => {

    const {width} = useViewport();

    return (
        <div className={styles.container}>
            <span>{props.content.name}</span>
            <span>{props.content.birthDate}</span>
            {width > 767 && <>
                <span>{props.content.phoneNumber}</span>
                <span>{props.content.email}</span>
            </>}
        </div>
    );
}

export default PatientsLIst