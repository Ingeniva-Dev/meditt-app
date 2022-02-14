import React, {useState} from "react";
import styles from './Header.module.css';
import searchIcon from './../../assets/Images/searchIcon.svg';
import profilePicture from './../../assets/Images/profilePicture.png';
import arrowDown from './../../assets/Images/arrowDown.png';
import Ul from './../UI/Ul'
import {headerLi} from "../DummyData/DummData";
import {useHistory} from "react-router-dom";


const Header = () => {


    const [active, setActive] = useState(JSON.parse(localStorage.getItem('active')));
    let history = useHistory();

    const pageChangeHandler = ({index}) => {

        if (index === 0) {
            history.push("/");
        } else if (index === 1) {
            history.push('/messages');
        } else if (index === 2) {
            history.push('/patients');
        }
        setActive(index);
        localStorage.setItem('active', index)
    };


    return (
        <header>
            <div>
                <span className={styles['logo']}>M*</span>
                <Ul
                    li={headerLi}
                    onClick={pageChangeHandler}
                    active={active}
                    activeStyle={'activeHeader'}
                />
            </div>
            <div>
                <div className={styles['search-input']}>
                    <input id='search-input' type="search" placeholder='Search'/>
                    <label htmlFor='search-input'>
                        <img src={searchIcon} alt='Search Icon' className={styles['search-icon']}/>
                    </label>
                </div>
                <div className={styles['profile-picture']}>
                    <img src={profilePicture} alt='Profile Picture'/>
                </div>
                <div className={styles['arrow-down']}>
                    <img src={arrowDown} alt='Arrow Down'/>
                </div>
            </div>
        </header>
    );
}

export default Header