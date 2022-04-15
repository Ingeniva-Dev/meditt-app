import React, {useState} from 'react';
import Card from "../components/UI/Card";
import MessagesUsers from "../components/Messages/MessagesUsers";
import MessagesConversation from "../components/Messages/MessagesConversation";
import styles from './Messages.module.css';
import MessageType from "../components/Messages/MessageType";
import useViewport from "../hooks/use-viewport";
import MobileMessages from "../components/Modal/MobileMessages";
import Modal from "react-modal";
import {messageStyle} from "../components/Modal/ModalStyles";


const Messages = () => {

    const [mobileMessageIsOpen, setMobileMessageIsOpen] = useState(false);
    const [name, setName] = useState('');
    const {width} = useViewport();

    const modalOpenHandler = (val) => {
        setMobileMessageIsOpen(prevState => !prevState);
        setName(val)
    }

    return (
        <Card>
            <div className={styles.container}>
                <MessagesUsers modalOpenHandler={modalOpenHandler}/>
                {width > 767 && <div className={styles['conversation-container']}>
                    <MessagesConversation/>
                    <MessageType/>
                </div>}
            </div>
            {width < 768 && <Modal
                isOpen={mobileMessageIsOpen}
                style={messageStyle}
                onRequestClose={() => {
                    setMobileMessageIsOpen(false)
                }}
                ariaHideApp={false}
            >
                <MobileMessages name={name} modalCloseHandler={modalOpenHandler}/>
            </Modal>}
        </Card>
    );
}

export default Messages