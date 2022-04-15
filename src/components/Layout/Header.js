import React, {useState} from "react";
import styles from './Header.module.css';
import searchIcon from './../../assets/Images/searchIcon.svg';
import profilePicture from './../../assets/Images/profilePicture.png';
import arrowDown from './../../assets/Images/arrowDown.png';
import menuIcon from './../../assets/Images/menuIcon.png';
import Modal from 'react-modal';
import {signUpStyle} from './../Modal/ModalStyles';
import Sign from "../Modal/Sign";
import Navigation from "../NavBar/Navigation";
import MobileNavigation from "../NavBar/MobailNavigation";
import Search from "../Common/Search";


const Header = () => {


    const [signingIsOpen, setSigningIsOpen] = useState(false);
    const [mobileNavBarIsOpen, setMobileNavBarIsOpen] = useState(false);
    const [pageTitle, setPageTitle] = useState(JSON.parse(localStorage.getItem('page')) || 'Schedule');

    const signingChangeHandler = () => {
        setSigningIsOpen(prevState => !prevState)
    };

    const mobileNavBarChangeHandler = () => {
        setMobileNavBarIsOpen(prevState => !prevState)
    };

    const titleChangeHandler = (val) => {
        setPageTitle(val);
        localStorage.setItem('page', JSON.stringify(val))
    }

    return (
        <header>
            {!mobileNavBarIsOpen && <div className={styles['mobile-view']}>
                <span>{pageTitle}</span>
                <img src={menuIcon} alt='menu' onClick={mobileNavBarChangeHandler}/>
            </div>}

            {mobileNavBarIsOpen && <MobileNavigation
                closeHandler={mobileNavBarChangeHandler}
                titleChangeHandler={titleChangeHandler}
            />}
            <div className={styles['full-view']}>
                <div>
                    <span className={styles['logo']} onClick={signingChangeHandler}>Meditt*</span>
                    <div className={styles['border']}/>
                    <div className={styles['search-container']}>
                        <Search main id='header-search-input'/>
                    </div>
                </div>
                <div>
                    <Navigation/>
                    <div className={styles['border']}/>
                    <div className={styles['profile-picture-box']}>
                        <div className={styles['profile-picture']}>
                            <img src={profilePicture} alt='Profile Picture'/>
                        </div>
                        <div className={styles['arrow-down']}>
                            <img src={arrowDown} alt='Arrow Down'/>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                isOpen={signingIsOpen}
                onRequestClose={signingChangeHandler}
                style={signUpStyle}
                ariaHideApp={false}
            >
                <Sign/>
            </Modal>
        </header>
    );
}

export default Header