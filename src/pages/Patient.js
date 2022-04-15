import React, {useState} from "react";
import styles from './Patient.module.css';
import Card from "../components/UI/Card";
import { useLocation } from "react-router-dom";
import arrowBack from './../assets/Images/back-arrow.png';
import Button from "../components/UI/Button";
import PatientInfoBoard from "../components/Patients/PatientInfoBoard";
import NavBar from "../components/Patients/PatientNavBar";
import Notes from "../components/Patients/Notes";
import Appointments from "../components/Patients/Appointments";
import Progress from "../components/Patients/Progress";
import Treatment from "../components/Patients/Treatment";
import {useHistory} from 'react-router-dom'



export default () => {

    const [selectedCategory, setSelectedCategory] = useState('Notes');

    const location = useLocation();
    const patient = location.state.selectedPatient;
    const history = useHistory();


    const pageChangeHandler = () => {
        history.push('/patients')
    };

    const categoryChangeHandler = (val) => {
        setSelectedCategory(val)
    }


    return(
        <Card>
            <div className={styles['top-area']}>
                <div onClick={pageChangeHandler}>
                    <img src={arrowBack} alt='arrow back'/>
                    <span>Back to patients</span>
                </div>
                <div>
                    <Button>New appointment</Button>
                </div>
            </div>
            <PatientInfoBoard data={patient}/>
             <div className={styles['nav-bar-container']}>
                <NavBar categoryChangeHandler={categoryChangeHandler}/>
                <div className={styles['next-appointment']}>
                    <span>Next Appointment</span>
                    <span>September 17, 10.30 - 11.30</span>
                </div>
            </div>
            <div className={styles['about-patient-container']}>
                {selectedCategory === 'Notes' && <Notes notes={patient.notes}/>}
                {selectedCategory === 'Appointments' && <Appointments appointments={patient.appointments}/>}
                {selectedCategory === 'Progress' && <Progress appointments={patient.appointments}/>}
                {selectedCategory === 'Treatment' && <Treatment appointments={patient.appointments}/>}
            </div>

        </Card>
    )
}
