import React from "react";
import styles from './notes.module.css';
import Search from "../../Common/Search";
import dotesIcon from './../../../assets/Images/dotes.png';
import plusIcon from "../../../assets/Images/plusIcon.png";


export default (props) => {

    if (props.notes === undefined || props.notes.length === 0) {
        return <div>No notes yet!</div>
    }



    const notes = props.notes.map((item, index) =>
        <div
            className={styles['note']}
            key={index}
        >
            <span>{item.date}</span>
            <span>{item.practitioner}</span>
            <div className={styles['note-text']}>
                <span>{item.note}</span>
                <img src={dotesIcon} alt='dotes'/>
            </div>

        </div>)


    return (
        <div  className={styles.container}>
            <div className={styles['search-container']}>
                <div>
                    <Search placeholder='Search in notes'/>
                </div>
                <img src={plusIcon} alt='plus icon'/>
            </div>
            <div className={styles['notes-area']}>
                <div className={styles['title-container']}>
                    <span>Date</span>
                    <span>Practioner</span>
                    <span>Note</span>
                </div>
                {notes}
            </div>
        </div>
    )
}