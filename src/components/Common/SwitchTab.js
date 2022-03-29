import React, {useState} from "react";
import styles from './SwitchTab.module.css';
import plusIcon from "../../assets/Images/plusIcon.png";
import Input from "../UI/Input";
import searchIcon from "../../assets/Images/searchIcon.svg";


export default (props) => {

    const [activeUsers, setActiveUsers] = useState(0);


    const activeUsersChangeHandler = (index) => {
        setActiveUsers(index)
    }
    const userCategories = props.data.map((item, index) =>
        <span
            onClick={() => activeUsersChangeHandler(index)}
            key={index}
            className={`${activeUsers === index && styles['active-users']}`}
        >{item.title}</span>)


    return(
        <>
            <div className={styles['change-users']}>
                <div>
                    {userCategories}
                </div>
                <img src={plusIcon} alt='plus icon'/>
            </div>
            <Input
                className={styles['input-styles']}
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

        </>
    )
}