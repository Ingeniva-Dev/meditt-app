import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import {headerLi} from "../DummyData";
import Ul from "../UI/Ul";

export default () => {

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
        <Ul
            li={headerLi}
            onClick={pageChangeHandler}
            active={active}
            activeStyle={'active-header'}
        />
    )
}