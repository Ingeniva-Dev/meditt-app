import React, {useContext, useEffect, useRef} from "react";
import styles from './MessagesConversation.module.css';
import profilePicture from './../../assets/Images/profilePicture.png';
import Context from "../../context/context";


const MessagesConversation = () => {


    const context = useContext(Context);

    const {conversation} = context;

    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView()
    }, [conversation])


    const userImg = conversation[0];
    const userConversation = conversation.map((item, index) => {
        if (index > 0) {
            return item.patient === true ?
                <div className={styles['patient-message']} key={index}>
                    <img src={userImg} alt='User image' className={styles['users-image']}/>
                    <p className={styles['message']}>{item.text}</p>
                </div> :
                <div className={styles['doctor-message']} key={index}>
                    <p className={styles['message']}>{item.text}</p>
                    <img src={profilePicture} alt='User image' className={styles['users-image']}/>
                </div>
        }
    });

    const conversationJSX = userConversation.length === 0 ?
        <p className={styles['notification']}>No messages yet!</p> : userConversation;


    return (
        <div className={styles.container}>
            {conversationJSX}
            <div ref={messagesEndRef}/>
        </div>
    );

}

export default MessagesConversation