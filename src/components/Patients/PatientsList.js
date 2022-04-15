import React from "react";
import styles from './PatientsList.module.css';
import {useHistory} from "react-router-dom";
import useViewport from "../../hooks/use-viewport";


const PatientsLIst = (props) => {

    const history = useHistory();

    const {width} = useViewport();

    const pageChangeHandler = () => {
        history.push({
            pathname: '/selectedPatient',
                state: {
                    selectedPatient:props.content
                }
        });
    }

    return (
        <div className={styles.container} onClick={pageChangeHandler}>
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