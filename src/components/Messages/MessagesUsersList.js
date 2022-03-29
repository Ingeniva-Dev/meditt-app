import React, {useContext, useEffect} from "react";
import styles from './MessagesUsersList.module.css';
import Context from "../../context/context";

const MessagesUserList = (props) => {


    const context = useContext(Context);
    const {conversationHandler} = context;

    useEffect(() => {
        conversationHandler('1');
    }, [])


    const selectUserHandler = () => {
        props.onClick(props.index);
        conversationHandler(props.content.id);
        props.modalOpenHandler(props.content.name)
    }

    const activeStyle = props.active === props.index && 'active-style';

    return (
        <>
            <div className={`${styles['container']} ${styles[activeStyle]}`} onClick={selectUserHandler}>
                <img src={props.content.img} alt='User image'/>
                <div>
                    <span>{props.content.name}</span>
                    <span>{props.content.lastMessage}</span>
                </div>
            </div>

        </>
    );
};

export default MessagesUserList


