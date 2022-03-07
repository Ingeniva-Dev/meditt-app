import React, {useState} from "react";
import styles from './Header.module.css';
import searchIcon from './../../assets/Images/searchIcon.svg';
import profilePicture from './../../assets/Images/profilePicture.png';
import arrowDown from './../../assets/Images/arrowDown.png';
import Ul from './../UI/Ul'
import {headerLi} from "../DummyData/DummData";
import {useHistory} from "react-router-dom";
import Button from "../UI/Button";
import Modal from 'react-modal';
import SignUp from "../Modal/SignUp";
import {signUpStyle} from './../Modal/ModalStyles';
import SignIn from "../Modal/SignIn";


const Header = (props) => {


    const [active, setActive] = useState(JSON.parse(localStorage.getItem('active')));
    const [signUpIsOpen, setSignUpIsOpen] = useState(false);
    const [signInIsOpen, setSignInIsOpen] = useState(false);
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

    const signUpChangeHandler = () => {
        setSignUpIsOpen(prevState => !prevState)
    }
    const signInChangeHandler = () => {
        setSignInIsOpen(prevState => !prevState);
        setSignUpIsOpen(false);
    }


    const signUpHeader = <div className={styles['signUp-header-container']}>
        <span className={styles['signUp-logo']}>Meditt*</span>
        <div>
            <span>Registered user? </span>
            <Button onClick={props.signInChangeHandler}>Login</Button>
        </div>
    </div>


    return (
        <header>
            {props.signUpIsOpen ? signUpHeader :
                <>
                    <div>
                        <span className={styles['logo']} onClick={signUpChangeHandler}>M*</span>
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
                </>}

            <Modal
            isOpen={signUpIsOpen}
            onRequestClose={signUpChangeHandler}
            style={signUpStyle}
            >
                <SignUp signUpIsOpen={signUpIsOpen} signInChangeHandler={signInChangeHandler}/>
            </Modal>

            <Modal
                isOpen={signInIsOpen}
                onRequestClose={signInChangeHandler}
                style={signUpStyle}
            >
                <SignIn signInIsOpen={signInIsOpen} />
            </Modal>
        </header>
    );
}

export default Header