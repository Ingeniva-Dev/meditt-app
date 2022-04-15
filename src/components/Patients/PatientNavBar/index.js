import React, {useState} from "react";
import styles from './patientNavBar.module.css';
import Ul from "../../UI/Ul";
import {patientNav} from "../../DummyData";
import Search from "../../Common/Search";

export default (props) => {

    const [active, setActive] = useState(0);

    const navChangeHandler = ({title,index}) => {
        setActive(index)
        props.categoryChangeHandler(title)
    };





    return(
        <nav>
            <div className={styles['ul-container']}>
                <Ul
                    style={styles['ul-nav-bar']}
                    li={patientNav}
                    liStyle={styles['li-style']}
                    onClick={navChangeHandler}
                    active={active}
                    activeStyle={styles['active-header']}
                />
                <div className={styles['search-container']}>
                    <Search main id='navigation-search-input'/>
                </div>
            </div>

        </nav>
    )
}