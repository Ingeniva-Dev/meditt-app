import React from "react";
import styles from './MobileNavigation.module.css';
import closeIcon from './../../assets/Images/closeIcon.png';
import {mobileNav} from "../DummyData";
import Ul from "../UI/Ul";
import {useHistory} from "react-router-dom";

export default (props) => {



    let history = useHistory();

    const pageChangeHandler = ({title,index}) => {

        if (index === 0) {
            history.push("/");
        } else if (index === 1) {
            history.push('/messages');
        } else if (index === 2) {
            history.push('/patients');
        }
        localStorage.setItem('active', index)
        props.titleChangeHandler(title)
        props.closeHandler()
    };

    return (
        <div className={styles.container}>
            <div className={styles['top-container']}>
                <span>Meditt*</span>
                <img src={closeIcon} alt='Close icon' onClick={props.closeHandler}/>
            </div>
            <Ul
                li={mobileNav}
                onClick={pageChangeHandler}
                activeStyle={'active-header'}
            />
            <span>Sign out</span>
        </div>
    )
}