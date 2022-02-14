import React from 'react';
import Card from "../components/UI/Card";
import MessagesUsers from "../components/Messages/MessagesUsers";
import MessagesConversation from "../components/Messages/MessagesConversation";
import styles from './Messages.module.css';
import MessageType from "../components/Messages/MessageType";


const Messages = () => {
    return (
        <Card>
            <div className={styles.container}>
                <MessagesUsers/>
                <div className={styles['conversation-container']} >
                    <MessagesConversation/>
                    <MessageType />
                </div>
            </div>
        </Card>
    );
}

export default Messages