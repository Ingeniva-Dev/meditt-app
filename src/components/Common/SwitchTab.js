import React, {useState} from "react";
import styles from './SwitchTab.module.css';
import plusIcon from "../../assets/Images/plusIcon.png";
import Search from './Search'
import useViewport from "../../hooks/use-viewport";

export default (props) => {


    const [activeUsers, setActiveUsers] = useState(0);
    const {width} = useViewport();

    const searchConfig = width < 768;


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
                {props.plusBtn && <img src={plusIcon} alt='plus icon'/>}
            </div>
            <div className={styles['search-container']}>
                <Search main={searchConfig} placeholder='Search in messages'/>
            </div>
        </>
    )
}