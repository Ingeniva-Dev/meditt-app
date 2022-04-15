import React, {useState} from "react";
import styles from './dropDownField.module.css';
import arrowDown from './../../../assets/Images/arrowDown.png';

export default (props) => {

    const [dropMenuIsOpen, setDropMenuIsOpen] = useState(false);
    const [filedTitle, setFiledTitle] = useState('');


    const dropMenuChangeHandler = () => {
        setDropMenuIsOpen(prevState => !prevState);
    };

    const menuItemHandler = (val) => {
        setFiledTitle(val);
        setDropMenuIsOpen(prevState => !prevState);
        props.onValueChange(val)
    };

    const dropMenuItems = props.data.dropMenuItems.map((item, index) =>
        <li
            onClick={() => menuItemHandler(item.title)}
            className={styles['dd-menu-item']}
            key={index}
        >{item.title}</li>);


    return (
        <div className={styles['drop-down']}>
            <div
                className={`${props.style || styles['dd-container']}`}
                onClick={dropMenuChangeHandler}
            >
                <span>{filedTitle ? filedTitle : props.data.placeholder}</span>
                <img src={arrowDown} alt='arrow down'/>
            </div>
            {dropMenuIsOpen &&  <ul className={styles['dd-menu-items']} >{dropMenuItems}</ul>}
        </div>
    )
}



















{/*{props.content.img1 && <div className={styles['switch-icons']}>*/}
{/*    <img src={props.content.img1} alt={props.content.img1Alt}/>*/}
{/*    <img src={props.content.switchIcon} alt={props.content.switchAlt}*/}
{/*         className={filedTitle === 'Active' ? styles['status-active'] : styles['status-inactive']}/>*/}
{/*</div>}*/}
{/*{props.content.input ? <input*/}
{/*    placeholder={props.content.placeholder}*/}
{/*    value={filedTitle}*/}
{/*    onChange={(event) => setFiledTitle(event.target.value)}*/}
{/*/> : <span>{filedTitle ? filedTitle : props.content.placeholder}</span>}*/}