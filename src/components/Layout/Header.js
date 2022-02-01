import React from "react";
import styles from './Header.module.css';
import searchIcon from './../../assets/Images/searchIcon.svg';
import profilePicture from './../../assets/Images/profilePicture.png';
import arrowDown from './../../assets/Images/arrowDown.png';


const Header = () => {
    return (
        <header>
            <div>
                <span className={styles['logo']}>M*</span>
                <ul>
                    <li>Schedule</li>
                    <li>Messages</li>
                    <li>Patients</li>
                </ul>
            </div>
            <div>
                <div className={styles['search-input']}>
                    <input id='search-input' type="search" placeholder='Search'/>
                    <label htmlFor='search-input'>
                        <img src={searchIcon} alt='Search Icon' className={styles['search-icon']}/>
                    </label>
                </div>
                <div className={styles['profile-picture']}>
                    <img src={profilePicture} alt='Profile Picture' />
                </div>
                <div className={styles['arrow-down']}>
                    <img src={arrowDown} alt='Arrow Down'/>
                </div>
            </div>
        </header>
    );
}

export default Header