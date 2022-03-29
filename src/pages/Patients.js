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
            </>}
            {width < 768 && <div className={styles['mobile-container']}>
                <SwitchTab data={patientsCategories}/>
                <PlusBtn/>
                <div>
                    {patientsListJSX}
                </div>
            </div>}
        </Card>
    )
}

export default Patients