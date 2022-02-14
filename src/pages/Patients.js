import React from 'react'
import styles from './Patients.module.css'
import Card from "../components/UI/Card";
import Button from "../components/UI/Button";
import PatientsLIst from "../components/Patients/PatientsList";
import {patientsLIst} from "../components/DummyData/DummData";
import Input from "../components/UI/Input";
import searchIcon from "../assets/Images/searchIcon.svg";
import arrowDown from './../assets/Images/arrowDown.png';

const Patients = () => {

     const patientsListJSX = patientsLIst.map((item, index) =>
         <PatientsLIst
         content={item}
         key={index}
         />)
    return(
        <Card>
            <div className={styles['button-container']}>
                <Button>New patient</Button>
            </div>
            <div className={styles['patients-container']}>
                <Input
                    className={styles['input-style']}
                    img={{
                        src: searchIcon,
                        alt: 'Search Icon',
                        className: 'search-icon-one',
                    }}
                    input={{
                        type: 'search',
                        placeholder: 'Search in patients',
                        className: 'search-input-one',
                        id: 'patients-search-input',
                    }}
                />
                <div className={styles['patients-info-categories']}>
                    <span>
                        Patient Name
                        <img src={arrowDown} alt='Arrow Down' className={styles['arrow-img']}/>
                    </span>
                    <span>Birth Date</span>
                    <span>Phone Number</span>
                    <span>Email</span>
                </div>
                {patientsListJSX}
            </div>

        </Card>
    )
}

export default Patients