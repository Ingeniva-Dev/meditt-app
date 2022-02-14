import React, {useState} from "react";
import './MessagesUsers.css'
import plusIcon from './../../assets/Images/plusIcon.png';
import searchIcon from './../../assets/Images/searchIcon.svg';
import {usersList} from './../DummyData/DummData';
import Input from "../UI/Input";
import MessagesUserList from "./MessagesUsersList";

const MessagesUsers = () => {

    const [active, setActive] = useState(0);

    const activeChangeHandler = (index) => {
        setActive(index);
    }


    const users = usersList.map((item, index) =>
        <MessagesUserList
            onClick={activeChangeHandler}
            content={item}
            key={item.id}
            active={active}
            index={index}
        />)


    return (
        <div className={'messages-user-container'}>
            <div className={'change-users'}>
                <div>
                    <span>Colleagues</span>
                    <span>Patients</span>
                </div>
                <img src={plusIcon} alt='plus icon'/>
            </div>
            <div className={'user-list'}>
                <Input
                    className={'input-styles'}
                    img={{
                        src: searchIcon,
                        alt: 'Search Icon',
                        className: 'search-icon-one',
                    }}
                    input={{
                        type: 'search',
                        placeholder: 'Search in messages',
                        className: 'search-input-one',
                        id: 'message-search-input',
                    }}
                />
                {users}
            </div>

        </div>

    );

}

export default MessagesUsers