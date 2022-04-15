import React, {useState} from "react";
import styles from './board.module.css';
import arrowDown from './../../../assets/Images/arow-Down.png';
import closeIcon from './../../../assets/Images/closeIcon.png';


export default (props) => {

    const [additionalIsShow, setAdditionalIsShow] = useState(false);


    const additionalInfoShowHandler = () => {
        setAdditionalIsShow(prevState => !prevState);
    };

    const additionalInfoCloseHandler = () => {
        setAdditionalIsShow(prevState => false)
    };



    const info = Object.values(props.data).filter((item, index) => index < 6);
    const additionalInfo = Object.values(props.data).filter((item, index) => (typeof item !== "object" && index >= 6));

    const patientInfo = info.map((item, index) =>
        <span
            className={styles['info']}
            key={index}
        >{item}</span>);

    const patientAdditionalInfo = additionalInfo.map((item, index) =>
        <span
            className={styles['info']}
            key={index}
        >{item}</span>);


    return (
        <>
            {additionalIsShow && <div className={styles.backdrop} onClick={additionalInfoCloseHandler}/>}
            <div className={`${styles['patient-board']} ${additionalIsShow && styles['border-style']}`}>
                <div className={styles['info-container']}>
                    <div>
                        <span className={styles['categories-title']}>Patient Name</span>
                        <span className={styles['categories-title']}>Birth Date</span>
                        <span className={styles['categories-title']}>Address</span>
                        <span className={styles['categories-title']}>Phone</span>
                        <span className={styles['categories-title']}>Email</span>
                        <span className={styles['categories-title']}>Communication</span>
                        {patientInfo}
                    </div>
                    <img src={additionalIsShow ? closeIcon : arrowDown} alt='arrow down'
                         onClick={additionalInfoShowHandler}/>
                </div>
                {additionalIsShow && <div className={styles['additional-info-container']}>
                    <span>Additional Info</span>
                    <div>
                        <span className={styles['categories-title']}>SSN</span>
                        <span className={styles['categories-title']}>Insured</span>
                        <span className={styles['categories-title']}>Weight</span>
                        <span className={styles['categories-title']}>Height</span>
                        <span className={styles['categories-title']}>BMI</span>
                        <span className={styles['categories-title']}>Other Notes</span>
                        {patientAdditionalInfo}
                    </div>
                </div>}
            </div>
        </>
    )
}




