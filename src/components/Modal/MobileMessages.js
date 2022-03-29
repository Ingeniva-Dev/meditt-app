import React from "react";
import styles from './MobileMessages.module.css';
import MessagesConversation from "../Messages/MessagesConversation";
import MessageType from "../Messages/MessageType";
import back from './../../assets/Images/arrowBack.png';

export default (props) => {
    return(
        <div className={styles.container}>
            <div className={styles['top-container']}>
                <img src={back} alt='back icon' onClick={() => props.modalCloseHandler(props.name)}/>
                <span>{props.name}</span>
            </div>
            <div className={styles['bottom-container']}>
                <MessagesConversation/>
                   <MessageType />
            </div>
        </div>
    )
}