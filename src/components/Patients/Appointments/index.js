import React from "react";
import styles from './appointments.module.css';
import dotesIcon from "../../../assets/Images/dotes.png";
import Search from "../../Common/Search";
import plusIcon from "../../../assets/Images/plusIcon.png";


export default (props) => {

    if (props.appointments === undefined || props.appointments.length === 0) {
        return <div>No appointments yet!</div>
    }

    const appointments = props.appointments.map((item, index) =>
        <div
            className={styles['appointments']}
            key={index}
        >
            <span>{item.date}</span>
            <span>{item.time}</span>
            <span>{item.location}</span>
            <span>{item.practitioner}</span>
            <div className={styles['comment']}>
                <span>{item.comment}</span>
                <img src={dotesIcon} alt='dotes'/>
            </div>

        </div>)

    return(
        <div className={styles.container}>
            <div className={styles['search-container']}>
                <div>
                    <Search placeholder='Search in notes'/>
                </div>
                <img src={plusIcon} alt='plus icon'/>
            </div>
            <div className={styles['appointments-area']}>
                <div className={styles['title-container']}>
                    <span>Date</span>
                    <span>Time</span>
                    <span>Location</span>
                    <span>Practioner</span>
                    <span>Comment</span>
                </div>
                {appointments}
            </div>
        </div>
    )
}
