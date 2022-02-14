import React from "react";
import styles from './MessageType.module.css';
import sendIcon from './../../assets/Images/send.png';

const MessageType = () => {

    return (
        <div className={styles['textarea-container']} >
            <textarea  placeholder='Message' />
            <img src={sendIcon} alt='Send icon' className={styles['send-icon']}/>
        </div>
        )
}

export default MessageType