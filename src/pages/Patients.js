import React from 'react'
import styles from './Patients.module.css'
import Card from "../components/UI/Card";
import Button from "../components/UI/Button";
import PatientsLIst from "../components/Patients/PatientsList";
import {patientsLIst} from "../components/DummyData";
import Input from "../components/UI/Input";
import searchIcon from "../assets/Images/searchIcon.svg";
import arrowDown from './../assets/Images/arrowDown.png';
import useViewport from "../hooks/use-viewport";
import SwitchTab from "../components/Common/SwitchTab";
import {patientsCategories} from "../components/DummyData";
import PlusBtn from "../components/Common/PlusBtn";
import Search from "../components/Common/Search";

const Patients = () => {


    const {width} = useViewport()

    const patientsListJSX = patientsLIst.map((item, index) =>
        <PatientsLIst
            content={item}
            key={index}
        />);

    return (
        <Card>
            {width > 767 && <>
                <div className={styles['button-container']}>
                    <div className={styles['btn-container']}>
                        <Button>New patient</Button>
                    </div>
                </div>
                <div className={styles['patients-container']}>
                    <div className={styles['search-container']}>
                        <Search/>
                    </div>
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
            </>}
            {width < 768 && <div className={styles['mobile-container']}>
                <SwitchTab plusBtn data={patientsCategories}/>
                <PlusBtn/>
                <div>
                    {patientsListJSX}
                </div>
            </div>}
        </Card>
    )
}

export default Patients