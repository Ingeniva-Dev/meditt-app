import React, {useState} from "react";
import styles from './MessagesUsers.module.css'
import {usersList} from '../DummyData';
import MessagesUserList from "./MessagesUsersList";
import {usersCategories} from "../DummyData";
import SwitchTab from "../Common/SwitchTab";

const MessagesUsers = (props) => {

    const [active, setActive] = useState(0);

    const activeMessageChangeHandler = (index) => {
        setActive(index);
    };


    const users = usersList.map((item, index) =>
        <MessagesUserList
            onClick={activeMessageChangeHandler}
            content={item}
            key={item.id}
            active={active}
            index={index}
            modalOpenHandler={props.modalOpenHandler}
        />);

    return (
        <div className={styles['messages-user-container']}>
            <SwitchTab data={usersCategories}/>
            <div className={styles['user-list']}>
                {users}
            </div>

        </div>
    );
}

export default MessagesUsers